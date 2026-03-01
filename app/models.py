from __future__ import annotations

from dataclasses import dataclass


@dataclass(slots=True)
class KanjiCard:
    id: str
    kanji: str
    hiragana: str
    romaji: str
    meaning: str
    example_hiragana: str
    example_translation: str
    stage: int
    next_review_at: str


@dataclass(slots=True)
class Exercise:
    id: str
    sentence: str
    blanks: int
    answers: list[str]
    choices: list[str]
    translation: str


@dataclass(slots=True)
class DailyStats:
    date: str
    cards_viewed: int
    exercises_done: int
    streak_counted: int


@dataclass(slots=True)
class LifetimeStats:
    id: int
    total_cards_viewed: int
    total_exercises_done: int
    current_streak: int
    best_streak: int
    last_streak_date: str | None
