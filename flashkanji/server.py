import json
from datetime import datetime, date
from http.server import BaseHTTPRequestHandler, HTTPServer
from pathlib import Path
from .db import get_conn
from .logic import apply_left_swipe, apply_right_swipe, update_daily_streak, LaterQueue, build_exercise, grade_exercise, is_hiragana_text_except_placeholders
from .constants import LEARNED_BATCH_SIZE

conn = get_conn()
queue = LaterQueue()
last_action = None


def row_to_dict(row):
    return {k: row[k] for k in row.keys()}


class Handler(BaseHTTPRequestHandler):
    def _send(self, code=200, data=None, ctype='application/json'):
        self.send_response(code)
        self.send_header('Content-Type', ctype)
        self.end_headers()
        if data is None:
            return
        if isinstance(data, (dict, list)):
            self.wfile.write(json.dumps(data, ensure_ascii=False).encode())
        else:
            self.wfile.write(data)

    def _body(self):
        length = int(self.headers.get('Content-Length', '0'))
        return json.loads(self.rfile.read(length).decode() or '{}')

    def do_GET(self):
        if self.path.startswith('/api/session'):
            profile = row_to_dict(conn.execute('SELECT * FROM profile WHERE id=1').fetchone())
            cards = [row_to_dict(r) for r in conn.execute('SELECT * FROM cards WHERE next_due <= ? ORDER BY priority_boost DESC, next_due ASC', (datetime.utcnow().isoformat(),)).fetchall()]
            stats = {
                'learned': conn.execute('SELECT COUNT(*) FROM cards WHERE learned=1').fetchone()[0],
                'errorsWeek': conn.execute("SELECT COUNT(*) FROM reviews WHERE action='left' AND created_at >= datetime('now','-7 day')").fetchone()[0],
                'exercisesDone': conn.execute('SELECT COUNT(*) FROM exercises').fetchone()[0],
            }
            return self._send(data={'cards': cards, 'profile': profile, 'stats': stats, 'queueState': 'Сейчас'})
        if self.path.startswith('/api/stats'):
            return self._send(data={
                'learned': conn.execute('SELECT COUNT(*) FROM cards WHERE learned=1').fetchone()[0],
                'errorsWeek': conn.execute("SELECT COUNT(*) FROM reviews WHERE action='left' AND created_at >= datetime('now','-7 day')").fetchone()[0],
                'exercisesDone': conn.execute('SELECT COUNT(*) FROM exercises').fetchone()[0],
            })

        file_path = Path('public') / ('index.html' if self.path == '/' else self.path.lstrip('/'))
        if file_path.exists() and file_path.is_file():
            ctype = 'text/html' if file_path.suffix == '.html' else 'text/css' if file_path.suffix == '.css' else 'application/javascript' if file_path.suffix == '.js' else 'image/svg+xml'
            return self._send(200, file_path.read_bytes(), ctype)
        return self._send(404, {'error': 'not found'})

    def do_POST(self):
        global last_action
        if self.path == '/api/swipe':
            body = self._body()
            card = row_to_dict(conn.execute('SELECT * FROM cards WHERE id=?', (body['cardId'],)).fetchone())
            profile = row_to_dict(conn.execute('SELECT * FROM profile WHERE id=1').fetchone())
            now = datetime.utcnow()
            updated = apply_right_swipe(card, now) if body['direction'] == 'right' else apply_left_swipe(card, profile['requeue_mode'], profile['requeue_value'], now)
            conn.execute('''UPDATE cards SET streak=?,lapses=?,last_seen=?,next_due=?,learned=?,learned_at=? WHERE id=?''',
                         (updated['streak'], updated['lapses'], updated['last_seen'], updated['next_due'], updated['learned'], updated['learned_at'], updated['id']))
            conn.execute('INSERT INTO reviews(card_id,action,created_at) VALUES (?,?,?)', (card['id'], body['direction'], now.isoformat()))
            if body['direction'] == 'left':
                queue.push(card['id'], profile['requeue_mode'], profile['requeue_value'], now)
            queue.increment_seen()

            profile['today_completed'] += 1
            if not profile['streak_requires_goal'] or profile['today_completed'] >= profile['daily_goal']:
                profile = update_daily_streak(profile, date.today())
            conn.execute('UPDATE profile SET daily_streak_count=?,last_active_date=?,today_completed=? WHERE id=1',
                         (profile['daily_streak_count'], profile['last_active_date'], profile['today_completed']))
            conn.commit()
            last_action = card

            next_id = queue.pop_ready(now)
            next_card = row_to_dict(conn.execute('SELECT * FROM cards WHERE id=?', (next_id,)).fetchone()) if next_id else None

            learned_ids = [r[0] for r in conn.execute('SELECT id FROM cards WHERE learned=1 ORDER BY learned_at ASC').fetchall()]
            used = [i for row in conn.execute('SELECT card_ids FROM learned_batches') for i in json.loads(row[0])]
            unbatched = [i for i in learned_ids if i not in used][:LEARNED_BATCH_SIZE]
            exercise = None
            if len(unbatched) >= LEARNED_BATCH_SIZE:
                conn.execute('INSERT INTO learned_batches(created_at,card_ids) VALUES (?,?)', (now.isoformat(), json.dumps(unbatched, ensure_ascii=False)))
                batch_id = conn.execute('SELECT last_insert_rowid()').fetchone()[0]
                kanji = [conn.execute('SELECT kanji FROM cards WHERE id=?', (i,)).fetchone()[0] for i in unbatched[:3]]
                exercise = {'batchId': batch_id, **build_exercise(kanji)}
                conn.commit()
            return self._send(data={'profile': profile, 'nextCard': next_card, 'queueState': 'Повтор позже' if next_card else 'Сейчас', 'exercise': exercise})

        if self.path == '/api/exercise/submit':
            body = self._body()
            if not is_hiragana_text_except_placeholders(body['text_hira']):
                return self._send(400, {'error': 'Текст должен быть хираганой'})
            result = grade_exercise({'targets': body['targets']}, body['answers'])
            conn.execute('INSERT INTO exercises(batch_id,template_id,exercise_completed_at,exercise_score,wrong_targets) VALUES (?,?,?,?,?)',
                         (body['batchId'], body['template_id'], datetime.utcnow().isoformat(), result['score'], json.dumps(result['wrongTargets'], ensure_ascii=False)))
            for k in result['wrongTargets']:
                conn.execute('UPDATE cards SET priority_boost = priority_boost + 1 WHERE kanji=?', (k,))
            conn.commit()
            return self._send(data=result)

        if self.path == '/api/settings':
            p = self._body()
            conn.execute('UPDATE profile SET daily_goal=?,streak_requires_goal=?,requeue_mode=?,requeue_value=? WHERE id=1',
                         (p['daily_goal'], 1 if p['streak_requires_goal'] else 0, p['requeue_mode'], p['requeue_value']))
            conn.commit()
            return self._send(data=p)

        if self.path == '/api/undo' and last_action:
            conn.execute('''UPDATE cards SET streak=?,lapses=?,last_seen=?,next_due=?,learned=?,learned_at=? WHERE id=?''',
                         (last_action['streak'], last_action['lapses'], last_action['last_seen'], last_action['next_due'], last_action['learned'], last_action['learned_at'], last_action['id']))
            conn.commit()
            last_action = None
            return self._send(data={'ok': True})

        if self.path == '/api/reset':
            conn.executescript("""
            UPDATE cards SET streak=0,lapses=0,last_seen=NULL,next_due=datetime('now'),learned=0,learned_at=NULL,priority_boost=0;
            DELETE FROM reviews; DELETE FROM learned_batches; DELETE FROM exercises;
            UPDATE profile SET daily_streak_count=0,last_active_date=NULL,today_completed=0;
            """)
            conn.commit()
            return self._send(data={'ok': True})

        return self._send(404, {'error': 'not found'})


def run(port=3000):
    httpd = HTTPServer(('0.0.0.0', port), Handler)
    print(f'FlashKanji running on http://localhost:{port}')
    httpd.serve_forever()


if __name__ == '__main__':
    run()
