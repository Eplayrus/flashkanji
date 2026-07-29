from __future__ import annotations

import gzip
import json
import re
import urllib.request
import xml.etree.ElementTree as ET
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path

try:
    import fitz  # PyMuPDF
except Exception as exc:  # pragma: no cover - local tool dependency
    raise SystemExit(f"PyMuPDF is required to generate the N1 textbook: {exc}")


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
DATA = PUBLIC / "data"
PDF_PATH = PUBLIC / "docs" / "flashkanji_N1_textbook_flashkanji_space.pdf"

N1_DIR = DATA / "jlpt" / "n1"
LESSONS_GENERATED_DIR = DATA / "lessons" / "generated"
LESSONS_MANIFEST_PATH = DATA / "lessons.json"
LESSON_TRANSLATIONS_PATH = DATA / "lessons" / "translations.json"
JLPT_INDEX_PATH = DATA / "jlpt" / "index.json"
TEXTBOOKS_INDEX_PATH = DATA / "textbooks" / "index.json"
REWARDS_PATH = DATA / "rewards.json"
KANJI_META_PATH = DATA / "kanji" / "meta.json"
KANJI_HINTS_PATH = DATA / "kanji" / "hints.json"
KANJI_TRANSLATIONS_PATH = DATA / "kanji" / "translations.json"
KANJI_PAGE_SOURCES_PATH = DATA / "sources" / "kanji-page-sources.json"

REMOTE_JLPT_KANJI_URL = "https://raw.githubusercontent.com/AnchorI/jlpt-kanji-dictionary/main/jlpt-kanji.json"
REMOTE_DICTIONARY_URLS = [
    f"https://raw.githubusercontent.com/AnchorI/jlpt-kanji-dictionary/main/dictionary_part_{part}.json"
    for part in range(1, 5)
]
KANJIDIC_URL = "https://www.edrdg.org/kanjidic/kanjidic2.xml.gz"
USER_AGENT = "Mozilla/5.0 (Flash Kanji N1 generator)"

LESSON_COUNT = 53
KANJI_COUNT = 1047
LESSON_CARD_COUNTS = [20] * 52 + [7]
ROMAJI = {
    "あ": "a", "い": "i", "う": "u", "え": "e", "お": "o",
    "か": "ka", "き": "ki", "く": "ku", "け": "ke", "こ": "ko",
    "さ": "sa", "し": "shi", "す": "su", "せ": "se", "そ": "so",
    "た": "ta", "ち": "chi", "つ": "tsu", "て": "te", "と": "to",
    "な": "na", "に": "ni", "ぬ": "nu", "ね": "ne", "の": "no",
    "は": "ha", "ひ": "hi", "ふ": "fu", "へ": "he", "ほ": "ho",
    "ま": "ma", "み": "mi", "む": "mu", "め": "me", "も": "mo",
    "や": "ya", "ゆ": "yu", "よ": "yo",
    "ら": "ra", "り": "ri", "る": "ru", "れ": "re", "ろ": "ro",
    "わ": "wa", "を": "o", "ん": "n",
    "が": "ga", "ぎ": "gi", "ぐ": "gu", "げ": "ge", "ご": "go",
    "ざ": "za", "じ": "ji", "ず": "zu", "ぜ": "ze", "ぞ": "zo",
    "だ": "da", "ぢ": "ji", "づ": "zu", "で": "de", "ど": "do",
    "ば": "ba", "び": "bi", "ぶ": "bu", "べ": "be", "ぼ": "bo",
    "ぱ": "pa", "ぴ": "pi", "ぷ": "pu", "ぺ": "pe", "ぽ": "po",
    "きゃ": "kya", "きゅ": "kyu", "きょ": "kyo",
    "しゃ": "sha", "しゅ": "shu", "しょ": "sho",
    "ちゃ": "cha", "ちゅ": "chu", "ちょ": "cho",
    "にゃ": "nya", "にゅ": "nyu", "にょ": "nyo",
    "ひゃ": "hya", "ひゅ": "hyu", "ひょ": "hyo",
    "みゃ": "mya", "みゅ": "myu", "みょ": "myo",
    "りゃ": "rya", "りゅ": "ryu", "りょ": "ryo",
    "ぎゃ": "gya", "ぎゅ": "gyu", "ぎょ": "gyo",
    "じゃ": "ja", "じゅ": "ju", "じょ": "jo",
    "びゃ": "bya", "びゅ": "byu", "びょ": "byo",
    "ぴゃ": "pya", "ぴゅ": "pyu", "ぴょ": "pyo",
}

APP_CONTEXTS = ["официальных текстах", "новостях", "академических статьях", "деловой переписке", "юридических документах"]


def now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def load_json(path: Path, fallback=None):
    if not path.exists():
        return fallback
    return json.loads(path.read_text(encoding="utf-8"))


def dump_json(path: Path, payload) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def fetch_bytes(url: str) -> bytes:
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=90) as response:
        return response.read()


def fetch_json(url: str):
    return json.loads(fetch_bytes(url).decode("utf-8"))


def clean_text(value: str) -> str:
    text = str(value or "").replace("\x00", "").replace("\ufffd", "")
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def looks_mojibake(value: str) -> bool:
    text = str(value or "")
    return bool(re.search(r"(?:Ð|Ñ|Рџ|Рќ|Рђ|РЅ|Рµ|Рё|Р°|Рѕ|Рє|Р»|Рґ|СЃ|С‚|СЊ|С‹|СЏ|СЂ|С‡|Сѓ|С†|С€|С‰|С…|СЋ|СЌ|вЂ)", text))


def safe_localized(value, fallback=""):
    if isinstance(value, dict):
        ru = clean_text(value.get("ru") or value.get("en") or fallback)
        en = clean_text(value.get("en") or value.get("ru") or fallback)
    else:
        ru = en = clean_text(value or fallback)
    if looks_mojibake(ru):
        ru = en
    if looks_mojibake(en):
        en = ru
    return {"ru": ru, "en": en}


def is_cjk(char: str) -> bool:
    return len(char) == 1 and "\u4e00" <= char <= "\u9fff"


def kata_to_hira(value: str) -> str:
    output = []
    for char in clean_text(value):
        code = ord(char)
        if 0x30A1 <= code <= 0x30F6:
            output.append(chr(code - 0x60))
        elif char not in {".", "-"}:
            output.append(char)
    return "".join(output)


def split_readings(values) -> list[str]:
    if not values:
        return []
    if isinstance(values, str):
        values = re.split(r"[\s/、,]+", values)
    result = []
    for item in values:
        reading = kata_to_hira(str(item)).replace(".", "").replace("-", "")
        reading = re.sub(r"\s+", "", reading)
        if reading and reading not in result:
            result.append(reading)
    return result


def romanize_kana(value: str) -> str:
    text = kata_to_hira(value)
    output = []
    i = 0
    while i < len(text):
        if text[i] == "っ":
            next_pair = text[i + 1:i + 3]
            next_one = text[i + 1:i + 2]
            next_romaji = ROMAJI.get(next_pair) or ROMAJI.get(next_one, "")
            if next_romaji:
                output.append(next_romaji[0])
            i += 1
            continue
        pair = text[i:i + 2]
        if pair in ROMAJI:
            output.append(ROMAJI[pair])
            i += 2
            continue
        if text[i] == "ー" and output:
            output[-1] = output[-1] + output[-1][-1]
        else:
            output.append(ROMAJI.get(text[i], text[i]))
        i += 1
    return "".join(output)


def audio_slug(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", romanize_kana(value).lower()).strip("-")
    return slug or "reading"


def parse_meaning_map() -> dict[str, str]:
    source = ROOT / "tools" / "generate-kanji-course.mjs"
    if not source.exists():
        return {}
    text = source.read_text(encoding="utf-8")
    marker = "const MEANING_RU = {"
    if marker not in text:
        return {}
    block = text.split(marker, 1)[1].split("\n};", 1)[0]
    result = {}
    for raw in block.splitlines():
        line = raw.strip().rstrip(",")
        match = re.match(r'(?P<key>.+?):\s*"(?P<value>(?:[^"\\]|\\.)*)"$', line)
        if not match:
            continue
        key = match.group("key").strip().strip('"').lower()
        value = bytes(match.group("value"), "utf-8").decode("unicode_escape")
        result[key] = value
    return result


def clean_gloss(value: str) -> str:
    text = clean_text(value)
    text = re.sub(r"\{[^}]*\}", "", text)
    text = re.sub(r"^\d+\)\s*", "", text)
    text = re.sub(r"\s*;\s*$", "", text)
    return text.strip()


def translate_meaning(glosses: list[str], meaning_map: dict[str, str]) -> str:
    translated = []
    for gloss in glosses:
        clean = clean_gloss(gloss)
        if not clean:
            continue
        mapped = meaning_map.get(clean.lower(), clean)
        translated.append(clean if looks_mojibake(mapped) else mapped)
        if len(translated) >= 4:
            break
    return ", ".join(translated)


def build_kanjidic_map() -> dict[str, dict]:
    gz_bytes = fetch_bytes(KANJIDIC_URL)
    root = ET.fromstring(gzip.decompress(gz_bytes))
    result = {}
    for character in root.findall("character"):
        literal = character.findtext("literal") or ""
        if not literal:
            continue
        misc = character.find("misc")
        stroke_count = 0
        if misc is not None:
            try:
                stroke_count = int(misc.findtext("stroke_count") or "0")
            except ValueError:
                stroke_count = 0
        on, kun, nanori, meanings = [], [], [], []
        rm = character.find("reading_meaning")
        if rm is not None:
            for group in rm.findall("rmgroup"):
                for reading in group.findall("reading"):
                    value = reading.text or ""
                    kind = reading.attrib.get("r_type")
                    if kind == "ja_on":
                        on.append(value)
                    elif kind == "ja_kun":
                        kun.append(value)
                for meaning in group.findall("meaning"):
                    if meaning.attrib.get("m_lang"):
                        continue
                    if meaning.text:
                        meanings.append(meaning.text)
            nanori = [item.text for item in rm.findall("nanori") if item.text]
        result[literal] = {
            "strokes": stroke_count,
            "onyomi": split_readings(on),
            "kunyomi": split_readings(kun),
            "nanori": split_readings(nanori),
            "meanings": [clean_gloss(item) for item in meanings if clean_gloss(item)],
        }
    return result


def build_anchor_n1() -> list[dict]:
    data = fetch_json(REMOTE_JLPT_KANJI_URL)
    seen = set()
    result = []
    for item in data:
        kanji = str(item.get("kanji") or "")
        if not is_cjk(kanji) or kanji in seen:
            continue
        if str(item.get("jlpt", "")).upper() != "N1":
            continue
        seen.add(kanji)
        result.append(item)
    return result


def load_dictionary_examples(selected: set[str]) -> dict[str, list[dict]]:
    buckets = defaultdict(list)
    for url in REMOTE_DICTIONARY_URLS:
        for entry in fetch_json(url):
            word = clean_text(entry.get("kanji") or "")
            reading = clean_text(entry.get("reading") or "")
            if not word or not reading:
                continue
            chars = sorted({char for char in word if char in selected})
            if not chars:
                continue
            if len(word) == 1 and word in selected:
                continue
            for char in chars:
                if len(buckets[char]) < 80:
                    buckets[char].append(entry)
    for char, entries in buckets.items():
        entries.sort(key=score_example, reverse=True)
    return buckets


def score_example(entry: dict) -> tuple:
    word = clean_text(entry.get("kanji") or "")
    ru = entry.get("glossary_ru") or []
    no_katakana = not bool(re.search(r"[\u30a0-\u30ff]", word))
    return (1 if ru else 0, 1 if no_katakana else 0, -len(word), -int(entry.get("sequence") or 0))


def example_from_entry(entry: dict, fallback_meaning: str) -> dict:
    ru_glosses = [clean_gloss(item) for item in (entry.get("glossary_ru") or [])]
    en_glosses = [clean_gloss(item) for item in (entry.get("glossary_en") or []) if not re.search(r"[ぁ-んァ-ン一-龯]", str(item))]
    translation_ru = next((item for item in ru_glosses if item and not looks_mojibake(item)), "")
    translation_en = next((item for item in en_glosses if item), "")
    return {
        "word": clean_text(entry.get("kanji") or ""),
        "reading": kata_to_hira(entry.get("reading") or ""),
        "romaji": romanize_kana(entry.get("reading") or ""),
        "translation": translation_ru or translation_en or fallback_meaning,
        "translation_ru": translation_ru or translation_en or fallback_meaning,
        "translation_en": translation_en or translation_ru or fallback_meaning,
    }


def existing_n1_cards_by_position() -> list[dict]:
    result = []
    for path in sorted(LESSONS_GENERATED_DIR.glob("bulk-n1-*.json")):
        payload = load_json(path, {})
        for item in payload.get("items") or []:
            if isinstance(item, dict):
                result.append(item)
    return result


def build_unique_kanji_sequence(existing_cards: list[dict], anchor_n1: list[dict]) -> list[str]:
    used = set()
    slots: list[str | None] = []
    for item in existing_cards[:KANJI_COUNT]:
        kanji = clean_text(item.get("kanji") or "")
        if is_cjk(kanji) and kanji not in used:
            slots.append(kanji)
            used.add(kanji)
        else:
            slots.append(None)
    while len(slots) < KANJI_COUNT:
        slots.append(None)
    fillers = [clean_text(item.get("kanji") or "") for item in anchor_n1 if is_cjk(clean_text(item.get("kanji") or "")) and clean_text(item.get("kanji") or "") not in used]
    filler_index = 0
    for index, value in enumerate(slots):
        if value:
            continue
        if filler_index >= len(fillers):
            raise SystemExit("Not enough unique N1 kanji to fill the textbook sequence.")
        slots[index] = fillers[filler_index]
        used.add(fillers[filler_index])
        filler_index += 1
    sequence = [item for item in slots if item]
    if len(sequence) != KANJI_COUNT or len(set(sequence)) != KANJI_COUNT:
        raise SystemExit(f"N1 sequence must contain {KANJI_COUNT} unique kanji; got {len(sequence)} / {len(set(sequence))}.")
    return sequence


def pdf_lesson_meta() -> list[dict]:
    if not PDF_PATH.exists():
        raise SystemExit(f"Missing N1 PDF: {PDF_PATH}")
    doc = fitz.open(PDF_PATH)
    result = []
    for lesson_number in range(1, LESSON_COUNT + 1):
        page_number = 47 + lesson_number
        text = doc[page_number - 1].get_text("text")
        lines = [clean_text(line) for line in text.splitlines() if clean_text(line)]
        title = next((line for line in lines if line.startswith("Урок ")), f"Урок {lesson_number}. N1 кандзи")
        goal = ""
        for index, line in enumerate(lines):
            if line.startswith("Задача урока:"):
                goal = line.replace("Задача урока:", "").strip()
                next_index = index + 1
                while next_index < len(lines) and not lines[next_index].startswith("Кандзи"):
                    goal = f"{goal} {lines[next_index]}"
                    next_index += 1
                break
        if not goal:
            goal = "узнать знаки, прочитать опорные чтения, связать значение с контекстом и сделать активное вспоминание."
        result.append({
            "lessonNumber": lesson_number,
            "pageNumber": page_number,
            "titleRu": title,
            "titleEn": f"N1 Lesson {lesson_number}",
            "goalRu": goal,
            "goalEn": "Recognize the kanji, read support readings, connect meaning with context, and practice active recall.",
        })
    return result


def generated_card_id(index: int, old_card: dict | None, kanji: str) -> str:
    if old_card and clean_text(old_card.get("kanji") or "") == kanji and old_card.get("id"):
        return str(old_card["id"])
    return f"n1-{index + 1:04d}"


def stroke_steps(strokes: int) -> list[dict]:
    total = max(1, int(strokes or 0))
    return [
        {"id": 1, "type": "stroke", "description_ru": f"Всего черт: {total}. Сначала смотри на верхние и левые элементы.", "description_en": f"Total strokes: {total}. Start by observing the top and left-side components.", "path": None},
        {"id": 2, "type": "stroke", "description_ru": "Разбей знак на радикалы и крупные блоки.", "description_en": "Break the kanji into radicals and large components.", "path": None},
        {"id": 3, "type": "stroke", "description_ru": "Проведи порядок письма сверху вниз и слева направо.", "description_en": "Practice the stroke order from top to bottom and left to right.", "path": None},
        {"id": 4, "type": "stroke", "description_ru": "Повтори знак вместе со словом-примером.", "description_en": "Review the kanji together with a real example word.", "path": None},
    ]


def build_card(index: int, kanji: str, lesson: dict, old_card: dict | None, kanjidic: dict, examples_by_kanji: dict, meaning_map: dict) -> dict:
    dic = kanjidic.get(kanji, {})
    old_meaning = safe_localized((old_card or {}).get("meaning") or {}, "")
    meanings_en = dic.get("meanings") or []
    meaning_en = ", ".join(meanings_en[:5]) or old_meaning["en"] or "N1 kanji"
    meaning_ru = old_meaning["ru"] if old_meaning["ru"] and not looks_mojibake(old_meaning["ru"]) else translate_meaning(meanings_en, meaning_map)
    meaning_ru = meaning_ru or meaning_en
    onyomi = split_readings(dic.get("onyomi") or (old_card or {}).get("readings", {}).get("onyomi") or [])
    kunyomi = split_readings(dic.get("kunyomi") or (old_card or {}).get("readings", {}).get("kunyomi") or [])
    primary_reading = (kunyomi or onyomi or split_readings((old_card or {}).get("hiragana") or []))[0] if (kunyomi or onyomi or split_readings((old_card or {}).get("hiragana") or [])) else ""
    examples = []
    for entry in examples_by_kanji.get(kanji, [])[:3]:
        example = example_from_entry(entry, meaning_ru)
        if example["word"] and example["reading"] and example not in examples:
            examples.append(example)
    if not primary_reading and examples:
        primary_reading = examples[0]["reading"]
    card_id = generated_card_id(index, old_card, kanji)
    audio = f"./audio/kanji/n1/{lesson['id']}/{card_id}-{audio_slug(primary_reading)}.mp3" if primary_reading else ""
    strokes = int(dic.get("strokes") or (old_card or {}).get("strokes") or 0)
    interface_ru = f"Ищи {kanji} в {APP_CONTEXTS[index % len(APP_CONTEXTS)]}: там знак часто уточняет позицию автора, норму или вывод."
    interface_en = f"Look for {kanji} in formal texts: it often clarifies the author's stance, a rule, or a conclusion."
    return {
        "id": card_id,
        "courseCardId": card_id,
        "number": index + 1,
        "kanji": kanji,
        "meaning": {"ru": meaning_ru, "en": meaning_en},
        "meaning_ru": meaning_ru,
        "meaning_en": meaning_en,
        "readings": {
            "onyomi": onyomi,
            "kunyomi": kunyomi,
            "hiragana": [primary_reading] if primary_reading else [],
            "romaji": [romanize_kana(primary_reading)] if primary_reading else [],
            "nanori": split_readings(dic.get("nanori") or []),
        },
        "onyomi": " / ".join(onyomi),
        "kunyomi": " / ".join(kunyomi),
        "hiragana": primary_reading,
        "romaji": romanize_kana(primary_reading),
        "jlpt": "N1",
        "level": "N1",
        "lessonId": lesson["id"],
        "lessonTitle": lesson["title"]["ru"],
        "lessonTitleEn": lesson["title"]["en"],
        "strokes": strokes,
        "strokeOrder": stroke_steps(strokes),
        "stroke_order": [step["description_ru"] for step in stroke_steps(strokes)],
        "examples": examples,
        "words": examples,
        "apps": [{"name": name, "use": interface_en} for name in ["Research reader", "News archive", "Policy memo"]],
        "interfaceUse": interface_ru,
        "interfaceUseEn": interface_en,
        "interface_use": interface_ru,
        "interface_use_en": interface_en,
        "audio": audio,
        "meta": {"radical": "", "radicalMeaning": {"ru": "", "en": ""}, "source": "KANJIDIC + Flash Kanji N1 PDF"},
        "sourcePage": lesson["sourcePage"],
        "grammarLinks": lesson["grammarFocus"],
        "example": examples[0] if examples else None,
        "hintRu": f"Свяжи {kanji} со значением «{meaning_ru}» и первым реальным словом из словаря.",
    }


def grammar_fallback_example(pattern: str) -> str:
    clean_pattern = pattern.replace("〜", "").strip()
    if not clean_pattern:
        clean_pattern = "に即して"
    return f"この問題は、資料を確認した上で{clean_pattern}慎重に判断する必要がある。"


def is_japanese(value: str) -> bool:
    return bool(re.search(r"[ぁ-んァ-ン一-龯〜]", value or ""))


def parse_grammar_items() -> list[dict]:
    doc = fitz.open(PDF_PATH)
    items = []
    for page_number in range(106, 124):
        lines = [clean_text(line) for line in doc[page_number - 1].get_text("text").splitlines()]
        start = 0
        for index, line in enumerate(lines):
            if line == "Перевод":
                start = index + 1
                break
        block = []
        for line in lines[start:]:
            if not line or line.startswith("flashkanji") or line.startswith("Flash Kanji") or re.fullmatch(r"\d+", line):
                continue
            if line.startswith("Упражнение"):
                break
            block.append(line)
        index = 0
        while index < len(block):
            candidate = block[index]
            is_pattern = is_japanese(candidate) and "。" not in candidate and len(candidate) <= 42
            if not is_pattern:
                index += 1
                continue
            pattern = candidate
            index += 1
            function_lines = []
            while index < len(block) and not (is_japanese(block[index]) and "。" in block[index]):
                if is_japanese(block[index]) and "。" not in block[index] and len(block[index]) <= 42:
                    break
                function_lines.append(block[index])
                index += 1
            example = block[index] if index < len(block) and is_japanese(block[index]) and "。" in block[index] else ""
            if example:
                index += 1
            translation_lines = []
            while index < len(block):
                next_line = block[index]
                if is_japanese(next_line) and "。" not in next_line and len(next_line) <= 42:
                    break
                translation_lines.append(next_line)
                index += 1
            function = clean_text(" ".join(function_lines))
            translation = clean_text(" ".join(translation_lines))
            if not function:
                function = "логическая связка N1"
            if not example or "?" in example:
                example = grammar_fallback_example(pattern)
            items.append({
                "id": f"n1-grammar-{len(items) + 1:03d}",
                "level": "N1",
                "order": len(items) + 1,
                "group": {"ru": f"Грамматический блок {(len(items) // 8) + 1}", "en": f"Grammar block {(len(items) // 8) + 1}"},
                "pattern": pattern,
                "title": {"ru": function, "en": function},
                "explanation": {
                    "ru": f"{pattern} помогает читать N1-текст: показывает {function} и связывает аргумент с выводом.",
                    "en": f"{pattern} helps read N1 texts by expressing {function} and linking an argument to a conclusion.",
                },
                "formula": pattern,
                "examples": [{"jp": example, "reading": "", "ru": translation or function, "en": translation or function}],
                "question": {"ru": f"Что лучше всего передаёт форма {pattern}?", "en": f"What does {pattern} best express?"},
                "answer": function,
                "options": [],
                "sourcePage": page_number,
            })
    if len(items) != 142:
        raise SystemExit(f"Expected 142 N1 grammar items from the PDF, got {len(items)}.")
    all_answers = [item["answer"] for item in items]
    for index, item in enumerate(items):
        options = [item["answer"]]
        for shift in (13, 37, 71):
            candidate = all_answers[(index + shift) % len(all_answers)]
            if candidate not in options:
                options.append(candidate)
        item["options"] = options
    return items


def build_reading_items() -> list[dict]:
    texts = [
        ("技術と責任", "新しい技術は生活を便利にする一方で、利用者に見えにくい責任を生み出す。たとえば、情報を素早く共有できることは利点だが、誤った情報が広がる速度も同時に高まる。したがって、技術そのものを評価するだけでは不十分であり、それを使う側の判断力も問われる。", "Новая технология делает жизнь удобнее, но одновременно создаёт ответственность, которую пользователь не всегда видит."),
        ("学習の継続", "学習を続ける上で重要なのは、完璧な計画を作ることではなく、計画が崩れた後に戻れる仕組みを持つことだ。失敗を記録することは恥ではない。むしろ、何を優先すべきかを明らかにする手がかりとなる。", "Для продолжения учёбы важен не идеальный план, а система возвращения после срыва."),
        ("社会の合意", "社会的な合意は、単に多数決によって成立するものではない。反対意見をどのように扱うかによって、その合意の質が決まる。少数派の声を無視した決定は、短期的には効率的に見えても、長期的には不信を招きかねない。", "Качество общественного согласия зависит от отношения к возражениям и меньшинству."),
        ("伝統と変化", "伝統を守るとは、昔の形をそのまま残すことだけを意味しない。時代に応じて変化しながらも、中心にある価値を失わないことこそが、伝統を生かす道だと言える。", "Сохранить традицию значит менять форму, не теряя центральную ценность."),
        ("専門家の言葉", "専門家の説明は正確であるべきだが、正確さだけを追求すれば、一般の人には伝わりにくくなる。だからといって、内容を単純化しすぎれば誤解を招く。専門性と分かりやすさの間で、どこに線を引くかが問われている。", "Эксперт должен удержать баланс между точностью и понятностью."),
        ("都市と孤独", "都市には多くの人が集まるにもかかわらず、孤独を感じる人は少なくない。人が近くにいることと、関係があることは同じではない。便利さを追求する都市設計に加えて、人が自然に関われる場をどう作るかが課題である。", "Город собирает людей, но это не гарантирует отношений и сниженной孤独ности."),
        ("判断の速度", "早く決めることが必ずしも良い判断につながるとは限らない。特に、影響が広範囲に及ぶ問題では、時間をかけて前提を確認する必要がある。一方で、決定を先延ばしにすること自体がリスクとなる場合もある。", "Автор сравнивает риск поспешного решения и риск бесконечного откладывания."),
        ("仕事と評価", "成果だけで人を評価する仕組みは分かりやすい。しかし、成果が出るまでの過程を無視すれば、短期的な数字だけを追う行動を促しかねない。評価制度は、人を管理するためだけでなく、どのような行動を社会が望むのかを示すものでもある。", "Система оценки формирует поведение, а не только измеряет результат."),
    ]
    items = []
    for index, (title, jp, ru) in enumerate(texts, start=1):
        items.append({
            "id": f"n1-reading-textbook-{index}",
            "lessonId": f"bulk-n1-{index:02d}",
            "title": {"ru": f"Текст {index}: {title}", "en": f"Text {index}: {title}"},
            "jp": jp,
            "reading": "",
            "ru": ru,
            "en": ru,
            "source": "Flash Kanji N1 PDF, section 8",
            "questions": [
                {
                    "prompt": {"ru": "Какой главный вывод делает автор?", "en": "What is the author's main conclusion?"},
                    "answer": "main",
                    "options": [
                        {"value": "main", "label": {"ru": ru, "en": ru}},
                        {"value": "detail", "label": {"ru": "Автор перечисляет только частные факты.", "en": "The author only lists isolated facts."}},
                        {"value": "opposite", "label": {"ru": "Автор утверждает обратное.", "en": "The author argues the opposite."}},
                    ],
                }
            ],
        })
    return items


def build_listening_items() -> list[dict]:
    scripts = [
        ("会議の延期", "A: 明日の会議ですが、資料がまだそろっていないようです。 B: では、無理に実施するより、来週に延期したほうがよさそうですね。 A: ただ、先方には今日中に連絡しておく必要があります。", "Сегодня нужно связаться с другой стороной."),
        ("方針の変更", "上司: 今回の方針変更は、現場の負担を考慮したものです。 社員: ということは、締切も見直されるのでしょうか。 上司: その点については、各部署の状況いかんで判断します。", "Дедлайн зависит от ситуации в каждом отделе."),
        ("研究発表", "発表者: この調査は十分とは言えませんが、傾向を把握する手がかりにはなります。 質問者: つまり、結論を急ぐべきではないということですね。 発表者: ええ、その通りです。", "Нельзя торопиться с окончательным выводом."),
        ("店での苦情", "客: 修理したばかりなのに、また動かなくなりました。 店員: ご迷惑をおかけして申し訳ありません。確認した上で、交換も含めて対応いたします。", "Сотрудник сначала проверит товар."),
        ("学習計画", "N1の学習では、長い時間勉強すること以上に、何を間違えたかを記録することが重要です。記録なしに復習しても、同じ問題を繰り返す恐れがあります。", "Важнее записывать ошибки, чем просто считать часы."),
        ("社会問題", "便利さを追求するあまり、私たちは不便さが持っていた価値を見落としているのかもしれません。待つ時間や迷う時間にも、考える余地があったのです。", "Неудобство может давать время на размышление."),
    ]
    return [{
        "id": f"n1-listening-{index}",
        "title": {"ru": f"Скрипт {index}: {title}", "en": f"Script {index}: {title}"},
        "jp": jp,
        "ru": ru,
        "source": "Flash Kanji N1 PDF, section 9",
        "questions": [{
            "prompt": {"ru": "Что нужно понять из аудио?", "en": "What should you understand from the audio?"},
            "answer": "main",
            "options": [
                {"value": "main", "label": {"ru": ru, "en": ru}},
                {"value": "wrong_time", "label": {"ru": "В тексте говорится только о времени.", "en": "The script only discusses time."}},
                {"value": "no_action", "label": {"ru": "Никакого действия не требуется.", "en": "No action is required."}},
            ],
        }],
    } for index, (title, jp, ru) in enumerate(scripts, start=1)]


def lesson_shell(lesson_number: int, meta: dict, cards: list[dict], grammar_items: list[dict], reading_items: list[dict]) -> dict:
    lesson_id = f"bulk-n1-{lesson_number:02d}"
    grammar_focus = [item["pattern"] for item in grammar_items[(lesson_number - 1) * 3: lesson_number * 3]][:3]
    if len(grammar_focus) < 3:
        grammar_focus.extend(item["pattern"] for item in grammar_items[:3 - len(grammar_focus)])
    sentences = [
        {"jp": f"この資料では「{cards[0]['kanji']}」を含む語彙の使い方を確認します。", "reading": "", "ru": f"В этом материале проверяем употребление слов со знаком {cards[0]['kanji']}.", "en": f"This material checks words that contain {cards[0]['kanji']}."},
        {"jp": f"著者の主張を理解するには、「{cards[1]['kanji']}」の関連語を文脈で読む必要があります。", "reading": "", "ru": f"Чтобы понять позицию автора, слова со знаком {cards[1]['kanji']} нужно читать в контексте.", "en": f"To understand the author's claim, read words with {cards[1]['kanji']} in context."},
        {"jp": f"「{cards[2]['kanji']}」は単独で覚えるより、複合語と一緒に覚えたほうが定着します。", "reading": "", "ru": f"Знак {cards[2]['kanji']} лучше закрепляется вместе со сложными словами.", "en": f"{cards[2]['kanji']} sticks better together with compounds."},
        {"jp": "根拠を確認した上で、自分の意見を短くまとめてください。", "reading": "", "ru": "Проверь основание и кратко сформулируй своё мнение.", "en": "Check the basis and summarize your opinion briefly."},
    ]
    reading = reading_items[(lesson_number - 1) % len(reading_items)]["id"] if reading_items else None
    return {
        "id": lesson_id,
        "level": "N1",
        "order": lesson_number,
        "title": {"ru": meta["titleRu"], "en": meta["titleEn"]},
        "theme": {"ru": f"N1 кандзи {cards[0]['number']}-{cards[-1]['number']}", "en": f"N1 kanji {cards[0]['number']}-{cards[-1]['number']}"},
        "kanji": [card["kanji"] for card in cards],
        "goal": {"ru": meta["goalRu"], "en": meta["goalEn"]},
        "durationMinutes": 55,
        "grammarFocus": grammar_focus,
        "sentences": sentences,
        "writing": [card["kanji"] for card in cards[:8]],
        "reviewAfterDays": [1, 3, 7, 14, 30, 60, 90, 120],
        "miniReadingId": reading,
    }


def build_exercise_config(lessons: list[dict], cards_by_kanji: dict[str, dict]) -> dict:
    overlays = {}
    for lesson in lessons:
        cards = [cards_by_kanji[kanji] for kanji in lesson["kanji"] if kanji in cards_by_kanji]
        if not cards:
            continue
        first = cards[0]
        overlays[lesson["id"]] = [
            {"type": "active-recall", "kanji": first["kanji"], "prompt": f"Вспомни значение {first['kanji']} без подсказки.", "answer": first["meaning"]["ru"], "rewardXp": 14, "rewardMoon": 1},
            {"type": "writing", "kanji": cards[min(1, len(cards) - 1)]["kanji"], "prompt": "Напиши знак и назови одно слово-пример.", "rewardXp": 14, "rewardMoon": 1},
        ]
    return {
        "version": 1,
        "level": "N1",
        "lessonQuestionCount": 10,
        "reviewModes": [
            {"id": "due", "title": {"ru": "К повторению", "en": "Due"}},
            {"id": "difficult", "title": {"ru": "Сложные", "en": "Difficult"}},
            {"id": "all", "title": {"ru": "Весь N1", "en": "All N1"}},
        ],
        "types": [
            {"type": "meaning", "title": {"ru": "Значение в N1-контексте", "en": "Meaning in N1 context"}, "rewardXp": 13, "rewardMoon": 1},
            {"type": "kanji", "title": {"ru": "Кандзи по смыслу", "en": "Kanji from meaning"}, "rewardXp": 13, "rewardMoon": 1},
            {"type": "reading", "title": {"ru": "Чтение слова", "en": "Word reading"}, "rewardXp": 13, "rewardMoon": 1},
            {"type": "sentence", "title": {"ru": "Позиция в предложении", "en": "Sentence position"}, "rewardXp": 14, "rewardMoon": 1},
            {"type": "grammar", "title": {"ru": "Грамматика N1", "en": "N1 grammar"}, "rewardXp": 14, "rewardMoon": 1},
            {"type": "active-recall", "title": {"ru": "Активное вспоминание", "en": "Active recall"}, "rewardXp": 14, "rewardMoon": 1},
        ],
        "lessonOverlays": overlays,
    }


def build_tests(cards: list[dict], grammar_items: list[dict]) -> dict:
    items = []
    for index, card in enumerate(cards[:60]):
        options = [card["meaning"]["ru"]]
        for offset in (17, 31, 43):
            candidate = cards[(index + offset) % len(cards)]["meaning"]["ru"]
            if candidate not in options:
                options.append(candidate)
        items.append({
            "id": f"n1-diagnostic-{index + 1:03d}",
            "kanji": card["kanji"],
            "question": {"ru": "Что означает этот кандзи?", "en": "What does this kanji mean?"},
            "answer": {"ru": card["meaning"]["ru"], "en": card["meaning"]["en"]},
            "options": options,
            "lessonId": card["lessonId"],
        })
    for grammar in grammar_items[:30]:
        items.append({
            "id": f"{grammar['id']}-diagnostic",
            "kind": "grammar",
            "question": grammar["question"],
            "answer": grammar["answer"],
            "options": grammar["options"],
            "lessonId": f"bulk-n1-{min(53, max(1, grammar['order'] // 3 + 1)):02d}",
        })
    return {"version": 1, "level": "N1", "generatedAt": now_iso(), "items": items}


def update_index_item(items: list[dict], textbook: dict) -> list[dict]:
    next_items = []
    replaced = False
    for item in items:
        if item.get("jlpt") == "N1":
            next_items.append({**item, **textbook})
            replaced = True
        else:
            next_items.append(item)
    if not replaced:
        next_items.append(textbook)
    return next_items


def main() -> None:
    anchor_n1 = build_anchor_n1()
    kanjidic = build_kanjidic_map()
    meaning_map = parse_meaning_map()
    existing_cards = existing_n1_cards_by_position()
    old_by_kanji = {}
    for card in existing_cards:
        kanji = clean_text(card.get("kanji") or "")
        if is_cjk(kanji) and kanji not in old_by_kanji:
            old_by_kanji[kanji] = card
    sequence = build_unique_kanji_sequence(existing_cards, anchor_n1)
    examples_by_kanji = load_dictionary_examples(set(sequence))
    grammar_items = parse_grammar_items()
    reading_items = build_reading_items()
    listening_items = build_listening_items()
    lesson_meta = pdf_lesson_meta()

    all_cards = []
    lessons = []
    cursor = 0
    for lesson_number, count in enumerate(LESSON_CARD_COUNTS, start=1):
        lesson_id = f"bulk-n1-{lesson_number:02d}"
        meta = lesson_meta[lesson_number - 1]
        preview_lesson = {
            "id": lesson_id,
            "title": {"ru": meta["titleRu"], "en": meta["titleEn"]},
            "grammarFocus": [item["pattern"] for item in grammar_items[(lesson_number - 1) * 3: lesson_number * 3]][:3],
            "sourcePage": meta["pageNumber"],
        }
        lesson_cards = []
        for position in range(cursor, cursor + count):
            kanji = sequence[position]
            lesson_cards.append(build_card(position, kanji, preview_lesson, old_by_kanji.get(kanji), kanjidic, examples_by_kanji, meaning_map))
        cursor += count
        shell = lesson_shell(lesson_number, meta, lesson_cards, grammar_items, reading_items)
        for card in lesson_cards:
            card["lessonTitle"] = shell["title"]["ru"]
            card["lessonTitleEn"] = shell["title"]["en"]
            card["grammarLinks"] = shell["grammarFocus"]
        all_cards.extend(lesson_cards)
        lessons.append(shell)

    if len(all_cards) != KANJI_COUNT or len({card["kanji"] for card in all_cards}) != KANJI_COUNT:
        raise SystemExit("N1 generation did not produce 1047 unique cards.")

    textbook_meta = {
        "jlpt": "N1",
        "slug": "n1",
        "title": {"ru": "N1: тексты и нюансы", "en": "N1: Texts and nuance"},
        "displayTitle": {"ru": "Тексты и нюансы", "en": "Texts and nuance"},
        "description": {"ru": "Верхний уровень Flash Kanji: редкие кандзи, формальные слова, плотные абзацы, позиция автора и выводы.", "en": "The top Flash Kanji layer: rare kanji, formal vocabulary, dense paragraphs, author stance, and conclusions."},
        "goal": {"ru": "Разбирать длинные фразы, редкие чтения и смысловые оттенки в чтении.", "en": "Break down long phrases, rare readings, and meaning nuance in reading."},
        "recommendedCycle": {"ru": "Повторяй каждые 5–7 дней с точечным возвратом к слабым карточкам.", "en": "Review every 5–7 days with targeted returns to weak cards."},
        "previousLevels": ["N5", "N4", "N3", "N2"],
        "nextLevels": [],
        "coverImage": "assets/bg/bg_silent_road.webp",
        "pdfFile": "docs/flashkanji_N1_textbook_flashkanji_space.pdf",
        "pdfUrl": "docs/flashkanji_N1_textbook_flashkanji_space.pdf",
        "lessonIds": [lesson["id"] for lesson in lessons],
        "lessonCount": LESSON_COUNT,
        "kanjiCount": KANJI_COUNT,
        "cardCount": KANJI_COUNT,
        "grammarCount": len(grammar_items),
        "readingCount": len(reading_items),
        "listeningCount": len(listening_items),
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
    }
    generated_at = now_iso()
    kanji_payload = {"version": 1, "level": "N1", "generatedAt": generated_at, "textbook": textbook_meta, "items": all_cards}
    lessons_payload = {"version": 1, "level": "N1", "generatedAt": generated_at, "textbook": textbook_meta, "items": lessons}
    meta_payload = {
        "version": 1,
        "level": "N1",
        "title": textbook_meta["title"],
        "description": textbook_meta["description"],
        "principle": {"ru": "кандзи -> слово -> чтение -> грамматика -> абзац -> позиция автора -> вывод -> ошибка -> SRS", "en": "kanji -> word -> reading -> grammar -> paragraph -> author stance -> conclusion -> mistake -> SRS"},
        "kanjiCount": KANJI_COUNT,
        "lessonCount": LESSON_COUNT,
        "kanjiPerLesson": 20,
        "grammarCount": len(grammar_items),
        "readingCount": len(reading_items),
        "listeningCount": len(listening_items),
        "pdfUrl": textbook_meta["pdfUrl"],
        "reviewPlan": [
            {"day": "1–53", "label": {"ru": "каждый урок: 20 кандзи, 3 грамматики, мини-reading и SRS", "en": "each lesson: 20 kanji, 3 grammar points, mini reading, and SRS"}},
            {"day": "54–90", "label": {"ru": "повтор ошибок, чтение, аудирование и финальный тест", "en": "mistake review, reading, listening, and the final test"}},
        ],
        "n5Bridge": ["N2 reading", "author stance", "formal vocabulary", "abstract logic"],
        "rewards": {"addToSrsXp": 8, "knowXp": 11, "hardXp": 2, "exerciseXp": 13, "exerciseMoon": 1, "grammarXp": 14, "grammarMoon": 1, "lessonCompleteXp": 105, "lessonCompleteMoon": 12, "readingXp": 55, "readingMoon": 5, "listeningXp": 50, "listeningMoon": 5, "finalTestXp": 320, "finalTestMoon": 60},
        "textbook": textbook_meta,
    }
    final_test = {
        "version": 1,
        "level": "N1",
        "title": {"ru": "Финальный тест Flash Kanji N1", "en": "Flash Kanji N1 Final Test"},
        "description": {"ru": "Смешанный тест по 1047 кандзи N1, грамматике, чтению, аудированию и SRS.", "en": "A mixed test across 1047 N1 kanji, grammar, reading, listening, and SRS."},
        "questionCount": 45,
        "passingPercent": 82,
        "kanjiPool": [card["kanji"] for card in all_cards[7::53]][:45],
        "grammarPool": [item["pattern"] for item in grammar_items[:45]],
        "readingPool": [item["id"] for item in reading_items],
        "types": ["meaning", "reading", "sentence", "kanji", "word", "grammar", "mini-reading", "srs"],
        "rewards": {"completeXp": 320, "completeMoon": 60, "passXp": 160, "passMoon": 25},
    }

    for lesson in lessons:
        cards = [card for card in all_cards if card["lessonId"] == lesson["id"]]
        dump_json(LESSONS_GENERATED_DIR / f"{lesson['id']}.json", {"lesson": {"id": lesson["id"], "title": lesson["title"]["ru"], "title_en": lesson["title"]["en"], "jlpt": "N1", "order": 55 + lesson["order"]}, "items": cards})

    manifest = load_json(LESSONS_MANIFEST_PATH, {"version": 1, "course": "Flash Kanji Core", "lessons": []})
    manifest_lessons = [item for item in manifest.get("lessons", []) if not str(item.get("id", "")).startswith("bulk-n1-")]
    for lesson in lessons:
        cards = [card for card in all_cards if card["lessonId"] == lesson["id"]]
        manifest_lessons.append({
            "id": lesson["id"],
            "title": lesson["title"]["ru"],
            "titleEn": lesson["title"]["en"],
            "jlpt": "N1",
            "order": 55 + lesson["order"],
            "summary": lesson["goal"]["ru"],
            "summaryEn": lesson["goal"]["en"],
            "file": f"data/lessons/generated/{lesson['id']}.json",
            "unlockLevel": 1,
            "mascot": "eva",
            "cardCount": len(cards),
            "kanjiCount": len(cards),
            "sampleKanji": [card["kanji"] for card in cards[:8]],
            "focusWords": [example["word"] for card in cards[:5] for example in card.get("examples", [])[:1]],
        })
    manifest["updated_at"] = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    manifest["lessons"] = manifest_lessons

    translations = load_json(LESSON_TRANSLATIONS_PATH, {"version": 1, "items": {}})
    translations.setdefault("items", {})
    for lesson in lessons:
        translations["items"][lesson["id"]] = {"title_en": lesson["title"]["en"], "summary_en": lesson["goal"]["en"]}

    textbooks_index = load_json(TEXTBOOKS_INDEX_PATH, {"version": 1, "levels": []})
    textbooks_index["generatedAt"] = generated_at
    textbooks_index["levels"] = update_index_item(textbooks_index.get("levels", []), textbook_meta)

    jlpt_index = load_json(JLPT_INDEX_PATH, {"version": 1, "items": []})
    jlpt_index["generatedAt"] = generated_at
    jlpt_index["items"] = update_index_item(jlpt_index.get("items", []), textbook_meta)

    rewards = load_json(REWARDS_PATH, {"version": 1, "lessonUnlocks": {}})
    rewards.setdefault("lessonUnlocks", {})
    for lesson in lessons:
        rewards["lessonUnlocks"][lesson["id"]] = 1

    meta_items = load_json(KANJI_META_PATH, {"version": 1, "items": {}})
    translation_items = load_json(KANJI_TRANSLATIONS_PATH, {"version": 1, "items": {}})
    hint_items = load_json(KANJI_HINTS_PATH, {"version": 1, "items": {}})
    meta_items.setdefault("items", {})
    translation_items.setdefault("items", {})
    hint_items.setdefault("items", {})
    for card in all_cards:
        card_id = str(card["id"])
        meta_items["items"][card_id] = {"radical": "", "radicalMeaning": {"ru": "", "en": ""}, "favoriteSeed": False, "audio": {"pronunciation": card["audio"]}}
        translation_items["items"][card_id] = {"meaning_en": card["meaning"]["en"], "interface_use_en": card["interfaceUseEn"]}
        hint_items["items"][card_id] = {"hint": {"ru": card["hintRu"], "en": f"Connect {card['kanji']} with {card['meaning']['en']}."}, "mnemonic": {"ru": card["hintRu"], "en": f"Use a real compound to anchor {card['kanji']}."}}

    dump_json(N1_DIR / "kanji.json", kanji_payload)
    dump_json(N1_DIR / "lessons.json", lessons_payload)
    dump_json(N1_DIR / "meta.json", meta_payload)
    dump_json(N1_DIR / "grammar.json", {"version": 1, "level": "N1", "generatedAt": generated_at, "items": grammar_items})
    dump_json(N1_DIR / "reading.json", {"version": 1, "level": "N1", "generatedAt": generated_at, "items": reading_items})
    dump_json(N1_DIR / "listening.json", {"version": 1, "level": "N1", "generatedAt": generated_at, "items": listening_items})
    dump_json(N1_DIR / "exercises.json", build_exercise_config(lessons, {card["kanji"]: card for card in all_cards}))
    dump_json(N1_DIR / "tests.json", build_tests(all_cards, grammar_items))
    dump_json(N1_DIR / "final-test.json", final_test)
    dump_json(LESSONS_MANIFEST_PATH, manifest)
    dump_json(LESSON_TRANSLATIONS_PATH, translations)
    dump_json(TEXTBOOKS_INDEX_PATH, textbooks_index)
    dump_json(JLPT_INDEX_PATH, jlpt_index)
    dump_json(REWARDS_PATH, rewards)
    dump_json(KANJI_META_PATH, meta_items)
    dump_json(KANJI_TRANSLATIONS_PATH, translation_items)
    dump_json(KANJI_HINTS_PATH, hint_items)
    if not KANJI_PAGE_SOURCES_PATH.exists():
        dump_json(KANJI_PAGE_SOURCES_PATH, {"version": 1, "items": {}})

    print(f"Generated N1 textbook: {len(all_cards)} unique kanji, {len(lessons)} lessons, {len(grammar_items)} grammar items.")


if __name__ == "__main__":
    main()
