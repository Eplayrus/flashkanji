# N5 new-user lesson availability fix

## Причина

У прямых ссылок вида `#textbooks/N5/n5-lesson-5` проверка сущности выполнялась раньше, чем загружался modern JLPT-пакет. Пока `state.n5Textbook` был пустым, `textbookSubrouteExists()` возвращал `false`, и валидный урок превращался в `entity-not-found`.

Вторая ошибка была в `jlptLessonStudySession()`: пустой список карточек давал `pendingIndex = -1`, после чего renderer переходил в фазу `test` и показывал завершённый урок с `0/0`.

## Решение

- Для JLPT-курса добавлен явный статус загрузки: `idle`, `loading`, `ready`, `incomplete`, `error`.
- Deep-link на синтаксически корректный урок остаётся валидным, пока данные курса ещё pending; 404 показывается только после загрузки и проверки данных.
- Для выбранного уровня добавлен priority-loader `ensureJlptCourseData(level)`, который грузит целостный пакет курса, а не ждёт общий deferred-load.
- N5-пакет валидируется как 10 уроков, 80 уникальных кандзи, 8 ссылок в каждом уроке, разрешаемые карточки и упражнения.
- Lesson-player теперь считает прогресс только по ID карточек текущего урока. `cards=[]` возвращает состояние `incomplete`, а не `test`/`done`.
- Старые ошибочные сессии с `phase=test/done` без реального completion-флага возвращаются в `study`; корректные completion-флаги, XP, Moon Fragments и SRS не удаляются.
- Modern N5–N1 страницы больше не проваливаются во временный legacy-renderer: они показывают loading/error/retry.
- Service worker получил новый versioned data cache и network-first для критичных JLPT JSON.

## Валидные URL

| URL | Результат |
| --- | --- |
| `/#textbooks/N5/n5-lesson-1` | loading → урок |
| `/#textbooks/N5/n5-lesson-5` | loading → урок |
| `/#textbooks/N5/n5-lesson-10` | loading → урок |
| `/#textbooks/N5/not-real-lesson` | loading → `entity-not-found` после проверки курса |

## Невалидное состояние

`cards=[]`, пустые/посторонние answers или неудачная загрузка JSON больше не считаются завершением урока и не меняют пользовательский прогресс.
