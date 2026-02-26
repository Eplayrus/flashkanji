from __future__ import annotations

from datetime import date, datetime, timedelta
import re
from .constants import DAILY_STREAK_VIEW_TARGET, INTERVALS, LEARN_THRESHOLD


def next_interval_days(streak: int) -> int:
    return INTERVALS.get(min(streak, 5), 30)


def apply_right_swipe(card: dict, now: datetime) -> dict:
    streak = card['streak'] + 1
    learned = streak >= LEARN_THRESHOLD
    out = dict(card)
    out['streak'] = streak
    out['last_seen'] = now.isoformat()
    out['next_due'] = (now + timedelta(days=next_interval_days(streak))).isoformat()
    out['learned'] = 1 if learned else card['learned']
    out['learned_at'] = now.isoformat() if learned else card['learned_at']
    return out


def apply_left_swipe(card: dict, mode: str, value: int, now: datetime) -> dict:
    out = dict(card)
    out['streak'] = 0
    out['lapses'] = card['lapses'] + 1
    out['last_seen'] = now.isoformat()
    out['next_due'] = (now + timedelta(minutes=value)).isoformat() if mode == 'minutes' else now.isoformat()
    return out


def _calc_streak_count(last_active_date: str | None, streak_count: int, today: date):
    if not last_active_date:
        return 1, None
    delta = (today - date.fromisoformat(last_active_date)).days
    if delta == 1:
        return streak_count + 1, None
    if delta <= 0:
        return streak_count, None
    return 1, 'Серия прервалась, но новый старт уже сделан 🔥'


def register_card_view(profile: dict, today: date):
    """Засчитывает просмотр карточки и при достижении 10 в день обновляет streak."""
    out = dict(profile)
    today_iso = today.isoformat()

    if out.get('view_count_date') != today_iso:
        out['today_viewed'] = 0
        out['view_count_date'] = today_iso

    out['today_viewed'] += 1
    out['streak_message'] = None

    if out.get('streak_credited_date') == today_iso:
        return out

    if out['today_viewed'] >= DAILY_STREAK_VIEW_TARGET:
        out['daily_streak_count'], out['streak_message'] = _calc_streak_count(
            out.get('last_active_date'),
            out['daily_streak_count'],
            today,
        )
        out['last_active_date'] = today_iso
        out['streak_credited_date'] = today_iso

    return out


class LaterQueue:
    def __init__(self):
        self.items = []
        self.seen_count = 0

    def push(self, card_id: int, mode: str, value: int, now: datetime):
        if mode == 'count':
            self.items.append({'card_id': card_id, 'release_seen': self.seen_count + value})
        else:
            self.items.append({'card_id': card_id, 'release_at': (now + timedelta(minutes=value)).isoformat()})

    def increment_seen(self):
        self.seen_count += 1

    def pop_ready(self, now: datetime):
        for idx, item in enumerate(self.items):
            if 'release_seen' in item and self.seen_count >= item['release_seen']:
                return self.items.pop(idx)['card_id']
            if 'release_at' in item and now.isoformat() >= item['release_at']:
                return self.items.pop(idx)['card_id']
        return None


def build_exercise(batch_kanji: list[str]):
    text = 'きょうは{K1}ようび。{K2}がきれい。{K3}があるいている。'
    targets = [
        {'slot': 'K1', 'kanji': batch_kanji[0]},
        {'slot': 'K2', 'kanji': batch_kanji[1]},
        {'slot': 'K3', 'kanji': batch_kanji[2]},
    ]
    return {'template_id': 't1', 'text_hira': text, 'targets': targets}


def is_hiragana_text_except_placeholders(text: str) -> bool:
    sanitized = re.sub(r'\{K\d+\}', '', text)
    return bool(re.fullmatch(r'[\u3040-\u309F\s。、「」・ー！？,.]*', sanitized))


def grade_exercise(exercise: dict, answers: dict):
    wrong = []
    correct = 0
    for target in exercise['targets']:
        if answers.get(target['slot']) == target['kanji']:
            correct += 1
        else:
            wrong.append(target['kanji'])
    return {
        'score': round(correct / len(exercise['targets']) * 100),
        'wrongTargets': wrong,
        'passed': len(wrong) == 0,
    }
