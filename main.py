from __future__ import annotations

from pathlib import Path

from kivy.lang import Builder
from kivy.uix.screenmanager import ScreenManager
from kivymd.app import MDApp

from app.db import Database
from app.screens.cards import CardsScreen
from app.screens.exercises import ExerciseScreen
from app.screens.main_menu import MainMenuScreen
from app.seed import seed_if_needed
from app.stats import StatsService


class FlashKanjiApp(MDApp):
    def build(self):
        self.theme_cls.theme_style = "Light"
        self.theme_cls.primary_palette = "Orange"

        base_dir = Path(__file__).resolve().parent
        assets_dir = base_dir / "assets"
        db_dir = Path(self.user_data_dir)
        db_dir.mkdir(parents=True, exist_ok=True)

        self.db = Database(db_dir / "flashkanji.sqlite3")
        seed_if_needed(self.db, assets_dir)
        self.stats_service = StatsService(self.db)

        Builder.load_file(str(base_dir / "kv" / "main.kv"))

        sm = ScreenManager()
        sm.app = self
        sm.add_widget(MainMenuScreen())
        sm.add_widget(CardsScreen())
        sm.add_widget(ExerciseScreen())
        return sm


if __name__ == "__main__":
    FlashKanjiApp().run()
