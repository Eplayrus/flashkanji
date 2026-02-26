from __future__ import annotations

import json
import random
from datetime import date, datetime
from pathlib import Path

from kivy.app import App
from kivy.lang import Builder
from kivy.properties import BooleanProperty, DictProperty, ListProperty, NumericProperty, StringProperty
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.button import Button
from kivy.uix.label import Label
from kivy.uix.popup import Popup
from kivy.uix.textinput import TextInput

from .constants import DAILY_STREAK_VIEW_TARGET, LEARNED_BATCH_SIZE
from .db import get_conn
from .logic import LaterQueue, apply_left_swipe, apply_right_swipe, build_exercise, grade_exercise, register_card_view

KV = '''
#:import dp kivy.metrics.dp
<RootView>:
    orientation: 'vertical'
    padding: dp(10)
    spacing: dp(8)

    Image:
        source: root.logo_path
        size_hint_y: None
        height: dp(80) if root.logo_exists else 0
        allow_stretch: True
        keep_ratio: True

    Label:
        text: root.top_text
        size_hint_y: None
        height: dp(45)
        text_size: self.width, None
        halign: 'center'

    Label:
        text: root.queue_text
        size_hint_y: None
        height: dp(24)

    BoxLayout:
        id: card_box
        size_hint_y: 0.48
        padding: dp(8)
        canvas.before:
            Color:
                rgba: (0.11, 0.15, 0.22, 1)
            RoundedRectangle:
                pos: self.pos
                size: self.size
                radius: [18, 18, 18, 18]
        Label:
            id: card_label
            text: root.card_text
            font_size: root.card_font
            halign: 'center'
            valign: 'middle'
            text_size: self.size

    BoxLayout:
        size_hint_y: None
        height: dp(46)
        spacing: dp(8)
        Button:
            text: '← Не помню'
            on_release: root.swipe_left()
        Button:
            text: 'Перевернуть'
            on_release: root.flip_card()
        Button:
            text: 'Помню →'
            on_release: root.swipe_right()

    Label:
        text: root.stats_text
        size_hint_y: None
        height: dp(48)
        text_size: self.width, None
        halign: 'center'

    BoxLayout:
        size_hint_y: None
        height: dp(42)
        spacing: dp(8)
        Button:
            text: 'Undo'
            on_release: root.undo_action()
        Button:
            text: 'Сброс'
            on_release: root.reset_progress()
'''


class RootView(BoxLayout):
    top_text = StringProperty('')
    queue_text = StringProperty('Очередь: Сейчас')
    card_text = StringProperty('')
    card_font = NumericProperty(96)
    stats_text = StringProperty('')

    logo_path = StringProperty('')
    logo_exists = BooleanProperty(False)

    flipped = BooleanProperty(False)
    cards = ListProperty([])
    current_card = DictProperty({})

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.conn = get_conn()
        self.queue = LaterQueue()
        self.last_action = None
        logo = Path('assets/logo.png')
        self.logo_exists = logo.exists()
        self.logo_path = str(logo) if self.logo_exists else ''

    def on_kv_post(self, base_widget):
        self.ids.card_box.bind(on_touch_down=self._on_card_touch_down, on_touch_up=self._on_card_touch_up)
        self._touch_start_x = None
        self.load_session()

    def _fetch_profile(self):
        return dict(self.conn.execute('SELECT * FROM profile WHERE id=1').fetchone())

    def _persist_profile(self, p):
        self.conn.execute(
            '''UPDATE profile SET daily_streak_count=?,last_active_date=?,streak_credited_date=?,today_completed=?,today_viewed=?,view_count_date=?,daily_goal=?,requeue_mode=?,requeue_value=? WHERE id=1''',
            (
                p['daily_streak_count'], p.get('last_active_date'), p.get('streak_credited_date'), p['today_completed'],
                p.get('today_viewed', 0), p.get('view_count_date'), p['daily_goal'], p['requeue_mode'], p['requeue_value'],
            ),
        )
        self.conn.commit()

    def _on_card_touch_down(self, _widget, touch):
        if self.ids.card_box.collide_point(*touch.pos):
            self._touch_start_x = touch.x
        return False

    def _on_card_touch_up(self, _widget, touch):
        if self._touch_start_x is None:
            return False
        dx = touch.x - self._touch_start_x
        self._touch_start_x = None
        if dx > 60:
            self.swipe_right()
        elif dx < -60:
            self.swipe_left()
        else:
            self.flip_card()
        return False

    def load_session(self):
        self.cards = [
            dict(r) for r in self.conn.execute(
                'SELECT * FROM cards WHERE next_due <= ? ORDER BY priority_boost DESC, next_due ASC',
                (datetime.utcnow().isoformat(),),
            )
        ]
        self.current_card = self.cards[0] if self.cards else {}
        self.flipped = False
        self.render('Сейчас')

    def render(self, queue_state):
        p = self._fetch_profile()
        self.top_text = f'Сегодня просмотрено: {p.get("today_viewed", 0)}/{DAILY_STREAK_VIEW_TARGET} | 🔥 Streak: {p["daily_streak_count"]}'
        self.queue_text = f'Очередь: {queue_state}'

        stats = self.conn.execute(
            "SELECT (SELECT COUNT(*) FROM cards WHERE learned=1),"
            "(SELECT COUNT(*) FROM reviews WHERE action='left' AND created_at >= datetime('now','-7 day'))," 
            "(SELECT COUNT(*) FROM exercises)"
        ).fetchone()
        self.stats_text = f'Решено сегодня: {p["today_completed"]} | Выучено: {stats[0]} | Ошибки 7д: {stats[1]} | Тесты: {stats[2]}'

        if not self.current_card:
            self.card_text = 'Готово на сейчас 🎉'
            self.card_font = 28
            return

        if self.flipped:
            self.card_font = 24
            self.card_text = (
                f"{self.current_card['reading']}\n{self.current_card['meaning']}\n"
                f"例: {self.current_card['examples']}\nПеревод: {self.current_card.get('example_translation','')}"
            )
        else:
            self.card_font = 100
            self.card_text = self.current_card['kanji']

    def flip_card(self):
        if not self.current_card:
            return
        self.flipped = not self.flipped
        profile = register_card_view(self._fetch_profile(), date.today())
        self._persist_profile(profile)
        if profile.get('streak_message'):
            self._popup('Day streak', profile['streak_message'])
        self.render(self.queue_text.replace('Очередь: ', ''))

    def _swipe(self, direction):
        if not self.current_card:
            return
        now = datetime.utcnow()
        p = self._fetch_profile()
        card = dict(self.current_card)

        updated = apply_right_swipe(card, now) if direction == 'right' else apply_left_swipe(card, p['requeue_mode'], p['requeue_value'], now)
        self.conn.execute('INSERT INTO reviews(card_id, action, created_at) VALUES (?,?,?)', (card['id'], direction, now.isoformat()))
        if direction == 'left':
            self.queue.push(card['id'], p['requeue_mode'], p['requeue_value'], now)

        self.conn.execute(
            'UPDATE cards SET streak=?,lapses=?,last_seen=?,next_due=?,learned=?,learned_at=? WHERE id=?',
            (updated['streak'], updated['lapses'], updated['last_seen'], updated['next_due'], updated['learned'], updated['learned_at'], updated['id']),
        )
        self.conn.commit()

        self.last_action = card
        self.queue.increment_seen()
        p['today_completed'] += 1
        self._persist_profile(p)

        self.cards = [c for c in self.cards if c['id'] != card['id']]
        queue_state = 'Сейчас'
        ready_id = self.queue.pop_ready(now)
        if ready_id:
            row = self.conn.execute('SELECT * FROM cards WHERE id=?', (ready_id,)).fetchone()
            if row:
                self.cards.append(dict(row))
                queue_state = 'Повтор позже'

        self.current_card = self.cards[0] if self.cards else {}
        self.flipped = False
        self.render(queue_state)
        self._maybe_offer_test()

    def swipe_left(self):
        self._swipe('left')

    def swipe_right(self):
        self._swipe('right')

    def _maybe_offer_test(self):
        learned_ids = [r[0] for r in self.conn.execute('SELECT id FROM cards WHERE learned=1 ORDER BY learned_at ASC')]
        used = [i for r in self.conn.execute('SELECT card_ids FROM learned_batches') for i in json.loads(r[0])]
        unbatched = [cid for cid in learned_ids if cid not in used]
        if len(unbatched) < LEARNED_BATCH_SIZE:
            return

        batch_ids = unbatched[:LEARNED_BATCH_SIZE]
        self.conn.execute('INSERT INTO learned_batches(created_at, card_ids) VALUES (?, ?)', (datetime.utcnow().isoformat(), json.dumps(batch_ids, ensure_ascii=False)))
        batch_id = self.conn.execute('SELECT last_insert_rowid()').fetchone()[0]
        self.conn.commit()

        chosen = random.sample(batch_ids, 3)
        kanji = [self.conn.execute('SELECT kanji FROM cards WHERE id=?', (cid,)).fetchone()[0] for cid in chosen]
        ex = build_exercise(kanji)
        self._show_test_popup(batch_id, ex)

    def _show_test_popup(self, batch_id, exercise):
        box = BoxLayout(orientation='vertical', spacing=6, padding=8)
        box.add_widget(Label(text='Небольшой тест: вставь изученные кандзи в пропуски.'))
        box.add_widget(Label(text=exercise['text_hira']))
        entries = {}
        for t in exercise['targets']:
            row = BoxLayout(size_hint_y=None, height=40)
            row.add_widget(Label(text=t['slot'], size_hint_x=0.25))
            ti = TextInput(multiline=False)
            row.add_widget(ti)
            entries[t['slot']] = ti
            box.add_widget(row)

        chips = '  '.join([t['kanji'] for t in exercise['targets']])
        box.add_widget(Label(text=f'Доступные кандзи: {chips}'))

        popup = Popup(title='Тест по изученным кандзи', content=box, size_hint=(0.95, 0.85))

        def submit(_):
            answers = {slot: ti.text.strip() for slot, ti in entries.items()}
            result = grade_exercise({'targets': exercise['targets']}, answers)
            self.conn.execute(
                'INSERT INTO exercises(batch_id,template_id,exercise_completed_at,exercise_score,wrong_targets) VALUES (?,?,?,?,?)',
                (batch_id, exercise['template_id'], datetime.utcnow().isoformat(), result['score'], json.dumps(result['wrongTargets'], ensure_ascii=False)),
            )
            for k in result['wrongTargets']:
                self.conn.execute('UPDATE cards SET priority_boost = priority_boost + 1 WHERE kanji=?', (k,))
            self.conn.commit()

            p = self._fetch_profile()
            p['today_completed'] += 1
            self._persist_profile(p)
            popup.dismiss()
            self._popup('Результат теста', f"Score: {result['score']}%")
            self.render(self.queue_text.replace('Очередь: ', ''))

        btn = Button(text='Проверить', size_hint_y=None, height=44)
        btn.bind(on_release=submit)
        box.add_widget(btn)
        popup.open()

    def undo_action(self):
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

    def reset_progress(self):
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

    def _popup(self, title, text):
        content = BoxLayout(orientation='vertical', padding=8, spacing=8)
        content.add_widget(Label(text=text))
        btn = Button(text='OK', size_hint_y=None, height=40)
        pop = Popup(title=title, content=content, size_hint=(0.8, 0.4))
        btn.bind(on_release=lambda *_: pop.dismiss())
        content.add_widget(btn)
        pop.open()


class FlashKanjiKivyApp(App):
    def build(self):
        Builder.load_string(KV)
        return RootView()


def run_mobile_app():
    FlashKanjiKivyApp().run()
