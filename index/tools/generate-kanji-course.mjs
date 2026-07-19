import { mkdir, readFile, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";

const SOURCES = {
  kanji:
    "https://raw.githubusercontent.com/Smallsan/jlpt_kanji_json_msgpack/main/kanji_jlpt_only.json",
  anchorKanji:
    "https://raw.githubusercontent.com/AnchorI/jlpt-kanji-dictionary/main/jlpt-kanji.json",
  dictionaries: [1, 2, 3, 4].map(
    (part) => `https://raw.githubusercontent.com/AnchorI/jlpt-kanji-dictionary/main/dictionary_part_${part}.json`
  )
};

const TARGET_TOTAL_CARDS = 1200;
const CARDS_PER_LESSON = 20;
const GENERATED_ID_START = 10001;
const LEVEL_ORDER = ["N5", "N4", "N3", "N2", "N1"];
const GENERATED_DIR = "generated";
const APP_POOLS = {
  N5: ["LINE", "Google Calendar", "YouTube", "Discord", "Duolingo"],
  N4: ["Google Maps", "Notion", "Telegram", "Spotify", "Nintendo eShop"],
  N3: ["Twitter", "Reddit", "News apps", "Slack", "Steam"],
  N2: ["Banking apps", "GitHub", "Analytics dashboards", "Travel apps", "LinkedIn"],
  N1: ["Government portals", "Academic databases", "Legal apps", "Financial terminals", "Enterprise tools"]
};

const LEVEL_LABELS_RU = {
  N5: "базовый набор",
  N4: "повседневные интерфейсы",
  N3: "медиа и общество",
  N2: "сложные тексты",
  N1: "продвинутый корпус"
};

const LEVEL_LABELS_EN = {
  N5: "core set",
  N4: "everyday interfaces",
  N3: "media and society",
  N2: "complex texts",
  N1: "advanced corpus"
};

const MEANING_RU = {
  "above": "верх, выше",
  "accept": "принимать",
  "accompany": "сопровождать",
  "act": "действие",
  "add": "добавлять",
  "advance": "продвигаться",
  "again": "снова",
  "air": "воздух",
  "allow": "разрешать",
  "animal": "животное",
  "answer": "ответ",
  "appear": "появляться",
  "area": "область",
  "arrive": "прибывать",
  "ask": "спрашивать",
  "attack": "атака",
  "autumn": "осень",
  "bad": "плохой",
  "bank": "банк",
  "base": "основа",
  "be": "быть",
  "beautiful": "красивый",
  "before": "до, перед",
  "beginning": "начало",
  "below": "низ, ниже",
  "big": "большой",
  "bird": "птица",
  "black": "чёрный",
  "blue": "синий",
  "body": "тело",
  "book": "книга",
  "both": "оба",
  "bright": "яркий",
  "bring": "приносить",
  "build": "строить",
  "business": "дело, бизнес",
  "buy": "покупать",
  "call": "звать",
  "capital": "столица",
  "car": "машина",
  "cause": "причина",
  "center": "центр",
  "change": "изменение",
  "child": "ребёнок",
  "choose": "выбирать",
  "city": "город",
  "clear": "ясный",
  "close": "закрывать",
  "clothes": "одежда",
  "cloud": "облако",
  "cold": "холодный",
  "color": "цвет",
  "come": "приходить",
  "common": "общий",
  "company": "компания",
  "compare": "сравнивать",
  "complete": "завершать",
  "condition": "условие",
  "connect": "соединять",
  "continue": "продолжать",
  "country": "страна",
  "create": "создавать",
  "cut": "резать",
  "day": "день",
  "death": "смерть",
  "deep": "глубокий",
  "depart": "отправляться",
  "direction": "направление",
  "divide": "делить",
  "door": "дверь",
  "down": "вниз",
  "drink": "пить",
  "earth": "земля",
  "east": "восток",
  "eat": "есть",
  "eight": "восемь",
  "electricity": "электричество",
  "end": "конец",
  "enter": "входить",
  "eye": "глаз",
  "face": "лицо",
  "fall": "падать",
  "family": "семья",
  "far": "далеко",
  "fast": "быстрый",
  "father": "отец",
  "feel": "чувствовать",
  "female": "женщина, женский",
  "few": "мало",
  "field": "поле",
  "fight": "бороться",
  "find": "находить",
  "fire": "огонь",
  "first": "первый",
  "fish": "рыба",
  "five": "пять",
  "flower": "цветок",
  "food": "еда",
  "foot": "нога",
  "force": "сила",
  "four": "четыре",
  "friend": "друг",
  "front": "перед",
  "future": "будущее",
  "garden": "сад",
  "gate": "ворота",
  "give": "давать",
  "go": "идти",
  "gold": "золото",
  "good": "хороший",
  "government": "правительство",
  "great": "великий",
  "ground": "земля",
  "group": "группа",
  "grow": "расти",
  "hand": "рука",
  "happy": "счастливый",
  "hard": "твёрдый",
  "hear": "слышать",
  "heart": "сердце",
  "heavy": "тяжёлый",
  "high": "высокий",
  "home": "дом",
  "house": "дом",
  "hundred": "сто",
  "idea": "идея",
  "illness": "болезнь",
  "inside": "внутри",
  "interval": "промежуток",
  "join": "соединяться",
  "king": "король",
  "know": "знать",
  "language": "язык",
  "large": "большой",
  "last": "последний",
  "law": "закон",
  "learn": "учиться",
  "leave": "покидать",
  "left": "левый",
  "life": "жизнь",
  "light": "свет",
  "listen": "слушать",
  "little": "маленький",
  "long": "длинный",
  "look": "смотреть",
  "lose": "терять",
  "love": "любовь",
  "make": "делать",
  "man": "мужчина",
  "many": "много",
  "market": "рынок",
  "meaning": "значение",
  "meet": "встречать",
  "middle": "середина",
  "mind": "разум",
  "money": "деньги",
  "month": "месяц",
  "moon": "луна",
  "mother": "мать",
  "mountain": "гора",
  "move": "двигаться",
  "name": "имя",
  "near": "рядом",
  "new": "новый",
  "night": "ночь",
  "nine": "девять",
  "north": "север",
  "not": "не",
  "now": "сейчас",
  "number": "число",
  "old": "старый",
  "one": "один",
  "open": "открывать",
  "order": "порядок",
  "origin": "источник",
  "outside": "снаружи",
  "part": "часть",
  "person": "человек",
  "place": "место",
  "plan": "план",
  "power": "сила",
  "present": "настоящее",
  "price": "цена",
  "private": "личный",
  "problem": "проблема",
  "public": "общественный",
  "question": "вопрос",
  "rain": "дождь",
  "read": "читать",
  "red": "красный",
  "remember": "помнить",
  "reply": "ответ",
  "rest": "отдых",
  "return": "возвращаться",
  "rice": "рис",
  "right": "правый",
  "river": "река",
  "road": "дорога",
  "rock": "камень",
  "room": "комната",
  "run": "бежать",
  "same": "тот же",
  "say": "говорить",
  "school": "школа",
  "sea": "море",
  "see": "видеть",
  "sell": "продавать",
  "send": "отправлять",
  "seven": "семь",
  "short": "короткий",
  "show": "показывать",
  "six": "шесть",
  "sky": "небо",
  "small": "маленький",
  "sound": "звук",
  "south": "юг",
  "speak": "говорить",
  "spirit": "дух",
  "spring": "весна",
  "stand": "стоять",
  "star": "звезда",
  "start": "начинать",
  "stop": "останавливать",
  "street": "улица",
  "strong": "сильный",
  "study": "учёба",
  "summer": "лето",
  "sun": "солнце",
  "system": "система",
  "take": "брать",
  "talk": "говорить",
  "teach": "учить",
  "ten": "десять",
  "thing": "вещь",
  "think": "думать",
  "three": "три",
  "time": "время",
  "town": "город",
  "tree": "дерево",
  "two": "два",
  "under": "под",
  "up": "вверх",
  "use": "использовать",
  "view": "вид",
  "village": "деревня",
  "voice": "голос",
  "wait": "ждать",
  "walk": "ходить",
  "war": "война",
  "water": "вода",
  "way": "путь",
  "west": "запад",
  "white": "белый",
  "winter": "зима",
  "woman": "женщина",
  "word": "слово",
  "work": "работа",
  "world": "мир",
  "write": "писать",
  "year": "год"
};

const ROMAJI = {
  あ: "a",
  い: "i",
  う: "u",
  え: "e",
  お: "o",
  か: "ka",
  き: "ki",
  く: "ku",
  け: "ke",
  こ: "ko",
  さ: "sa",
  し: "shi",
  す: "su",
  せ: "se",
  そ: "so",
  た: "ta",
  ち: "chi",
  つ: "tsu",
  て: "te",
  と: "to",
  な: "na",
  に: "ni",
  ぬ: "nu",
  ね: "ne",
  の: "no",
  は: "ha",
  ひ: "hi",
  ふ: "fu",
  へ: "he",
  ほ: "ho",
  ま: "ma",
  み: "mi",
  む: "mu",
  め: "me",
  も: "mo",
  や: "ya",
  ゆ: "yu",
  よ: "yo",
  ら: "ra",
  り: "ri",
  る: "ru",
  れ: "re",
  ろ: "ro",
  わ: "wa",
  を: "o",
  ん: "n",
  が: "ga",
  ぎ: "gi",
  ぐ: "gu",
  げ: "ge",
  ご: "go",
  ざ: "za",
  じ: "ji",
  ず: "zu",
  ぜ: "ze",
  ぞ: "zo",
  だ: "da",
  ぢ: "ji",
  づ: "zu",
  で: "de",
  ど: "do",
  ば: "ba",
  び: "bi",
  ぶ: "bu",
  べ: "be",
  ぼ: "bo",
  ぱ: "pa",
  ぴ: "pi",
  ぷ: "pu",
  ぺ: "pe",
  ぽ: "po",
  きゃ: "kya",
  きゅ: "kyu",
  きょ: "kyo",
  しゃ: "sha",
  しゅ: "shu",
  しょ: "sho",
  ちゃ: "cha",
  ちゅ: "chu",
  ちょ: "cho",
  にゃ: "nya",
  にゅ: "nyu",
  にょ: "nyo",
  ひゃ: "hya",
  ひゅ: "hyu",
  ひょ: "hyo",
  みゃ: "mya",
  みゅ: "myu",
  みょ: "myo",
  りゃ: "rya",
  りゅ: "ryu",
  りょ: "ryo",
  ぎゃ: "gya",
  ぎゅ: "gyu",
  ぎょ: "gyo",
  じゃ: "ja",
  じゅ: "ju",
  じょ: "jo",
  ぢゃ: "ja",
  ぢゅ: "ju",
  ぢょ: "jo",
  びゃ: "bya",
  びゅ: "byu",
  びょ: "byo",
  ぴゃ: "pya",
  ぴゅ: "pyu",
  ぴょ: "pyo"
};

export async function generateKanjiCourse(rootDir) {
  const dataDir = path.join(rootDir, "data");
  const lessonsDir = path.join(dataDir, "lessons");
  const generatedDir = path.join(lessonsDir, GENERATED_DIR);
  await mkdir(generatedDir, { recursive: true });

  const [existingManifest, rewards, meta, hints, kanjiTranslations, lessonTranslations] = await Promise.all([
    readJson(path.join(dataDir, "lessons.json")),
    readJson(path.join(dataDir, "rewards.json")),
    readJson(path.join(dataDir, "kanji", "meta.json")),
    readJson(path.join(dataDir, "kanji", "hints.json")),
    readJson(path.join(dataDir, "kanji", "translations.json")),
    readJson(path.join(lessonsDir, "translations.json"))
  ]);

  const manualManifestLessons = existingManifest.lessons.filter((lesson) => !lesson.file.includes(`/${GENERATED_DIR}/`));
  const existingLessons = await Promise.all(
    manualManifestLessons.map((lesson) => readJson(path.join(rootDir, lesson.file)))
  );
  const existingKanji = new Set(existingLessons.flatMap((lesson) => lesson.items.map((item) => item.kanji)));
  const existingCount = existingLessons.reduce((sum, lesson) => sum + lesson.items.length, 0);

  const [kanjiDataset, anchorKanji, ...dictionaryParts] = await Promise.all([
    fetchJson(SOURCES.kanji),
    fetchJson(SOURCES.anchorKanji),
    ...SOURCES.dictionaries.map(fetchJson)
  ]);

  const dictionary = dictionaryParts.flat();
  const anchorByKanji = new Map(anchorKanji.map((item) => [item.kanji, item]));
  const selected = selectKanji(kanjiDataset, existingKanji, TARGET_TOTAL_CARDS - existingCount);
  const selectedSet = new Set(selected.map((item) => item.kanji));
  const { singleEntries, examplesByKanji } = indexDictionary(dictionary, selectedSet);

  const audioFiles = await scanAudioFiles(rootDir);
  const generatedCards = selected.map((entry, index) =>
    buildCard({
      entry,
      sourceMeta: anchorByKanji.get(entry.kanji),
      singleEntry: singleEntries.get(entry.kanji),
      examples: examplesByKanji.get(entry.kanji) || [],
      id: GENERATED_ID_START + index
    })
  );

  const generatedLessons = buildLessons(generatedCards, audioFiles, rootDir);
  const finalLessons = mergeManifest(manualManifestLessons, generatedLessons);
  const generatedLessonIds = new Set(generatedLessons.map((lesson) => lesson.id));

  const staleFiles = await readdir(generatedDir).catch(() => []);
  await Promise.all(
    staleFiles
      .filter((file) => /^bulk-n[1-5]-\d+\.json$/.test(file))
      .map((file) => unlink(path.join(generatedDir, file)))
  );

  await Promise.all(
    generatedLessons.map((lesson) =>
      writeJson(path.join(rootDir, lesson.file), {
        lesson: {
          id: lesson.id,
          title: lesson.title,
          jlpt: lesson.jlpt,
          order: lesson.order
        },
        items: lesson.items
      })
    )
  );

  const lessonsManifest = {
    ...existingManifest,
    updated_at: "2026-05-28",
    lessons: finalLessons.map(({ items, ...lesson }) => lesson)
  };

  const nextRewards = {
    ...rewards,
    lessonUnlocks: {
      ...rewards.lessonUnlocks,
      ...Object.fromEntries(generatedLessons.map((lesson) => [lesson.id, lesson.unlockLevel]))
    }
  };

  const nextMeta = {
    ...meta,
    items: {
      ...meta.items,
      ...Object.fromEntries(generatedCards.map((card) => [card.id, card.meta]))
    }
  };

  const nextHints = {
    ...hints,
    items: {
      ...hints.items,
      ...Object.fromEntries(generatedCards.map((card) => [card.id, card.hint]))
    }
  };

  const nextKanjiTranslations = {
    ...kanjiTranslations,
    items: {
      ...kanjiTranslations.items,
      ...Object.fromEntries(generatedCards.map((card) => [card.id, card.translation]))
    }
  };

  const nextLessonTranslations = {
    ...lessonTranslations,
    items: {
      ...lessonTranslations.items,
      ...Object.fromEntries(
        generatedLessons.map((lesson) => [
          lesson.id,
          {
            title_en: lesson.title_en,
            summary_en: lesson.summary_en
          }
        ])
      )
    }
  };

  const contentSources = {
    version: 1,
    generated_at: "2026-05-28",
    total_cards: existingCount + generatedCards.length,
    generated_cards: generatedCards.length,
    generated_lessons: generatedLessons.length,
    sources: [
      {
        name: "JLPT Kanji Dataset (filtered from kanjiapi.dev)",
        url: SOURCES.kanji,
        use: "readings, stroke counts, English meanings and JLPT level metadata"
      },
      {
        name: "AnchorI JLPT Kanji Dictionary",
        url: "https://github.com/AnchorI/jlpt-kanji-dictionary",
        use: "Russian vocabulary examples and kanji frequency metadata"
      }
    ]
  };

  await Promise.all([
    writeJson(path.join(dataDir, "lessons.json"), lessonsManifest),
    writeJson(path.join(dataDir, "rewards.json"), nextRewards),
    writeJson(path.join(dataDir, "kanji", "meta.json"), nextMeta),
    writeJson(path.join(dataDir, "kanji", "hints.json"), nextHints),
    writeJson(path.join(dataDir, "kanji", "translations.json"), nextKanjiTranslations),
    writeJson(path.join(lessonsDir, "translations.json"), nextLessonTranslations),
    writeJson(path.join(dataDir, "content-sources.json"), contentSources),
    updateServiceWorker(rootDir, finalLessons, generatedLessonIds)
  ]);

  return {
    totalCards: existingCount + generatedCards.length,
    generatedCards: generatedCards.length,
    generatedLessons: generatedLessons.length,
    byLevel: countBy(generatedCards, (card) => card.jlpt)
  };
}

function selectKanji(kanjiDataset, existingKanji, needed) {
  const all = Object.values(kanjiDataset)
    .map((item) => ({ ...item, jlptLabel: `N${item.jlpt}` }))
    .filter((item) => LEVEL_ORDER.includes(item.jlptLabel) && !existingKanji.has(item.kanji))
    .sort((a, b) => frequency(a) - frequency(b));

  const selected = [];
  for (const level of LEVEL_ORDER) {
    for (const item of all.filter((entry) => entry.jlptLabel === level)) {
      if (selected.length >= needed) return selected;
      selected.push(item);
    }
  }
  return selected;
}

function buildCard({ entry, sourceMeta, singleEntry, examples, id }) {
  const level = entry.jlptLabel;
  const meaningRu = buildMeaningRu(entry, singleEntry);
  const readings = buildReadingGroups(entry);
  const hiragana = buildReading(entry, singleEntry, readings);
  const exampleItems = buildExamples(entry, singleEntry, examples);
  const apps = APP_POOLS[level] || APP_POOLS.N3;
  const meaningEn = entry.meanings.slice(0, 4).join(", ");
  const interfaceUseRu = `Встречается в словах уровня ${level}: интерфейсы, тексты, уведомления и реальные японские приложения.`;
  const interfaceUseEn = `Appears in ${level} words across interfaces, reading passages, notifications and real Japanese apps.`;

  return {
    id,
    kanji: entry.kanji,
    meaning_ru: meaningRu,
    hiragana,
    romaji: romanizeReading(hiragana),
    onyomi: readings.onyomi,
    onyomi_romaji: readings.onyomi_romaji,
    kunyomi: readings.kunyomi,
    kunyomi_romaji: readings.kunyomi_romaji,
    jlpt: level,
    strokes: entry.stroke_count || sourceMeta?.strokes || 1,
    stroke_order: genericStrokeOrder(entry.stroke_count || sourceMeta?.strokes || 1),
    examples: exampleItems,
    apps,
    interface_use: interfaceUseRu,
    meta: {
      radical: sourceMeta?.radical_number ? `部首 ${sourceMeta.radical_number}` : entry.kanji,
      radicalMeaning: {
        ru: sourceMeta?.radical_number ? `радикал ${sourceMeta.radical_number}` : meaningRu.split(",")[0],
        en: sourceMeta?.radical_number ? `radical ${sourceMeta.radical_number}` : entry.meanings[0] || entry.kanji
      },
      favoriteSeed: false,
      audio: {
        pronunciation: `audio/kanji/${id}-pronunciation.mp3`,
        eva: `audio/eva/${id}-explanation.mp3`,
        leya: `audio/leya/${id}-hint.mp3`
      }
    },
    hint: {
      hint: {
        ru: `Подсказка: ищи ${entry.kanji} в словах ${exampleItems.map((item) => item.word).slice(0, 2).join(" и ")}.`,
        en: `Hint: look for ${entry.kanji} in ${exampleItems.map((item) => item.word).slice(0, 2).join(" and ")}.`
      },
      mnemonic: {
        ru: `${entry.kanji}: свяжи образ со значением "${meaningRu.split(",")[0]}".`,
        en: `${entry.kanji}: connect the shape with "${entry.meanings[0] || "this meaning"}".`
      }
    },
    translation: {
      meaning_en: meaningEn,
      interface_use_en: interfaceUseEn
    }
  };
}

function buildLessons(cards, audioFiles, rootDir) {
  const lessons = [];
  let order = 6;
  for (const level of LEVEL_ORDER) {
    const levelCards = cards.filter((card) => card.jlpt === level);
    for (let offset = 0; offset < levelCards.length; offset += CARDS_PER_LESSON) {
      const lessonNumber = Math.floor(offset / CARDS_PER_LESSON) + 1;
      const padded = String(lessonNumber).padStart(2, "0");
      const id = `bulk-${level.toLowerCase()}-${padded}`;
      const title = `${level}: ${LEVEL_LABELS_RU[level]} ${padded}`;
      const titleEn = `${level}: ${LEVEL_LABELS_EN[level]} ${padded}`;
      const lessonCards = levelCards
        .slice(offset, offset + CARDS_PER_LESSON)
        .map((card) => attachAudioToCard(stripGeneratedFields(card), { id, jlpt: level }, audioFiles, rootDir));
      lessons.push({
        id,
        file: `data/lessons/${GENERATED_DIR}/${id}.json`,
        title,
        title_en: titleEn,
        jlpt: level,
        order,
        unlockLevel: Math.max(1, Math.ceil(order / 2)),
        mascot: order % 2 === 0 ? "eva" : "leya",
        summary: `${lessonCards.length} кандзи уровня ${level} для SRS-практики, словаря и повторений.`,
        summary_en: `${lessonCards.length} ${level} kanji for SRS practice, dictionary search and reviews.`,
        items: lessonCards
      });
      order += 1;
    }
  }
  return lessons;
}

function mergeManifest(existing, generated) {
  const byId = new Map();
  const generatedByLevel = new Map(LEVEL_ORDER.map((level) => [level, []]));
  generated.forEach((lesson) => generatedByLevel.get(lesson.jlpt)?.push(lesson));

  const push = (lesson) => byId.set(lesson.id, lesson);
  existing.filter((lesson) => lesson.id === "lesson-1" || lesson.id === "lesson-2").forEach(push);
  generatedByLevel.get("N5").forEach(push);
  existing.filter((lesson) => lesson.id === "lesson-3").forEach(push);
  generatedByLevel.get("N4").forEach(push);
  existing.filter((lesson) => lesson.id === "lesson-4").forEach(push);
  generatedByLevel.get("N3").forEach(push);
  existing.filter((lesson) => lesson.id === "lesson-5").forEach(push);
  generatedByLevel.get("N2").forEach(push);
  generatedByLevel.get("N1").forEach(push);

  let order = 1;
  return Array.from(byId.values()).map((lesson) => ({
    ...lesson,
    order: order++
  }));
}

function indexDictionary(dictionary, selectedSet) {
  const singleEntries = new Map();
  const examplesByKanji = new Map();

  for (const entry of dictionary) {
    if (!entry?.kanji || typeof entry.kanji !== "string") continue;
    const chars = [...new Set([...entry.kanji].filter((char) => selectedSet.has(char)))];
    if (!chars.length) continue;

    for (const char of chars) {
      if (entry.kanji === char && entry.glossary_ru && !singleEntries.has(char)) {
        singleEntries.set(char, entry);
      }
      if (!examplesByKanji.has(char)) examplesByKanji.set(char, []);
      const bucket = examplesByKanji.get(char);
      if (bucket.length < 80 && entry.kanji !== char && entry.reading) {
        bucket.push(entry);
      }
    }
  }

  for (const bucket of examplesByKanji.values()) {
    bucket.sort((a, b) => scoreExample(b) - scoreExample(a));
  }

  return { singleEntries, examplesByKanji };
}

function buildMeaningRu(entry, singleEntry) {
  if (singleEntry?.glossary_ru?.length) {
    return singleEntry.glossary_ru.slice(0, 2).map(cleanGloss).join("; ");
  }
  const translated = entry.meanings.map((meaning) => MEANING_RU[meaning.toLowerCase()] || meaning).slice(0, 4);
  return translated.join(", ");
}

function buildReading(entry, singleEntry, readings = buildReadingGroups(entry)) {
  const grouped = [readings.onyomi, readings.kunyomi].filter(Boolean).join(" / ");
  if (grouped) return grouped;
  if (singleEntry?.reading) return cleanReading(singleEntry.reading);
  const fallbackReadings = [...entry.kun_readings, ...entry.on_readings]
    .map(cleanReading)
    .filter(Boolean)
    .slice(0, 3);
  return fallbackReadings.join(" / ") || "—";
}

function buildReadingGroups(entry) {
  const onyomi = [...new Set((entry.on_readings || []).map(cleanReading).filter(Boolean))]
    .slice(0, 5)
    .join(" / ");
  const kunyomi = [...new Set((entry.kun_readings || []).map(cleanReading).filter(Boolean))]
    .slice(0, 5)
    .join(" / ");
  return {
    onyomi,
    onyomi_romaji: romanizeReading(onyomi),
    kunyomi,
    kunyomi_romaji: romanizeReading(kunyomi)
  };
}

function buildExamples(entry, singleEntry, examples) {
  const used = new Set();
  const result = [];
  for (const example of examples) {
    if (!example.kanji || used.has(example.kanji) || result.length >= 2) continue;
    used.add(example.kanji);
    result.push({
      word: example.kanji,
      reading: cleanReading(example.reading || ""),
      romaji: romanizeReading(cleanReading(example.reading || "")),
      translation: cleanGloss(example.glossary_ru?.[0] || example.glossary_en?.[0] || entry.meanings[0] || "")
    });
  }
  if (!result.length && singleEntry) {
    result.push({
      word: entry.kanji,
      reading: cleanReading(singleEntry.reading || ""),
      romaji: romanizeReading(cleanReading(singleEntry.reading || "")),
      translation: cleanGloss(singleEntry.glossary_ru?.[0] || entry.meanings[0] || "")
    });
  }
  while (result.length < 2) {
    result.push({
      word: `${entry.kanji}語`,
      reading: `${cleanReading(entry.on_readings[0] || entry.kun_readings[0] || "")}ご`,
      romaji: romanizeReading(`${cleanReading(entry.on_readings[0] || entry.kun_readings[0] || "")}ご`),
      translation: `слово с кандзи ${entry.kanji}`
    });
  }
  return result;
}

function genericStrokeOrder(strokes) {
  return [
    `Всего черт: ${strokes}. Начинай с верхних и левых элементов.`,
    "Двигайся сверху вниз и слева направо, сохраняя пропорции.",
    "Пересекающие и закрывающие черты обычно выполняй ближе к концу."
  ];
}

async function updateServiceWorker(rootDir, lessons, generatedLessonIds) {
  const serviceWorkerPath = path.join(rootDir, "service-worker.js");
  let source = await readFile(serviceWorkerPath, "utf8");
  source = source.replace(/flash-kanji-cache-v\d+/, "flash-kanji-cache-v7");

  const lessonUrls = lessons
    .filter((lesson) => generatedLessonIds.has(lesson.id))
    .map((lesson) => `  "./${lesson.file}",`);
  const markerStart = '  "./data/lessons/lesson-5.json",';
  const insertion = `${markerStart}\n${lessonUrls
    .join("\n")}`;

  source = source.replace(
    /  "\.\/data\/lessons\/lesson-5\.json",\n(?:  "\.\/data\/lessons\/generated\/bulk-n[1-5]-\d+\.json",\n)*/u,
    `${insertion}\n`
  );

  if (!source.includes('"./data/content-sources.json"')) {
    source = source.replace('  "./data/monetization/catalog.json"', '  "./data/monetization/catalog.json",\n  "./data/content-sources.json"');
  }
  await writeFile(serviceWorkerPath, source, "utf8");
}

function stripGeneratedFields(card) {
  const { meta, hint, translation, ...item } = card;
  return item;
}

async function scanAudioFiles(rootDir) {
  const files = new Set();
  const audioDir = path.join(rootDir, "audio", "kanji");

  async function walk(dir) {
    let entries = [];
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(fullPath);
      else if (entry.isFile() && entry.name.toLowerCase().endsWith(".mp3")) {
        files.add(fullPath.replaceAll("\\", "/"));
      }
    }
  }

  await walk(audioDir);
  return files;
}

function attachAudioToCard(card, lesson, audioFiles, rootDir) {
  for (const slug of audioSlugs(card)) {
    const relativePath = expectedKanjiAudioPath(card, lesson, slug);
    const absolutePath = path.join(rootDir, relativePath.replace(/^\.\//, "")).replaceAll("\\", "/");
    if (audioFiles.has(absolutePath)) return { ...card, audio: relativePath };
  }
  return card;
}

function expectedKanjiAudioPath(card, lesson, slug = audioSlug(card.romaji)) {
  const jlpt = String(card.jlpt || lesson.jlpt || "").toLowerCase();
  return `./audio/kanji/${jlpt}/${lesson.id}/${card.id}-${slug}.mp3`;
}

function audioSlugs(card) {
  return [
    ...splitRomaji(card.romaji),
    ...splitRomaji(card.onyomi_romaji),
    ...splitRomaji(card.kunyomi_romaji)
  ]
    .map(audioSlug)
    .filter(Boolean)
    .filter((slug, index, slugs) => slugs.indexOf(slug) === index);
}

function splitRomaji(value) {
  return String(value || "")
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
}

function audioSlug(romaji) {
  return String(romaji || "")
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function cleanGloss(value) {
  return String(value || "")
    .replace(/\s+/g, " ")
    .replace(/^\d+\)\s*/, "")
    .replace(/\{[^}]*\}/g, "")
    .replace(/\((?:связ\.|прост\.|кн\.|уст\.|редк\.|см\.|дип\.|буд\.)\)\s*/giu, "")
    .replace(/^[:;,{～}\s]+/, "")
    .replace(/\s*;\s*$/g, "")
    .trim()
    .slice(0, 120);
}

function cleanReading(value) {
  return kataToHira(String(value || ""))
    .replace(/[.\-]/g, "")
    .replace(/\s+/g, "")
    .split(",")[0]
    .trim();
}

function kataToHira(value) {
  return [...value]
    .map((char) => {
      const code = char.charCodeAt(0);
      return code >= 0x30a1 && code <= 0x30f6 ? String.fromCharCode(code - 0x60) : char;
    })
    .join("");
}

function romanizeReading(value) {
  return value
    .split("/")
    .map((part) => romanizeKana(part.trim()))
    .filter(Boolean)
    .join(" / ");
}

function romanizeKana(value) {
  const text = cleanReading(value);
  let output = "";
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    const pair = char + next;
    if (ROMAJI[pair]) {
      output += ROMAJI[pair];
      i += 1;
      continue;
    }
    if (char === "っ" && next) {
      const nextRomaji = ROMAJI[text.slice(i + 1, i + 3)] || ROMAJI[next] || "";
      output += nextRomaji[0] || "";
      continue;
    }
    if (char === "っ") {
      output += "tsu";
      continue;
    }
    if (char === "ー") {
      output += output.slice(-1);
      continue;
    }
    output += ROMAJI[char] || char;
  }
  return output;
}

function scoreExample(entry) {
  const text = `${entry.kanji} ${entry.glossary_ru?.join(" ") || ""}`;
  const hasRussian = entry.glossary_ru?.length ? 100000000 : 0;
  const shortBonus = Math.max(0, 8 - entry.kanji.length) * 5000000;
  const noKatakana = /[\u30a0-\u30ff]/u.test(entry.kanji) ? -8000000 : 2000000;
  const noRareMark = /(кн\.|уст\.|прост\.|редк\.|связ\.|см\.|\{|\(\()/iu.test(text) ? -6000000 : 1500000;
  const startsWithKanji = /^[\u4e00-\u9fff]/u.test(entry.kanji) ? 1000000 : 0;
  return hasRussian + shortBonus + noKatakana + noRareMark + startsWithKanji;
}

function frequency(entry) {
  return Number(entry.freq_mainichi_shinbun || 99999);
}

function countBy(items, getter) {
  return items.reduce((acc, item) => {
    const key = getter(item);
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

async function readJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

async function writeJson(file, data) {
  await writeFile(file, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Cannot fetch ${url}: ${response.status}`);
  return response.json();
}
