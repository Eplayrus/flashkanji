from __future__ import annotations

import sqlite3
from pathlib import Path
from datetime import datetime

DB_PATH = Path('data/flashkanji.sqlite')
DB_PATH.parent.mkdir(parents=True, exist_ok=True)

SEED = [
    ('日', 'ニチ / ひ', 'день, солнце', 'ひがのぼる。', 'Солнце встает.'),
    ('月', 'ゲツ / つき', 'месяц, луна', 'つきがきれい。', 'Луна красивая.'),
    ('人', 'ジン / ひと', 'человек', 'ひとがあるく。', 'Человек идет.'),
    ('山', 'サン / やま', 'гора', 'やまにいく。', 'Иду в горы.'),
    ('川', 'セン / かわ', 'река', 'かわでおよぐ。', 'Плаваю в реке.'),
    ('水', 'スイ / みず', 'вода', 'みずをのむ。', 'Пью воду.'),
    ('火', 'カ / ひ', 'огонь', 'ひをつける。', 'Разжечь огонь.'),
    ('木', 'モク / き', 'дерево', 'きのしたでやすむ。', 'Отдыхаю под деревом.'),
    ('金', 'キン / かね', 'деньги', 'おかねをつかう。', 'Трачу деньги.'),
    ('土', 'ド / つち', 'земля', 'つちをほる。', 'Копаю землю.'),
    ('学', 'ガク / まなぶ', 'учиться', 'がっこうでまなぶ。', 'Учусь в школе.'),
    ('先', 'セン / さき', 'впереди', 'さきにいく。', 'Иду вперед.'),
]


def _ensure_column(conn: sqlite3.Connection, table: str, col: str, ddl: str):
    cols = {r[1] for r in conn.execute(f'PRAGMA table_info({table})')}
    if col not in cols:
        conn.execute(f'ALTER TABLE {table} ADD COLUMN {ddl}')


def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.executescript(
        '''
    CREATE TABLE IF NOT EXISTS cards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      kanji TEXT UNIQUE,
      reading TEXT, meaning TEXT, examples TEXT,
      example_translation TEXT DEFAULT '',
      streak INTEGER DEFAULT 0, lapses INTEGER DEFAULT 0,
      last_seen TEXT, next_due TEXT, learned INTEGER DEFAULT 0, learned_at TEXT,
      priority_boost INTEGER DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      card_id INTEGER, action TEXT, created_at TEXT
    );
    CREATE TABLE IF NOT EXISTS profile (
      id INTEGER PRIMARY KEY CHECK (id=1),
      daily_streak_count INTEGER DEFAULT 0,
      last_active_date TEXT,
      streak_credited_date TEXT,
      today_completed INTEGER DEFAULT 0,
      today_viewed INTEGER DEFAULT 0,
      view_count_date TEXT,
      daily_goal INTEGER DEFAULT 10,
      requeue_mode TEXT DEFAULT 'count',
      requeue_value INTEGER DEFAULT 3
    );
    CREATE TABLE IF NOT EXISTS learned_batches (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT, card_ids TEXT
    );
    CREATE TABLE IF NOT EXISTS exercises (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      batch_id INTEGER, template_id TEXT,
      exercise_completed_at TEXT, exercise_score INTEGER, wrong_targets TEXT
    );
    '''
    )

    _ensure_column(conn, 'cards', 'example_translation', "example_translation TEXT DEFAULT ''")
    _ensure_column(conn, 'profile', 'streak_credited_date', 'streak_credited_date TEXT')
    _ensure_column(conn, 'profile', 'today_viewed', 'today_viewed INTEGER DEFAULT 0')
    _ensure_column(conn, 'profile', 'view_count_date', 'view_count_date TEXT')

    if conn.execute('SELECT COUNT(*) FROM cards').fetchone()[0] == 0:
        now = datetime.utcnow().isoformat()
        conn.executemany(
            'INSERT INTO cards (kanji,reading,meaning,examples,example_translation,next_due) VALUES (?,?,?,?,?,?)',
            [(*s, now) for s in SEED],
        )
    conn.execute('INSERT OR IGNORE INTO profile(id) VALUES (1)')

    # Если база была создана на старой версии — добавим переводы в пустые строки.
    for kanji, _, _, ex, ex_ru in SEED:
        conn.execute(
            'UPDATE cards SET examples=?, example_translation=? WHERE kanji=? AND (example_translation IS NULL OR example_translation="")',
            (ex, ex_ru, kanji),
        )

    conn.commit()
    return conn
