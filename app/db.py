from __future__ import annotations

import json
import sqlite3
from pathlib import Path
from typing import Any

from app.models import Exercise, KanjiCard, LifetimeStats
from app.utils import end_of_today, now_local, to_iso, today_str


class Database:
    def __init__(self, db_path: Path):
        self.db_path = db_path
        self.conn = sqlite3.connect(str(db_path))
        self.conn.row_factory = sqlite3.Row
        self._create_tables()

    def _create_tables(self) -> None:
        self.conn.executescript(
            """
            CREATE TABLE IF NOT EXISTS kanji_cards (
                id TEXT PRIMARY KEY,
                kanji TEXT NOT NULL,
                hiragana TEXT NOT NULL,
                romaji TEXT NOT NULL,
                meaning TEXT NOT NULL,
                example_hiragana TEXT NOT NULL,
                example_translation TEXT NOT NULL,
                stage INTEGER NOT NULL DEFAULT 0,
                next_review_at TEXT NOT NULL,
                created_at TEXT NOT NULL,
                updated_at TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS exercises (
                id TEXT PRIMARY KEY,
                sentence TEXT NOT NULL,
                blanks INTEGER NOT NULL,
                answers TEXT NOT NULL,
                choices TEXT NOT NULL,
                translation TEXT NOT NULL
            );

            CREATE TABLE IF NOT EXISTS daily_stats (
                date TEXT PRIMARY KEY,
                cards_viewed INTEGER NOT NULL DEFAULT 0,
                exercises_done INTEGER NOT NULL DEFAULT 0,
                streak_counted INTEGER NOT NULL DEFAULT 0
            );

            CREATE TABLE IF NOT EXISTS lifetime_stats (
                id INTEGER PRIMARY KEY CHECK (id = 1),
                total_cards_viewed INTEGER NOT NULL DEFAULT 0,
                total_exercises_done INTEGER NOT NULL DEFAULT 0,
                current_streak INTEGER NOT NULL DEFAULT 0,
                best_streak INTEGER NOT NULL DEFAULT 0,
                last_streak_date TEXT
            );
            """
        )
        self.conn.execute(
            "INSERT OR IGNORE INTO lifetime_stats (id, total_cards_viewed, total_exercises_done, current_streak, best_streak) VALUES (1,0,0,0,0)"
        )
        self.conn.commit()

    def cards_count(self) -> int:
        row = self.conn.execute("SELECT COUNT(*) AS cnt FROM kanji_cards").fetchone()
        return int(row["cnt"])

    def exercises_count(self) -> int:
        row = self.conn.execute("SELECT COUNT(*) AS cnt FROM exercises").fetchone()
        return int(row["cnt"])

    def seed_cards(self, cards: list[dict[str, Any]]) -> None:
        now_iso = to_iso(now_local())
        self.conn.executemany(
            """
            INSERT OR IGNORE INTO kanji_cards
            (id, kanji, hiragana, romaji, meaning, example_hiragana, example_translation, stage, next_review_at, created_at, updated_at)
            VALUES (:id, :kanji, :hiragana, :romaji, :meaning, :example_hiragana, :example_translation, 0, :next_review_at, :created_at, :updated_at)
            """,
            [
                {
                    **card,
                    "next_review_at": now_iso,
                    "created_at": now_iso,
                    "updated_at": now_iso,
                }
                for card in cards
            ],
        )
        self.conn.commit()

    def seed_exercises(self, exercises: list[dict[str, Any]]) -> None:
        payload = [
            {
                "id": ex["id"],
                "sentence": ex["sentence"],
                "blanks": ex["blanks"],
                "answers": json.dumps(ex["answers"], ensure_ascii=False),
                "choices": json.dumps(ex["choices"], ensure_ascii=False),
                "translation": ex["translation"],
            }
            for ex in exercises
        ]
        self.conn.executemany(
            """
            INSERT OR IGNORE INTO exercises
            (id, sentence, blanks, answers, choices, translation)
            VALUES (:id, :sentence, :blanks, :answers, :choices, :translation)
            """,
            payload,
        )
        self.conn.commit()

    def get_due_cards(self) -> list[KanjiCard]:
        rows = self.conn.execute(
            """
            SELECT * FROM kanji_cards
            WHERE next_review_at <= ?
            ORDER BY next_review_at ASC
            """,
            (to_iso(end_of_today()),),
        ).fetchall()
        return [KanjiCard(**{k: row[k] for k in row.keys() if k in KanjiCard.__dataclass_fields__}) for row in rows]

    def update_card_progress(self, card_id: str, stage: int, next_review_at: str) -> None:
        self.conn.execute(
            "UPDATE kanji_cards SET stage=?, next_review_at=?, updated_at=? WHERE id=?",
            (stage, next_review_at, to_iso(now_local()), card_id),
        )
        self.conn.commit()

    def get_daily_stats(self, date: str | None = None) -> sqlite3.Row:
        date = date or today_str()
        self.conn.execute(
            "INSERT OR IGNORE INTO daily_stats (date, cards_viewed, exercises_done, streak_counted) VALUES (?,0,0,0)",
            (date,),
        )
        self.conn.commit()
        return self.conn.execute("SELECT * FROM daily_stats WHERE date=?", (date,)).fetchone()

    def inc_cards_viewed(self, count: int = 1) -> None:
        date = today_str()
        self.get_daily_stats(date)
        self.conn.execute("UPDATE daily_stats SET cards_viewed = cards_viewed + ? WHERE date=?", (count, date))
        self.conn.execute("UPDATE lifetime_stats SET total_cards_viewed = total_cards_viewed + ? WHERE id=1", (count,))
        self.conn.commit()

    def inc_exercises_done(self, count: int = 1) -> None:
        date = today_str()
        self.get_daily_stats(date)
        self.conn.execute("UPDATE daily_stats SET exercises_done = exercises_done + ? WHERE date=?", (count, date))
        self.conn.execute("UPDATE lifetime_stats SET total_exercises_done = total_exercises_done + ? WHERE id=1", (count,))
        self.conn.commit()

    def set_streak_counted(self, date: str, counted: bool = True) -> None:
        self.get_daily_stats(date)
        self.conn.execute("UPDATE daily_stats SET streak_counted = ? WHERE date=?", (1 if counted else 0, date))
        self.conn.commit()

    def get_lifetime_stats(self) -> LifetimeStats:
        row = self.conn.execute("SELECT * FROM lifetime_stats WHERE id=1").fetchone()
        return LifetimeStats(**dict(row))

    def update_lifetime_streak(self, current_streak: int, best_streak: int, last_streak_date: str) -> None:
        self.conn.execute(
            "UPDATE lifetime_stats SET current_streak=?, best_streak=?, last_streak_date=? WHERE id=1",
            (current_streak, best_streak, last_streak_date),
        )
        self.conn.commit()

    def get_memory_counts(self) -> dict[str, int]:
        row = self.conn.execute(
            """
            SELECT
                SUM(CASE WHEN stage <= 2 THEN 1 ELSE 0 END) AS short_memory,
                SUM(CASE WHEN stage >= 3 THEN 1 ELSE 0 END) AS long_memory,
                SUM(CASE WHEN next_review_at <= ? THEN 1 ELSE 0 END) AS due_today
            FROM kanji_cards
            """,
            (to_iso(end_of_today()),),
        ).fetchone()
        return {
            "short_memory": row["short_memory"] or 0,
            "long_memory": row["long_memory"] or 0,
            "due_today": row["due_today"] or 0,
        }

    def get_today_progress(self) -> dict[str, int]:
        row = self.get_daily_stats(today_str())
        return {
            "cards_viewed": row["cards_viewed"],
            "exercises_done": row["exercises_done"],
        }

    def get_exercise_for_today(self, learned_only: bool = True) -> Exercise | None:
        learned_set = set()
        if learned_only:
            rows = self.conn.execute("SELECT kanji FROM kanji_cards WHERE stage >= 1").fetchall()
            learned_set = {r[0] for r in rows}
        rows = self.conn.execute("SELECT * FROM exercises ORDER BY RANDOM() LIMIT 20").fetchall()
        for row in rows:
            answers = json.loads(row["answers"])
            if not learned_only or all(answer in learned_set for answer in answers):
                return Exercise(
                    id=row["id"],
                    sentence=row["sentence"],
                    blanks=row["blanks"],
                    answers=answers,
                    choices=json.loads(row["choices"]),
                    translation=row["translation"],
                )
        fallback = self.conn.execute("SELECT * FROM exercises ORDER BY RANDOM() LIMIT 1").fetchone()
        if not fallback:
            return None
        return Exercise(
            id=fallback["id"],
            sentence=fallback["sentence"],
            blanks=fallback["blanks"],
            answers=json.loads(fallback["answers"]),
            choices=json.loads(fallback["choices"]),
            translation=fallback["translation"],
        )
