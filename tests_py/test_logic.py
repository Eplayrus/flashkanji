import unittest
from datetime import datetime, date

from flashkanji.constants import DAILY_STREAK_VIEW_TARGET
from flashkanji.logic import (
    LaterQueue,
    grade_exercise,
    is_hiragana_text_except_placeholders,
    next_interval_days,
    register_card_view,
)


class LogicTests(unittest.TestCase):
    def test_next_due_intervals(self):
        self.assertEqual(next_interval_days(1), 1)
        self.assertEqual(next_interval_days(2), 3)
        self.assertEqual(next_interval_days(3), 7)
        self.assertEqual(next_interval_days(8), 30)

    def test_day_streak_after_10_views(self):
        p = {
            'daily_streak_count': 4,
            'last_active_date': '2025-02-10',
            'streak_credited_date': None,
            'today_viewed': 0,
            'view_count_date': None,
        }
        for _ in range(DAILY_STREAK_VIEW_TARGET - 1):
            p = register_card_view(p, date(2025, 2, 11))
        self.assertEqual(p['daily_streak_count'], 4)
        p = register_card_view(p, date(2025, 2, 11))
        self.assertEqual(p['daily_streak_count'], 5)

    def test_later_queue(self):
        q = LaterQueue()
        q.push(1, 'count', 2, datetime.utcnow())
        q.increment_seen()
        self.assertIsNone(q.pop_ready(datetime.utcnow()))
        q.increment_seen()
        self.assertEqual(q.pop_ready(datetime.utcnow()), 1)

    def test_exercise_slots(self):
        result = grade_exercise(
            {'targets': [{'slot': 'K1', 'kanji': '日'}, {'slot': 'K2', 'kanji': '人'}]},
            {'K1': '日', 'K2': '月'},
        )
        self.assertEqual(result['score'], 50)
        self.assertEqual(result['wrongTargets'], ['人'])
        self.assertTrue(is_hiragana_text_except_placeholders('きょうは{K1}ようび。'))
        self.assertFalse(is_hiragana_text_except_placeholders('今日は{K1}ようび。'))


if __name__ == '__main__':
    unittest.main()
