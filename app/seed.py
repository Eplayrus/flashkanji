from __future__ import annotations

import json
from pathlib import Path

from app.db import Database


def load_json(path: Path) -> list[dict]:
    return json.loads(path.read_text(encoding="utf-8"))


def seed_if_needed(db: Database, assets_dir: Path) -> None:
    if db.cards_count() == 0:
        cards = load_json(assets_dir / "kanji_seed.json")
        db.seed_cards(cards)
    if db.exercises_count() == 0:
        exercises = load_json(assets_dir / "exercise_seed.json")
        db.seed_exercises(exercises)
