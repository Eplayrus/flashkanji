from __future__ import annotations

import json
import random
from pathlib import Path
import tkinter as tk
from datetime import date, datetime
from tkinter import messagebox

from .constants import DAILY_STREAK_VIEW_TARGET, LEARNED_BATCH_SIZE
from .db import get_conn
from .logic import (
    LaterQueue,
    apply_left_swipe,
    apply_right_swipe,
    build_exercise,
    grade_exercise,
    register_card_view,
)


class FlashKanjiDesktop:
    def __init__(self, root: tk.Tk):
        self.root = root
        self.root.title('FlashKanji Desktop')
        self.root.geometry('980x700')

        self.conn = get_conn()
        self.queue = LaterQueue()
        self.cards = []
        self.current_card = None
        self.flipped = False
        self.last_action = None

        self.logo_label = None
        logo_path = Path('assets/logo.png')
        if logo_path.exists():
            try:
                self.logo_img = tk.PhotoImage(file=str(logo_path))
                self.logo_label = tk.Label(root, image=self.logo_img)
                self.logo_label.pack(pady=6)
            except tk.TclError:
                self.logo_label = tk.Label(root, text='FlashKanji', font=('Arial', 20, 'bold'))
                self.logo_label.pack(pady=6)
        else:
            self.logo_label = tk.Label(root, text='FlashKanji', font=('Arial', 20, 'bold'))
            self.logo_label.pack(pady=6)

        self.top_label = tk.Label(root, font=('Arial', 16, 'bold'))
        self.top_label.pack(pady=8)

        self.queue_label = tk.Label(root, font=('Arial', 12))
        self.queue_label.pack()

        self.card_frame = tk.Frame(root, bg='#1B2330', width=760, height=300)
        self.card_frame.pack(pady=14)
        self.card_frame.pack_propagate(False)
        self.card_frame.bind('<Button-1>', lambda _: self.flip_card())

        self.front_label = tk.Label(self.card_frame, text='', font=('Arial', 110), fg='white', bg='#1B2330')
        self.front_label.pack(expand=True)
        self.front_label.bind('<Button-1>', lambda _: self.flip_card())

        self.back_label = tk.Label(self.card_frame, text='', font=('Arial', 24), fg='white', bg='#1B2330', justify='center', wraplength=720)

        controls = tk.Frame(root)
        controls.pack(pady=8)
        tk.Button(controls, text='← Не помню', width=14, command=lambda: self.swipe('left')).grid(row=0, column=0, padx=6)
        tk.Button(controls, text='Помню →', width=14, command=lambda: self.swipe('right')).grid(row=0, column=1, padx=6)
        tk.Button(controls, text='Undo', width=10, command=self.undo).grid(row=0, column=2, padx=6)

        self.stats_label = tk.Label(root, font=('Arial', 11), justify='left')
        self.stats_label.pack(pady=6)

        settings = tk.LabelFrame(root, text='Настройки')
        settings.pack(pady=8, padx=8, fill='x')
        tk.Label(settings, text='Повтор позже:').grid(row=0, column=0, padx=6, pady=4)
        self.mode_var = tk.StringVar(value='count')
        tk.OptionMenu(settings, self.mode_var, 'count', 'minutes').grid(row=0, column=1, padx=6)
        tk.Label(settings, text='Значение:').grid(row=0, column=2)
        self.value_var = tk.IntVar(value=3)
        tk.Spinbox(settings, from_=1, to=60, textvariable=self.value_var, width=5).grid(row=0, column=3)
        tk.Button(settings, text='Сохранить', command=self.save_settings).grid(row=0, column=4, padx=8)
        tk.Button(settings, text='Сброс прогресса', command=self.reset_progress).grid(row=0, column=5, padx=8)

        self.exercise_frame = tk.LabelFrame(root, text='Упражнение: вставь кандзи', padx=8, pady=8)
        self.exercise_frame.pack(fill='x', padx=8, pady=10)
        self.exercise_frame.pack_forget()

        self.exercise_info = tk.Label(self.exercise_frame, text='', justify='left', wraplength=920, font=('Arial', 13))
        self.exercise_info.pack(anchor='w', pady=4)
        self.exercise_entries = {}
        self.exercise_targets = []
        self.exercise_batch_id = None
        tk.Button(self.exercise_frame, text='Проверить упражнение', command=self.submit_exercise).pack(anchor='w', pady=6)

        self.load_session()

    def fetch_profile(self):
        return dict(self.conn.execute('SELECT * FROM profile WHERE id=1').fetchone())

    def persist_profile(self, p: dict):
        self.conn.execute(
            '''UPDATE profile SET daily_streak_count=?,last_active_date=?,streak_credited_date=?,today_completed=?,today_viewed=?,view_count_date=?,daily_goal=?,requeue_mode=?,requeue_value=? WHERE id=1''',
            (
                p['daily_streak_count'],
                p.get('last_active_date'),
                p.get('streak_credited_date'),
                p['today_completed'],
                p.get('today_viewed', 0),
                p.get('view_count_date'),
                p['daily_goal'],
                p['requeue_mode'],
                p['requeue_value'],
            ),
        )
        self.conn.commit()

    def load_session(self):
        self.cards = [
            dict(r)
            for r in self.conn.execute(
                'SELECT * FROM cards WHERE next_due <= ? ORDER BY priority_boost DESC, next_due ASC',
                (datetime.utcnow().isoformat(),),
            )
        ]
        self.current_card = self.cards[0] if self.cards else None
        self.flipped = False
        p = self.fetch_profile()
        self.mode_var.set(p['requeue_mode'])
        self.value_var.set(p['requeue_value'])
        self.render()

    def render(self, queue_state='Сейчас'):
        p = self.fetch_profile()
        self.top_label.config(
            text=(
                f'Сегодня просмотрено: {p.get("today_viewed", 0)}/{DAILY_STREAK_VIEW_TARGET} | '
                f'Решено: {p["today_completed"]} | 🔥 Streak: {p["daily_streak_count"]}'
            )
        )
        self.queue_label.config(text=f'Очередь: {queue_state}')

        stats = self.conn.execute(
            "SELECT (SELECT COUNT(*) FROM cards WHERE learned=1),"
            "(SELECT COUNT(*) FROM reviews WHERE action='left' AND created_at >= datetime('now','-7 day'))," 
            "(SELECT COUNT(*) FROM exercises)"
        ).fetchone()
        self.stats_label.config(
            text=f'Всего выучено: {stats[0]} | Ошибки за неделю: {stats[1]} | Упражнений выполнено: {stats[2]}'
        )

        if not self.current_card:
            self.front_label.config(text='Готово на сейчас 🎉')
            self.back_label.config(text='Нет due-карточек')
            return

        self.front_label.config(text=self.current_card['kanji'])
        self.back_label.config(
            text=(
                f"{self.current_card['reading']}\n{self.current_card['meaning']}\n"
                f"例: {self.current_card['examples']}\nПеревод: {self.current_card.get('example_translation', '')}"
            )
        )

        if self.flipped:
            self.front_label.pack_forget()
            self.back_label.pack(expand=True)
        else:
            self.back_label.pack_forget()
            self.front_label.pack(expand=True)

    def flip_card(self):
        if not self.current_card:
            return
        self.flipped = not self.flipped

        # Просмотр карточки считается в момент переворота.
        profile = register_card_view(self.fetch_profile(), date.today())
        self.persist_profile(profile)
        if profile.get('streak_message'):
            messagebox.showinfo('Day streak', profile['streak_message'])
        self.render()

    def swipe(self, direction: str):
        if not self.current_card:
            return

        now = datetime.utcnow()
        p = self.fetch_profile()
        card = dict(self.current_card)

        if direction == 'right':
            updated = apply_right_swipe(card, now)
            self.conn.execute('INSERT INTO reviews(card_id, action, created_at) VALUES (?,?,?)', (card['id'], 'right', now.isoformat()))
        else:
            updated = apply_left_swipe(card, p['requeue_mode'], p['requeue_value'], now)
            self.conn.execute('INSERT INTO reviews(card_id, action, created_at) VALUES (?,?,?)', (card['id'], 'left', now.isoformat()))
            self.queue.push(card['id'], p['requeue_mode'], p['requeue_value'], now)

        self.conn.execute(
            'UPDATE cards SET streak=?,lapses=?,last_seen=?,next_due=?,learned=?,learned_at=? WHERE id=?',
            (
                updated['streak'],
                updated['lapses'],
                updated['last_seen'],
                updated['next_due'],
                updated['learned'],
                updated['learned_at'],
                updated['id'],
            ),
        )
        self.conn.commit()

        self.last_action = card
        self.queue.increment_seen()

        p['today_completed'] += 1
        self.persist_profile(p)

        self.cards = [c for c in self.cards if c['id'] != card['id']]
        ready_id = self.queue.pop_ready(now)
        queue_state = 'Сейчас'
        if ready_id:
            row = self.conn.execute('SELECT * FROM cards WHERE id=?', (ready_id,)).fetchone()
            if row:
                self.cards.append(dict(row))
                queue_state = 'Повтор позже'

        self.current_card = self.cards[0] if self.cards else None
        self.flipped = False
        self.render(queue_state)
        self.maybe_offer_exercise()

    def maybe_offer_exercise(self):
        learned_ids = [r[0] for r in self.conn.execute('SELECT id FROM cards WHERE learned=1 ORDER BY learned_at ASC')]
        used = [i for r in self.conn.execute('SELECT card_ids FROM learned_batches') for i in json.loads(r[0])]
        unbatched = [cid for cid in learned_ids if cid not in used]
        if len(unbatched) < LEARNED_BATCH_SIZE:
            return

        batch_ids = unbatched[:LEARNED_BATCH_SIZE]
        now = datetime.utcnow().isoformat()
        self.conn.execute('INSERT INTO learned_batches(created_at, card_ids) VALUES (?, ?)', (now, json.dumps(batch_ids, ensure_ascii=False)))
        batch_id = self.conn.execute('SELECT last_insert_rowid()').fetchone()[0]
        self.conn.commit()

        chosen = random.sample(batch_ids, 3)
        kanji = [self.conn.execute('SELECT kanji FROM cards WHERE id=?', (cid,)).fetchone()[0] for cid in chosen]
        ex = build_exercise(kanji)
        self.show_exercise(batch_id, ex)

    def show_exercise(self, batch_id: int, exercise: dict):
        for child in self.exercise_frame.winfo_children():
            if isinstance(child, tk.Frame):
                child.destroy()
        self.exercise_entries.clear()

        self.exercise_batch_id = batch_id
        self.exercise_targets = exercise['targets']

        text = exercise['text_hira']
        self.exercise_info.config(text=f"Заполни слоты в тексте: {text}\n(Остальной текст — хирагана)")

        slot_frame = tk.Frame(self.exercise_frame)
        slot_frame.pack(anchor='w', pady=4)
        for t in self.exercise_targets:
            row = tk.Frame(slot_frame)
            row.pack(anchor='w', pady=2)
            tk.Label(row, text=f"{t['slot']}:", width=4).pack(side='left')
            entry = tk.Entry(row, width=4, font=('Arial', 18))
            entry.pack(side='left')
            self.exercise_entries[t['slot']] = entry

        chips = tk.Frame(self.exercise_frame)
        chips.pack(anchor='w', pady=4)
        tk.Label(chips, text='Доступные кандзи:').pack(side='left')
        for t in self.exercise_targets:
            tk.Label(chips, text=f" {t['kanji']} ", bg='#ddd').pack(side='left', padx=2)

        self.exercise_frame.pack(fill='x', padx=8, pady=10)

    def submit_exercise(self):
        if not self.exercise_targets:
            messagebox.showinfo('Упражнение', 'Сейчас нет активного упражнения.')
            return

        answers = {slot: e.get().strip() for slot, e in self.exercise_entries.items()}
        result = grade_exercise({'targets': self.exercise_targets}, answers)
        self.conn.execute(
            'INSERT INTO exercises(batch_id,template_id,exercise_completed_at,exercise_score,wrong_targets) VALUES (?,?,?,?,?)',
            (
                self.exercise_batch_id,
                't1',
                datetime.utcnow().isoformat(),
                result['score'],
                json.dumps(result['wrongTargets'], ensure_ascii=False),
            ),
        )
        for k in result['wrongTargets']:
            self.conn.execute('UPDATE cards SET priority_boost = priority_boost + 1 WHERE kanji=?', (k,))
        self.conn.commit()

        p = self.fetch_profile()
        p['today_completed'] += 1
        self.persist_profile(p)
        messagebox.showinfo('Результат упражнения', f"Score: {result['score']}%")

        if result['passed']:
            self.exercise_frame.pack_forget()
            self.exercise_targets = []

        self.render()

    def undo(self):
        if not self.last_action:
            return
        c = self.last_action
        self.conn.execute(
            'UPDATE cards SET streak=?,lapses=?,last_seen=?,next_due=?,learned=?,learned_at=? WHERE id=?',
            (c['streak'], c['lapses'], c['last_seen'], c['next_due'], c['learned'], c['learned_at'], c['id']),
        )
        self.conn.commit()
        self.last_action = None
        self.load_session()

    def save_settings(self):
        self.conn.execute(
            'UPDATE profile SET requeue_mode=?, requeue_value=? WHERE id=1',
            (self.mode_var.get(), self.value_var.get()),
        )
        self.conn.commit()
        self.render()

    def reset_progress(self):
        if not messagebox.askyesno('Подтверждение', 'Сбросить весь прогресс?'):
            return
        self.conn.executescript(
            '''
            UPDATE cards SET streak=0,lapses=0,last_seen=NULL,next_due=datetime('now'),learned=0,learned_at=NULL,priority_boost=0;
            DELETE FROM reviews;
            DELETE FROM learned_batches;
            DELETE FROM exercises;
            UPDATE profile SET daily_streak_count=0,last_active_date=NULL,streak_credited_date=NULL,today_completed=0,today_viewed=0,view_count_date=NULL;
            '''
        )
        self.conn.commit()
        self.load_session()


def run_desktop():
    root = tk.Tk()
    FlashKanjiDesktop(root)
    root.mainloop()
