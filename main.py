from __future__ import annotations

from pathlib import Path

from kivy.lang import Builder
from kivy.properties import StringProperty
from kivy.uix.screenmanager import ScreenManager
from kivymd.app import MDApp

from app.db import Database
from app.screens.cards import CardsScreen
from app.screens.exercises import ExerciseScreen
from app.screens.main_menu import MainMenuScreen
from app.seed import seed_if_needed
from app.stats import StatsService
from app.widgets.flip_card import FlipCard  # noqa: F401
from app.widgets.image_button import ImageButton  # noqa: F401
from app.widgets.md_compat import MDButton, MDButtonText  # noqa: F401


class FlashKanjiApp(MDApp):
    jp_font_name = StringProperty("")

    def build(self):
        self.theme_cls.theme_style = "Light"
        self.theme_cls.primary_palette = "Orange"

        base_dir = Path(__file__).resolve().parent
        self.assets_dir = base_dir / "assets"
        db_dir = Path(self.user_data_dir)
        db_dir.mkdir(parents=True, exist_ok=True)

        self.jp_font_name = self._pick_cjk_font()

        self.db = Database(db_dir / "flashkanji.sqlite3")
        seed_if_needed(self.db, self.assets_dir)
        self.stats_service = StatsService(self.db)

        Builder.load_file(str(base_dir / "kv" / "main.kv"))

        sm = ScreenManager()
        sm.app = self
        sm.add_widget(MainMenuScreen())
        sm.add_widget(CardsScreen())
        sm.add_widget(ExerciseScreen())
        return sm

    def asset_path(self, filename: str) -> str:
        return str((self.assets_dir / filename).resolve())

    @staticmethod
    def _pick_cjk_font() -> str:
        candidates = [
            Path("C:/Windows/Fonts/YuGothR.ttc"),
            Path("C:/Windows/Fonts/msgothic.ttc"),
            Path("/System/Library/Fonts/ヒラギノ角ゴシック W3.ttc"),
            Path("/System/Library/Fonts/Hiragino Sans GB.ttc"),
            Path("/usr/share/fonts/truetype/noto/NotoSansCJK-Regular.ttc"),
            Path("/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"),
        ]
        for font_path in candidates:
            if font_path.exists():
                return str(font_path)
        return ""


if __name__ == "__main__":
    FlashKanjiApp().run()
