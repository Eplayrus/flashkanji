import sqlite3
from pathlib import Path
from datetime import datetime

DB_PATH = Path('data/flashkanji.sqlite')
DB_PATH.parent.mkdir(parents=True, exist_ok=True)

SEED = [
    ('日', 'ニチ / ひ', 'день, солнце', 'ひがのぼる。にちようび。'),
    ('月', 'ゲツ / つき', 'месяц, луна', 'つきがきれい。'),
    ('人', 'ジン / ひと', 'человек', 'ひとがあるく。'),
    ('山', 'サン / やま', 'гора', 'やまにいく。'),
    ('川', 'セン / かわ', 'река', 'かわでおよぐ。'),
    ('水', 'スイ / みず', 'вода', 'みずをのむ。'),
    ('火', 'カ / ひ', 'огонь', 'ひをつける。'),
    ('木', 'モク / き', 'дерево', 'きのしたでやすむ。'),
    ('金', 'キン / かね', 'деньги', 'おかねをつかう。'),
    ('土', 'ド / つち', 'земля', 'つちをほる。'),
    ('学', 'ガク / まなぶ', 'учиться', 'がっこうでまなぶ。'),
    ('先', 'セン / さき', 'впереди', 'さきにいく。')
]


def get_conn():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.executescript('''
    CREATE TABLE IF NOT EXISTS cards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      kanji TEXT UNIQUE,
      reading TEXT, meaning TEXT, examples TEXT,
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
      today_completed INTEGER DEFAULT 0,
      daily_goal INTEGER DEFAULT 10,
      streak_requires_goal INTEGER DEFAULT 0,
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
    ''')
    if conn.execute('SELECT COUNT(*) FROM cards').fetchone()[0] == 0:
        now = datetime.utcnow().isoformat()
        conn.executemany('INSERT INTO cards (kanji,reading,meaning,examples,next_due) VALUES (?,?,?,?,?)', [(*s, now) for s in SEED])
    conn.execute('INSERT OR IGNORE INTO profile(id) VALUES (1)')
    conn.commit()
    return conn
