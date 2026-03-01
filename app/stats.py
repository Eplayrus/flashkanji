from __future__ import annotations

from datetime import timedelta

from app.db import Database
from app.utils import date_to_str, parse_date, today_str


class StatsService:
    DAILY_CARD_GOAL = 15

    def __init__(self, db: Database):
        self.db = db

    def maybe_count_streak_today(self) -> None:
        today = today_str()
        daily = self.db.get_daily_stats(today)
        if daily["streak_counted"]:
            return
        qualifies = daily["cards_viewed"] >= self.DAILY_CARD_GOAL or daily["exercises_done"] >= 1
        if not qualifies:
            return

        lifetime = self.db.get_lifetime_stats()
        last_date = parse_date(lifetime.last_streak_date)
        today_date = parse_date(today)

        if last_date is None:
            current = 1
        elif today_date == last_date:
            current = lifetime.current_streak
        elif today_date == last_date + timedelta(days=1):
            current = lifetime.current_streak + 1
        else:
            current = 1

        best = max(lifetime.best_streak, current)
        self.db.update_lifetime_streak(current_streak=current, best_streak=best, last_streak_date=today)
        self.db.set_streak_counted(today, True)

    def record_card_viewed(self) -> None:
        self.db.inc_cards_viewed(1)
        self.maybe_count_streak_today()

    def record_exercise_done(self) -> None:
        self.db.inc_exercises_done(1)
        self.maybe_count_streak_today()

    def dashboard_stats(self) -> dict[str, int]:
        today = self.db.get_today_progress()
        life = self.db.get_lifetime_stats()
        memory = self.db.get_memory_counts()
        return {
            "today_cards": today["cards_viewed"],
            "today_exercises": today["exercises_done"],
            "total_cards": life.total_cards_viewed,
            "total_exercises": life.total_exercises_done,
            "streak": life.current_streak,
            "best_streak": life.best_streak,
            "due_today": memory["due_today"],
            "short_memory": memory["short_memory"],
            "long_memory": memory["long_memory"],
        }
