from __future__ import annotations

from kivy.properties import StringProperty
from kivy.uix.screenmanager import Screen

from app.srs import apply_not_remember, apply_remember


class CardsScreen(Screen):
    today_text = StringProperty("Сегодня: 0/15")
    streak_text = StringProperty("Streak: 0 дней")
    kanji_text = StringProperty("-")
    back_text = StringProperty("")

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.cards_queue = []
        self.current_card = None

    def on_pre_enter(self, *args):
        self.reload_queue()
        self.update_header()
        return super().on_pre_enter(*args)

    def reload_queue(self) -> None:
        db = self.manager.app.db
        self.cards_queue = db.get_due_cards()
        if self.cards_queue:
            self.current_card = self.cards_queue.pop(0)
            self.render_card()
        else:
            self.current_card = None
            self.kanji_text = "Готово!"
            self.back_text = "Сегодня нет карточек к повторению."

    def render_card(self) -> None:
        card = self.current_card
        self.kanji_text = card.kanji
        self.back_text = (
            f"{card.meaning}\n"
            f"{card.hiragana} ({card.romaji})\n"
            f"{card.example_hiragana}\n"
            f"{card.example_translation}"
        )
        self.ids.flip_card.is_front = True

    def update_header(self) -> None:
        stats = self.manager.app.stats_service.dashboard_stats()
        self.today_text = f"Сегодня: {stats['today_cards']}/15"
        self.streak_text = f"Streak: {stats['streak']} дней"

    def handle_answer(self, remember: bool) -> None:
        if not self.current_card:
            return
        if remember:
            stage, next_review = apply_remember(self.current_card.stage)
        else:
            stage, next_review = apply_not_remember()
        self.manager.app.db.update_card_progress(self.current_card.id, stage, next_review)
        self.manager.app.stats_service.record_card_viewed()

        if self.cards_queue:
            self.current_card = self.cards_queue.pop(0)
            self.render_card()
        else:
            self.reload_queue()
        self.update_header()

    def go_home(self) -> None:
        self.manager.current = "menu"
