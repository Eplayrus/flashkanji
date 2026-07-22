# Flash Kanji

Статическое веб-приложение для изучения японских кандзи через интервальные повторения.

## Запуск

Приложение не требует backend и работает как статический frontend. Для локальной разработки:

```powershell
cd index
npm install
npm run dev
```

Затем откройте адрес, который покажет Vite, обычно `http://localhost:4173`.

Для обновления статической wiki по всем кандзи:

```powershell
cd index
npm run generate:wiki
```

## GitHub Pages

Проект уже подготовлен для GitHub Pages как чистый frontend без backend.

Рекомендуемый способ:

1. Запушить репозиторий на GitHub.
2. Открыть `Settings -> Pages`.
3. Выбрать `Source: GitHub Actions`.
4. Запушить в `main`/`master` или запустить workflow вручную.

Workflow `.github/workflows/deploy-pages.yml` публикует папку `index/` как корень сайта. Дополнительно добавлены `index/.nojekyll` и `index/404.html`.

## Что реализовано

- SRS-состояния: `New`, `Learning`, `Review`, `Mastered`.
- Оценки ответа: `Again`, `Hard`, `Good`, `Easy`.
- Расчёт следующей даты повторения с интервалом, ease factor и историей ответов.
- Прогресс в `localStorage` под ключом `flashKanji.progress.v2`.
- RU/EN интерфейс с переключением без перезагрузки.
- RPG-прогрессия: XP, уровни, разблокировка уроков, Moon Fragments.
- Ежедневная цель: 10, 20 или 50 карточек.
- Ежедневный бонус за вход.
- Достижения: первый урок, 100 правильных ответов, 7 дней подряд, JLPT N5.
- Магазин наград для будущих фонов, тем, рамок и альтернативных спрайтов.
- Главная страница с Евой, Леей, серией, прогрессом, карточками на сегодня и процентом курса.
- Урок, повторение, словарь с поиском и фильтрами, статистика на Chart.js.
- Тёмная и светлая темы.
- Web Audio SFX.
- PWA manifest и service worker для offline-режима.
- Экспорт и импорт прогресса в JSON.
- JSON-диалоги маскотов и emotion mapping для спрайтов из `/sp`.
- Практика письма: canvas, очистка и replay-анимация порядка черт.
- Leya hint mode: подсказки и мнемоники из JSON.
- Инфраструктура аудио: pronunciation, Eva explanation и Leya hint URLs без генерации файлов.
- Подготовка к монетизации: premium lessons, voice packs и cloud sync flags без платежей.

## Данные

Каждый урок хранится отдельно:

```text
data/
  kanji/
    meta.json
    hints.json
    translations.json
  lessons/
    lesson-1.json
    lesson-2.json
    lesson-3.json
    lesson-4.json
    lesson-5.json
    translations.json
  vocabulary/
    index.json
  dialogues/
    index.json
  achievements/
    index.json
  monetization/
    catalog.json
  dialogues.json
  i18n.json
  lessons.json
  rewards.json
```

Формат карточки соответствует требованиям проекта: кандзи, русское значение, хирагана, romaji, примеры, приложения, JLPT, количество черт и порядок написания.

## Архитектура

```text
src/
  pages/
  components/
  services/
  data/
  styles/
  assets/
  mascot/
  utils/
```

Первый этап работает как обычная статическая SPA без backend. TypeScript-типы и сервисы лежат в `src/`, Vite-конфигурация — в `vite.config.ts`, а рабочий ES2023-код находится в `script.js`. Если позже понадобится облачная синхронизация, JSON-адаптеры и LocalStorage-сервис можно заменить на отдельный API, но текущая версия полностью работает на фронтенде и GitHub Pages.
