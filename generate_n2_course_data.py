#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from __future__ import annotations

import json
import re
from copy import deepcopy
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from pypdf import PdfReader


ROOT = Path(r"C:\Users\Admin\Documents\Flash_kanji")
N2_DIR = ROOT / "index" / "data" / "jlpt" / "n2"
PDF_PATH = ROOT / "index" / "docs" / "flashkanji_N2_textbook_flashkanji_space.pdf"
OLD_KANJI_PATH = N2_DIR / "kanji.json"
JLPT_INDEX_PATH = ROOT / "index" / "data" / "jlpt" / "index.json"
TEXTBOOK_INDEX_PATH = ROOT / "index" / "data" / "textbooks" / "index.json"
ACHIEVEMENTS_PATH = ROOT / "index" / "data" / "achievements" / "index.json"

NOW = datetime.now(timezone.utc).isoformat()
LESSON_REVIEW_DAYS = [1, 3, 7, 14, 30, 60, 90]

SAFE_LESSON_PATTERNS = [
    "に関して",
    "によって",
    "上で",
    "ことから",
    "において",
    "ものの",
    "に基づいて",
    "一方で",
    "に対して",
    "に限らず",
    "にしたがって",
    "次第で",
]

LESSON1_GRAMMAR_FOCUS = ["に基づいて", "上で", "ことから", "において"]

LESSON1_SENTENCES = [
    {
        "jp": "新しい安全計画は過去の調査結果に基づいて作られた。",
        "reading": "あたらしいあんぜんけいかくはかこのちょうさけっかにもとづいてつくられた。",
        "ru": "Новый план безопасности был составлен на основе результатов прошлых проверок.",
        "en": "The new safety plan was created based on past investigation results.",
    },
    {
        "jp": "兵器を管理する上で、情報の共有は欠かせない。",
        "reading": "へいきをかんりするうえで、じょうほうのきょうゆうはかかせない。",
        "ru": "При управлении вооружением обмен информацией необходим.",
        "en": "When managing weapons, sharing information is essential.",
    },
    {
        "jp": "古い門が残っていることから、この村の歴史の深さが分かる。",
        "reading": "ふるいもんがのこっていることから、このむらのれきしのふかさがわかる。",
        "ru": "Из того, что сохранились старые ворота, видно, насколько глубока история этой деревни.",
        "en": "The remaining old gate shows how deep this village's history is.",
    },
    {
        "jp": "この島において、城と村の関係を学ぶことは重要だ。",
        "reading": "このしまにおいて、しろとむらのかんけいをまなぶことはじゅうようだ。",
        "ru": "На этом острове важно изучать связь между замком и деревней.",
        "en": "On this island, studying the relationship between the castle and the village is important.",
    },
    {
        "jp": "団体の方針を理解した上で、各戸への連絡を進めるべきだ。",
        "reading": "だんたいのほうしんをりかいしたうえで、かくこへのれんらくをすすめるべきだ。",
        "ru": "Поняв политику организации, следует продолжать уведомление каждого дома.",
        "en": "After understanding the organization's policy, we should continue contacting each household.",
    },
]

LESSON1_MINI_READING = {
    "id": "n2-reading-mini-1",
    "lessonId": "n2-lesson-1",
    "title": {"ru": "Урок 1: мини-абзац", "en": "Lesson 1 mini paragraph"},
    "jp": (
        "近年、この地域では古い城や門を保存する計画が進められている。"
        "調査結果に基づいて見ると、島や村の歴史を学ぶ場として価値が高いことが分かった。"
        "保存には費用がかかるものの、地域の団体は将来の教育に役立つことから支援を続けている。"
        "私は、この活動において、軍や兵の資料だけでなく、人々の生活の記録も伝えるべきだと思う。"
        "つまり、地域全体の記憶を理解する上で、複数の視点を残すことが重要なのである。"
    ),
    "ru": (
        "В последние годы в этом регионе продвигается план по сохранению старого замка и ворот. "
        "Если смотреть на ситуацию на основе результатов исследования, стало ясно, что это место очень ценно как пространство для изучения истории острова и деревни. "
        "Хотя сохранение требует затрат, местные организации продолжают поддержку, потому что считают это полезным для будущего образования. "
        "Я думаю, что в такой деятельности нужно передавать не только материалы о войне и солдатах, но и записи о повседневной жизни людей. "
        "Иными словами, чтобы понять память всего региона, важно сохранять несколько точек зрения."
    ),
    "questions": [
        {
            "prompt": {"ru": "О чём этот абзац?", "en": "What is this paragraph about?"},
            "answer": "preservation_project",
            "options": [
                {"value": "preservation_project", "label": {"ru": "о проекте сохранения исторического места", "en": "a project to preserve a historical site"}},
                {"value": "new_weapon", "label": {"ru": "о разработке нового оружия", "en": "developing a new weapon"}},
                {"value": "tourist_route", "label": {"ru": "о туристическом маршруте без истории", "en": "a tourist route without history"}},
            ],
        },
        {
            "prompt": {"ru": "Какая причина названа для продолжения поддержки?", "en": "What reason is given for continuing support?"},
            "answer": "education_value",
            "options": [
                {"value": "education_value", "label": {"ru": "это полезно для будущего образования", "en": "it helps future education"}},
                {"value": "no_cost", "label": {"ru": "это ничего не стоит", "en": "it costs nothing"}},
                {"value": "army_order", "label": {"ru": "так приказали военные", "en": "the army ordered it"}},
            ],
        },
        {
            "prompt": {"ru": "Где в тексте уступка?", "en": "Where is the concession in the text?"},
            "answer": "although_costly",
            "options": [
                {"value": "although_costly", "label": {"ru": "保存には費用がかかるものの", "en": "although preservation costs money"}},
                {"value": "based_on_results", "label": {"ru": "調査結果に基づいて", "en": "based on the investigation results"}},
                {"value": "in_this_activity", "label": {"ru": "この活動において", "en": "in this activity"}},
            ],
        },
        {
            "prompt": {"ru": "Какой вывод делает автор?", "en": "What conclusion does the author draw?"},
            "answer": "multiple_views",
            "options": [
                {"value": "multiple_views", "label": {"ru": "нужно сохранять несколько точек зрения", "en": "multiple viewpoints should be preserved"}},
                {"value": "close_castle", "label": {"ru": "замок нужно закрыть для всех", "en": "the castle should be closed"}},
                {"value": "only_military", "label": {"ru": "важны только военные материалы", "en": "only military materials matter"}},
            ],
        },
        {
            "prompt": {"ru": "Какая конструкция показывает основание вывода?", "en": "Which pattern shows the basis of the conclusion?"},
            "answer": "に基づいて",
            "options": [
                {"value": "に基づいて", "label": {"ru": "に基づいて", "en": "に基づいて"}},
                {"value": "ものの", "label": {"ru": "ものの", "en": "ものの"}},
                {"value": "において", "label": {"ru": "において", "en": "において"}},
            ],
        },
    ],
}

TEXTBOOK_READING_BLUEPRINTS = [
    {
        "title": "社会と情報",
        "ru": "Текст о том, как в современном обществе стало труднее оценивать источник информации и намерение автора.",
        "questions": [
            {
                "prompt": {"ru": "Что нужно проверять, читая информацию?", "en": "What should you check when reading information?"},
                "answer": "author_and_purpose",
                "options": [
                    {"value": "author_and_purpose", "label": {"ru": "кто и с какой целью её публикует", "en": "who publishes it and for what purpose"}},
                    {"value": "only_font", "label": {"ru": "только размер шрифта", "en": "only the font size"}},
                    {"value": "weather", "label": {"ru": "только погоду в день публикации", "en": "only the weather on the publication day"}},
                ],
            },
            {
                "prompt": {"ru": "Считает ли автор большое количество информации только плюсом?", "en": "Does the author see a large amount of information as only positive?"},
                "answer": "not_only_positive",
                "options": [
                    {"value": "not_only_positive", "label": {"ru": "нет, избыток информации осложняет оценку", "en": "no, too much information makes judgment harder"}},
                    {"value": "always_positive", "label": {"ru": "да, это всегда хорошо", "en": "yes, it is always good"}},
                    {"value": "no_opinion", "label": {"ru": "автор не высказывает мнения", "en": "the author gives no opinion"}},
                ],
            },
        ],
    },
    {
        "title": "仕事と準備",
        "ru": "Текст о том, что подготовка в работе не тормозит процесс, а делает результат устойчивее и помогает избегать ошибок.",
        "questions": [
            {
                "prompt": {"ru": "Почему подготовка важна?", "en": "Why is preparation important?"},
                "answer": "avoid_mistakes",
                "options": [
                    {"value": "avoid_mistakes", "label": {"ru": "она помогает избежать больших проблем и ошибок", "en": "it helps avoid big problems and mistakes"}},
                    {"value": "save_no_check", "label": {"ru": "потому что проверки больше не нужны", "en": "because checks are no longer necessary"}},
                    {"value": "replace_experience", "label": {"ru": "она полностью заменяет опыт", "en": "it fully replaces experience"}},
                ],
            },
            {
                "prompt": {"ru": "Что значит «確認を省いたばかりに» в этом тексте?", "en": "What does 確認を省いたばかりに mean in this text?"},
                "answer": "because_skipped_check",
                "options": [
                    {"value": "because_skipped_check", "label": {"ru": "из-за того, что проверку пропустили", "en": "because the check was skipped"}},
                    {"value": "after_full_check", "label": {"ru": "после тщательной проверки", "en": "after a thorough check"}},
                    {"value": "during_rest", "label": {"ru": "во время отдыха", "en": "during a break"}},
                ],
            },
        ],
    },
    {
        "title": "環境と生活",
        "ru": "Текст связывает экологические вопросы с повседневными действиями человека и подчёркивает смысл даже небольших шагов.",
        "questions": [
            {
                "prompt": {"ru": "Как автор оценивает действия отдельного человека?", "en": "How does the author view an individual's actions?"},
                "answer": "small_actions_matter",
                "options": [
                    {"value": "small_actions_matter", "label": {"ru": "они не меняют всё мгновенно, но всё равно имеют смысл", "en": "they do not change everything instantly, but they still matter"}},
                    {"value": "useless", "label": {"ru": "они полностью бесполезны", "en": "they are completely useless"}},
                    {"value": "instant_change", "label": {"ru": "они сразу меняют всё общество", "en": "they instantly change all of society"}},
                ],
            },
            {
                "prompt": {"ru": "Какую роль здесь играет «わけではない»?", "en": "What is the role of わけではない here?"},
                "answer": "soft_negation",
                "options": [
                    {"value": "soft_negation", "label": {"ru": "оно смягчает вывод: не значит, что всё меняется сразу", "en": "it softens the conclusion: it does not mean everything changes immediately"}},
                    {"value": "command", "label": {"ru": "это приказ", "en": "it is a command"}},
                    {"value": "comparison", "label": {"ru": "это чистое сравнение", "en": "it is a pure comparison"}},
                ],
            },
        ],
    },
    {
        "title": "学習方法",
        "ru": "Текст о том, что одного многократного письма формы недостаточно: кандзи нужно связывать со словом, грамматикой и текстом.",
        "questions": [
            {
                "prompt": {"ru": "Какой способ обучения рекомендует Flash Kanji?", "en": "What learning method does Flash Kanji recommend?"},
                "answer": "connect_chain",
                "options": [
                    {"value": "connect_chain", "label": {"ru": "связывать кандзи с лексикой, грамматикой и текстом", "en": "connect kanji with vocabulary, grammar, and text"}},
                    {"value": "shape_only", "label": {"ru": "учить только форму, многократно переписывая её", "en": "study only the shape by rewriting it many times"}},
                    {"value": "skip_reading", "label": {"ru": "пропустить чтение и оставить только письмо", "en": "skip reading and keep only writing"}},
                ],
            },
            {
                "prompt": {"ru": "Что показывает «ものの» в этом тексте?", "en": "What does ものの express in this text?"},
                "answer": "concession",
                "options": [
                    {"value": "concession", "label": {"ru": "уступку: письмо полезно, но его одного недостаточно", "en": "concession: writing helps, but it is not enough alone"}},
                    {"value": "result", "label": {"ru": "чистый результат", "en": "a pure result"}},
                    {"value": "quotation", "label": {"ru": "цитирование чужой речи", "en": "quoted speech"}},
                ],
            },
        ],
    },
    {
        "title": "地域社会",
        "ru": "Текст о проблемах регионов с сокращением населения и о необходимости совместной работы администрации, жителей и бизнеса.",
        "questions": [
            {
                "prompt": {"ru": "Что становится труднее в таких регионах?", "en": "What becomes more difficult in such regions?"},
                "answer": "maintain_services",
                "options": [
                    {"value": "maintain_services", "label": {"ru": "поддерживать транспорт, медицину и другие сервисы", "en": "maintain transport, medical care, and other services"}},
                    {"value": "build_castles", "label": {"ru": "строить замки", "en": "build castles"}},
                    {"value": "watch_tv", "label": {"ru": "смотреть телевизор", "en": "watch television"}},
                ],
            },
            {
                "prompt": {"ru": "Какое сотрудничество требуется?", "en": "What kind of cooperation is needed?"},
                "answer": "admin_residents_business",
                "options": [
                    {"value": "admin_residents_business", "label": {"ru": "администрации, жителей и компаний", "en": "administration, residents, and companies"}},
                    {"value": "students_only", "label": {"ru": "только студентов", "en": "students only"}},
                    {"value": "army_only", "label": {"ru": "только военных", "en": "the military only"}},
                ],
            },
        ],
    },
    {
        "title": "技術の変化",
        "ru": "Текст показывает двойственность технологий: они удобны, но одновременно вызывают тревогу, если их влияние трактовать слишком прямолинейно.",
        "questions": [
            {
                "prompt": {"ru": "В чём двойственность технологий?", "en": "What is the two-sided nature of technology?"},
                "answer": "convenience_and_anxiety",
                "options": [
                    {"value": "convenience_and_anxiety", "label": {"ru": "они делают жизнь удобнее, но создают новые тревоги", "en": "they make life easier but create new anxieties"}},
                    {"value": "only_harm", "label": {"ru": "они приносят только вред", "en": "they bring only harm"}},
                    {"value": "only_jobs", "label": {"ru": "они касаются только рабочих мест и больше ничего", "en": "they concern only jobs and nothing else"}},
                ],
            },
            {
                "prompt": {"ru": "Что отрицает «とは限らない»?", "en": "What does とは限らない deny?"},
                "answer": "not_always_take_jobs",
                "options": [
                    {"value": "not_always_take_jobs", "label": {"ru": "что технологии обязательно полностью отнимут у людей работу", "en": "that technology will always completely take away human jobs"}},
                    {"value": "no_change", "label": {"ru": "что технологии вообще не меняются", "en": "that technology never changes"}},
                    {"value": "no_tools", "label": {"ru": "что технологии не могут быть инструментом", "en": "that technology cannot be a tool"}},
                ],
            },
        ],
    },
    {
        "title": "ニュースを読む",
        "ru": "Текст учит отделять факты, мнения и прогнозы, а не судить по сильному заголовку без чтения всей статьи.",
        "questions": [
            {
                "prompt": {"ru": "Что особенно важно при чтении новостей?", "en": "What is especially important when reading news?"},
                "answer": "separate_fact_opinion",
                "options": [
                    {"value": "separate_fact_opinion", "label": {"ru": "разделять факты, мнения и прогнозы", "en": "separate facts, opinions, and predictions"}},
                    {"value": "headline_only", "label": {"ru": "смотреть только заголовок", "en": "look only at the headline"}},
                    {"value": "skip_source", "label": {"ru": "не обращать внимания на источник", "en": "ignore the source"}},
                ],
            },
            {
                "prompt": {"ru": "Какая проблема есть у заголовков?", "en": "What problem can headlines have?"},
                "answer": "too_strong_short",
                "options": [
                    {"value": "too_strong_short", "label": {"ru": "они часто слишком короткие и сильные и не отражают весь текст", "en": "they are often too short and strong and do not reflect the whole text"}},
                    {"value": "too_long", "label": {"ru": "они всегда слишком длинные", "en": "they are always too long"}},
                    {"value": "no_words", "label": {"ru": "в них нет слов", "en": "they contain no words"}},
                ],
            },
        ],
    },
    {
        "title": "N2の壁",
        "ru": "Текст объясняет, что сложность N2 часто связана не с полностью новыми кандзи, а с более абстрактной лексикой и новыми контекстами.",
        "questions": [
            {
                "prompt": {"ru": "Почему N2 часто кажется трудным?", "en": "Why does N2 often feel difficult?"},
                "answer": "abstract_usage",
                "options": [
                    {"value": "abstract_usage", "label": {"ru": "знакомые кандзи начинают использоваться в более абстрактной лексике и текстах", "en": "familiar kanji appear in more abstract vocabulary and texts"}},
                    {"value": "all_new", "label": {"ru": "потому что всё в N2 полностью новое", "en": "because everything in N2 is completely new"}},
                    {"value": "no_grammar", "label": {"ru": "потому что там больше нет грамматики", "en": "because there is no grammar anymore"}},
                ],
            },
            {
                "prompt": {"ru": "Почему база остаётся важной?", "en": "Why does the foundation remain important?"},
                "answer": "expand_from_base",
                "options": [
                    {"value": "expand_from_base", "label": {"ru": "верхний уровень строится на кандзи и связках, выученных раньше", "en": "the higher level expands the kanji and connectors learned earlier"}},
                    {"value": "base_not_needed", "label": {"ru": "база больше не нужна", "en": "the foundation is no longer needed"}},
                    {"value": "only_dictionary", "label": {"ru": "нужен только словарь", "en": "only a dictionary matters"}},
                ],
            },
        ],
    },
]

LISTENING_OPTION_MAP = {
    "会議の変更": {
        "ru": "Диалог о переносе времени начала встречи после завершения подготовки материалов.",
        "question": {"ru": "Когда начнётся встреча?", "en": "When will the meeting start?"},
        "answer": "after_prep_by_three",
        "options": [
            {"value": "after_prep_by_three", "label": {"ru": "после завершения подготовки, но не позже трёх часов", "en": "after preparation is finished, but no later than three o'clock"}},
            {"value": "exact_noon", "label": {"ru": "ровно в полдень", "en": "exactly at noon"}},
            {"value": "cancelled", "label": {"ru": "встреча отменена", "en": "the meeting is cancelled"}},
        ],
    },
    "駅での案内": {
        "ru": "Объявление на станции советует воспользоваться альтернативной перевозкой из-за задержек поездов.",
        "question": {"ru": "Что рекомендуют пассажирам?", "en": "What are passengers advised to do?"},
        "answer": "use_transfer",
        "options": [
            {"value": "use_transfer", "label": {"ru": "воспользоваться альтернативной перевозкой", "en": "use replacement transportation"}},
            {"value": "wait_home", "label": {"ru": "вернуться домой и ждать", "en": "go home and wait"}},
            {"value": "buy_ticket", "label": {"ru": "купить новый билет на самолёт", "en": "buy a new plane ticket"}},
        ],
    },
    "職場の相談": {
        "ru": "Разговор о том, что не нужно чрезмерно спешить, но к утру следующего дня работу всё же стоит проверить.",
        "question": {"ru": "Что советует собеседник B?", "en": "What does speaker B recommend?"},
        "answer": "check_by_morning",
        "options": [
            {"value": "check_by_morning", "label": {"ru": "не перенапрягаться, но проверить к завтрашнему утру", "en": "do not overwork, but check it by tomorrow morning"}},
            {"value": "finish_now", "label": {"ru": "обязательно закончить всё сегодня же", "en": "absolutely finish everything today"}},
            {"value": "ignore_task", "label": {"ru": "полностью забыть о задаче", "en": "completely forget the task"}},
        ],
    },
    "店での会話": {
        "ru": "Продавец объясняет, что товар дорогой, но его качество и срок службы оправдывают цену.",
        "question": {"ru": "Как продавец описывает товар?", "en": "How does the clerk describe the item?"},
        "answer": "expensive_but_worth_it",
        "options": [
            {"value": "expensive_but_worth_it", "label": {"ru": "дорогой, но выгодный из-за качества и долгого срока службы", "en": "expensive, but worth it because of quality and durability"}},
            {"value": "cheap_weak", "label": {"ru": "дешёвый, но слабый", "en": "cheap, but weak"}},
            {"value": "free_today", "label": {"ru": "сегодня бесплатный", "en": "free today"}},
        ],
    },
    "学校の連絡": {
        "ru": "Учитель требует писать работу на основе источников и обязательно указывать происхождение интернет-данных.",
        "question": {"ru": "Что учащиеся обязаны указать?", "en": "What must students include?"},
        "answer": "source",
        "options": [
            {"value": "source", "label": {"ru": "источник информации", "en": "the information source"}},
            {"value": "favorite_color", "label": {"ru": "любимый цвет", "en": "their favorite color"}},
            {"value": "seat_number", "label": {"ru": "номер места в классе", "en": "their seat number"}},
        ],
    },
    "友人との会話": {
        "ru": "Друг советует запоминать грамматику не по голой форме, а вместе с примером и контекстом, как во Flash Kanji.",
        "question": {"ru": "Какой способ учёбы советует B?", "en": "What study method does B recommend?"},
        "answer": "learn_with_examples",
        "options": [
            {"value": "learn_with_examples", "label": {"ru": "учить формы вместе с примерными предложениями", "en": "learn forms together with example sentences"}},
            {"value": "memorize_shapes", "label": {"ru": "зубрить только форму", "en": "memorize only the bare form"}},
            {"value": "quit_grammar", "label": {"ru": "вообще бросить грамматику", "en": "stop studying grammar entirely"}},
        ],
    },
}

N2_BRIDGE = [
    "N5: частицы は / が / を / に / で / と / へ / から / まで",
    "N5: 行く / 来る / 見る / 聞く / 読む / 書く / 食べる",
    "N5: です / ます / ました / ません / ませんでした",
    "N5: て-форма",
    "N5: ある / いる",
    "N4: ておく",
    "N4: てしまう",
    "N4: たほうがいい",
    "N4: ことがある",
    "N4: たら / なら / ば / と",
    "N4: てくれる / てもらう / てあげる",
    "N3: に関して",
    "N3: によって",
    "N3: ように",
    "N3: はずだ",
    "N3: ために",
    "N3: について",
    "N3: に対して",
    "N3: として",
    "N3: だけでなく",
    "N3: せいで / おかげで",
    "N3 reading: кто? что произошло? почему? какое мнение? какой вывод?",
]


def localized_pair(ru: str, en: str | None = None) -> dict[str, str]:
    return {"ru": ru, "en": en or ru}


def read_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, payload: Any) -> None:
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def contains_japanese(text: str) -> bool:
    return bool(re.search(r"[\u3040-\u30ff\u3400-\u9fff]", text))


def is_single_kanji(text: str) -> bool:
    stripped = str(text or "").strip()
    return len(stripped) == 1 and contains_japanese(stripped)


def clean_japanese_text(text: str) -> str:
    return text.replace("FlashKanji", "Flash Kanji").replace("Flash\nKanji", "Flash Kanji").replace("  ", " ").strip()


def parse_word_entry(raw: str) -> dict[str, str]:
    match = re.match(r"^(?P<word>.+?)\((?P<reading>.+?)\)\s*-\s*(?P<meaning>.+)$", raw.strip())
    if match:
        return {
            "word": match.group("word").strip(),
            "reading": match.group("reading").strip(),
            "romaji": "",
            "translation_ru": match.group("meaning").strip(),
            "translation_en": match.group("meaning").strip(),
        }
    return {
        "word": raw.strip(),
        "reading": "",
        "romaji": "",
        "translation_ru": raw.strip(),
        "translation_en": raw.strip(),
    }


def parse_word_block(raw: str) -> list[dict[str, str]]:
    merged = re.sub(r"\s+", " ", raw).strip()
    parts = [part.strip() for part in merged.split(";") if part.strip()]
    return [parse_word_entry(part) for part in parts]


def fallback_word(row: dict[str, Any]) -> dict[str, str]:
    return {
        "word": row["kanji"],
        "reading": "",
        "romaji": "",
        "translation_ru": row["meaning"],
        "translation_en": row["meaning"],
    }


def parse_lesson_rows(lines: list[str]) -> list[dict[str, Any]]:
    start = lines.index("Flash Kanji подсказка") + 1
    end = lines.index("Примеры предложений")
    cursor = start
    rows: list[dict[str, Any]] = []
    while cursor < end and len(rows) < 10:
        kanji = lines[cursor].strip()
        cursor += 1
        if not is_single_kanji(kanji):
            continue
        meaning = lines[cursor].strip() if cursor < end else ""
        cursor += 1
        word_lines: list[str] = []
        while cursor < end and not lines[cursor].startswith("Не учи "):
            word_lines.append(lines[cursor].strip())
            cursor += 1
        hint_lines: list[str] = []
        while cursor < end and not is_single_kanji(lines[cursor]) and lines[cursor] != "Примеры предложений":
            hint_lines.append(lines[cursor].strip())
            cursor += 1
        words = parse_word_block(" ".join(word_lines))
        rows.append({
            "kanji": kanji,
            "meaning": meaning,
            "words": words,
            "hint": " ".join(hint_lines).strip(),
        })
    return rows


def lesson_grammar_focus(order: int) -> list[str]:
    if order == 1:
        return LESSON1_GRAMMAR_FOCUS[:]
    start = ((order - 2) * 2) % len(SAFE_LESSON_PATTERNS)
    return [SAFE_LESSON_PATTERNS[(start + offset) % len(SAFE_LESSON_PATTERNS)] for offset in range(4)]


def generated_lesson_sentences(rows: list[dict[str, Any]], lesson_order: int) -> list[dict[str, str]]:
    if lesson_order == 1:
        return deepcopy(LESSON1_SENTENCES)
    words = [(row["words"][0] if row["words"] else fallback_word(row)) for row in rows[:5]]
    while len(words) < 5:
        words.append({"word": "学習", "reading": "がくしゅう", "translation_ru": "обучение", "translation_en": "study"})
    return [
        {
            "jp": f"{words[0]['word']}に関して、もう少し詳しく説明してください。",
            "reading": "",
            "ru": f"Пожалуйста, объясните подробнее тему «{words[0]['translation_ru']}».",
            "en": f"Please explain the topic of {words[0]['translation_en']} in more detail.",
        },
        {
            "jp": f"結果は{words[1]['word']}によって変わる場合がある。",
            "reading": "",
            "ru": f"Результат может меняться в зависимости от «{words[1]['translation_ru']}».",
            "en": f"The result can change depending on {words[1]['translation_en']}.",
        },
        {
            "jp": f"{words[2]['word']}を確認した上で、次の作業に進みます。",
            "reading": "",
            "ru": f"После проверки «{words[2]['translation_ru']}» мы перейдём к следующему шагу.",
            "en": f"After checking {words[2]['translation_en']}, we will move to the next step.",
        },
        {
            "jp": f"{words[3]['word']}という事実があることから、判断を見直す必要がある。",
            "reading": "",
            "ru": f"Из-за факта, связанного с «{words[3]['translation_ru']}», нужно пересмотреть решение.",
            "en": f"Because of the fact involving {words[3]['translation_en']}, the decision must be reviewed.",
        },
        {
            "jp": f"N2学習において、{words[4]['word']}のような語を文脈で覚えることが重要だ。",
            "reading": "",
            "ru": f"В изучении N2 важно запоминать слова вроде «{words[4]['translation_ru']}» в контексте.",
            "en": f"In N2 study, it is important to learn words like {words[4]['translation_en']} in context.",
        },
    ]


def generated_mini_reading(lesson_order: int, lesson_id: str, rows: list[dict[str, Any]]) -> dict[str, Any]:
    if lesson_order == 1:
        return deepcopy(LESSON1_MINI_READING)
    words = [(row["words"][0] if row["words"] else fallback_word(row)) for row in rows[:4]]
    while len(words) < 4:
        words.append({"word": "学習", "reading": "がくしゅう", "translation_ru": "обучение", "translation_en": "study"})
    jp = (
        f"{words[0]['word']}に関する短い記事を読んだ。"
        f"{words[1]['word']}を確認した上で、{words[2]['word']}によって結果が変わることが分かった。"
        f"費用や時間はかかるものの、{words[3]['word']}を文章の中で覚えることには意味がある。"
        "こうした事実があることから、N2では言葉を文脈で学ぶべきだと思う。"
    )
    ru = (
        f"Я прочитал короткую статью о теме «{words[0]['translation_ru']}». "
        f"После проверки «{words[1]['translation_ru']}» стало ясно, что результат может зависеть от «{words[2]['translation_ru']}». "
        f"Хотя это требует времени и усилий, есть смысл запоминать «{words[3]['translation_ru']}» внутри текста. "
        "Из этого следует, что на N2 слова лучше учить в контексте."
    )
    return {
        "id": f"n2-reading-mini-{lesson_order}",
        "lessonId": lesson_id,
        "title": {"ru": f"Урок {lesson_order}: мини-абзац", "en": f"Lesson {lesson_order} mini paragraph"},
        "jp": jp,
        "ru": ru,
        "questions": [
            {
                "prompt": {"ru": "О чём этот абзац?", "en": "What is this paragraph about?"},
                "answer": "topic",
                "options": [
                    {"value": "topic", "label": {"ru": "о том, как связывать слова и контекст на N2", "en": "how to connect words and context in N2"}},
                    {"value": "shopping", "label": {"ru": "о походе в магазин", "en": "a shopping trip"}},
                    {"value": "vacation", "label": {"ru": "об отпуске", "en": "a vacation"}},
                ],
            },
            {
                "prompt": {"ru": "Какая причина или основание упомянуты?", "en": "What reason or basis is mentioned?"},
                "answer": "facts_show",
                "options": [
                    {"value": "facts_show", "label": {"ru": "факты показывают, что слова нужно учить в тексте", "en": "the facts show that words should be learned in text"}},
                    {"value": "no_reason", "label": {"ru": "причина вообще не названа", "en": "no reason is given"}},
                    {"value": "weather", "label": {"ru": "всё зависит только от погоды", "en": "everything depends only on the weather"}},
                ],
            },
            {
                "prompt": {"ru": "Где в тексте уступка?", "en": "Where is the concession in the text?"},
                "answer": "costs_but",
                "options": [
                    {"value": "costs_but", "label": {"ru": "費用や時間はかかるものの", "en": "although it costs time and effort"}},
                    {"value": "read_article", "label": {"ru": "短い記事を読んだ", "en": "read a short article"}},
                    {"value": "in_n2", "label": {"ru": "N2では", "en": "in N2"}},
                ],
            },
            {
                "prompt": {"ru": "Какой вывод делает автор?", "en": "What conclusion does the author make?"},
                "answer": "learn_in_context",
                "options": [
                    {"value": "learn_in_context", "label": {"ru": "слова на N2 нужно учить в контексте", "en": "N2 words should be learned in context"}},
                    {"value": "memorize_only", "label": {"ru": "нужно зубрить только форму", "en": "you should memorize only the shape"}},
                    {"value": "stop_review", "label": {"ru": "повторение больше не нужно", "en": "review is no longer necessary"}},
                ],
            },
            {
                "prompt": {"ru": "Какая конструкция помогает вывести причину?", "en": "Which construction helps draw a reason?"},
                "answer": "ことから",
                "options": [
                    {"value": "ことから", "label": {"ru": "ことから", "en": "ことから"}},
                    {"value": "ものの", "label": {"ru": "ものの", "en": "ものの"}},
                    {"value": "に関して", "label": {"ru": "に関して", "en": "に関して"}},
                ],
            },
        ],
    }


def find_sentence_for_card(lesson_sentences: list[dict[str, str]], row: dict[str, Any]) -> dict[str, str]:
    row_words = [word["word"] for word in row["words"]]
    for sentence in lesson_sentences:
        if row["kanji"] in sentence["jp"]:
            return sentence
        if any(word and word in sentence["jp"] for word in row_words):
            return sentence
    return lesson_sentences[0]


def fallback_stroke_order(kanji: str) -> list[str]:
    return [
        f"Сначала посмотри на форму {kanji} целиком.",
        "Пиши сверху вниз и слева направо, не разрывая ритм движения.",
        "После записи проговори слово-опору и пример из урока.",
    ]


def parse_grammar_items(reader: PdfReader) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    order = 1
    for page_index in range(92, 98):
        raw_lines = [line.strip() for line in (reader.pages[page_index].extract_text() or "").splitlines() if line.strip()]
        block_indices = [index for index, line in enumerate(raw_lines) if line.startswith("Грамматический блок ")]
        block_indices.append(len(raw_lines))
        for block_number, block_start in enumerate(block_indices[:-1], start=1):
            next_block = block_indices[block_number]
            block_end = next((idx for idx in range(block_start, next_block) if raw_lines[idx] == "flashkanji.space"), next_block)
            exercise_header = next(idx for idx in range(block_start, block_end) if raw_lines[idx] == "Упражнение")
            cursor = exercise_header + 1
            block_items: list[dict[str, Any]] = []
            while cursor < block_end:
                pattern = raw_lines[cursor]
                if not contains_japanese(pattern) or "。" in pattern:
                    cursor += 1
                    continue
                cursor += 1
                meaning_lines: list[str] = []
                while cursor < block_end and "。" not in raw_lines[cursor]:
                    if contains_japanese(raw_lines[cursor]) and not re.search(r"[А-Яа-я]", raw_lines[cursor]):
                        break
                    meaning_lines.append(raw_lines[cursor])
                    cursor += 1
                if cursor >= block_end:
                    break
                example_jp = raw_lines[cursor]
                cursor += 1
                exercise_lines: list[str] = []
                while cursor < block_end:
                    line = raw_lines[cursor]
                    if line.startswith("Грамматический блок "):
                        break
                    if contains_japanese(line) and not re.search(r"[А-Яа-я]", line) and "。" not in line:
                        break
                    exercise_lines.append(line)
                    cursor += 1
                block_items.append({
                    "pattern": pattern,
                    "meaning": " ".join(meaning_lines).strip(),
                    "example_jp": example_jp.strip(),
                    "exercise": " ".join(exercise_lines).strip(),
                })
            distractor_pool = [item["meaning"] for item in block_items if item["meaning"]]
            for item in block_items:
                options = [item["meaning"]]
                for candidate in distractor_pool:
                    if candidate and candidate != item["meaning"] and candidate not in options and len(options) < 4:
                        options.append(candidate)
                items.append({
                    "id": f"n2-grammar-{order:03d}",
                    "level": "N2",
                    "order": order,
                    "group": localized_pair(f"Грамматический блок {len(items) // 10 + 1}"),
                    "pattern": item["pattern"],
                    "title": localized_pair(item["meaning"]),
                    "explanation": localized_pair(
                        f"{item['pattern']} помогает передать значение «{item['meaning']}» и работать с логикой абзаца на уровне N2.",
                        f"{item['pattern']} expresses “{item['meaning']}” and supports paragraph logic at the N2 level.",
                    ),
                    "formula": item["pattern"],
                    "examples": [{
                        "jp": item["example_jp"],
                        "reading": "",
                        "ru": item["exercise"] or item["meaning"],
                        "en": item["exercise"] or item["meaning"],
                    }],
                    "question": localized_pair(
                        f"Что лучше всего передаёт форма {item['pattern']}?",
                        f"What does the pattern {item['pattern']} best express?",
                    ),
                    "answer": item["meaning"],
                    "options": options,
                })
                order += 1
    return items


def build_lessons_and_cards(reader: PdfReader, old_catalog: dict[str, Any]) -> tuple[list[dict[str, Any]], list[dict[str, Any]], list[dict[str, Any]]]:
    old_items = old_catalog.get("items", [])
    old_by_kanji = {item.get("kanji"): item for item in old_items if item.get("kanji")}
    lessons: list[dict[str, Any]] = []
    cards: list[dict[str, Any]] = []
    lesson_readings: list[dict[str, Any]] = []
    global_number = 1

    for lesson_order, page_index in enumerate(range(16, 92, 2), start=1):
        lines = [line.strip() for line in (reader.pages[page_index].extract_text() or "").splitlines() if line.strip()]
        title_line = lines[0]
        theme = title_line.split(". ", 1)[1].strip()
        rows = parse_lesson_rows(lines)
        lesson_id = f"n2-lesson-{lesson_order}"
        grammar_focus = lesson_grammar_focus(lesson_order)
        sentences = generated_lesson_sentences(rows, lesson_order)
        mini_reading = generated_mini_reading(lesson_order, lesson_id, rows)
        lessons.append({
            "id": lesson_id,
            "level": "N2",
            "order": lesson_order,
            "title": {"ru": theme, "en": f"N2 Lesson {lesson_order}"},
            "theme": {"ru": theme, "en": f"N2 Lesson {lesson_order}"},
            "kanji": [row["kanji"] for row in rows],
            "goal": {
                "ru": "Связать кандзи урока со словами, грамматикой N2, мини-абзацем и повторением.",
                "en": "Connect lesson kanji with N2 words, grammar, a mini paragraph, and review.",
            },
            "durationMinutes": 45,
            "grammarFocus": grammar_focus,
            "sentences": sentences,
            "writing": [row["kanji"] for row in rows[:3]],
            "reviewAfterDays": LESSON_REVIEW_DAYS,
            "miniReadingId": mini_reading["id"],
        })
        lesson_readings.append(mini_reading)

        for row in rows:
            old_item = deepcopy(old_by_kanji.get(row["kanji"], {}))
            course_card_id = str(old_item.get("courseCardId") or old_item.get("id") or f"n2c-{global_number:03d}")
            readings = deepcopy(old_item.get("readings") or {})
            if not readings:
                readings = {
                    "onyomi": [],
                    "kunyomi": [],
                    "hiragana": [word["reading"] for word in row["words"] if word["reading"]],
                    "romaji": [],
                    "nanori": [],
                }
            examples = [
                {
                    "word": word["word"],
                    "reading": word["reading"],
                    "romaji": word["romaji"],
                    "translation_ru": word["translation_ru"],
                    "translation_en": word["translation_en"],
                }
                for word in (row["words"][:3] if row["words"] else [fallback_word(row)])
            ]
            sentence = find_sentence_for_card(sentences, row)
            cards.append({
                "id": course_card_id,
                "courseCardId": course_card_id,
                "number": global_number,
                "kanji": row["kanji"],
                "meaning": {"ru": row["meaning"], "en": row["meaning"]},
                "readings": readings,
                "jlpt": "N2",
                "level": "N2",
                "lessonId": lesson_id,
                "lessonTitle": theme,
                "lessonTitleEn": f"N2 Lesson {lesson_order}",
                "strokes": int(old_item.get("strokes") or 0),
                "strokeOrder": deepcopy(old_item.get("strokeOrder") or fallback_stroke_order(row["kanji"])),
                "words": examples,
                "examples": examples,
                "hintRu": row["hint"] or f"Свяжи {row['kanji']} со словами-опорами и проговори их вслух в контексте N2.",
                "apps": deepcopy(old_item.get("apps") or ["Flash Kanji", "Browser", "Reader"]),
                "interfaceUse": f"N2: {theme}. Закрепи знак через слово, грамматическую связку, абзац и SRS.",
                "audio": deepcopy(old_item.get("audio")),
                "meta": deepcopy(old_item.get("meta") or {
                    "radical": "",
                    "radicalMeaning": {"ru": "", "en": ""},
                    "grade": None,
                    "freq": None,
                    "unicode": None,
                    "variants": [],
                }),
                "sourcePage": page_index + 1,
                "grammarLinks": grammar_focus[:4],
                "example": {
                    "jp": sentence["jp"],
                    "reading": sentence["reading"],
                    "ru": sentence["ru"],
                    "en": sentence["en"],
                },
            })
            global_number += 1
    return lessons, cards, lesson_readings


def parse_textbook_readings(reader: PdfReader) -> list[dict[str, Any]]:
    lines = [line.strip() for line in (reader.pages[99].extract_text() or "").splitlines() if line.strip()]
    items: list[dict[str, Any]] = []
    title_indices = [index for index, line in enumerate(lines) if line.startswith("読解 ")]
    title_indices.append(len(lines))
    for item_index, start in enumerate(title_indices[:-1], start=1):
        end = title_indices[item_index]
        title_line = lines[start]
        title = title_line.split(". ", 1)[1].strip()
        question_line_index = next(index for index in range(start, end) if lines[index].startswith("質問:"))
        jp = clean_japanese_text("".join(lines[start + 1:question_line_index]))
        blueprint = next(item for item in TEXTBOOK_READING_BLUEPRINTS if item["title"] == title)
        items.append({
            "id": f"n2-reading-textbook-{item_index}",
            "title": {"ru": f"Чтение {item_index}: {title}", "en": f"Reading {item_index}: {title}"},
            "jp": jp,
            "ru": blueprint["ru"],
            "questions": deepcopy(blueprint["questions"]),
        })
    return items


def parse_listening_items(reader: PdfReader) -> list[dict[str, Any]]:
    lines = [line.strip() for line in (reader.pages[100].extract_text() or "").splitlines() if line.strip()]
    items: list[dict[str, Any]] = []
    title_indices = [index for index, line in enumerate(lines) if line.startswith("聴解スクリプト ")]
    title_indices.append(len(lines))
    for item_index, start in enumerate(title_indices[:-1], start=1):
        end = title_indices[item_index]
        title_line = lines[start]
        title = title_line.split(". ", 1)[1].strip()
        chunk = lines[start + 1:end]
        joined = " ".join(chunk)
        dialogue_part, question_part = joined.split("問題:", 1)
        blueprint = LISTENING_OPTION_MAP[title]
        items.append({
            "id": f"n2-listening-{item_index}",
            "title": {"ru": f"Скрипт {item_index}: {title}", "en": f"Script {item_index}: {title}"},
            "jp": clean_japanese_text(dialogue_part.strip()),
            "ru": blueprint["ru"],
            "questions": [{
                "prompt": blueprint["question"],
                "answer": blueprint["answer"],
                "options": deepcopy(blueprint["options"]),
            }],
        })
    return items


def build_meta(reading_count: int, listening_count: int) -> dict[str, Any]:
    return {
        "version": 1,
        "level": "N2",
        "title": {"ru": "JLPT N2", "en": "JLPT N2"},
        "description": {
            "ru": "N2 — практический японский: абзацы, аргументы, выводы и авторская позиция.",
            "en": "N2 is practical Japanese: paragraphs, arguments, conclusions, and author stance.",
        },
        "principle": {
            "ru": "кандзи -> слово -> грамматика -> абзац -> позиция автора -> вывод -> SRS",
            "en": "kanji -> word -> grammar -> paragraph -> author stance -> conclusion -> SRS",
        },
        "kanjiCount": 380,
        "lessonCount": 38,
        "kanjiPerLesson": 10,
        "grammarCount": 120,
        "readingCount": reading_count,
        "listeningCount": listening_count,
        "pdfUrl": "docs/flashkanji_N2_textbook_flashkanji_space.pdf",
        "reviewPlan": [
            {"day": "1–20", "label": {"ru": "уроки 1–20: 10 кандзи и 5 грамматик в день", "en": "lessons 1–20: 10 kanji and 5 grammar points per day"}},
            {"day": "21–38", "label": {"ru": "уроки 21–38 + мини-абзац после каждого урока", "en": "lessons 21–38 + a mini paragraph after each lesson"}},
            {"day": "39–55", "label": {"ru": "120 грамматических форм по 8–10 в день", "en": "120 grammar forms at 8–10 per day"}},
            {"day": "56–70", "label": {"ru": "чтение и аудирование + возврат к слабым урокам", "en": "reading and listening + returns to weak lessons"}},
            {"day": "71–90", "label": {"ru": "финальный тест, переписывание ошибок и SRS-повтор", "en": "final test, rewriting mistakes, and SRS review"}},
            {"day": "1 → 3 → 7 → 14 → 30 → 60 → 90", "label": {"ru": "правило повторения Flash Kanji", "en": "Flash Kanji review rule"}},
        ],
        "n5Bridge": N2_BRIDGE,
        "rewards": {
            "addToSrsXp": 7,
            "knowXp": 9,
            "hardXp": 2,
            "exerciseXp": 11,
            "exerciseMoon": 1,
            "grammarXp": 12,
            "grammarMoon": 1,
            "lessonCompleteXp": 85,
            "lessonCompleteMoon": 10,
            "readingXp": 42,
            "readingMoon": 4,
            "listeningXp": 38,
            "listeningMoon": 4,
            "finalTestXp": 260,
            "finalTestMoon": 48,
        },
    }


def build_exercises() -> dict[str, Any]:
    return {
        "version": 1,
        "level": "N2",
        "lessonQuestionCount": 8,
        "types": [
            {"type": "meaning", "title": {"ru": "Узнавание значения", "en": "Meaning recognition"}},
            {"type": "kanji", "title": {"ru": "Кандзи по значению", "en": "Kanji from meaning"}},
            {"type": "reading", "title": {"ru": "Чтение слова", "en": "Word reading"}},
            {"type": "sentence", "title": {"ru": "Перевод предложения", "en": "Sentence translation"}},
            {"type": "missing-word", "title": {"ru": "Вставь слово", "en": "Missing word"}},
            {"type": "active-recall", "title": {"ru": "Активное вспоминание", "en": "Active recall"}},
        ],
        "reviewModes": [
            {"id": "due", "title": {"ru": "По сроку", "en": "Due"}},
            {"id": "difficult", "title": {"ru": "Сложные", "en": "Difficult"}},
            {"id": "all", "title": {"ru": "Весь N2", "en": "All N2"}},
        ],
    }


def build_final_test(reading_count: int) -> dict[str, Any]:
    return {
        "version": 1,
        "level": "N2",
        "title": {"ru": "Финальный тест Flash Kanji N2", "en": "Flash Kanji N2 Final Test"},
        "description": {
            "ru": "Смешанный тест по 380 кандзи N2, грамматике, чтению, аргументам и выводам.",
            "en": "A mixed test across 380 N2 kanji, grammar, reading, arguments, and conclusions.",
        },
        "questionCount": 40,
        "passingPercent": 80,
        "kanjiPool": ["軍", "設", "環", "比", "予", "改", "印", "輸", "貿", "乾", "調", "省", "講", "連", "採", "尊", "燃", "洗", "冷", "肯"],
        "grammarPool": ["上で", "ことから", "おそれがある", "向け", "次第で", "に基づいて", "において", "ものの", "とは限らない", "一方で"],
        "readingPool": [f"n2-reading-textbook-{index}" for index in range(1, 9)] + [f"n2-reading-mini-{index}" for index in range(1, 13)],
        "types": ["meaning", "reading", "sentence", "kanji", "word", "grammar", "mini-reading", "srs"],
        "rewards": {
            "completeXp": 260,
            "completeMoon": 48,
            "passXp": 130,
            "passMoon": 20,
        },
    }


def build_tests_compat() -> dict[str, Any]:
    return {
        "version": 1,
        "level": "N2",
        "items": [
            {
                "kanji": "軍",
                "question": {"ru": "Что означает этот кандзи?", "en": "What does this kanji mean?"},
                "answer": {"ru": "армия; военный", "en": "army; military"},
                "options": ["армия; военный", "долина", "погода", "квитанция"],
                "lessonId": "n2-lesson-1",
            },
            {
                "kanji": "設",
                "question": {"ru": "Какое чтение подходит слову 設計?", "en": "Which reading matches 設計?"},
                "answer": {"ru": "せっけい", "en": "せっけい"},
                "options": ["せっけい", "せつび", "せんけい", "しょうけい"],
                "lessonId": "n2-lesson-2",
            },
        ],
    }


def update_jlpt_index() -> None:
    payload = read_json(JLPT_INDEX_PATH)
    lesson_ids = [f"n2-lesson-{index}" for index in range(1, 39)]
    for item in payload.get("items", []):
        if item.get("jlpt") != "N2":
            continue
        item.update({
            "jlpt": "N2",
            "slug": "n2",
            "title": {"ru": "N2: практический уровень", "en": "N2: Practical Japanese"},
            "displayTitle": {"ru": "Практический уровень", "en": "Practical Japanese"},
            "description": {
                "ru": "N2 — практический японский: 380 кандзи, 38 уроков, 120 конструкций, чтение, аудирование и финальный тест.",
                "en": "N2 is practical Japanese: 380 kanji, 38 lessons, 120 patterns, reading, listening, and a final test.",
            },
            "goal": {
                "ru": "Учить N2 через слова, абзацы, грамматику, авторскую позицию и SRS.",
                "en": "Study N2 through words, paragraphs, grammar, author stance, and SRS.",
            },
            "recommendedCycle": {
                "ru": "90-дневный цикл: уроки, грамматика, чтение, аудирование, финальный тест и повтор ошибок.",
                "en": "A 90-day cycle with lessons, grammar, reading, listening, a final test, and mistake review.",
            },
            "previousLevels": ["N5", "N4", "N3"],
            "nextLevels": ["N1"],
            "coverImage": "assets/bg/bg_cyber_room.png",
            "pdfFile": "docs/flashkanji_N2_textbook_flashkanji_space.pdf",
            "pdfUrl": "docs/flashkanji_N2_textbook_flashkanji_space.pdf",
            "lessonIds": lesson_ids,
            "lessonCount": 38,
            "kanjiCount": 380,
            "cardCount": 380,
            "files": {
                "meta": "data/jlpt/n2/meta.json",
                "kanji": "data/jlpt/n2/kanji.json",
                "lessons": "data/jlpt/n2/lessons.json",
                "grammar": "data/jlpt/n2/grammar.json",
                "exercises": "data/jlpt/n2/exercises.json",
                "reading": "data/jlpt/n2/reading.json",
                "listening": "data/jlpt/n2/listening.json",
                "finalTest": "data/jlpt/n2/final-test.json",
                "tests": "data/jlpt/n2/tests.json",
            },
        })
    write_json(JLPT_INDEX_PATH, payload)


def update_textbook_index() -> None:
    payload = read_json(TEXTBOOK_INDEX_PATH)
    for item in payload.get("levels", []):
        if item.get("jlpt") != "N2":
            continue
        item.update({
            "title": {"ru": "Flash Kanji N2", "en": "Flash Kanji N2"},
            "description": {
                "ru": "Интерактивный N2-учебник: 380 кандзи, 38 уроков, 120 грамматических конструкций, мини-абзацы, чтение, аудирование и финальный тест.",
                "en": "Interactive N2 textbook: 380 kanji, 38 lessons, 120 grammar patterns, mini paragraphs, reading, listening, and a final test.",
            },
            "kanjiCount": 380,
            "lessonCount": 38,
            "pdfUrl": "docs/flashkanji_N2_textbook_flashkanji_space.pdf",
            "lessonFiles": [f"data/jlpt/n2/lessons.json#{index}" for index in range(1, 39)],
        })
    write_json(TEXTBOOK_INDEX_PATH, payload)


def upsert_achievement(items: list[dict[str, Any]], achievement: dict[str, Any]) -> None:
    for index, item in enumerate(items):
        if item.get("id") == achievement["id"]:
            items[index] = achievement
            return
    items.append(achievement)


def update_achievements() -> None:
    payload = read_json(ACHIEVEMENTS_PATH)
    categories = payload.get("categories", [])
    if not any(item.get("id") == "jlpt_n2" for item in categories):
        categories.append({"id": "jlpt_n2", "title": {"ru": "JLPT N2", "en": "JLPT N2"}, "icon": "star"})
    else:
        for category in categories:
            if category.get("id") == "jlpt_n2":
                category.update({"title": {"ru": "JLPT N2", "en": "JLPT N2"}, "icon": "star"})

    achievements = payload.get("achievements", [])
    for achievement in [
        {
            "id": "n2_opened",
            "category": "jlpt_n2",
            "title": {"ru": "N2: уровень открыт", "en": "N2: level opened"},
            "description": {"ru": "Открыть интерактивный модуль N2.", "en": "Open the interactive N2 module."},
            "icon": "star",
            "kind": "n2Opened",
            "target": 1,
            "rewardXp": 35,
            "rewardFragments": 7,
        },
        {
            "id": "n2_first_lesson",
            "category": "jlpt_n2",
            "title": {"ru": "N2: первый урок", "en": "N2: first lesson"},
            "description": {"ru": "Пройти первый урок N2.", "en": "Complete the first N2 lesson."},
            "icon": "star",
            "kind": "n2LessonComplete",
            "target": 1,
            "rewardXp": 70,
            "rewardFragments": 14,
        },
        {
            "id": "n2_10_lessons",
            "category": "jlpt_n2",
            "title": {"ru": "N2: первая десятка", "en": "N2: first ten"},
            "description": {"ru": "Пройти 10 уроков N2.", "en": "Complete 10 N2 lessons."},
            "icon": "star",
            "kind": "n2LessonsComplete",
            "target": 10,
            "rewardXp": 190,
            "rewardFragments": 34,
        },
        {
            "id": "n2_20_lessons",
            "category": "jlpt_n2",
            "title": {"ru": "N2: середина курса", "en": "N2: mid-course"},
            "description": {"ru": "Пройти 20 уроков N2.", "en": "Complete 20 N2 lessons."},
            "icon": "star",
            "kind": "n2LessonsComplete",
            "target": 20,
            "rewardXp": 280,
            "rewardFragments": 48,
        },
        {
            "id": "n2_complete",
            "category": "jlpt_n2",
            "title": {"ru": "N2 завершён", "en": "N2 complete"},
            "description": {"ru": "Пройти все 38 уроков N2.", "en": "Complete all 38 N2 lessons."},
            "icon": "star",
            "kind": "n2LessonsComplete",
            "target": 38,
            "rewardXp": 420,
            "rewardFragments": 80,
        },
        {
            "id": "n2_all_srs",
            "category": "jlpt_n2",
            "title": {"ru": "380 кандзи N2", "en": "380 N2 kanji"},
            "description": {"ru": "Добавить все 380 кандзи N2 в SRS.", "en": "Add all 380 N2 kanji to SRS."},
            "icon": "star",
            "kind": "n2SrsAll",
            "target": 380,
            "rewardXp": 360,
            "rewardFragments": 68,
        },
        {
            "id": "n2_grammar_40",
            "category": "jlpt_n2",
            "title": {"ru": "40 конструкций N2", "en": "40 N2 grammar points"},
            "description": {"ru": "Освоить 40 конструкций N2.", "en": "Complete 40 N2 grammar points."},
            "icon": "star",
            "kind": "n2GrammarComplete",
            "target": 40,
            "rewardXp": 190,
            "rewardFragments": 34,
        },
        {
            "id": "n2_grammar_all",
            "category": "jlpt_n2",
            "title": {"ru": "120 конструкций N2", "en": "120 N2 grammar points"},
            "description": {"ru": "Освоить все 120 конструкций N2.", "en": "Complete all 120 N2 grammar points."},
            "icon": "star",
            "kind": "n2GrammarComplete",
            "target": 120,
            "rewardXp": 360,
            "rewardFragments": 64,
        },
        {
            "id": "n2_reader",
            "category": "jlpt_n2",
            "title": {"ru": "Читатель N2", "en": "N2 reader"},
            "description": {"ru": "Пройти все N2 reading-тексты и мини-абзацы.", "en": "Complete all N2 reading texts and mini paragraphs."},
            "icon": "star",
            "kind": "n2ReadingComplete",
            "target": 46,
            "rewardXp": 230,
            "rewardFragments": 40,
        },
        {
            "id": "n2_voice",
            "category": "jlpt_n2",
            "title": {"ru": "Голос N2", "en": "N2 voice"},
            "description": {"ru": "Пройти 6 listening-скриптов N2.", "en": "Complete 6 N2 listening scripts."},
            "icon": "star",
            "kind": "n2ListeningComplete",
            "target": 6,
            "rewardXp": 180,
            "rewardFragments": 30,
        },
        {
            "id": "n2_writing_60",
            "category": "jlpt_n2",
            "title": {"ru": "Письмо под луной IV", "en": "Moonlit writing IV"},
            "description": {"ru": "Выполнить 60 письменных практик N2.", "en": "Complete 60 N2 writing practices."},
            "icon": "star",
            "kind": "n2Writing",
            "target": 60,
            "rewardXp": 240,
            "rewardFragments": 42,
        },
        {
            "id": "n2_comprehension_30",
            "category": "jlpt_n2",
            "title": {"ru": "Логика абзаца", "en": "Paragraph logic"},
            "description": {"ru": "Дать 30 правильных ответов по чтению и логике абзаца N2.", "en": "Give 30 correct answers on N2 readings and paragraph logic."},
            "icon": "star",
            "kind": "n2ComprehensionAnswers",
            "target": 30,
            "rewardXp": 210,
            "rewardFragments": 36,
        },
        {
            "id": "n2_final_pass",
            "category": "jlpt_n2",
            "title": {"ru": "N2 без паники", "en": "N2 without panic"},
            "description": {"ru": "Пройти финальный тест N2.", "en": "Pass the N2 final test."},
            "icon": "star",
            "kind": "n2FinalPass",
            "target": 1,
            "rewardXp": 300,
            "rewardFragments": 56,
        },
    ]:
        upsert_achievement(achievements, achievement)

    payload["categories"] = categories
    payload["achievements"] = achievements
    write_json(ACHIEVEMENTS_PATH, payload)


def main() -> None:
    old_catalog = read_json(OLD_KANJI_PATH) if OLD_KANJI_PATH.exists() else {"items": []}
    reader = PdfReader(str(PDF_PATH))

    grammar_items = parse_grammar_items(reader)
    lessons, cards, lesson_readings = build_lessons_and_cards(reader, old_catalog)
    textbook_readings = parse_textbook_readings(reader)
    listening_items = parse_listening_items(reader)

    reading_items = lesson_readings + textbook_readings
    meta = build_meta(reading_count=len(reading_items), listening_count=len(listening_items))

    lessons_payload = {
        "version": 1,
        "level": "N2",
        "generatedAt": NOW,
        "textbook": {
            "jlpt": "N2",
            "slug": "n2",
            "title": {"ru": "JLPT N2", "en": "JLPT N2"},
            "displayTitle": {"ru": "Практический уровень", "en": "Practical Japanese"},
            "description": meta["description"],
            "goal": {
                "ru": "Учить N2 через слова, грамматику, абзацы, авторскую позицию и SRS.",
                "en": "Study N2 through words, grammar, paragraphs, author stance, and SRS.",
            },
            "recommendedCycle": {
                "ru": "90-дневный цикл: уроки, грамматика, чтение, аудирование, финальный тест и повтор ошибок.",
                "en": "A 90-day cycle with lessons, grammar, reading, listening, a final test, and mistake review.",
            },
            "previousLevels": ["N5", "N4", "N3"],
            "nextLevels": ["N1"],
            "coverImage": "assets/bg/bg_cyber_room.png",
            "pdfFile": "docs/flashkanji_N2_textbook_flashkanji_space.pdf",
            "pdfUrl": "docs/flashkanji_N2_textbook_flashkanji_space.pdf",
            "lessonIds": [lesson["id"] for lesson in lessons],
            "lessonCount": 38,
            "kanjiCount": 380,
            "cardCount": 380,
            "files": {
                "meta": "data/jlpt/n2/meta.json",
                "kanji": "data/jlpt/n2/kanji.json",
                "lessons": "data/jlpt/n2/lessons.json",
                "grammar": "data/jlpt/n2/grammar.json",
                "exercises": "data/jlpt/n2/exercises.json",
                "reading": "data/jlpt/n2/reading.json",
                "listening": "data/jlpt/n2/listening.json",
                "finalTest": "data/jlpt/n2/final-test.json",
                "tests": "data/jlpt/n2/tests.json",
            },
        },
        "items": lessons,
    }

    kanji_payload = {
        "version": 1,
        "level": "N2",
        "generatedAt": NOW,
        "textbook": lessons_payload["textbook"],
        "items": cards,
    }

    reading_payload = {
        "version": 1,
        "level": "N2",
        "generatedAt": NOW,
        "items": reading_items,
    }

    listening_payload = {
        "version": 1,
        "level": "N2",
        "generatedAt": NOW,
        "items": listening_items,
    }

    write_json(N2_DIR / "meta.json", meta)
    write_json(N2_DIR / "lessons.json", lessons_payload)
    write_json(N2_DIR / "kanji.json", kanji_payload)
    write_json(N2_DIR / "grammar.json", {"version": 1, "level": "N2", "generatedAt": NOW, "items": grammar_items})
    write_json(N2_DIR / "exercises.json", build_exercises())
    write_json(N2_DIR / "reading.json", reading_payload)
    write_json(N2_DIR / "listening.json", listening_payload)
    write_json(N2_DIR / "final-test.json", build_final_test(len(reading_items)))
    write_json(N2_DIR / "tests.json", build_tests_compat())

    update_jlpt_index()
    update_textbook_index()
    update_achievements()

    print(f"Generated N2 course: {len(lessons)} lessons, {len(cards)} cards, {len(grammar_items)} grammar items, {len(reading_items)} reading items, {len(listening_items)} listening items.")


if __name__ == "__main__":
    main()
