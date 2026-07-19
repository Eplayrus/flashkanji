import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const KANJI_SOURCE =
  "https://raw.githubusercontent.com/Smallsan/jlpt_kanji_json_msgpack/main/kanji_jlpt_only.json";

const ROMAJI = {
  あ: "a", い: "i", う: "u", え: "e", お: "o",
  か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko",
  さ: "sa", し: "shi", す: "su", せ: "se", そ: "so",
  た: "ta", ち: "chi", つ: "tsu", て: "te", と: "to",
  な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no",
  は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho",
  ま: "ma", み: "mi", む: "mu", め: "me", も: "mo",
  や: "ya", ゆ: "yu", よ: "yo",
  ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro",
  わ: "wa", を: "o", ん: "n",
  が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go",
  ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo",
  だ: "da", ぢ: "ji", づ: "zu", で: "de", ど: "do",
  ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo",
  ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po",
  きゃ: "kya", きゅ: "kyu", きょ: "kyo",
  しゃ: "sha", しゅ: "shu", しょ: "sho",
  ちゃ: "cha", ちゅ: "chu", ちょ: "cho",
  にゃ: "nya", にゅ: "nyu", にょ: "nyo",
  ひゃ: "hya", ひゅ: "hyu", ひょ: "hyo",
  みゃ: "mya", みゅ: "myu", みょ: "myo",
  りゃ: "rya", りゅ: "ryu", りょ: "ryo",
  ぎゃ: "gya", ぎゅ: "gyu", ぎょ: "gyo",
  じゃ: "ja", じゅ: "ju", じょ: "jo",
  ぢゃ: "ja", ぢゅ: "ju", ぢょ: "jo",
  びゃ: "bya", びゅ: "byu", びょ: "byo",
  ぴゃ: "pya", ぴゅ: "pyu", ぴょ: "pyo"
};

export async function enrichKanjiReadings(rootDir) {
  const manifestPath = path.join(rootDir, "data", "lessons.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const source = await fetchKanjiSource();
  let cardsUpdated = 0;
  let cardsWithSource = 0;
  let cardsWithoutSource = 0;

  for (const lesson of manifest.lessons) {
    const lessonPath = path.join(rootDir, lesson.file);
    const payload = JSON.parse(await readFile(lessonPath, "utf8"));
    let changed = false;

    payload.items = payload.items.map((card) => {
      const sourceEntry = source.get(card.kanji);
      const readings = sourceEntry ? sourceReadings(sourceEntry) : fallbackReadings(card);
      if (sourceEntry) cardsWithSource += 1;
      else cardsWithoutSource += 1;

      const nextCard = {
        ...card,
        onyomi: readings.onyomi,
        onyomi_romaji: readings.onyomiRomaji,
        kunyomi: readings.kunyomi,
        kunyomi_romaji: readings.kunyomiRomaji
      };

      if (
        card.onyomi !== nextCard.onyomi ||
        card.onyomi_romaji !== nextCard.onyomi_romaji ||
        card.kunyomi !== nextCard.kunyomi ||
        card.kunyomi_romaji !== nextCard.kunyomi_romaji
      ) {
        changed = true;
        cardsUpdated += 1;
      }

      return nextCard;
    });

    if (changed) {
      await writeFile(lessonPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    }
  }

  return { cardsUpdated, cardsWithSource, cardsWithoutSource };
}

async function fetchKanjiSource() {
  const response = await fetch(KANJI_SOURCE);
  if (!response.ok) throw new Error(`Cannot load kanji readings: ${response.status}`);
  const payload = await response.json();
  return new Map(Object.values(payload).map((entry) => [entry.kanji, entry]));
}

function sourceReadings(entry) {
  const onyomi = uniqueReadings(entry.on_readings).slice(0, 5).join(" / ");
  const kunyomi = uniqueReadings(entry.kun_readings).slice(0, 5).join(" / ");
  return {
    onyomi,
    onyomiRomaji: romanizeReading(onyomi),
    kunyomi,
    kunyomiRomaji: romanizeReading(kunyomi)
  };
}

function fallbackReadings(card) {
  const kana = splitReadings(card.hiragana);
  const romaji = splitReadings(card.romaji);
  const onyomi = kana[0] || "";
  const kunyomi = kana.slice(1).join(" / ");
  const onyomiRomaji = romaji[0] || romanizeReading(onyomi);
  const kunyomiRomaji = romaji.slice(1).join(" / ") || romanizeReading(kunyomi);
  return { onyomi, onyomiRomaji, kunyomi, kunyomiRomaji };
}

function uniqueReadings(readings = []) {
  return [...new Set(readings.map(cleanReading).filter(Boolean))];
}

function splitReadings(value) {
  return String(value || "")
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
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
  return splitReadings(value).map(romanizeKana).filter(Boolean).join(" / ");
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
      output += output.match(/[aeiou]$/)?.[0] || "";
      continue;
    }
    output += ROMAJI[char] || char;
  }
  return output;
}
