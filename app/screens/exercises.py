from __future__ import annotations

from kivy.properties import ListProperty, StringProperty
from kivy.uix.screenmanager import Screen
from kivymd.uix.button import MDRaisedButton


class ExerciseScreen(Screen):
    today_text = StringProperty("Сегодня: 0/15")
    streak_text = StringProperty("Streak: 0 дней")
    sentence_text = StringProperty("")
    translation_text = StringProperty("")
    result_text = StringProperty("")
    slots = ListProperty([])

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.exercise = None

    def on_pre_enter(self, *args):
        self.update_header()
        self.load_exercise()
        return super().on_pre_enter(*args)

    def update_header(self) -> None:
        stats = self.manager.app.stats_service.dashboard_stats()
        self.today_text = f"Сегодня: {stats['today_cards']}/15"
        self.streak_text = f"Streak: {stats['streak']} дней"

    def load_exercise(self) -> None:
        self.exercise = self.manager.app.db.get_exercise_for_today(learned_only=True)
        self.result_text = ""
        if not self.exercise:
            self.sentence_text = "Нет упражнений"
            self.translation_text = ""
            self.slots = []
            self.ids.choices_box.clear_widgets()
            return
        self.slots = ["__" for _ in range(self.exercise.blanks)]
        self.sentence_text = self._render_sentence()
        self.translation_text = self.exercise.translation
        self._render_choices()

    def _render_sentence(self) -> str:
        text = self.exercise.sentence
        for token in self.slots:
            text = text.replace("__", token, 1)
        return text

    def _render_choices(self) -> None:
        box = self.ids.choices_box
        box.clear_widgets()

        for choice in self.exercise.choices:
            btn = MDRaisedButton(text=choice)
            btn.bind(on_release=lambda _btn, c=choice: self.fill_slot(c))
            box.add_widget(btn)

    def fill_slot(self, char: str) -> None:
        for idx, token in enumerate(self.slots):
            if token == "__":
                self.slots[idx] = char
                self.sentence_text = self._render_sentence()
                return

    def reset_slots(self) -> None:
        if not self.exercise:
            return
        self.slots = ["__" for _ in range(self.exercise.blanks)]
        self.sentence_text = self._render_sentence()

    def check_answer(self) -> None:
        if not self.exercise:
            return
        if self.slots == self.exercise.answers:
            self.result_text = "✅ Верно!"
        else:
            right = " ".join(self.exercise.answers)
            self.result_text = f"❌ Неверно. Правильный ответ: {right}"
        self.manager.app.stats_service.record_exercise_done()
        self.update_header()

    def next_exercise(self) -> None:
        self.load_exercise()

    def go_home(self) -> None:
        self.manager.current = "menu"
