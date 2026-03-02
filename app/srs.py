from __future__ import annotations

from datetime import timedelta

from app.utils import now_local


def remember_interval_days(stage: int) -> int:
    if stage <= 0:
        return 1
    if stage == 1:
        return 2
    if stage == 2:
        return 5
    if stage == 3:
        return 14
    if stage == 4:
        return 30
    return 60


def apply_remember(stage: int) -> tuple[int, str]:
    new_stage = stage + 1
    interval_days = remember_interval_days(stage)
    next_review = now_local() + timedelta(days=interval_days)
    return new_stage, next_review.isoformat()


def apply_not_remember() -> tuple[int, str]:
    next_review = now_local() + timedelta(days=1)
    return 0, next_review.isoformat()


def memory_bucket(stage: int) -> str:
    if stage <= 2:
        return "short"
    return "long"
