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
N3_DIR = ROOT / "index" / "data" / "jlpt" / "n3"
PDF_PATH = ROOT / "index" / "docs" / "flashkanji_N3_textbook_flashkanji_space.pdf"
OLD_KANJI_PATH = N3_DIR / "kanji.json"
JLPT_INDEX_PATH = ROOT / "index" / "data" / "jlpt" / "index.json"
TEXTBOOK_INDEX_PATH = ROOT / "index" / "data" / "textbooks" / "index.json"
ACHIEVEMENTS_PATH = ROOT / "index" / "data" / "achievements" / "index.json"

NOW = datetime.now(timezone.utc).isoformat()

LESSON_REVIEW_DAYS = [1, 3, 7, 14, 30, 45, 60]

N3_TEXTBOOK_ENTRY = {
    "jlpt": "N3",
    "slug": "n3",
    "title": {"ru": "JLPT N3", "en": "JLPT N3"},
    "displayTitle": {"ru": "Мост к среднему уровню", "en": "Bridge to the intermediate level"},
    "description": {
        "ru": "N3 — мост к среднему японскому: больше текста, причин, мнений и выводов.",
        "en": "N3 is the bridge to intermediate Japanese: more text, reasons, opinions, and conclusions."
    },
    "goal": {
        "ru": "Учить N3 не списком знаков, а через связку: слово, грамматика, предложение, абзац и повторение.",
        "en": "Study N3 through the chain of word, grammar, sentence, paragraph, and review."
    },
    "recommendedCycle": {
        "ru": "60-дневный цикл: уроки, грамматика, чтение, аудирование, финальный тест и повтор ошибок.",
        "en": "A 60-day cycle with lessons, grammar, reading, listening, a final test, and mistake review."
    },
    "previousLevels": ["N5", "N4"],
    "nextLevels": ["N2", "N1"],
    "coverImage": "assets/bg/bg_winter_city.png",
    "pdfFile": "docs/flashkanji_N3_textbook_flashkanji_space.pdf",
    "pdfUrl": "docs/flashkanji_N3_textbook_flashkanji_space.pdf",
}

GRAMMAR_GROUPS: list[tuple[str, list[str]]] = [
    ("目的・変化", ["ために", "ように", "ようになる", "ようにする", "ことにする"]),
    ("Результат и ожидание", ["ことになる", "はずだ", "はずがない", "たばかり", "ところだ"]),
    ("Причина и объяснение", ["おかげで", "せいで", "ので", "からには", "わけだ"]),
    ("Отрицание и ограничение", ["わけではない", "わけがない", "とは限らない", "しかない", "にすぎない"]),
    ("Сравнение и степень", ["ほど", "くらい / ぐらい", "ほど〜ない", "に比べて", "ば〜ほど"]),
    ("Видимость и предположение", ["ようだ", "みたいだ", "らしい", "そうだ", "っぽい"]),
    ("Тенденции и состояние", ["がち", "気味", "っぱなし", "まま", "最中に"]),
    ("Время и последовательность", ["うちに", "たびに", "ついでに", "て以来", "たとたん"]),
    ("Условия и уступка", ["たとえ〜ても", "としても", "にしても", "からといって", "ものなら"]),
    ("Точка зрения и отношение", ["について", "に関して", "に対して", "にとって", "として"]),
    ("Средство и зависимость", ["によって", "によると", "を通して", "を中心に", "に沿って"]),
    ("Добавление и исключение", ["だけでなく", "ばかりでなく", "に加えて", "はもちろん", "を除いて"]),
    ("Вывод и связь текста", ["つまり", "そのため", "すると", "一方で", "ただし"]),
    ("Эмоциональные оттенки", ["なんて", "こそ", "さえ", "せっかく", "わざわざ"]),
    ("Формальность и письменная речь", ["において", "により", "に基づいて", "をめぐって", "上で"]),
    ("Финальная группа Flash Kanji", ["ものだ", "ものではない", "ことはない", "ないことはない", "必ずしも〜ない"]),
]

FLAT_GRAMMAR_PATTERNS = [pattern for _, patterns in GRAMMAR_GROUPS for pattern in patterns]

LESSON1_SENTENCES = [
    {
        "jp": "最近、部分に関する記事を読みました。",
        "reading": "さいきん、ぶぶんにかんするきじをよみました。",
        "ru": "Недавно я прочитал статью, связанную с частью.",
        "en": "Recently I read an article related to one part of a topic."
    },
    {
        "jp": "もし彼が必要なら、先に準備しておきます。",
        "reading": "もしかれがひつようなら、さきにじゅんびしておきます。",
        "ru": "Если он понадобится, я подготовлю всё заранее.",
        "en": "If he is needed, I will prepare everything in advance."
    },
    {
        "jp": "この問題は簡単そうに見えますが、実は複雑です。",
        "reading": "このもんだいはかんたんそうにみえますが、じつはふくざつです。",
        "ru": "Эта задача выглядит простой, но на самом деле она сложная.",
        "en": "This problem looks easy, but in fact it is complex."
    },
    {
        "jp": "Flash Kanjiで言葉と文を一緒に覚えましょう。",
        "reading": "フラッシュカンジでことばとぶんをいっしょにおぼえましょう。",
        "ru": "Запоминай слова и предложения вместе во Flash Kanji.",
        "en": "Learn words and sentences together in Flash Kanji."
    },
]

LESSON1_GRAMMAR_CARDS = [
    {
        "pattern": "について",
        "title": {"ru": "о теме; относительно", "en": "about; regarding"},
        "explanation": {
            "ru": "Используй について, когда говоришь о теме обсуждения или объекте внимания.",
            "en": "Use について when you speak about a topic or an object of attention."
        },
        "formula": "N + について",
        "examples": [
            {
                "jp": "この問題について、もう少し詳しく説明してください。",
                "reading": "このもんだいについて、もうすこしくわしくせつめいしてください。",
                "ru": "Пожалуйста, объясните подробнее эту проблему.",
                "en": "Please explain this problem in more detail."
            }
        ],
        "answer": "о теме; относительно",
        "options": ["о теме; относительно", "только что", "несмотря на", "по сравнению с"]
    },
    {
        "pattern": "に関して",
        "title": {"ru": "касательно; по поводу", "en": "concerning; regarding"},
        "explanation": {
            "ru": "に関して звучит чуть письменнее и помогает говорить о теме, вопросе или области.",
            "en": "に関して is a slightly more written way to say 'concerning' a topic, issue, or field."
        },
        "formula": "N + に関して",
        "examples": [
            {
                "jp": "最近、部分に関する記事を読みました。",
                "reading": "さいきん、ぶぶんにかんするきじをよみました。",
                "ru": "Недавно я прочитал статью, связанную с частью темы.",
                "en": "Recently I read an article concerning one part of the topic."
            }
        ],
        "answer": "касательно; по поводу",
        "options": ["касательно; по поводу", "ничего не остаётся, кроме", "как только", "не более чем"]
    },
    {
        "pattern": "なら / そうに見える / 実は",
        "title": {"ru": "условие, внешний вид и скрытая реальность", "en": "condition, appearance, and hidden reality"},
        "explanation": {
            "ru": "なら задаёт условие, そうに見える описывает впечатление, а 実は меняет картину после этого впечатления.",
            "en": "なら sets a condition, そうに見える gives an impression, and 実は flips the picture after that impression."
        },
        "formula": "N/V + なら / そうに見える / 実は",
        "examples": [
            {
                "jp": "この問題は簡単そうに見えますが、実は複雑です。",
                "reading": "このもんだいはかんたんそうにみえますが、じつはふくざつです。",
                "ru": "Задача выглядит простой, но на самом деле она сложная.",
                "en": "The problem looks simple, but in fact it is complex."
            }
        ],
        "answer": "условие, внешний вид и скрытая реальность",
        "options": [
            "условие, внешний вид и скрытая реальность",
            "результат сравнения",
            "формальная причина",
            "добавление и исключение"
        ]
    },
]

TEXTBOOK_READING_ITEMS = [
    {
        "id": "n3-reading-7",
        "title": {"ru": "駅前の新しい店", "en": "A new shop near the station"},
        "jp": "駅前に新しい店ができた。最初は小さい店だと思っていたが、入ってみると本や文房具だけでなく、勉強できる席もあった。私はN3の問題集を買い、ついでに店員におすすめの辞書について聞いた。店員は親切に説明してくれたので、次の週も行くことにした。",
        "ru": "У станции открылся новый магазин. Сначала я думал, что он маленький, но внутри были не только книги и канцтовары, но и места для учебы. Я купил сборник задач N3 и заодно спросил продавца о словаре. Он всё любезно объяснил, поэтому я решил прийти и на следующей неделе.",
        "questions": [
            {
                "prompt": {"ru": "Что было в магазине, кроме книг и канцтоваров?", "en": "What was in the shop besides books and stationery?"},
                "answer": "study_seats",
                "options": [
                    {"value": "study_seats", "label": {"ru": "места для учебы", "en": "study seats"}},
                    {"value": "cinema", "label": {"ru": "кинотеатр", "en": "a cinema"}},
                    {"value": "gym", "label": {"ru": "спортзал", "en": "a gym"}}
                ]
            },
            {
                "prompt": {"ru": "Почему герой решил прийти снова?", "en": "Why did the person decide to come again?"},
                "answer": "kind_explanation",
                "options": [
                    {"value": "kind_explanation", "label": {"ru": "продавец всё понятно объяснил", "en": "the clerk explained everything kindly"}},
                    {"value": "sale", "label": {"ru": "была большая скидка", "en": "there was a huge sale"}},
                    {"value": "friend", "label": {"ru": "там работал друг", "en": "a friend worked there"}}
                ]
            }
        ]
    },
    {
        "id": "n3-reading-8",
        "title": {"ru": "Flash Kanjiでの復習", "en": "Reviewing with Flash Kanji"},
        "jp": "漢字を覚えるとき、形だけを見るとすぐに忘れてしまう。そこでFlash Kanjiでは、漢字、言葉、文法、例文を一緒に練習する。例えば「関」という字は、関係、関心、に関してという形で覚える。単語だけでなく文の中で見ると、使い方が自然に分かるようになる。",
        "ru": "Если запоминать кандзи только по форме, они быстро забываются. Поэтому во Flash Kanji знак, слово, грамматика и пример тренируются вместе. Например, 関 закрепляется через 関係, 関心 и に関して. Когда видишь не только слово, но и предложение, использование становится естественным.",
        "questions": [
            {
                "prompt": {"ru": "Что тренируют вместе во Flash Kanji?", "en": "What is trained together in Flash Kanji?"},
                "answer": "full_chain",
                "options": [
                    {"value": "full_chain", "label": {"ru": "кандзи, слова, грамматику и примеры", "en": "kanji, words, grammar, and examples"}},
                    {"value": "kana_only", "label": {"ru": "только азбуку", "en": "only kana"}},
                    {"value": "history_only", "label": {"ru": "только историю языка", "en": "only language history"}}
                ]
            },
            {
                "prompt": {"ru": "Что становится естественным, когда видишь слово в предложении?", "en": "What becomes natural when you see the word in a sentence?"},
                "answer": "usage",
                "options": [
                    {"value": "usage", "label": {"ru": "использование", "en": "usage"}},
                    {"value": "drawing", "label": {"ru": "рисование", "en": "drawing"}},
                    {"value": "shopping", "label": {"ru": "покупки", "en": "shopping"}}
                ]
            }
        ]
    },
    {
        "id": "n3-reading-9",
        "title": {"ru": "天気による予定変更", "en": "A schedule change because of the weather"},
        "jp": "週末に友達と山へ行く予定だった。しかし天気予報によると、朝から強い雨が降るらしい。山道は危険になるかもしれないので、今回は中止することにした。その代わりに、駅の近くのカフェで会い、旅行の計画について話すことになった。",
        "ru": "На выходных я собирался идти с другом в горы. Но по прогнозу с утра должен идти сильный дождь. Поскольку дорога в горах может стать опасной, мы решили отменить поездку. Вместо этого мы встретимся в кафе около станции и обсудим план путешествия.",
        "questions": [
            {
                "prompt": {"ru": "Почему поездку отменили?", "en": "Why was the trip cancelled?"},
                "answer": "rain_danger",
                "options": [
                    {"value": "rain_danger", "label": {"ru": "из-за дождя и опасной горной дороги", "en": "because of the rain and the dangerous mountain road"}},
                    {"value": "closed_shop", "label": {"ru": "из-за закрытого магазина", "en": "because a shop was closed"}},
                    {"value": "late_train", "label": {"ru": "из-за опоздавшего поезда", "en": "because of a late train"}}
                ]
            },
            {
                "prompt": {"ru": "Что они сделают вместо поездки?", "en": "What will they do instead?"},
                "answer": "cafe_plan",
                "options": [
                    {"value": "cafe_plan", "label": {"ru": "встретятся в кафе и обсудят план", "en": "meet in a cafe and discuss the plan"}},
                    {"value": "stay_home", "label": {"ru": "останутся дома и будут спать", "en": "stay home and sleep"}},
                    {"value": "go_work", "label": {"ru": "поедут на работу", "en": "go to work"}}
                ]
            }
        ]
    },
    {
        "id": "n3-reading-10",
        "title": {"ru": "仕事と勉強の両立", "en": "Balancing work and study"},
        "jp": "仕事をしながら日本語を勉強するのは簡単ではない。忙しい日は復習を忘れがちだ。しかし、五分だけでも例文を読むようにしている。長い時間が取れなくても、毎日続ければ力になる。大切なのは完璧にやることではなく、やめないことだ。",
        "ru": "Учить японский, работая, непросто. В занятые дни легко забыть повторение. Но я стараюсь читать примеры хотя бы пять минут. Даже если нет много времени, ежедневное продолжение дает силу. Важно не делать идеально, а не бросать.",
        "questions": [
            {
                "prompt": {"ru": "Что человек старается делать даже в занятые дни?", "en": "What does the person try to do even on busy days?"},
                "answer": "five_minutes",
                "options": [
                    {"value": "five_minutes", "label": {"ru": "читать примеры хотя бы пять минут", "en": "read example sentences for at least five minutes"}},
                    {"value": "watch_tv", "label": {"ru": "смотреть телевизор", "en": "watch TV"}},
                    {"value": "skip_all", "label": {"ru": "полностью пропускать учебу", "en": "skip studying entirely"}}
                ]
            },
            {
                "prompt": {"ru": "Что автор считает важным?", "en": "What does the author consider important?"},
                "answer": "not_quit",
                "options": [
                    {"value": "not_quit", "label": {"ru": "не бросать", "en": "not giving up"}},
                    {"value": "be_perfect", "label": {"ru": "делать всё идеально", "en": "doing everything perfectly"}},
                    {"value": "study_once", "label": {"ru": "заниматься только раз в неделю", "en": "studying only once a week"}}
                ]
            }
        ]
    },
]

TEXTBOOK_LISTENING_ITEMS = [
    {
        "id": "n3-listening-7",
        "title": {"ru": "待ち合わせ", "en": "Meeting up"},
        "dialogue": [
            "A: 明日の会議、何時に始まるんだっけ。",
            "B: 十時のはずだけど、資料を準備するために九時半に来たほうがいいよ。",
            "A: 分かった。じゃあ、駅前で九時に会おう。"
        ],
        "question": {"ru": "Во сколько они встретятся у станции?", "en": "What time will they meet near the station?"},
        "answer": "nine",
        "options": [
            {"value": "nine", "label": {"ru": "в 9:00", "en": "at 9:00"}},
            {"value": "nine_thirty", "label": {"ru": "в 9:30", "en": "at 9:30"}},
            {"value": "ten", "label": {"ru": "в 10:00", "en": "at 10:00"}}
        ]
    },
    {
        "id": "n3-listening-8",
        "title": {"ru": "忘れ物", "en": "A forgotten item"},
        "dialogue": [
            "A: しまった。電車に傘を忘れてしまった。",
            "B: 駅の窓口に聞いてみたら？届いているかもしれないよ。",
            "A: そうだね。今から行ってみる。"
        ],
        "question": {"ru": "Что A собирается сделать дальше?", "en": "What will A do next?"},
        "answer": "ask_station",
        "options": [
            {"value": "ask_station", "label": {"ru": "спросить в окне станции", "en": "ask at the station counter"}},
            {"value": "buy_new", "label": {"ru": "сразу купить новый зонт", "en": "buy a new umbrella immediately"}},
            {"value": "go_home", "label": {"ru": "пойти домой", "en": "go home"}}
        ]
    },
    {
        "id": "n3-listening-9",
        "title": {"ru": "店で", "en": "At the shop"},
        "dialogue": [
            "店員: この商品は人気ですが、少し高いです。",
            "客: もう少し安いものはありますか。",
            "店員: こちらは値段が低い一方で、機能は十分です。",
            "客: では、それにします。"
        ],
        "question": {"ru": "Почему покупатель выбрал другой товар?", "en": "Why did the customer choose another item?"},
        "answer": "cheaper_enough",
        "options": [
            {"value": "cheaper_enough", "label": {"ru": "он дешевле, но функций хватает", "en": "it is cheaper but still has enough functions"}},
            {"value": "same_price", "label": {"ru": "он по той же цене", "en": "it has the same price"}},
            {"value": "gift", "label": {"ru": "ему подарили скидку", "en": "a discount was gifted"}}
        ]
    },
    {
        "id": "n3-listening-10",
        "title": {"ru": "勉強方法", "en": "A study method"},
        "dialogue": [
            "A: N3の文法が多すぎて困っているんだ。",
            "B: 一つずつ例文で覚えるといいよ。Flash Kanjiなら、文法だけでなく漢字も一緒に復習できるし。",
            "A: なるほど。今日からそうしてみる。"
        ],
        "question": {"ru": "Какой способ рекомендует B?", "en": "What method does B recommend?"},
        "answer": "one_by_one_examples",
        "options": [
            {"value": "one_by_one_examples", "label": {"ru": "учить по одному через примеры", "en": "learn one by one through example sentences"}},
            {"value": "memorize_list", "label": {"ru": "зубрить сухой список", "en": "memorize a dry list"}},
            {"value": "stop_grammar", "label": {"ru": "перестать заниматься грамматикой", "en": "stop studying grammar"}}
        ]
    },
]


def localized_pair(ru: str, en: str | None = None) -> dict[str, str]:
    return {"ru": ru, "en": en or ru}


def read_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))


def write_json(path: Path, payload: Any) -> None:
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


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


def parse_lesson_rows(lines: list[str]) -> list[dict[str, Any]]:
    start = 9
    end = lines.index("Примеры предложений")
    blocks = lines[start:end]
    rows: list[dict[str, Any]] = []
    for index in range(0, min(len(blocks), 30), 3):
        kanji = blocks[index].strip()
        meaning = blocks[index + 1].strip()
        word_parts = [part.strip() for part in blocks[index + 2].split(";") if part.strip()]
        words = [parse_word_entry(part) for part in word_parts]
        rows.append({"kanji": kanji, "meaning": meaning, "words": words})
    return rows[:10]


def generated_lesson_sentences(rows: list[dict[str, Any]], lesson_order: int) -> list[dict[str, str]]:
    if lesson_order == 1:
        return deepcopy(LESSON1_SENTENCES)
    first = rows[0]["words"][0]
    second = rows[1]["words"][0]
    third = rows[2]["words"][0]
    return [
        {
            "jp": f"この{first['word']}について、もう少し詳しく説明してください。",
            "reading": f"この{first['reading']}について、もうすこしくわしくせつめいしてください。",
            "ru": f"Пожалуйста, объясните подробнее тему «{first['translation_ru']}».",
            "en": f"Please explain the topic of {first['translation_en']} in more detail.",
        },
        {
            "jp": f"最近、{second['word']}に関する記事を読みました。",
            "reading": f"さいきん、{second['reading']}にかんするきじをよみました。",
            "ru": f"Недавно я прочитал статью, связанную с темой «{second['translation_ru']}».",
            "en": f"Recently I read an article related to {second['translation_en']}.",
        },
        {
            "jp": f"もし{third['word']}が必要なら、先に準備しておきます。",
            "reading": f"もし{third['reading']}がひつようなら、さきにじゅんびしておきます。",
            "ru": f"Если понадобится {third['translation_ru']}, я подготовлюсь заранее.",
            "en": f"If {third['translation_en']} is needed, I will prepare in advance.",
        },
        {
            "jp": "この問題は簡単そうに見えますが、実は複雑です。",
            "reading": "このもんだいはかんたんそうにみえますが、じつはふくざつです。",
            "ru": "Эта задача выглядит простой, но на самом деле она сложная.",
            "en": "This problem looks simple, but in fact it is complex.",
        },
        {
            "jp": "Flash Kanjiで言葉と文を一緒に覚えましょう。",
            "reading": "フラッシュカンジでことばとぶんをいっしょにおぼえましょう。",
            "ru": "Запоминай слова и предложения вместе во Flash Kanji.",
            "en": "Learn words and sentences together in Flash Kanji.",
        },
    ]


def lesson_grammar_focus(order: int) -> list[str]:
    if order == 1:
        return ["について", "に関して", "なら", "そうに見える", "実は"]
    start = ((order - 2) * 2) % len(FLAT_GRAMMAR_PATTERNS)
    return [FLAT_GRAMMAR_PATTERNS[(start + offset) % len(FLAT_GRAMMAR_PATTERNS)] for offset in range(3)]


def lesson_mini_reading_text(rows: list[dict[str, Any]], lesson_order: int) -> dict[str, Any]:
    if lesson_order == 1:
        return {
            "id": "n3-reading-1",
            "lessonId": "n3-lesson-1",
            "title": {"ru": "Урок 1: мини-чтение", "en": "Lesson 1 mini reading"},
            "jp": "最近、日本語の勉強に関する記事を読みました。この記事では、単語だけでなく文の中で覚えることが大切だと説明していました。彼はFlash Kanjiで復習するようにしていて、実はその方法が一番合うと言っていました。私はその意見に対して、本当にそうだと思います。",
            "ru": "Недавно я прочитал статью об изучении японского. В ней объяснялось, что важно запоминать не только отдельные слова, но и предложения. Автор писал, что старается повторять через Flash Kanji и что этот способ подходит ему лучше всего. Я тоже думаю, что это правда.",
            "questions": [
                {
                    "prompt": {"ru": "О чём эта статья?", "en": "What is this article about?"},
                    "answer": "study_method",
                    "options": [
                        {"value": "study_method", "label": {"ru": "о способе учить японский через слова и предложения", "en": "about learning Japanese through words and sentences"}},
                        {"value": "politics", "label": {"ru": "о политике", "en": "about politics"}},
                        {"value": "travel", "label": {"ru": "о путешествии", "en": "about a trip"}}
                    ]
                },
                {
                    "prompt": {"ru": "Что автор делает через Flash Kanji?", "en": "What does the author do with Flash Kanji?"},
                    "answer": "review",
                    "options": [
                        {"value": "review", "label": {"ru": "повторяет слова и предложения", "en": "reviews words and sentences"}},
                        {"value": "sleep", "label": {"ru": "ложится спать", "en": "goes to sleep"}},
                        {"value": "shop", "label": {"ru": "идёт в магазин", "en": "goes shopping"}}
                    ]
                },
                {
                    "prompt": {"ru": "Почему этот способ кажется удобным?", "en": "Why does this method feel useful?"},
                    "answer": "natural_context",
                    "options": [
                        {"value": "natural_context", "label": {"ru": "потому что слова сразу видны в контексте", "en": "because words appear immediately in context"}},
                        {"value": "shorter", "label": {"ru": "потому что там меньше кандзи", "en": "because there are fewer kanji"}},
                        {"value": "faster_test", "label": {"ru": "потому что тесты исчезают", "en": "because tests disappear"}}
                    ]
                },
                {
                    "prompt": {"ru": "Какую связку можно увидеть в тексте?", "en": "Which connector appears in the text?"},
                    "answer": "に関して",
                    "options": [
                        {"value": "に関して", "label": {"ru": "に関して", "en": "に関して"}},
                        {"value": "だけでなく", "label": {"ru": "だけでなく", "en": "だけでなく"}},
                        {"value": "ものなら", "label": {"ru": "ものなら", "en": "ものなら"}}
                    ]
                },
                {
                    "prompt": {"ru": "Какое мнение выражает рассказчик?", "en": "What opinion does the narrator express?"},
                    "answer": "agrees",
                    "options": [
                        {"value": "agrees", "label": {"ru": "он согласен с этим способом", "en": "they agree with the method"}},
                        {"value": "rejects", "label": {"ru": "он полностью против", "en": "they reject it"}},
                        {"value": "neutral", "label": {"ru": "у него нет мнения", "en": "they have no opinion"}}
                    ]
                }
            ]
        }
    first = rows[0]["words"][0]
    second = rows[1]["words"][0]
    third = rows[2]["words"][0]
    fourth = rows[3]["words"][0]
    jp = (
        f"最近、{second['word']}に関する短い記事を読みました。"
        f"{first['word']}だけでなく、{third['word']}や{fourth['word']}も一緒に覚えると、文章の流れが分かりやすくなります。"
        "毎日少しずつ復習するようにすると、N3の内容でも落ち着いて読めるようになります。"
    )
    ru = (
        f"Недавно я прочитал короткую статью о теме «{second['translation_ru']}». "
        f"Если учить не только «{first['translation_ru']}», но и {third['translation_ru']} и {fourth['translation_ru']} вместе, "
        "понимать ход текста становится легче. Если понемногу повторять каждый день, даже тексты уровня N3 читаются спокойнее."
    )
    return {
        "id": f"n3-reading-{lesson_order}",
        "lessonId": f"n3-lesson-{lesson_order}",
        "title": {"ru": f"Урок {lesson_order}: мини-чтение", "en": f"Lesson {lesson_order} mini reading"},
        "jp": jp,
        "ru": ru,
        "questions": [
            {
                "prompt": {"ru": "Что помогает лучше понимать поток текста?", "en": "What helps you follow the flow of the text?"},
                "answer": "learn_together",
                "options": [
                    {"value": "learn_together", "label": {"ru": "учить слова и связки вместе", "en": "learning words and connectors together"}},
                    {"value": "single_list", "label": {"ru": "зубрить только отдельный список", "en": "memorizing only a single list"}},
                    {"value": "skip_review", "label": {"ru": "пропускать повторение", "en": "skipping review"}}
                ]
            },
            {
                "prompt": {"ru": "Какой режим советует текст?", "en": "What rhythm does the text recommend?"},
                "answer": "daily_review",
                "options": [
                    {"value": "daily_review", "label": {"ru": "повторять понемногу каждый день", "en": "review a little every day"}},
                    {"value": "monthly_only", "label": {"ru": "заниматься только раз в месяц", "en": "study only once a month"}},
                    {"value": "no_context", "label": {"ru": "учить без контекста", "en": "study without context"}}
                ]
            }
        ]
    }


def lesson_listening_item(lesson: dict[str, Any], lesson_order: int) -> dict[str, Any]:
    if lesson_order > 6:
        return {}
    first_sentence = lesson["sentences"][0]
    second_sentence = lesson["sentences"][3] if len(lesson["sentences"]) > 3 else lesson["sentences"][1]
    return {
        "id": f"n3-listening-{lesson_order}",
        "lessonId": lesson["id"],
        "title": {"ru": f"Урок {lesson_order}: слушаем контекст", "en": f"Lesson {lesson_order}: listening to context"},
        "dialogue": [
            f"A: {first_sentence['jp']}",
            f"B: {second_sentence['jp']}",
            "A: Flash Kanjiで一緒に復習しましょう。"
        ],
        "question": {"ru": "Какой главный режим предлагает этот мини-диалог?", "en": "What main study mode does this mini-dialogue suggest?"},
        "answer": "context_review",
        "options": [
            {"value": "context_review", "label": {"ru": "учить через контекст и повторение", "en": "learn through context and review"}},
            {"value": "memorize_without_words", "label": {"ru": "учить без слов и предложений", "en": "learn without words or sentences"}},
            {"value": "ignore_grammar", "label": {"ru": "игнорировать грамматику", "en": "ignore grammar"}}
        ]
    }


def find_sentence_for_card(lesson_sentences: list[dict[str, str]], row: dict[str, Any]) -> dict[str, str]:
    row_words = [item["word"] for item in row["words"]]
    for sentence in lesson_sentences:
        if any(word and word in sentence["jp"] for word in row_words):
            return sentence
    return lesson_sentences[min(len(lesson_sentences) - 1, 2)]


def fallback_stroke_order(kanji: str) -> list[str]:
    return [
        f"Сначала посмотри на форму {kanji} целиком.",
        "Пиши сверху вниз и слева направо, не разрывая ритм движения.",
        "После записи проговори слово-опору и пример из урока."
    ]


def parse_grammar_items(reader: PdfReader) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    order = 1
    for page_offset, (group_title, patterns) in enumerate(GRAMMAR_GROUPS):
        page_index = 87 + page_offset
        lines = [line.strip() for line in (reader.pages[page_index].extract_text() or "").splitlines() if line.strip()]
        exercise_index = lines.index("Упражнения")
        cursor = 8
        page_chunks: list[dict[str, str]] = []
        for pattern_index, pattern in enumerate(patterns):
            start = lines.index(pattern, cursor)
            next_markers = [exercise_index]
            if pattern_index + 1 < len(patterns):
                next_markers.append(lines.index(patterns[pattern_index + 1], start + 1))
            end = min(next_markers)
            chunk = lines[start + 1:end]
            example_index = next((idx for idx, value in enumerate(chunk) if "。" in value), len(chunk) - 1)
            formula_index = max(0, example_index - 1)
            meaning = " ".join(chunk[:formula_index]).strip()
            formula = chunk[formula_index].strip() if chunk else ""
            example_jp = chunk[example_index].strip() if chunk else ""
            example_ru = " ".join(chunk[example_index + 1:]).strip()
            page_chunks.append({
                "pattern": pattern,
                "meaning": meaning,
                "formula": formula,
                "example_jp": example_jp,
                "example_ru": example_ru,
            })
            cursor = end
        for chunk in page_chunks:
            display_pattern = "そうだ / そうに見える" if chunk["pattern"] == "そうだ" else chunk["pattern"]
            wrong_options = [other["meaning"] for other in page_chunks if other["pattern"] != chunk["pattern"]]
            options = [chunk["meaning"], *wrong_options[:3]]
            items.append({
                "id": f"n3-grammar-{order:02d}",
                "level": "N3",
                "order": order,
                "group": localized_pair(group_title, group_title),
                "pattern": display_pattern,
                "title": localized_pair(chunk["meaning"]),
                "explanation": localized_pair(
                    f"{display_pattern} помогает выражать значение «{chunk['meaning']}» в блоке «{group_title}».",
                    f"{display_pattern} expresses the idea of {chunk['meaning']} in the group {group_title}."
                ),
                "formula": chunk["formula"],
                "examples": [{
                    "jp": chunk["example_jp"],
                    "reading": "",
                    "ru": chunk["example_ru"],
                    "en": chunk["example_ru"],
                }],
                "question": localized_pair(f"Что лучше всего передаёт {display_pattern}?"),
                "answer": chunk["meaning"],
                "options": options,
            })
            order += 1
    return items


def build_lessons_and_cards(reader: PdfReader, old_catalog: dict[str, Any]) -> tuple[list[dict[str, Any]], list[dict[str, Any]], list[dict[str, Any]], list[dict[str, Any]]]:
    old_by_kanji = {item["kanji"]: item for item in old_catalog["items"]}
    lessons: list[dict[str, Any]] = []
    cards: list[dict[str, Any]] = []
    lesson_readings: list[dict[str, Any]] = []
    lesson_listenings: list[dict[str, Any]] = []
    synthetic_id = 300001
    global_number = 1

    for lesson_order, page_index in enumerate(range(12, 85, 2), start=1):
        lines = [line.strip() for line in (reader.pages[page_index].extract_text() or "").splitlines() if line.strip()]
        title_line = lines[3]
        theme = title_line.split(". ", 1)[1].strip()
        goal_ru = lines[5].split(": ", 1)[1].strip()
        rows = parse_lesson_rows(lines)
        lesson_id = f"n3-lesson-{lesson_order}"
        sentences = generated_lesson_sentences(rows, lesson_order)
        grammar_focus = lesson_grammar_focus(lesson_order)
        mini_reading_id = f"n3-reading-{lesson_order}" if lesson_order <= 6 else None
        lesson = {
            "id": lesson_id,
            "level": "N3",
            "order": lesson_order,
            "title": {"ru": theme, "en": f"N3 Lesson {lesson_order}"},
            "theme": {"ru": theme, "en": f"N3 Lesson {lesson_order}"},
            "kanji": [row["kanji"] for row in rows],
            "goal": {"ru": goal_ru, "en": "Study the lesson through kanji, words, grammar, sentence, and review."},
            "durationMinutes": 40,
            "grammarFocus": grammar_focus,
            "grammarCards": deepcopy(LESSON1_GRAMMAR_CARDS) if lesson_order == 1 else [],
            "sentences": sentences,
            "writing": [row["kanji"] for row in rows[:3]],
            "reviewAfterDays": LESSON_REVIEW_DAYS,
            "miniReadingId": mini_reading_id,
        }
        lessons.append(lesson)

        if lesson_order <= 6:
            lesson_readings.append(lesson_mini_reading_text(rows, lesson_order))
            listening_item = lesson_listening_item(lesson, lesson_order)
            if listening_item:
                lesson_listenings.append(listening_item)

        for row in rows:
            old_item = deepcopy(old_by_kanji.get(row["kanji"], {}))
            course_card_id = str(old_item.get("courseCardId") or old_item.get("id") or f"n3c-{global_number:03d}")
            if not old_item:
                course_card_id = f"n3c-{global_number:03d}"
            sentence = find_sentence_for_card(sentences, row)
            readings = deepcopy(old_item.get("readings") or {})
            if not readings:
                readings = {
                    "onyomi": [],
                    "kunyomi": [],
                    "hiragana": [word["reading"] for word in row["words"] if word["reading"]],
                    "romaji": [],
                    "nanori": [],
                }
            example_words = [
                {
                    "word": word["word"],
                    "reading": word["reading"],
                    "romaji": word["romaji"],
                    "translation_ru": word["translation_ru"],
                    "translation_en": word["translation_en"],
                }
                for word in row["words"][:2]
            ]
            cards.append({
                "id": course_card_id,
                "courseCardId": course_card_id,
                "number": global_number,
                "kanji": row["kanji"],
                "meaning": {"ru": row["meaning"], "en": row["meaning"]},
                "readings": readings,
                "jlpt": "N3",
                "level": "N3",
                "lessonId": lesson_id,
                "lessonTitle": theme,
                "lessonTitleEn": f"N3 Lesson {lesson_order}",
                "strokes": int(old_item.get("strokes") or 0),
                "strokeOrder": deepcopy(old_item.get("strokeOrder") or fallback_stroke_order(row["kanji"])),
                "words": example_words,
                "examples": example_words,
                "hintRu": (
                    f"Свяжи {row['kanji']} с идеей «{row['meaning']}». "
                    f"На N3 полезно сразу проговорить {example_words[0]['word']} и {example_words[1]['word']}."
                    if len(example_words) > 1
                    else f"Свяжи {row['kanji']} с идеей «{row['meaning']}» и сразу проговори слово-опору."
                ),
                "apps": deepcopy(old_item.get("apps") or ["Flash Kanji", "Browser", "Reader"]),
                "interfaceUse": f"N3: {theme}. Закрепи знак через слово, грамматику и короткий текст.",
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
                "grammarLinks": grammar_focus[:3],
                "example": {
                    "jp": sentence["jp"],
                    "reading": sentence["reading"],
                    "ru": sentence["ru"],
                    "en": sentence["en"],
                },
            })
            global_number += 1
            if not old_item:
                synthetic_id += 1
    return lessons, cards, lesson_readings, lesson_listenings


def build_meta() -> dict[str, Any]:
    return {
        "version": 1,
        "level": "N3",
        "title": {"ru": "JLPT N3", "en": "JLPT N3"},
        "description": {
            "ru": "N3 — мост к среднему японскому: больше текста, причин, мнений и выводов.",
            "en": "N3 is the bridge to intermediate Japanese: more text, reasons, opinions, and conclusions."
        },
        "principle": {
            "ru": "кандзи → слово → грамматика → предложение → абзац → чтение → вывод → SRS",
            "en": "kanji → word → grammar → sentence → paragraph → reading → conclusion → SRS"
        },
        "kanjiCount": 370,
        "lessonCount": 37,
        "kanjiPerLesson": 10,
        "grammarCount": 80,
        "readingCount": 10,
        "listeningCount": 10,
        "pdfUrl": "docs/flashkanji_N3_textbook_flashkanji_space.pdf",
        "reviewPlan": [
            {"day": "1–10", "label": {"ru": "уроки 1–10 + грамматика через день", "en": "lessons 1–10 + grammar every other day"}},
            {"day": "11–20", "label": {"ru": "уроки 11–20 + 20 старых карточек и 10 новых в день", "en": "lessons 11–20 + 20 old cards and 10 new ones each day"}},
            {"day": "21–30", "label": {"ru": "уроки 21–30 + старт коротких чтений", "en": "lessons 21–30 + short reading practice"}},
            {"day": "31–37", "label": {"ru": "уроки 31–37 + повтор ошибок по урокам", "en": "lessons 31–37 + repeat lesson mistakes"}},
            {"day": "38–45", "label": {"ru": "грамматика 1–16 + по предложению на форму", "en": "grammar 1–16 + one sentence per form"}},
            {"day": "46–52", "label": {"ru": "чтение и аудирование + пересказ", "en": "reading and listening + retelling"}},
            {"day": "53–60", "label": {"ru": "финальный тест + исправление слабых мест", "en": "final test + correcting weak areas"}},
        ],
        "n5Bridge": [
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
            "N4: てくれる / てもらう / てあげる"
        ],
        "rewards": {
            "addToSrsXp": 6,
            "knowXp": 8,
            "hardXp": 2,
            "exerciseXp": 10,
            "exerciseMoon": 1,
            "grammarXp": 11,
            "grammarMoon": 1,
            "lessonCompleteXp": 75,
            "lessonCompleteMoon": 9,
            "readingXp": 38,
            "readingMoon": 4,
            "listeningXp": 34,
            "listeningMoon": 4,
            "finalTestXp": 220,
            "finalTestMoon": 40
        }
    }


def build_exercises() -> dict[str, Any]:
    return {
        "version": 1,
        "level": "N3",
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
            {"id": "all", "title": {"ru": "Весь N3", "en": "All N3"}},
        ]
    }


def build_final_test() -> dict[str, Any]:
    return {
        "version": 1,
        "level": "N3",
        "title": {"ru": "Финальный тест Flash Kanji N3", "en": "Flash Kanji N3 Final Test"},
        "description": {
            "ru": "Смешанный тест по 370 кандзи, словам, грамматике и чтению уровня N3.",
            "en": "A mixed test across 370 N3 kanji, words, grammar, and reading."
        },
        "questionCount": 40,
        "passingPercent": 80,
        "kanjiPool": ["合", "実", "戦", "政", "情", "変", "選", "続", "論", "勝", "資", "残", "支", "認", "難", "頼", "収", "働", "限", "疑"],
        "grammarPool": ["ために", "ように", "はずだ", "せいで", "とは限らない", "ほど", "らしい", "がち", "うちに", "にとって"],
        "readingPool": [f"n3-reading-{idx}" for idx in range(1, 11)],
        "types": ["meaning", "reading", "sentence", "kanji", "word", "grammar", "mini-reading", "srs"],
        "rewards": {
            "completeXp": 220,
            "completeMoon": 40,
            "passXp": 110,
            "passMoon": 18
        }
    }


def build_tests_compat() -> dict[str, Any]:
    return {
        "version": 1,
        "level": "N3",
        "items": [
            {
                "kanji": "合",
                "question": {"ru": "Что означает этот кандзи?", "en": "What does this kanji mean?"},
                "answer": {"ru": "соединяться; подходить", "en": "join; fit"},
                "options": ["соединяться; подходить", "место", "уступка", "зуб"],
                "lessonId": "n3-lesson-1"
            },
            {
                "kanji": "関",
                "question": {"ru": "Какое чтение подходит слову 関係?", "en": "Which reading matches 関係?"},
                "answer": {"ru": "かんけい", "en": "かんけい"},
                "options": ["かんけい", "げんざい", "けいけん", "しんごう"],
                "lessonId": "n3-lesson-1"
            }
        ]
    }


def update_jlpt_index() -> None:
    payload = read_json(JLPT_INDEX_PATH)
    lesson_ids = [f"n3-lesson-{index}" for index in range(1, 38)]
    for item in payload["items"]:
        if item.get("jlpt") != "N3":
            continue
        item.update({
            **deepcopy(N3_TEXTBOOK_ENTRY),
            "title": {"ru": "N3: мост к среднему уровню", "en": "N3: Bridge to the intermediate level"},
            "displayTitle": {"ru": "Мост к среднему уровню", "en": "Bridge to the intermediate level"},
            "lessonIds": lesson_ids,
            "lessonCount": 37,
            "kanjiCount": 370,
            "cardCount": 370,
            "files": {
                "meta": "data/jlpt/n3/meta.json",
                "kanji": "data/jlpt/n3/kanji.json",
                "lessons": "data/jlpt/n3/lessons.json",
                "grammar": "data/jlpt/n3/grammar.json",
                "exercises": "data/jlpt/n3/exercises.json",
                "reading": "data/jlpt/n3/reading.json",
                "listening": "data/jlpt/n3/listening.json",
                "finalTest": "data/jlpt/n3/final-test.json",
                "tests": "data/jlpt/n3/tests.json",
            }
        })
    write_json(JLPT_INDEX_PATH, payload)


def update_textbook_index() -> None:
    payload = read_json(TEXTBOOK_INDEX_PATH)
    for item in payload["levels"]:
        if item.get("jlpt") != "N3":
            continue
        item.update({
            "title": {"ru": "Flash Kanji N3", "en": "Flash Kanji N3"},
            "description": {
                "ru": "Интерактивный N3-учебник: 370 кандзи, 37 уроков, 80 грамматических конструкций, чтение, аудирование и финальный тест.",
                "en": "Interactive N3 textbook: 370 kanji, 37 lessons, 80 grammar points, reading, listening, and a final test."
            },
            "kanjiCount": 370,
            "lessonCount": 37,
            "pdfUrl": "docs/flashkanji_N3_textbook_flashkanji_space.pdf",
            "lessonFiles": [f"data/jlpt/n3/lessons.json#{index}" for index in range(1, 38)]
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
    if not any(item.get("id") == "jlpt_n3" for item in categories):
        categories.append({"id": "jlpt_n3", "title": {"ru": "JLPT N3", "en": "JLPT N3"}, "icon": "star"})
    else:
        for category in categories:
            if category.get("id") == "jlpt_n3":
                category.update({"title": {"ru": "JLPT N3", "en": "JLPT N3"}, "icon": "star"})

    achievements = payload.get("achievements", [])
    for achievement in [
        {
            "id": "n3_opened",
            "category": "jlpt_n3",
            "title": {"ru": "N3: мост открыт", "en": "N3: Bridge opened"},
            "description": {"ru": "Открыть интерактивный модуль N3.", "en": "Open the interactive N3 module."},
            "icon": "star",
            "kind": "n3Opened",
            "target": 1,
            "rewardXp": 30,
            "rewardFragments": 6,
        },
        {
            "id": "n3_first_lesson",
            "category": "jlpt_n3",
            "title": {"ru": "N3: первый урок", "en": "N3: First lesson"},
            "description": {"ru": "Пройти первый урок N3.", "en": "Complete the first N3 lesson."},
            "icon": "star",
            "kind": "n3LessonComplete",
            "target": 1,
            "rewardXp": 60,
            "rewardFragments": 12,
        },
        {
            "id": "n3_10_lessons",
            "category": "jlpt_n3",
            "title": {"ru": "N3: первая десятка", "en": "N3: First ten"},
            "description": {"ru": "Пройти 10 уроков N3.", "en": "Complete 10 N3 lessons."},
            "icon": "star",
            "kind": "n3LessonsComplete",
            "target": 10,
            "rewardXp": 180,
            "rewardFragments": 34,
        },
        {
            "id": "n3_18_lessons",
            "category": "jlpt_n3",
            "title": {"ru": "N3: середина курса", "en": "N3: Mid-course"},
            "description": {"ru": "Пройти 18 уроков N3.", "en": "Complete 18 N3 lessons."},
            "icon": "star",
            "kind": "n3LessonsComplete",
            "target": 18,
            "rewardXp": 260,
            "rewardFragments": 46,
        },
        {
            "id": "n3_complete",
            "category": "jlpt_n3",
            "title": {"ru": "N3 завершён", "en": "N3 complete"},
            "description": {"ru": "Пройти все 37 уроков N3.", "en": "Complete all 37 N3 lessons."},
            "icon": "star",
            "kind": "n3LessonsComplete",
            "target": 37,
            "rewardXp": 360,
            "rewardFragments": 70,
        },
        {
            "id": "n3_all_srs",
            "category": "jlpt_n3",
            "title": {"ru": "370 кандзи N3", "en": "370 N3 kanji"},
            "description": {"ru": "Добавить все 370 кандзи N3 в SRS.", "en": "Add all 370 N3 kanji to SRS."},
            "icon": "star",
            "kind": "n3SrsAll",
            "target": 370,
            "rewardXp": 320,
            "rewardFragments": 60,
        },
        {
            "id": "n3_grammar_20",
            "category": "jlpt_n3",
            "title": {"ru": "20 конструкций N3", "en": "20 N3 grammar points"},
            "description": {"ru": "Освоить 20 конструкций N3.", "en": "Complete 20 N3 grammar points."},
            "icon": "star",
            "kind": "n3GrammarComplete",
            "target": 20,
            "rewardXp": 170,
            "rewardFragments": 30,
        },
        {
            "id": "n3_grammar_all",
            "category": "jlpt_n3",
            "title": {"ru": "80 конструкций N3", "en": "80 N3 grammar points"},
            "description": {"ru": "Освоить все 80 конструкций N3.", "en": "Complete all 80 N3 grammar points."},
            "icon": "star",
            "kind": "n3GrammarComplete",
            "target": 80,
            "rewardXp": 320,
            "rewardFragments": 58,
        },
        {
            "id": "n3_reader",
            "category": "jlpt_n3",
            "title": {"ru": "Читатель N3", "en": "N3 reader"},
            "description": {"ru": "Пройти 10 reading-текстов N3.", "en": "Complete 10 N3 reading texts."},
            "icon": "star",
            "kind": "n3ReadingComplete",
            "target": 10,
            "rewardXp": 190,
            "rewardFragments": 34,
        },
        {
            "id": "n3_voice",
            "category": "jlpt_n3",
            "title": {"ru": "Голос N3", "en": "N3 voice"},
            "description": {"ru": "Пройти 10 listening-скриптов N3.", "en": "Complete 10 N3 listening scripts."},
            "icon": "star",
            "kind": "n3ListeningComplete",
            "target": 10,
            "rewardXp": 190,
            "rewardFragments": 34,
        },
        {
            "id": "n3_writing_50",
            "category": "jlpt_n3",
            "title": {"ru": "Письмо под луной III", "en": "Moonlit writing III"},
            "description": {"ru": "Выполнить 50 письменных практик N3.", "en": "Complete 50 N3 writing practices."},
            "icon": "star",
            "kind": "n3Writing",
            "target": 50,
            "rewardXp": 210,
            "rewardFragments": 38,
        },
        {
            "id": "n3_paragraph_meaning_20",
            "category": "jlpt_n3",
            "title": {"ru": "Смысл абзаца", "en": "Paragraph meaning"},
            "description": {"ru": "Дать 20 правильных ответов по смыслу абзацев и чтений N3.", "en": "Give 20 correct paragraph-meaning answers in N3 readings."},
            "icon": "star",
            "kind": "n3ComprehensionAnswers",
            "target": 20,
            "rewardXp": 170,
            "rewardFragments": 30,
        },
        {
            "id": "n3_final_pass",
            "category": "jlpt_n3",
            "title": {"ru": "N3 без паники", "en": "N3 without panic"},
            "description": {"ru": "Пройти финальный тест N3.", "en": "Pass the N3 final test."},
            "icon": "star",
            "kind": "n3FinalPass",
            "target": 1,
            "rewardXp": 260,
            "rewardFragments": 52,
        },
    ]:
        upsert_achievement(achievements, achievement)

    payload["categories"] = categories
    payload["achievements"] = achievements
    write_json(ACHIEVEMENTS_PATH, payload)


def main() -> None:
    old_catalog = read_json(OLD_KANJI_PATH)
    reader = PdfReader(str(PDF_PATH))

    lessons, cards, lesson_readings, lesson_listenings = build_lessons_and_cards(reader, old_catalog)
    grammar_items = parse_grammar_items(reader)

    reading_items = lesson_readings + TEXTBOOK_READING_ITEMS
    listening_items = lesson_listenings + TEXTBOOK_LISTENING_ITEMS

    meta = build_meta()
    lessons_payload = {
        "version": 1,
        "level": "N3",
        "generatedAt": NOW,
        "textbook": {
            **deepcopy(N3_TEXTBOOK_ENTRY),
            "lessonIds": [lesson["id"] for lesson in lessons],
            "lessonCount": len(lessons),
            "kanjiCount": len(cards),
            "cardCount": len(cards),
            "files": {
                "meta": "data/jlpt/n3/meta.json",
                "kanji": "data/jlpt/n3/kanji.json",
                "lessons": "data/jlpt/n3/lessons.json",
                "grammar": "data/jlpt/n3/grammar.json",
                "exercises": "data/jlpt/n3/exercises.json",
                "reading": "data/jlpt/n3/reading.json",
                "listening": "data/jlpt/n3/listening.json",
                "finalTest": "data/jlpt/n3/final-test.json",
                "tests": "data/jlpt/n3/tests.json",
            },
        },
        "items": lessons,
    }
    kanji_payload = {
        "version": 1,
        "level": "N3",
        "generatedAt": NOW,
        "textbook": {
            **deepcopy(N3_TEXTBOOK_ENTRY),
            "lessonIds": [lesson["id"] for lesson in lessons],
            "lessonCount": len(lessons),
            "kanjiCount": len(cards),
            "cardCount": len(cards),
        },
        "items": cards,
    }
    grammar_payload = {"version": 1, "level": "N3", "generatedAt": NOW, "items": grammar_items}
    reading_payload = {"version": 1, "level": "N3", "generatedAt": NOW, "items": reading_items}
    listening_payload = {"version": 1, "level": "N3", "generatedAt": NOW, "items": listening_items}

    write_json(N3_DIR / "meta.json", meta)
    write_json(N3_DIR / "lessons.json", lessons_payload)
    write_json(N3_DIR / "kanji.json", kanji_payload)
    write_json(N3_DIR / "grammar.json", grammar_payload)
    write_json(N3_DIR / "exercises.json", build_exercises())
    write_json(N3_DIR / "reading.json", reading_payload)
    write_json(N3_DIR / "listening.json", listening_payload)
    write_json(N3_DIR / "final-test.json", build_final_test())
    write_json(N3_DIR / "tests.json", build_tests_compat())

    update_jlpt_index()
    update_textbook_index()
    update_achievements()

    print("Generated N3 data:")
    print(" lessons:", len(lessons))
    print(" cards:", len(cards))
    print(" grammar:", len(grammar_items))
    print(" reading:", len(reading_items))
    print(" listening:", len(listening_items))


if __name__ == "__main__":
    main()
