from __future__ import annotations

import copy
import gzip
import json
import math
import os
import re
import sys
import urllib.request
import xml.etree.ElementTree as ET
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path

try:
    import fitz  # PyMuPDF
except Exception as exc:  # pragma: no cover - local environment dependency
    raise SystemExit(f"PyMuPDF is required to generate N1 data: {exc}")


ROOT = Path(__file__).resolve().parents[1]
PROJECT_ROOT = ROOT.parent
PDF_PATH = ROOT / "docs" / "flashkanji_N1_textbook_flashkanji_space.pdf"
CURRENT_N1_KANJI_PATH = ROOT / "data" / "jlpt" / "n1" / "kanji.json"
CURRENT_N1_META_PATH = ROOT / "data" / "jlpt" / "n1" / "meta.json"
CURRENT_N1_LESSONS_PATH = ROOT / "data" / "jlpt" / "n1" / "lessons.json"
CURRENT_N1_EXERCISES_PATH = ROOT / "data" / "jlpt" / "n1" / "exercises.json"
CURRENT_N1_READING_PATH = ROOT / "data" / "jlpt" / "n1" / "reading.json"
CURRENT_N1_LISTENING_PATH = ROOT / "data" / "jlpt" / "n1" / "listening.json"
CURRENT_N1_TESTS_PATH = ROOT / "data" / "jlpt" / "n1" / "tests.json"
CURRENT_N1_FINAL_TEST_PATH = ROOT / "data" / "jlpt" / "n1" / "final-test.json"
LESSONS_GENERATED_DIR = ROOT / "data" / "lessons" / "generated"
LESSONS_MANIFEST_PATH = ROOT / "data" / "lessons.json"
LESSON_TRANSLATIONS_PATH = ROOT / "data" / "lessons" / "translations.json"
JLPT_INDEX_PATH = ROOT / "data" / "jlpt" / "index.json"
TEXTBOOKS_INDEX_PATH = ROOT / "data" / "textbooks" / "index.json"
REWARDS_PATH = ROOT / "data" / "rewards.json"
KANJI_META_PATH = ROOT / "data" / "kanji" / "meta.json"
KANJI_HINTS_PATH = ROOT / "data" / "kanji" / "hints.json"
KANJI_TRANSLATIONS_PATH = ROOT / "data" / "kanji" / "translations.json"
KANJI_PAGE_SOURCES_PATH = ROOT / "data" / "sources" / "kanji-page-sources.json"
KANJIDIC_GZ_PATH = ROOT / "tmp_kanjidic2.xml.gz"
if not KANJIDIC_GZ_PATH.exists():
    KANJIDIC_GZ_PATH = PROJECT_ROOT / "tmp_kanjidic2.xml.gz"

REMOTE_JLPT_KANJI_URL = "https://raw.githubusercontent.com/AnchorI/jlpt-kanji-dictionary/main/jlpt-kanji.json"
REMOTE_DICTIONARY_URLS = [
    f"https://raw.githubusercontent.com/AnchorI/jlpt-kanji-dictionary/main/dictionary_part_{part}.json"
    for part in range(1, 5)
]

APP_POOLS = {
    "N1": ["Government portals", "Academic databases", "Legal apps", "Financial terminals", "Enterprise tools"],
}

LESSON_COUNT = 53
KANJI_COUNT = 1047
CURRENT_KANJI_COUNT = 1047
CURRENT_LESSON_COUNT = 53
CURRENT_CARD_COUNT = 1047

USER_AGENT = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) FlashKanjiN1Generator/1.0"
}


def load_json(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def dump_json(path: Path, payload):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def repair_mojibake(value):
    if not isinstance(value, str):
        return value
    if not any(marker in value for marker in ("Р", "С", "вЂ", "Ð", "Ñ")):
        return value
    try:
        repaired = value.encode("cp1251").decode("utf-8")
    except Exception:
        return value
    if repaired.count("�") > value.count("�"):
        return value
    return repaired


def repair_structure(value):
    if isinstance(value, dict):
        return {key: repair_structure(item) for key, item in value.items()}
    if isinstance(value, list):
        return [repair_structure(item) for item in value]
    return repair_mojibake(value)


def fetch_json(url: str):
    request = urllib.request.Request(url, headers=USER_AGENT)
    with urllib.request.urlopen(request, timeout=60) as response:
        return json.load(response)


def extract_js_map(script_text: str, const_name: str):
    marker = f"const {const_name} = {{"
    start = script_text.index(marker) + len(marker)
    end = script_text.index("\n};", start)
    block = script_text[start:end]
    result = {}
    for raw_line in block.splitlines():
        line = raw_line.strip().rstrip(",")
        if not line or line.startswith("//"):
            continue
        match = re.match(r'(?P<key>.+?):\s*"(?P<value>(?:[^"\\]|\\.)*)"$', line)
        if not match:
            continue
        key = match.group("key").strip()
        if key.startswith('"') and key.endswith('"'):
            key = key[1:-1]
        value = bytes(match.group("value"), "utf-8").decode("unicode_escape")
        result[key] = value
    return result


def safe_float(value, default=None):
    try:
        return float(value)
    except Exception:
        return default


def safe_int(value, default=None):
    try:
        if value is None or value == "":
            return default
        return int(value)
    except Exception:
        return default


def remove_control_chars(text: str):
    return "".join(ch for ch in text if ch >= " " or ch in ("\n", "\t")).replace("\x00", "")


def normalize_spaces(text: str):
    return re.sub(r"\s+", " ", text or "").strip()


def strip_kanji_row_start(text: str):
    text = remove_control_chars(text or "").strip()
    return text


def split_readings(text: str):
    text = remove_control_chars(text or "")
    if not text:
        return []
    parts = []
    for chunk in re.split(r"[\s/]+", text):
        chunk = chunk.strip().strip("・")
        if chunk and chunk != "-":
            parts.append(chunk)
    return parts


def kata_to_hira(value: str):
    chars = []
    for char in value:
        code = ord(char)
        if 0x30A1 <= code <= 0x30F6:
            chars.append(chr(code - 0x60))
        else:
            chars.append(char)
    return "".join(chars)


def clean_reading(value: str):
    value = kata_to_hira(remove_control_chars(value or ""))
    value = value.replace("・", "").replace("･", "").replace(".", "").replace("-", "")
    value = re.sub(r"\s+", "", value)
    return value.split(",")[0].strip()


def build_romaji_map(script_text: str):
    mapping = {}
    marker = "const ROMAJI = {"
    start = script_text.index(marker) + len(marker)
    end = script_text.index("\n};", start)
    block = script_text[start:end]
    for raw_line in block.splitlines():
        line = raw_line.strip().rstrip(",")
        if not line or ":" not in line:
            continue
        key_part, value_part = line.split(":", 1)
        key = key_part.strip()
        value = value_part.strip()
        if value.startswith('"') and value.endswith('"'):
            value = value[1:-1]
        mapping[key] = value
    return mapping


def romanize_kana(value: str, romaji_map: dict[str, str]):
    text = clean_reading(value)
    if not text:
        return ""
    output = []
    i = 0
    while i < len(text):
        char = text[i]
        nxt = text[i + 1] if i + 1 < len(text) else ""
        pair = char + nxt
        if pair in romaji_map:
            output.append(romaji_map[pair])
            i += 2
            continue
        if char == "っ":
            if nxt:
                next_pair = nxt + (text[i + 2] if i + 2 < len(text) else "")
                next_romaji = romaji_map.get(next_pair) or romaji_map.get(nxt, "")
                output.append(next_romaji[:1])
            i += 1
            continue
        if char == "ー":
            if output:
                output[-1] = output[-1] + output[-1][-1]
            i += 1
            continue
        output.append(romaji_map.get(char, char))
        i += 1
    return "".join(output)


def romanize_reading(value: str, romaji_map: dict[str, str]):
    return " / ".join(
        romanize_kana(part.strip(), romaji_map)
        for part in str(value or "").split("/")
        if part.strip()
    )


def clean_gloss(value: str):
    value = normalize_spaces(remove_control_chars(value or ""))
    value = re.sub(r"^\d+\)\s*", "", value)
    value = re.sub(r"\{[^}]*\}", "", value)
    value = re.sub(r"^\s*[:;,\-]+", "", value)
    value = re.sub(r"\s*;\s*$", "", value)
    return value.strip()[:140]


def build_meaning_map(script_text: str):
    raw = extract_js_map(script_text, "MEANING_RU")
    return {key.lower(): value for key, value in raw.items()}


def translate_glosses(glosses: list[str], meaning_map: dict[str, str]):
    translated = []
    for gloss in glosses:
        gloss_clean = clean_gloss(gloss)
        if not gloss_clean:
            continue
        translated.append(meaning_map.get(gloss_clean.lower(), gloss_clean))
    return translated


def load_current_structure(path: Path):
    if not path.exists():
        return None
    return repair_structure(load_json(path))


def build_kanjidic_map():
    with gzip.open(KANJIDIC_GZ_PATH, "rb") as stream:
        root = ET.parse(stream).getroot()
    result = {}
    for character in root.findall("character"):
        literal = character.findtext("literal")
        if not literal:
            continue
        rm = character.find("reading_meaning")
        readings_on = []
        readings_kun = []
        nanori = []
        meanings = []
        if rm is not None:
            for group in rm.findall("rmgroup"):
                for reading in group.findall("reading"):
                    kind = reading.attrib.get("r_type")
                    text = reading.text or ""
                    if kind == "ja_on":
                        readings_on.append(text)
                    elif kind == "ja_kun":
                        readings_kun.append(text)
                for meaning in group.findall("meaning"):
                    if meaning.text:
                        meanings.append(meaning.text)
            for item in rm.findall("nanori"):
                if item.text:
                    nanori.append(item.text)
        misc = character.find("misc")
        result[literal] = {
            "literal": literal,
            "strokeCount": safe_int(misc.findtext("stroke_count") if misc is not None else None, 0),
            "grade": safe_int(misc.findtext("grade") if misc is not None else None, None),
            "freq": safe_int(misc.findtext("freq") if misc is not None else None, None),
            "jlpt": safe_int(misc.findtext("jlpt") if misc is not None else None, None),
            "readingsOn": readings_on,
            "readingsKun": readings_kun,
            "nanori": nanori,
            "meanings": meanings,
        }
    return result


def build_anchor_map():
    data = fetch_json(REMOTE_JLPT_KANJI_URL)
    by_kanji = {}
    n1_chars = []
    for item in data:
        kanji = item.get("kanji")
        if not kanji:
            continue
        by_kanji[kanji] = item
        if str(item.get("jlpt", "")).upper() == "N1":
            n1_chars.append(item)
    return by_kanji, n1_chars


def build_dictionary_index():
    entries = []
    for url in REMOTE_DICTIONARY_URLS:
        entries.extend(fetch_json(url))
    return entries


def index_examples(entries, selected_chars: set[str]):
    buckets = defaultdict(list)
    for entry in entries:
        word = str(entry.get("kanji") or "")
        if not word:
            continue
        chars = sorted(set(ch for ch in word if ch in selected_chars))
        if not chars:
            continue
        if len(word) == 1 and word in selected_chars:
            # Keep single-kanji entries for fallback, but they do not rank well.
            pass
        for char in chars:
            if len(word) == 1 and word == char:
                continue
            if len(buckets[char]) < 120:
                buckets[char].append(entry)
    for char, bucket in buckets.items():
        bucket.sort(key=score_example, reverse=True)
    return buckets


def score_example(entry):
    kanji = str(entry.get("kanji") or "")
    gloss_ru = " ".join(entry.get("glossary_ru") or [])
    gloss_en = " ".join(entry.get("glossary_en") or [])
    text = f"{kanji} {gloss_ru} {gloss_en}".strip()
    has_russian = 100000000 if entry.get("glossary_ru") else 0
    short_bonus = max(0, 8 - len(kanji)) * 5000000
    no_katakana = -8000000 if re.search(r"[\u30a0-\u30ff]", kanji) else 2000000
    no_rare = -6000000 if re.search(r"(кн\.|уст\.|прост\.|редк\.|связ\.|см\.|\{|\(\()", text, re.I) else 1500000
    starts_with_kanji = 1000000 if re.match(r"^[\u4e00-\u9fff]", kanji) else 0
    return has_russian + short_bonus + no_katakana + no_rare + starts_with_kanji


def page_lines(page):
    return [normalize_spaces(remove_control_chars(line)) for line in page.get_text("text").splitlines()]


def is_row_start(raw_line: str, cleaned_line: str):
    if not raw_line:
        return False
    if raw_line.startswith("\x00"):
        return True
    if cleaned_line in {"Кандзи", "ON", "KUN", "Meaning / подсказка", "Примеры предложений", "日本語", "Перевод"}:
        return False
    if len(cleaned_line) <= 3 and any("\u4e00" <= ch <= "\u9fff" for ch in cleaned_line):
        return True
    return False


def parse_page(pdf_lines, page_number, kanjidic_map, n1_candidates):
    lesson_title = ""
    lesson_goal = ""
    lesson_index = page_number - 47
    row_section_start = None
    sentences_start = None
    sentences_end = None
    for index, line in enumerate(pdf_lines):
        if line.startswith("Урок "):
            lesson_title = line
        elif line.startswith("Задача урока:"):
            lesson_goal = line
        elif line == "Meaning / подсказка":
            row_section_start = index + 1
        elif line == "Примеры предложений":
            sentences_start = index + 1
        elif line.startswith("Упражнения:"):
            sentences_end = index
            break
    if row_section_start is None:
        raise ValueError(f"Could not find row section on page {page_number}")
    if sentences_start is None:
        sentences_start = len(pdf_lines)
    if sentences_end is None:
        sentences_end = len(pdf_lines)

    row_boundaries = []
    for i in range(row_section_start, sentences_start):
        if is_row_start(pdf_lines[i], pdf_lines[i]):
            row_boundaries.append(i)
    rows = []
    taken = set()
    for idx, start in enumerate(row_boundaries):
        end = row_boundaries[idx + 1] if idx + 1 < len(row_boundaries) else sentences_start
        block = [line for line in pdf_lines[start:end] if line]
        if not block:
            continue
        row = parse_row_block(block, kanjidic_map, n1_candidates, taken)
        if row:
            rows.append(row)
            taken.add(row["kanji"])
    if not rows:
        raise ValueError(f"No rows parsed for page {page_number}")
    sentences = build_lesson_sentences(rows)
    lesson_match = re.search(r"Урок\s+(\d+)\.\s+N1 кандзи\s+(\d+)-(\d+)", lesson_title)
    if not lesson_match:
        raise ValueError(f"Could not parse lesson title on page {page_number}: {lesson_title}")
    lesson_no = int(lesson_match.group(1))
    start_index = int(lesson_match.group(2))
    end_index = int(lesson_match.group(3))
    return {
        "lessonNumber": lesson_no,
        "startIndex": start_index,
        "endIndex": end_index,
        "title": lesson_title,
        "goal": lesson_goal.replace("Задача урока:", "").strip(),
        "rows": rows,
        "sentences": sentences,
        "pageNumber": page_number,
        "lessonOrder": lesson_index,
    }


def parse_row_block(block, kanjidic_map, n1_candidates, taken):
    start_line = block[0]
    start_clean = strip_kanji_row_start(start_line)
    on_line = block[1] if len(block) > 1 else ""
    kun_line = block[2] if len(block) > 2 else ""
    meaning_lines = block[3:] if len(block) > 3 else []

    visible_kanji = "".join(ch for ch in start_clean if "\u4e00" <= ch <= "\u9fff")
    kanji = visible_kanji[:1]
    if not kanji:
        kanji = match_placeholder_row(on_line, kun_line, meaning_lines, kanjidic_map, n1_candidates, taken)
    if not kanji:
        return None

    return {
        "kanji": kanji,
        "on": on_line,
        "kun": kun_line,
        "meaning": " ".join(meaning_lines),
    }


def synthesize_row_from_candidate(entry, kanjidic_map):
    kanji = str(entry.get("kanji") or "").strip()
    dic = kanjidic_map.get(kanji, {})
    on = " ".join((dic.get("readingsOn") or [])[:3])
    kun = " ".join((dic.get("readingsKun") or [])[:3])
    meanings = dic.get("meanings") or []
    meaning = ", ".join(meanings[:4]) or str(entry.get("description") or "")
    return {
        "kanji": kanji,
        "on": on,
        "kun": kun,
        "meaning": meaning,
    }


def match_placeholder_row(on_line, kun_line, meaning_lines, kanjidic_map, n1_candidates, taken):
    query_on = [clean_reading(part) for part in split_readings(on_line)]
    query_kun = [clean_reading(part) for part in split_readings(kun_line)]
    query_meaning = normalize_spaces(" ".join(meaning_lines)).lower()
    best = None
    best_score = -10**9
    for entry in n1_candidates:
        kanji = entry["kanji"]
        if kanji in taken:
            continue
        dic = kanjidic_map.get(kanji)
        if not dic:
            continue
        score = 0
        readings_on = [clean_reading(item) for item in dic.get("readingsOn") or []]
        readings_kun = [clean_reading(item) for item in dic.get("readingsKun") or []]
        candidates = readings_on + readings_kun + [clean_reading(item) for item in dic.get("nanori") or []]
        for token in query_on + query_kun:
            if not token:
                continue
            if token in candidates:
                score += 60
            elif any(cand.startswith(token) or token.startswith(cand) for cand in candidates):
                score += 35
        meaning_tokens = {token for token in re.findall(r"[a-zA-Z]+", query_meaning)}
        meaning_pool = {token for token in re.findall(r"[a-zA-Z]+", " ".join(dic.get("meanings") or []).lower())}
        overlap = len(meaning_tokens & meaning_pool)
        score += overlap * 30
        if dic.get("strokeCount"):
            score -= abs(dic["strokeCount"] - max(1, len(query_on) + len(query_kun))) * 2
        if score > best_score:
            best_score = score
            best = kanji
    return best


def build_lesson_sentences(rows):
    kanji = [row["kanji"] for row in rows[:3]]
    while len(kanji) < 3:
        kanji.append(rows[0]["kanji"])
    return [
        {
            "jp": f"この資料では「{kanji[0]}」を含む語彙の使い方を確認します。",
            "reading": "",
            "ru": f"В этом материале проверяем употребление слов со знаком {kanji[0]}.",
            "en": f"We check how words with {kanji[0]} are used in context.",
        },
        {
            "jp": f"著者の主張を理解するには、「{kanji[1]}」の周辺語を文脈で読む必要があります。",
            "reading": "",
            "ru": f"Чтобы понять позицию автора, слова со знаком {kanji[1]} нужно читать в контексте.",
            "en": f"To understand the author's point, read the surrounding words with {kanji[1]} in context.",
        },
        {
            "jp": f"「{kanji[2]}」は単独で覚えるより、複合語と一緒に覚えたほうが定着します。",
            "reading": "",
            "ru": f"Знак {kanji[2]} лучше закрепляется не отдельно, а вместе со сложными словами.",
            "en": f"{kanji[2]} sticks better when you learn it together with compounds, not alone.",
        },
        {
            "jp": "根拠を確認した上で、自分の意見を短くまとめてください。",
            "reading": "",
            "ru": "Проверь основание и кратко сформулируй свое мнение.",
            "en": "Check the evidence first and then summarize your own opinion briefly.",
        },
        {
            "jp": "Flash Kanjiでは、読み・意味・文脈を一つのカードとして扱います。",
            "reading": "",
            "ru": "В Flash Kanji чтение, значение и контекст считаются одной карточкой.",
            "en": "In Flash Kanji, reading, meaning and context are treated as one card.",
        },
    ]


def normalize_example_item(example, meaning_fallback, romaji_map, reading_fallback=""):
    word = str(example.get("kanji") or "")
    reading = clean_reading(example.get("reading") or reading_fallback or "")
    if not reading:
        reading = clean_reading(reading_fallback or word)
    romaji = romanize_reading(reading, romaji_map)
    translation_ru = None
    translation_en = None
    glossary_ru = example.get("glossary_ru") or []
    glossary_en = example.get("glossary_en") or []
    if glossary_ru:
        translation_ru = clean_gloss(glossary_ru[0])
    if glossary_en:
        translation_en = clean_gloss(glossary_en[0])
    if not translation_ru:
        translation_ru = meaning_fallback
    if not translation_en:
        translation_en = meaning_fallback
    return {
        "word": word,
        "reading": reading,
        "romaji": romaji,
        "translation_ru": translation_ru,
        "translation_en": translation_en,
    }


def fallback_example(card_kanji, reading, meaning_text, romaji_map):
    reading_clean = clean_reading(reading)
    return {
        "word": f"{card_kanji}語",
        "reading": reading_clean,
        "romaji": romanize_reading(reading_clean, romaji_map),
        "translation_ru": meaning_text or f"слово со знаком {card_kanji}",
        "translation_en": meaning_text or f"a word with {card_kanji}",
    }


def normalize_examples(examples, reading_fallback, romaji_map):
    normalized = []
    for example in examples or []:
        item = copy.deepcopy(example)
        reading = clean_reading(item.get("reading") or reading_fallback or item.get("word") or "")
        item["reading"] = reading
        item["romaji"] = romanize_reading(reading, romaji_map)
        normalized.append(item)
    return normalized


def build_card_from_row(
    row,
    lesson_meta,
    card_id,
    base_card,
    anchor_by_kanji,
    kanjidic_map,
    examples_by_kanji,
    meaning_map,
    romaji_map,
):
    kanji = row["kanji"]
    dic = kanjidic_map.get(kanji, {})
    anchor = anchor_by_kanji.get(kanji, {})
    readings_on = split_readings(row["on"])
    readings_kun = split_readings(row["kun"])

    if base_card:
        card = copy.deepcopy(base_card)
    else:
        card = {}

    meaning_en = dic.get("meanings", [])[:4]
    meaning_ru = translate_glosses(meaning_en, meaning_map)
    meaning_join_ru = ", ".join(meaning_ru or meaning_en[:4] or [row["meaning"]]) or row["meaning"]
    meaning_join_en = ", ".join(meaning_en or [row["meaning"]]) or row["meaning"]

    primary_reading = ""
    if readings_kun:
        primary_reading = clean_reading(readings_kun[0])
    elif readings_on:
        primary_reading = clean_reading(readings_on[0])
    elif dic.get("readingsKun"):
        primary_reading = clean_reading(dic["readingsKun"][0])
    elif dic.get("readingsOn"):
        primary_reading = clean_reading(dic["readingsOn"][0])

    selected_examples = []
    for example in examples_by_kanji.get(kanji, [])[:2]:
        selected_examples.append(normalize_example_item(example, meaning_join_ru, romaji_map, primary_reading))
    if not selected_examples:
        selected_examples.append(fallback_example(kanji, primary_reading, meaning_join_ru, romaji_map))
    while len(selected_examples) < 2:
        selected_examples.append(fallback_example(kanji, primary_reading, meaning_join_ru, romaji_map))

    audio_path = card.get("audio") or expected_audio_path(card_id, lesson_meta["id"], "N1", primary_reading)

    examples_value = normalize_examples(card.get("examples") or selected_examples, primary_reading, romaji_map)

    card.update(
        {
            "id": str(card.get("id") or card_id),
            "courseCardId": str(card.get("courseCardId") or card_id),
            "kanji": kanji,
            "meaning": {
                "ru": repair_mojibake(card.get("meaning", {}).get("ru")) if card.get("meaning") else meaning_join_ru,
                "en": repair_mojibake(card.get("meaning", {}).get("en")) if card.get("meaning") else meaning_join_en,
            },
            "readings": {
                "onyomi": card.get("readings", {}).get("onyomi") if card.get("readings") else readings_on,
                "kunyomi": card.get("readings", {}).get("kunyomi") if card.get("readings") else readings_kun,
                "hiragana": card.get("readings", {}).get("hiragana") if card.get("readings") else ([primary_reading] if primary_reading else []),
                "romaji": card.get("readings", {}).get("romaji") if card.get("readings") else ([romanize_reading(primary_reading, romaji_map)] if primary_reading else []),
                "nanori": card.get("readings", {}).get("nanori") if card.get("readings") else [clean_reading(n) for n in dic.get("nanori") or []],
            },
            "jlpt": "N1",
            "lessonId": lesson_meta["id"],
            "lessonTitle": lesson_meta["title_ru"],
            "lessonTitleEn": lesson_meta["title_en"],
            "strokes": safe_int(card.get("strokes"), None) or dic.get("strokeCount") or anchor.get("strokes") or 0,
            "strokeOrder": card.get("strokeOrder") or generic_stroke_order(safe_int(card.get("strokes"), None) or dic.get("strokeCount") or anchor.get("strokes") or 0),
            "examples": examples_value,
            "apps": card.get("apps") or APP_POOLS["N1"],
            "interfaceUse": card.get("interfaceUse") or f"Встречается в словах уровня N1: интерфейсы, тексты, уведомления и реальные японские приложения.",
            "audio": audio_path or None,
            "meta": {
                **(card.get("meta") or {}),
                "radical": card.get("meta", {}).get("radical") or f"部首 {anchor.get('radical_number') or ''}".strip(),
                "radicalMeaning": card.get("meta", {}).get("radicalMeaning")
                or {
                    "ru": f"радикал {anchor.get('radical_number') or ''}".strip(),
                    "en": f"radical {anchor.get('radical_number') or ''}".strip(),
                },
                "grade": card.get("meta", {}).get("grade", dic.get("grade")),
                "freq": card.get("meta", {}).get("freq", anchor.get("frequency")),
                "unicode": card.get("meta", {}).get("unicode") or f"U+{ord(kanji):04X}",
                "variants": card.get("meta", {}).get("variants") or [],
                "favoriteSeed": card.get("meta", {}).get("favoriteSeed", False),
            },
            "sourcePage": lesson_meta["page_number"],
        }
    )
    return card


def generic_stroke_order(strokes):
    strokes = safe_int(strokes, 0) or 0
    return [
        f"Всего черт: {strokes}. Начинай с верхних и левых элементов.",
        "Двигайся сверху вниз и слева направо, сохраняя пропорции.",
        "Пересекающие и закрывающие черты обычно выполняй ближе к концу.",
    ]


def expected_audio_path(card_id, lesson_id, jlpt, reading):
    slug = audio_slug(reading or "")
    if not slug:
        return ""
    return f"./audio/kanji/{jlpt.lower()}/{lesson_id}/{card_id}-{slug}.mp3"


def audio_slug(value):
    text = clean_reading(value or "").lower()
    text = re.sub(r"[\u0300-\u036f]", "", text)
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")


def build_meta_entries(cards, existing_meta, existing_translations, existing_hints):
    meta_items = dict(existing_meta.get("items", {})) if existing_meta else {}
    translation_items = dict(existing_translations.get("items", {})) if existing_translations else {}
    hint_items = dict(existing_hints.get("items", {})) if existing_hints else {}
    for card in cards:
        key = str(card["id"])
        examples = card.get("examples") or []
        hint_words = [example.get("word") for example in examples if example.get("word")]
        first_word = hint_words[0] if hint_words else card["kanji"]
        second_word = hint_words[1] if len(hint_words) > 1 else first_word
        meta_items[key] = {
            "radical": card.get("meta", {}).get("radical") or "",
            "radicalMeaning": card.get("meta", {}).get("radicalMeaning") or {"ru": "", "en": ""},
            "favoriteSeed": False,
            "audio": {
                "pronunciation": f"audio/kanji/{key}-pronunciation.mp3",
                "eva": f"audio/eva/{key}-explanation.mp3",
                "leya": f"audio/leya/{key}-hint.mp3",
            },
        }
        translation_items[key] = {
            "meaning_en": card.get("meaning", {}).get("en") or card.get("meaning", {}).get("ru") or "",
            "interface_use_en": card.get("interfaceUse") or "",
        }
        hint_items[key] = {
            "hint": {
                "ru": f"Подсказка: ищи {card['kanji']} в словах {first_word} и {second_word}.",
                "en": f"Hint: look for {card['kanji']} in {first_word} and {second_word}.",
            },
            "mnemonic": {
                "ru": f"{card['kanji']}: свяжи образ со значением \"{card.get('meaning', {}).get('ru') or card.get('meaning', {}).get('en') or ''}\".",
                "en": f"{card['kanji']}: connect the shape with \"{card.get('meaning', {}).get('en') or card.get('meaning', {}).get('ru') or ''}\".",
            },
        }
    return meta_items, translation_items, hint_items


def build_manifest_entries(lesson_cards, lesson_meta, lesson_idx):
    lesson_id = lesson_meta["id"]
    title_ru = lesson_meta["title_ru"]
    title_en = lesson_meta["title_en"]
    return {
        "id": lesson_id,
        "file": f"data/lessons/generated/{lesson_id}.json",
        "title": title_ru,
        "title_en": title_en,
        "jlpt": "N1",
        "order": 56 + lesson_idx,
        "unlockLevel": 28 + lesson_idx // 2,
        "mascot": "eva" if lesson_idx % 2 == 0 else "leya",
        "summary": f"{len(lesson_cards)} кандзи уровня N1 для SRS-практики, словаря и повторений.",
        "summary_en": f"{len(lesson_cards)} N1 kanji for practice, dictionary search and reviews.",
        "cardCount": len(lesson_cards),
        "kanjiCount": len(lesson_cards),
    }


def build_lesson_payload(lesson_meta, lesson_cards):
    return {
        "lesson": {
            "id": lesson_meta["id"],
            "title": lesson_meta["title_ru"],
            "title_en": lesson_meta["title_en"],
            "jlpt": "N1",
            "order": lesson_meta["order"],
            "goal": {
                "ru": lesson_meta["goal_ru"],
                "en": lesson_meta["goal_en"],
            },
            "theme": {
                "ru": lesson_meta["theme_ru"],
                "en": lesson_meta["theme_en"],
            },
        },
        "items": lesson_cards,
    }


def build_lesson_meta(page_number, lesson_number, start_index, end_index, pdf_title, pdf_goal):
    lesson_id = f"bulk-n1-{lesson_number:02d}"
    title_ru = pdf_title
    title_en = f"Lesson {lesson_number}. N1 kanji {start_index}-{end_index}"
    return {
        "id": lesson_id,
        "title_ru": title_ru,
        "title_en": title_en,
        "goal_ru": pdf_goal,
        "goal_en": "Learn the lesson kanji, readings, meanings and context through active recall.",
        "theme_ru": pdf_title,
        "theme_en": title_en,
        "page_number": page_number,
        "order": 55 + lesson_number,
    }


def main():
    script_text = (ROOT / "tools" / "generate-kanji-course.mjs").read_text(encoding="utf-8")
    meaning_map = build_meaning_map(script_text)
    romaji_map = build_romaji_map(script_text)

    current_n1 = load_current_structure(CURRENT_N1_KANJI_PATH) or {"items": []}
    current_n1_meta = load_current_structure(CURRENT_N1_META_PATH) or {}
    current_n1_lessons = load_current_structure(CURRENT_N1_LESSONS_PATH) or {"items": []}
    current_exercises = load_current_structure(CURRENT_N1_EXERCISES_PATH)
    current_reading = load_current_structure(CURRENT_N1_READING_PATH)
    current_listening = load_current_structure(CURRENT_N1_LISTENING_PATH)
    current_tests = load_current_structure(CURRENT_N1_TESTS_PATH)
    current_final_test = load_current_structure(CURRENT_N1_FINAL_TEST_PATH)
    existing_manifest = load_current_structure(LESSONS_MANIFEST_PATH)
    existing_translations = load_current_structure(LESSON_TRANSLATIONS_PATH) or {"items": {}}
    existing_jlpt_index = load_current_structure(JLPT_INDEX_PATH)
    existing_textbooks_index = load_current_structure(TEXTBOOKS_INDEX_PATH)
    existing_rewards = load_current_structure(REWARDS_PATH)
    existing_kanji_meta = load_current_structure(KANJI_META_PATH) or {"items": {}}
    existing_kanji_translations = load_current_structure(KANJI_TRANSLATIONS_PATH) or {"items": {}}
    existing_kanji_hints = load_current_structure(KANJI_HINTS_PATH) or {"items": {}}
    existing_page_sources = load_current_structure(KANJI_PAGE_SOURCES_PATH) or {"items": {}}

    anchor_by_kanji, anchor_n1 = build_anchor_map()
    kanjidic_map = build_kanjidic_map()
    dictionary_entries = build_dictionary_index()

    if not PDF_PATH.exists():
        raise SystemExit(f"Missing PDF: {PDF_PATH}")

    doc = fitz.open(PDF_PATH)
    pdf_pages = list(range(47, 100))  # 0-based pages 48..100 inclusive
    if len(pdf_pages) != LESSON_COUNT:
        raise SystemExit(f"Expected {LESSON_COUNT} lessons but page range produced {len(pdf_pages)}")

    selected_chars = {row["kanji"] for row in anchor_n1}
    selected_chars |= {card.get("kanji") for card in current_n1.get("items", []) if card.get("kanji")}
    examples_by_kanji = index_examples(dictionary_entries, selected_chars)

    current_cards_by_key = {}
    current_cards_by_kanji = {}
    for card in current_n1.get("items", []):
        key = (str(card.get("lessonId") or ""), str(card.get("kanji") or ""))
        current_cards_by_key[key] = card
        if card.get("kanji"):
            current_cards_by_kanji[str(card["kanji"])] = card

    next_card_id = max((safe_int(card.get("id"), 0) or 0 for card in current_n1.get("items", [])), default=11180) + 1
    all_cards = []
    lessons_payload = []
    manifest_entries = []
    n1_lessons_items = []
    lesson_translations_items = dict(existing_translations.get("items", {}))
    lessons_by_id = {}
    generated_lesson_ids = []
    rewards_unlocks = dict(existing_rewards.get("lessonUnlocks", {}))
    used_kanji_global = set()
    filler_cursor = 0

    for lesson_index, page_index in enumerate(pdf_pages):
        page = doc[page_index]
        lines = page_lines(page)
        parsed = parse_page(lines, page_index + 1, kanjidic_map, anchor_n1)
        lesson_id = f"bulk-n1-{parsed['lessonNumber']:02d}"
        lesson_meta = build_lesson_meta(
            page_number=parsed["pageNumber"],
            lesson_number=parsed["lessonNumber"],
            start_index=parsed["startIndex"],
            end_index=parsed["endIndex"],
            pdf_title=parsed["title"],
            pdf_goal=parsed["goal"],
        )
        lesson_cards = []
        for row in parsed["rows"]:
            key = (lesson_id, row["kanji"])
            base_card = current_cards_by_key.get(key) or current_cards_by_kanji.get(row["kanji"])
            card_id = base_card.get("id") if base_card else str(next_card_id)
            if not base_card:
                next_card_id += 1
            card = build_card_from_row(
                row=row,
                lesson_meta={
                    "id": lesson_id,
                    "title_ru": lesson_meta["title_ru"],
                    "title_en": lesson_meta["title_en"],
                    "goal_ru": lesson_meta["goal_ru"],
                    "goal_en": lesson_meta["goal_en"],
                    "theme_ru": lesson_meta["theme_ru"],
                    "theme_en": lesson_meta["theme_en"],
                    "page_number": lesson_meta["page_number"],
                    "order": lesson_meta["order"],
                },
                card_id=str(card_id),
                base_card=base_card,
                anchor_by_kanji=anchor_by_kanji,
                kanjidic_map=kanjidic_map,
                examples_by_kanji=examples_by_kanji,
                meaning_map=meaning_map,
                romaji_map=romaji_map,
            )
            card["lessonId"] = lesson_id
            card["lessonTitle"] = lesson_meta["title_ru"]
            card["lessonTitleEn"] = lesson_meta["title_en"]
            card["sourcePage"] = lesson_meta["page_number"]
            lesson_cards.append(card)
            all_cards.append(card)
            used_kanji_global.add(card["kanji"])

        expected_count = max(0, parsed["endIndex"] - parsed["startIndex"] + 1)
        while len(lesson_cards) < expected_count and filler_cursor < len(anchor_n1):
            candidate = anchor_n1[filler_cursor]
            filler_cursor += 1
            candidate_kanji = str(candidate.get("kanji") or "").strip()
            if not candidate_kanji or candidate_kanji in used_kanji_global:
                continue
            filler_row = synthesize_row_from_candidate(candidate, kanjidic_map)
            key = (lesson_id, candidate_kanji)
            base_card = current_cards_by_key.get(key) or current_cards_by_kanji.get(candidate_kanji)
            card_id = base_card.get("id") if base_card else str(next_card_id)
            if not base_card:
                next_card_id += 1
            card = build_card_from_row(
                row=filler_row,
                lesson_meta={
                    "id": lesson_id,
                    "title_ru": lesson_meta["title_ru"],
                    "title_en": lesson_meta["title_en"],
                    "goal_ru": lesson_meta["goal_ru"],
                    "goal_en": lesson_meta["goal_en"],
                    "theme_ru": lesson_meta["theme_ru"],
                    "theme_en": lesson_meta["theme_en"],
                    "page_number": lesson_meta["page_number"],
                    "order": lesson_meta["order"],
                },
                card_id=str(card_id),
                base_card=base_card,
                anchor_by_kanji=anchor_by_kanji,
                kanjidic_map=kanjidic_map,
                examples_by_kanji=examples_by_kanji,
                meaning_map=meaning_map,
                romaji_map=romaji_map,
            )
            card["lessonId"] = lesson_id
            card["lessonTitle"] = lesson_meta["title_ru"]
            card["lessonTitleEn"] = lesson_meta["title_en"]
            card["sourcePage"] = lesson_meta["page_number"]
            lesson_cards.append(card)
            all_cards.append(card)
            used_kanji_global.add(card["kanji"])
        lesson_meta["sampleKanji"] = [card["kanji"] for card in lesson_cards[:8]]
        lesson_meta["focusWords"] = [example["word"] for card in lesson_cards[:4] for example in card.get("examples", [])[:1]]
        lesson_meta["sentences"] = parsed["sentences"]
        lessons_by_id[lesson_id] = lesson_cards
        lessons_payload.append(build_lesson_payload(lesson_meta, lesson_cards))
        manifest_entries.append(build_manifest_entries(lesson_cards, lesson_meta, lesson_index))
        generated_lesson_ids.append(lesson_id)
        rewards_unlocks[lesson_id] = 28 + lesson_index // 2
        lesson_translations_items[lesson_id] = {
            "title_en": lesson_meta["title_en"],
            "summary_en": f"{len(lesson_cards)} N1 kanji for practice, dictionary search and reviews.",
        }
        n1_lessons_items.append(
            {
                "id": lesson_id,
                "title": lesson_meta["title_ru"],
                "titleEn": lesson_meta["title_en"],
                "jlpt": "N1",
                "order": lesson_meta["order"] - 55,
                "file": f"data/lessons/generated/{lesson_id}.json",
                "summary": f"{len(lesson_cards)} кандзи уровня N1 для SRS-практики, словаря и повторений.",
                "summaryEn": f"{len(lesson_cards)} N1 kanji for practice, dictionary search and reviews.",
                "sampleKanji": [card["kanji"] for card in lesson_cards[:8]],
            }
        )

    # Normalise and preserve any existing current N1 overlay files, but rebuild the textbook layer.
    n1_textbook = {
        "version": 1,
        "level": "N1",
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "textbook": {
            "jlpt": "N1",
            "slug": "n1",
            "title": {
                "ru": "N1: тексты и нюансы",
                "en": "N1: Texts and nuance",
            },
            "displayTitle": {
                "ru": "Тексты и нюансы",
                "en": "Texts and nuance",
            },
            "description": {
                "ru": "Плотные тексты, авторская позиция, абстрактная лексика и продвинутая грамматика. Верхний слой базы.",
                "en": "Dense texts, author stance, abstract vocabulary, and advanced grammar. The top layer of the base.",
            },
            "goal": {
                "ru": "Разбирать длинные фразы, редкие чтения и смысловые оттенки в чтении.",
                "en": "Break down long phrases, rare readings, and meaning nuance in reading.",
            },
            "recommendedCycle": {
                "ru": "Повторяй каждые 5-7 дней с точечным возвратом к слабым карточкам.",
                "en": "Review every 5-7 days with targeted returns to weak cards.",
            },
            "previousLevels": ["N5", "N4", "N3", "N2"],
            "nextLevels": [],
            "coverImage": "assets/bg/bg_silent_road.webp",
            "pdfFile": "docs/flashkanji_N1_textbook_flashkanji_space.pdf",
            "pdfUrl": "docs/flashkanji_N1_textbook_flashkanji_space.pdf",
            "lessonIds": generated_lesson_ids,
            "lessonCount": LESSON_COUNT,
            "kanjiCount": KANJI_COUNT,
            "cardCount": KANJI_COUNT,
            "files": {
                "kanji": "data/jlpt/n1/kanji.json",
                "lessons": "data/jlpt/n1/lessons.json",
                "grammar": "data/jlpt/n1/grammar.json",
                "reading": "data/jlpt/n1/reading.json",
                "listening": "data/jlpt/n1/listening.json",
                "tests": "data/jlpt/n1/tests.json",
                "finalTest": "data/jlpt/n1/final-test.json",
                "meta": "data/jlpt/n1/meta.json",
                "exercises": "data/jlpt/n1/exercises.json",
            },
            "currentLessonCount": CURRENT_LESSON_COUNT,
            "currentKanjiCount": CURRENT_KANJI_COUNT,
            "currentCardCount": CURRENT_CARD_COUNT,
        },
        "items": all_cards,
    }
    n1_textbook["lessonCount"] = LESSON_COUNT
    n1_textbook["kanjiCount"] = KANJI_COUNT
    n1_textbook["cardCount"] = KANJI_COUNT
    n1_textbook["currentLessonCount"] = CURRENT_LESSON_COUNT
    n1_textbook["currentKanjiCount"] = CURRENT_KANJI_COUNT
    n1_textbook["currentCardCount"] = CURRENT_CARD_COUNT

    n1_meta = copy.deepcopy(n1_textbook)
    n1_meta["textbook"]["currentLessonCount"] = LESSON_COUNT
    n1_meta["textbook"]["currentKanjiCount"] = KANJI_COUNT
    n1_meta["textbook"]["currentCardCount"] = KANJI_COUNT
    n1_meta["lessonCount"] = LESSON_COUNT
    n1_meta["kanjiCount"] = KANJI_COUNT
    n1_meta["cardCount"] = KANJI_COUNT
    n1_meta["currentLessonCount"] = CURRENT_LESSON_COUNT
    n1_meta["currentKanjiCount"] = CURRENT_KANJI_COUNT
    n1_meta["currentCardCount"] = CURRENT_CARD_COUNT

    lessons_manifest = {
        "version": 1,
        "course": "Flash Kanji Core",
        "updated_at": datetime.now(timezone.utc).strftime("%Y-%m-%d"),
        "lessons": [],
    }
    if existing_manifest and existing_manifest.get("lessons"):
        lessons_manifest["lessons"].extend(
            repair_structure([lesson for lesson in existing_manifest["lessons"] if not str(lesson.get("id", "")).startswith("bulk-n1-")])
        )
    lessons_manifest["lessons"].extend(manifest_entries)

    textbooks_index = copy.deepcopy(existing_textbooks_index or {})
    levels = textbooks_index.get("levels", [])
    next_levels = []
    for item in levels:
        if item.get("jlpt") == "N1":
            item = repair_structure(item)
            item.update(
                {
                    "kanjiCount": KANJI_COUNT,
                    "lessonCount": LESSON_COUNT,
                    "lessonFiles": [f"data/lessons/generated/bulk-n1-{index:02d}.json" for index in range(1, LESSON_COUNT + 1)],
                }
            )
        next_levels.append(item)
    textbooks_index = {
        "version": textbooks_index.get("version", 1),
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "levels": next_levels,
    }

    jlpt_index = copy.deepcopy(existing_jlpt_index or {})
    jlpt_items = jlpt_index.get("items", [])
    next_jlpt_items = []
    for item in jlpt_items:
        if item.get("jlpt") == "N1":
            item = repair_structure(item)
            item.update(
                {
                    "lessonIds": generated_lesson_ids,
                    "lessonCount": LESSON_COUNT,
                    "kanjiCount": KANJI_COUNT,
                    "cardCount": KANJI_COUNT,
                }
            )
        next_jlpt_items.append(item)
    jlpt_index = {
        "version": jlpt_index.get("version", 1),
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "items": next_jlpt_items,
    }

    rewards = copy.deepcopy(existing_rewards or {})
    rewards["lessonUnlocks"] = rewards_unlocks

    # Generated lesson payloads.
    LESSONS_GENERATED_DIR.mkdir(parents=True, exist_ok=True)
    for lesson_payload in lessons_payload:
        lesson_id = lesson_payload["lesson"]["id"]
        dump_json(LESSONS_GENERATED_DIR / f"{lesson_id}.json", lesson_payload)

    # Repair and extend the global registry files that the app reads on every boot.
    lesson_translations = {
        "version": 1,
        "items": lesson_translations_items,
    }

    # Extend kanji registries, preserving current data where possible.
    current_meta_items = dict((existing_kanji_meta or {}).get("items", {}))
    current_translation_items = dict((existing_kanji_translations or {}).get("items", {}))
    current_hint_items = dict((existing_kanji_hints or {}).get("items", {}))

    for card in all_cards:
        key = str(card["id"])
        current_meta_items[key] = {
            "radical": card.get("meta", {}).get("radical") or "",
            "radicalMeaning": card.get("meta", {}).get("radicalMeaning") or {"ru": "", "en": ""},
            "favoriteSeed": False,
            "audio": {
                "pronunciation": f"audio/kanji/{key}-pronunciation.mp3",
                "eva": f"audio/eva/{key}-explanation.mp3",
                "leya": f"audio/leya/{key}-hint.mp3",
            },
        }
        current_translation_items[key] = {
            "meaning_en": card.get("meaning", {}).get("en") or card.get("meaning", {}).get("ru") or "",
            "interface_use_en": card.get("interfaceUse") or "",
        }
        examples = card.get("examples") or []
        word1 = examples[0]["word"] if len(examples) > 0 and examples[0].get("word") else card["kanji"]
        word2 = examples[1]["word"] if len(examples) > 1 and examples[1].get("word") else word1
        current_hint_items[key] = {
            "hint": {
                "ru": f"Подсказка: ищи {card['kanji']} в словах {word1} и {word2}.",
                "en": f"Hint: look for {card['kanji']} in {word1} and {word2}.",
            },
            "mnemonic": {
                "ru": f"{card['kanji']}: свяжи образ со значением \"{card.get('meaning', {}).get('ru') or card.get('meaning', {}).get('en') or ''}\".",
                "en": f"{card['kanji']}: connect the shape with \"{card.get('meaning', {}).get('en') or card.get('meaning', {}).get('ru') or ''}\".",
            },
        }

    # Persist all touched files.
    dump_json(CURRENT_N1_KANJI_PATH, n1_textbook)
    dump_json(CURRENT_N1_META_PATH, n1_meta)
    dump_json(CURRENT_N1_LESSONS_PATH, {
        "version": 1,
        "level": "N1",
        "generatedAt": datetime.now(timezone.utc).isoformat(),
        "textbook": n1_textbook["textbook"],
        "items": n1_lessons_items,
    })
    dump_json(CURRENT_N1_EXERCISES_PATH, current_exercises or {"version": 1, "level": "N1", "lessonOverlays": []})
    dump_json(CURRENT_N1_READING_PATH, current_reading or {"version": 1, "level": "N1", "items": []})
    dump_json(CURRENT_N1_LISTENING_PATH, current_listening or {"version": 1, "level": "N1", "items": []})
    dump_json(CURRENT_N1_TESTS_PATH, current_tests or {"version": 1, "level": "N1", "items": []})
    dump_json(CURRENT_N1_FINAL_TEST_PATH, current_final_test or {"version": 1, "level": "N1"})

    dump_json(LESSONS_MANIFEST_PATH, lessons_manifest)
    dump_json(LESSON_TRANSLATIONS_PATH, lesson_translations)
    dump_json(JLPT_INDEX_PATH, jlpt_index)
    dump_json(TEXTBOOKS_INDEX_PATH, textbooks_index)
    dump_json(REWARDS_PATH, rewards)
    dump_json(KANJI_META_PATH, {"version": 1, "items": current_meta_items})
    dump_json(KANJI_TRANSLATIONS_PATH, {"version": 1, "items": current_translation_items})
    dump_json(KANJI_HINTS_PATH, {"version": 1, "items": current_hint_items})
    dump_json(KANJI_PAGE_SOURCES_PATH, existing_page_sources or {"version": 1, "items": {}})

    # Generate lesson files referenced by the course manifest.
    for lesson_idx, lesson_id in enumerate(generated_lesson_ids):
        lesson_cards = lessons_by_id[lesson_id]
        payload = {
            "lesson": {
                "id": lesson_id,
                "title": lesson_cards[0].get("lessonTitle", "") if lesson_cards else "",
                "title_en": lesson_cards[0].get("lessonTitleEn", "") if lesson_cards else "",
                "jlpt": "N1",
                "order": 56 + lesson_idx,
            },
            "items": lesson_cards,
        }
        dump_json(LESSONS_GENERATED_DIR / f"{lesson_id}.json", payload)

    # Repair and persist the global manifests that are already part of the app.
    if existing_translations:
        dump_json(LESSON_TRANSLATIONS_PATH, lesson_translations)
    if existing_manifest:
        dump_json(LESSONS_MANIFEST_PATH, lessons_manifest)

    print(
        f"Generated N1 textbook: {len(all_cards)} cards across {len(lessons_payload)} lessons.",
        f"New ids: {next_card_id - 1 if next_card_id else 0}",
    )


if __name__ == "__main__":
    main()
