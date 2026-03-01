from __future__ import annotations

from kivy.properties import StringProperty
from kivy.uix.screenmanager import Screen


class MainMenuScreen(Screen):
    today_text = StringProperty("Сегодня: 0/15")
    streak_text = StringProperty("Streak: 0 дней")
    today_done_text = StringProperty("Сегодня выполнено: 0")
    total_learned_text = StringProperty("Всего выучено: 0")
    weekly_errors_text = StringProperty("Ошибки за неделю: 0")
    exercises_text = StringProperty("Упражнения выполнено: 0")
    due_text = StringProperty("К изучению сегодня: 0")
    short_text = StringProperty("Короткая память: 0")
    long_text = StringProperty("Долгосрочная память: 0")

    def on_pre_enter(self, *args):
        self.refresh()
        return super().on_pre_enter(*args)

    def refresh(self) -> None:
        app = self.manager.app
        stats = app.stats_service.dashboard_stats()
        self.today_text = f"Сегодня: {stats['today_cards']}/15"
        self.streak_text = f"Streak: {stats['streak']} дней"
        self.today_done_text = f"Сегодня выполнено: карточки {stats['today_cards']}, упражнения {stats['today_exercises']}"
        self.total_learned_text = f"Всего выучено: {stats['total_cards']}"
        self.weekly_errors_text = "Ошибки за неделю: 0"
        self.exercises_text = f"Упражнения выполнено: {stats['total_exercises']}"
        self.due_text = f"К изучению сегодня: {stats['due_today']}"
        self.short_text = f"Короткая память: {stats['short_memory']}"
        self.long_text = f"Долгосрочная память: {stats['long_memory']}"

    def go_cards(self) -> None:
        self.manager.current = "cards"

    def go_exercises(self) -> None:
        self.manager.current = "exercises"
