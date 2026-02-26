# FlashKanji

Приложение для изучения кандзи с карточками, свайпами, SRS, day streak, SQLite и упражнением «вставь кандзи в текст».

## Что реализовано

- **Карточки (front/back)**: на экране одна карточка, тап по карточке переворачивает сторону.
- **Свайпы**:
  - вправо — «помню»: рост streak, пересчёт `next_due`, достижение `learned` при `LEARN_THRESHOLD`.
  - влево — «не помню»: сброс streak, рост `lapses`, возврат через `laterQueue`.
- **MVP SRS**: интервалы 1/3/7/14/30 дней.
- **Day streak**: хранится в `profile`, поддерживает режим «по достижению daily goal».
- **Упражнение**: после набора `LEARNED_BATCH_SIZE` изученных кандзи создаётся батч и экран вставки кандзи в хирагана-текст.
- **SQLite персистентность**: прогресс переживает перезапуск.
- **Настройки**: daily goal, streak-by-goal toggle, режим `laterQueue` (`count` / `minutes`), reset progress.
- **Статистика**: streak, выполнено сегодня, всего выучено, ошибок за неделю, упражнений выполнено.

## Слои

- Data: `flashkanji/db.py`
- Logic: `flashkanji/logic.py`
- UI: `public/index.html`, `public/app.js`, `public/styles.css`
- API: `flashkanji/server.py`

## SQLite таблицы

- `cards`
- `reviews`
- `profile`
- `learned_batches`
- `exercises`

## Запуск

```bash
python3 run.py
```

Открыть: `http://localhost:3000`

## Тесты

```bash
python3 -m unittest discover -s tests_py
```

## Лого

В приложении используется файл `public/logo.svg`.
