import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const dataRoot = path.join(projectRoot, "data");
const fixMode = process.argv.includes("--fix");
const summaryOnly = process.argv.includes("--summary");

const skipDirs = new Set(["node_modules", "dist", ".git"]);
const skipFileNames = new Set(["stroke-order-kanjivg.json"]);
const issues = [];
const manualReview = [];

const stats = {
  filesChecked: 0,
  kanjiRecordsChecked: 0,
  readingPairsChecked: 0,
  badPairs: 0,
  fixedWrites: 0,
  lengthMismatches: 0,
  mixedOnKun: 0,
  structureIssues: 0
};

const basicKana = {
  あ: "a", い: "i", う: "u", え: "e", お: "o",
  か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko",
  が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go",
  さ: "sa", し: "shi", す: "su", せ: "se", そ: "so",
  ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo",
  た: "ta", ち: "chi", つ: "tsu", て: "te", と: "to",
  だ: "da", ぢ: "ji", づ: "zu", で: "de", ど: "do",
  な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no",
  は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho",
  ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo",
  ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po",
  ま: "ma", み: "mi", む: "mu", め: "me", も: "mo",
  や: "ya", ゆ: "yu", よ: "yo",
  ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro",
  わ: "wa", ゐ: "i", ゑ: "e", を: "o", ん: "n",
  ゔ: "vu"
};

const yoonKana = {
  きゃ: "kya", きゅ: "kyu", きょ: "kyo",
  ぎゃ: "gya", ぎゅ: "gyu", ぎょ: "gyo",
  しゃ: "sha", しゅ: "shu", しょ: "sho",
  じゃ: "ja", じゅ: "ju", じょ: "jo",
  ちゃ: "cha", ちゅ: "chu", ちょ: "cho",
  ぢゃ: "ja", ぢゅ: "ju", ぢょ: "jo",
  にゃ: "nya", にゅ: "nyu", にょ: "nyo",
  ひゃ: "hya", ひゅ: "hyu", ひょ: "hyo",
  びゃ: "bya", びゅ: "byu", びょ: "byo",
  ぴゃ: "pya", ぴゅ: "pyu", ぴょ: "pyo",
  みゃ: "mya", みゅ: "myu", みょ: "myo",
  りゃ: "rya", りゅ: "ryu", りょ: "ryo",
  ふぁ: "fa", ふぃ: "fi", ふぇ: "fe", ふぉ: "fo",
  しぇ: "she", じぇ: "je", ちぇ: "che",
  てぃ: "ti", でぃ: "di", とぅ: "tu", どぅ: "du",
  つぁ: "tsa", つぃ: "tsi", つぇ: "tse", つぉ: "tso",
  うぃ: "wi", うぇ: "we", うぉ: "wo",
  ゔぁ: "va", ゔぃ: "vi", ゔぇ: "ve", ゔぉ: "vo"
};

const smallVowels = {
  ぁ: "a", ぃ: "i", ぅ: "u", ぇ: "e", ぉ: "o"
};

function toHiragana(value) {
  return String(value || "").normalize("NFKC").replace(/[\u30a1-\u30f6]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60)
  );
}

function cleanKana(value) {
  return toHiragana(value)
    .replace(/[()（）\[\]［］{}｛｝]/gu, "")
    .replace(/[.\-‐‑‒–—―]/gu, "")
    .trim();
}

function isBlank(value) {
  return value === null || value === undefined || (typeof value === "string" && value.trim() === "");
}

function isKanaText(value) {
  return /[\u3040-\u30ff]/u.test(String(value || ""));
}

function splitReadingText(value, { keepEmpty = false } = {}) {
  const prepare = (part) => String(part ?? "").normalize("NFKC").replace(/\(\s*[\/／]\s*\)/gu, "");
  const raw = Array.isArray(value) ? value : prepare(value).split(/[\/／,，、・･;；]+/u);
  return raw
    .flatMap((part) => Array.isArray(part) ? part : prepare(part).split(/[\/／,，、・･;；]+/u))
    .map((part) => prepare(part).trim())
    .filter((part) => keepEmpty || part);
}

function splitRomajiText(value, options) {
  return splitReadingText(value, options).map((part) => part.trim());
}

function lastVowel(value) {
  const match = String(value || "").match(/[aeiou](?!.*[aeiou])/u);
  return match?.[0] || "";
}

function romanizeKana(value, options = {}) {
  const source = cleanKana(value);
  if (!source) return "";
  if (options.particleMode && source === "は") return "wa";
  if (options.particleMode && source === "へ") return "e";
  if (options.particleMode && source === "を") return "o";
  const chars = [...source];
  let result = "";
  let geminate = false;

  for (let i = 0; i < chars.length; i += 1) {
    const char = chars[i];
    const next = chars[i + 1] || "";

    if (char === "っ") {
      geminate = true;
      continue;
    }

    if (char === "ー") {
      const vowel = lastVowel(result);
      if (vowel) result += vowel;
      continue;
    }

    if (/\s/u.test(char)) {
      result = `${result.trimEnd()} `;
      geminate = false;
      continue;
    }

    if (/[。、,.!?！？:：]/u.test(char)) {
      geminate = false;
      continue;
    }

    let roma = "";
    const pair = char + next;
    if (yoonKana[pair]) {
      roma = yoonKana[pair];
      i += 1;
    } else if (basicKana[char]) {
      roma = basicKana[char];
    } else if (smallVowels[char]) {
      roma = smallVowels[char];
    } else if (/[a-zA-Z0-9]/u.test(char)) {
      roma = char.toLowerCase();
    } else {
      geminate = false;
      continue;
    }

    if (options.particleMode) {
      const following = chars[i + 1] || "";
      const boundaryAfter = !following || /[\s。、,.!?！？:：]/u.test(following);
      if (boundaryAfter && result && char === "は") roma = "wa";
      if (boundaryAfter && result && char === "へ") roma = "e";
    }

    if (geminate) {
      const consonant = roma.match(/^[bcdfghjklmnpqrstvwxyz]/u)?.[0] || "";
      if (consonant && consonant !== "n") result += consonant;
      geminate = false;
    }
    result += roma;
  }

  return result.replace(/\s+/gu, " ").trim();
}

function expectedRomajiForPath(value, pathLabel, options = {}) {
  const particleMode = Boolean(options.particleMode) || /\.kana\.hiragana/u.test(pathLabel);
  return romanizeKana(value, { particleMode });
}

function normalizeRomaji(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/gu, "")
    .replace(/[^a-z0-9]+/gu, "");
}

function issue(file, pathLabel, kanji, type, message, expected, actual) {
  const entry = {
    file: path.relative(projectRoot, file).replaceAll("\\", "/"),
    path: pathLabel,
    kanji: kanji || "",
    type,
    message,
    expected,
    actual
  };
  issues.push(entry);
  if (type === "romaji-mismatch") stats.badPairs += 1;
  if (type === "length-mismatch") stats.lengthMismatches += 1;
  if (type === "mixed-on-kun") stats.mixedOnKun += 1;
  if (["bad-format", "blank-reading", "blank-romaji", "missing-romaji", "romanji-field"].includes(type)) {
    stats.structureIssues += 1;
  }
}

function nearestKanji(node, fallback = "") {
  if (!node || typeof node !== "object") return fallback;
  if (typeof node.kanji === "string") return node.kanji;
  if (typeof node.char === "string" && /[\u4e00-\u9fff]/u.test(node.char)) return node.char;
  if (typeof node.word === "string" && /[\u4e00-\u9fff]/u.test(node.word)) return node.word;
  return fallback;
}

function fixValue(node, key, value) {
  if (!fixMode) return;
  if (node[key] === value) return;
  node[key] = value;
  stats.fixedWrites += 1;
}

function validateKanaRomajiParts(file, pathLabel, kanji, kanaParts, romajiParts, node, romajiKey, options = {}) {
  const expectedParts = [];
  let shouldRewrite = false;

  kanaParts.forEach((kana, index) => {
    if (isBlank(kana)) {
      issue(file, `${pathLabel}[${index}]`, kanji, "blank-reading", "Empty kana reading", "non-empty kana", kana);
      return;
    }
    const expected = expectedRomajiForPath(kana, pathLabel, options);
    if (!expected) {
      manualReview.push({
        file: path.relative(projectRoot, file).replaceAll("\\", "/"),
        path: `${pathLabel}[${index}]`,
        kanji,
        kana,
        reason: "Cannot romanize kana automatically"
      });
      expectedParts.push("");
      return;
    }
    expectedParts.push(expected);
    const actual = romajiParts[index] || "";
    stats.readingPairsChecked += 1;
    if (isBlank(actual)) {
      issue(file, `${pathLabel}[${index}]`, kanji, "blank-romaji", "Missing romaji for kana reading", expected, actual);
      shouldRewrite = true;
      return;
    }
    if (normalizeRomaji(actual) !== normalizeRomaji(expected)) {
      issue(file, `${pathLabel}[${index}]`, kanji, "romaji-mismatch", "Kana and romaji do not match", expected, actual);
      shouldRewrite = true;
    }
  });

  if (kanaParts.length !== romajiParts.length) {
    issue(file, pathLabel, kanji, "length-mismatch", "Kana and romaji arrays have different lengths", kanaParts.length, romajiParts.length);
    shouldRewrite = true;
  }

  if (fixMode && node && romajiKey && expectedParts.every(Boolean)) {
    const fixedValue = Array.isArray(node[romajiKey]) ? expectedParts : expectedParts.join(" / ");
    const currentValue = Array.isArray(node[romajiKey]) ? node[romajiKey] : splitRomajiText(node[romajiKey]).join(" / ");
    const currentComparable = JSON.stringify(currentValue);
    const fixedComparable = JSON.stringify(fixedValue);
    if (shouldRewrite || currentComparable !== fixedComparable) {
      fixValue(node, romajiKey, fixedValue);
    }
  }
}

function validatePairedFields(file, pathLabel, node, kanaKey, romajiKey, kanji) {
  if (!(kanaKey in node) && !(romajiKey in node)) return;
  const kanaIsArray = Array.isArray(node[kanaKey]);
  const romajiIsArray = Array.isArray(node[romajiKey]);
  const kanaParts = splitReadingText(node[kanaKey], { keepEmpty: true }).filter((part) => part || (kanaIsArray && !isBlank(node[kanaKey])));
  const romajiParts = splitRomajiText(node[romajiKey], { keepEmpty: true }).filter((part) => part || (romajiIsArray && !isBlank(node[romajiKey])));
  const particleMode = !kanaIsArray
    && ["hiragana", "reading"].includes(kanaKey)
    && /[\/／,，、;；]/u.test(String(node[kanaKey] || ""));

  if (!kanaParts.length && !romajiParts.length) return;
  if (!kanaParts.length && romajiParts.length) {
    issue(file, `${pathLabel}.${romajiKey}`, kanji, "blank-reading", `Romaji exists without ${kanaKey}`, "kana reading", node[romajiKey]);
    return;
  }
  if (kanaParts.length && !(romajiKey in node)) {
    issue(file, `${pathLabel}.${romajiKey}`, kanji, "missing-romaji", `Missing ${romajiKey}`, kanaParts.map((part) => expectedRomajiForPath(part, pathLabel, { particleMode })).join(" / "), undefined);
  }
  validateKanaRomajiParts(file, `${pathLabel}.${kanaKey}`, kanji, kanaParts, romajiParts, node, romajiKey, { particleMode });
}

function validateReadingObject(file, pathLabel, node, kanji) {
  const readings = node.readings;
  if (!readings || typeof readings !== "object" || Array.isArray(readings)) {
    issue(file, `${pathLabel}.readings`, kanji, "bad-format", "readings must be an object", "object", Array.isArray(readings) ? "array" : typeof readings);
    return;
  }

  for (const key of ["onyomi", "kunyomi", "hiragana", "romaji", "nanori", "onyomi_romaji", "kunyomi_romaji"]) {
    if (key in readings && !Array.isArray(readings[key])) {
      issue(file, `${pathLabel}.readings.${key}`, kanji, "bad-format", "reading field must be an array", "array", typeof readings[key]);
    }
  }

  for (const key of ["onyomi", "kunyomi", "hiragana"]) {
    const values = Array.isArray(readings[key]) ? readings[key] : [];
    const seen = new Set();
    const deduped = [];
    const romajiKey = key === "hiragana" ? "romaji" : `${key}_romaji`;
    let hasDuplicate = false;
    values.forEach((value, index) => {
      if (isBlank(value)) {
        issue(file, `${pathLabel}.readings.${key}[${index}]`, kanji, "blank-reading", "Empty reading value", "non-empty kana", value);
        return;
      }
      const normalized = cleanKana(value);
      if (seen.has(normalized)) {
        hasDuplicate = true;
        issue(file, `${pathLabel}.readings.${key}[${index}]`, kanji, "duplicate-reading", "Duplicate reading value", "unique reading", value);
        return;
      }
      seen.add(normalized);
      deduped.push(value);
    });
    if (fixMode && hasDuplicate) {
      readings[key] = deduped;
      if (Array.isArray(readings[romajiKey])) {
        readings[romajiKey] = deduped.map((value) => expectedRomajiForPath(value, `${pathLabel}.readings.${key}`));
      }
      stats.fixedWrites += 1;
    }
  }

  const hira = Array.isArray(readings.hiragana) ? readings.hiragana : [];
  const romaji = Array.isArray(readings.romaji) ? readings.romaji : [];
  if (hira.length || romaji.length) {
    validateKanaRomajiParts(file, `${pathLabel}.readings.hiragana`, kanji, hira, romaji, readings, "romaji");
    if (fixMode && hira.length && readings.romaji?.every && readings.romaji.every(Boolean)) {
      readings.romaji = hira.map(romanizeKana);
    }
  }

  if (Array.isArray(readings.onyomi_romaji)) {
    validateKanaRomajiParts(file, `${pathLabel}.readings.onyomi`, kanji, readings.onyomi || [], readings.onyomi_romaji, readings, "onyomi_romaji");
  }
  if (Array.isArray(readings.kunyomi_romaji)) {
    validateKanaRomajiParts(file, `${pathLabel}.readings.kunyomi`, kanji, readings.kunyomi || [], readings.kunyomi_romaji, readings, "kunyomi_romaji");
  }
}

function validateGeneralRomaji(file, pathLabel, node, kanji) {
  if (!("romaji" in node)) return;
  for (const readingKey of ["reading", "kana", "hiragana"]) {
    if (!(readingKey in node) || !isKanaText(node[readingKey])) continue;
    validatePairedFields(file, pathLabel, node, readingKey, "romaji", kanji);
    return;
  }
}

function walk(file, node, pathLabel = "$", inheritedKanji = "") {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    node.forEach((child, index) => walk(file, child, `${pathLabel}[${index}]`, inheritedKanji));
    return;
  }

  const kanji = nearestKanji(node, inheritedKanji);
  if ((typeof node.kanji === "string" || typeof node.char === "string") && (node.readings || node.onyomi || node.kunyomi || node.hiragana)) {
    stats.kanjiRecordsChecked += 1;
  }

  if ("romanji" in node) {
    issue(file, `${pathLabel}.romanji`, kanji, "romanji-field", "Use romaji instead of romanji", "romaji", "romanji");
    if (fixMode && !("romaji" in node)) {
      node.romaji = node.romanji;
      delete node.romanji;
      stats.fixedWrites += 1;
    }
  }

  const isReadingsNode = /\.readings$/u.test(pathLabel);
  if (!isReadingsNode) {
    validatePairedFields(file, pathLabel, node, "onyomi", "onyomi_romaji", kanji);
    validatePairedFields(file, pathLabel, node, "kunyomi", "kunyomi_romaji", kanji);
  }
  validateGeneralRomaji(file, pathLabel, node, kanji);

  if ("readings" in node) validateReadingObject(file, pathLabel, node, kanji);

  for (const [key, value] of Object.entries(node)) {
    if (value && typeof value === "object") walk(file, value, `${pathLabel}.${key}`, kanji);
  }
}

function listJsonFiles(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...listJsonFiles(full));
    } else if (entry.isFile() && entry.name.endsWith(".json") && !skipFileNames.has(entry.name)) {
      result.push(full);
    }
  }
  return result.sort();
}

function assertSelfTests() {
  const cases = [
    ["し", "shi"],
    ["とまる", "tomaru"],
    ["とめる", "tomeru"],
    ["きょう", "kyou"],
    ["がっこう", "gakkou"],
    ["しゅう", "shuu"],
    ["ちょっと", "chotto"]
  ];
  for (const [kana, expected] of cases) {
    const actual = romanizeKana(kana);
    if (actual !== expected) {
      throw new Error(`Kana romanization self-test failed: ${kana} expected ${expected}, got ${actual}`);
    }
  }

  const onyomi = ["し"].map(romanizeKana);
  const kunyomi = ["とまる", "とめる"].map(romanizeKana);
  if (onyomi.join(" / ") !== "shi" || kunyomi.join(" / ") !== "tomaru / tomeru") {
    throw new Error("Onyomi/kunyomi pairing self-test failed");
  }
}

function printReport() {
  console.log(`Reading validation ${fixMode ? "(fix mode)" : ""}`);
  console.log(`Files checked: ${stats.filesChecked}`);
  console.log(`Kanji records checked: ${stats.kanjiRecordsChecked}`);
  console.log(`Reading pairs checked: ${stats.readingPairsChecked}`);
  console.log(`Issues: ${issues.length} badPairs=${stats.badPairs} lengthMismatches=${stats.lengthMismatches} mixedOnKun=${stats.mixedOnKun} structure=${stats.structureIssues}`);
  console.log(`Auto fixes written: ${stats.fixedWrites}`);
  console.log(`Manual review: ${manualReview.length}`);
  if (summaryOnly) return;
  for (const item of issues.slice(0, 500)) {
    console.log(`[${item.type}] ${item.file} ${item.kanji || "-"} ${item.path}`);
    console.log(`  ${item.message}`);
    if (item.expected !== undefined) console.log(`  expected: ${JSON.stringify(item.expected)}`);
    if (item.actual !== undefined) console.log(`  actual:   ${JSON.stringify(item.actual)}`);
  }
  if (issues.length > 500) console.log(`... ${issues.length - 500} more issue(s) omitted.`);
  for (const item of manualReview.slice(0, 50)) {
    console.log(`[manual] ${item.file} ${item.kanji || "-"} ${item.path}: ${item.reason} (${JSON.stringify(item.kana)})`);
  }
  if (manualReview.length > 50) console.log(`... ${manualReview.length - 50} more manual review item(s) omitted.`);
}

assertSelfTests();

for (const file of listJsonFiles(dataRoot)) {
  stats.filesChecked += 1;
  let payload;
  let before;
  try {
    before = fs.readFileSync(file, "utf8");
    payload = JSON.parse(before);
  } catch (error) {
    issue(file, "$", "", "bad-json", error.message, "valid JSON", "parse failure");
    continue;
  }
  const fixesBefore = stats.fixedWrites;
  walk(file, payload);
  if (fixMode && stats.fixedWrites > fixesBefore) {
    fs.writeFileSync(file, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  }
}

printReport();

if (issues.some((item) => item.type !== "duplicate-reading")) {
  process.exitCode = 1;
}
