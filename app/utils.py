from __future__ import annotations

from datetime import datetime, time
from typing import Optional


ISO_DATETIME_FORMAT = "%Y-%m-%dT%H:%M:%S"
DATE_FORMAT = "%Y-%m-%d"


def now_local() -> datetime:
    return datetime.now().replace(microsecond=0)


def to_iso(dt: datetime) -> str:
    return dt.replace(microsecond=0).isoformat()


def from_iso(value: str) -> datetime:
    return datetime.fromisoformat(value)


def today_str() -> str:
    return now_local().strftime(DATE_FORMAT)


def parse_date(value: Optional[str]) -> Optional[datetime.date]:
    if not value:
        return None
    return datetime.strptime(value, DATE_FORMAT).date()


def end_of_today() -> datetime:
    now = now_local()
    return datetime.combine(now.date(), time(23, 59, 59))


def date_to_str(value: datetime.date) -> str:
    return value.strftime(DATE_FORMAT)
