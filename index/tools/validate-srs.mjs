import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const dataRoot = path.join(projectRoot, "data");
const fixMode = process.argv.includes("--fix");
const summaryOnly = process.argv.includes("--summary");

const skipFileNames = new Set(["stroke-order-kanjivg.json"]);
const skipDirs = new Set(["node_modules", "dist", ".git"]);
const romajiFields = new Set(["romaji", "onyomi_romaji", "kunyomi_romaji"]);
const readingFields = new Set(["hiragana", "reading", "kana"]);
const report = [];
let checkedEntries = 0;
let fixedEntries = 0;
let fileCount = 0;
let currentFileChanged = false;

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

const yoon = {
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
  ヴぁ: "va", ヴぃ: "vi", ヴぇ: "ve", ヴぉ: "vo"
};

const smallVowels = {
  ぁ: "a", ぃ: "i", ぅ: "u", ぇ: "e", ぉ: "o",
  ァ: "a", ィ: "i", ゥ: "u", ェ: "e", ォ: "o"
};

function listJsonFiles(dir) {
  const result = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skipDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...listJsonFiles(full));
      continue;
    }
    if (entry.isFile() && entry.name.endsWith(".json") && !skipFileNames.has(entry.name)) {
      result.push(full);
    }
  }
  return result.sort();
}

function toHiragana(value) {
  return String(value || "").replace(/[\u30a1-\u30f6]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60)
  );
}

function isKanaText(value) {
  return /[\u3040-\u30ff]/.test(String(value || ""));
}

function isBlank(value) {
  return value === null || value === undefined || (typeof value === "string" && value.trim() === "");
}

function normalizeRomaji(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[āâ]/g, "a")
    .replace(/[īî]/g, "i")
    .replace(/[ūû]/g, "u")
    .replace(/[ēê]/g, "e")
    .replace(/[ōô]/g, "o")
    .replace(/[^a-z0-9]+/g, "");
}

function romanizeKana(input, options = {}) {
  const original = String(input || "").trim();
  if (!original) return "";
  if (original === "は" && options.particleMode) return "wa";
  if (original === "へ" && options.particleMode) return "e";
  if (original === "を" && options.particleMode) return "o";
  const hiragana = toHiragana(original);
  const phraseMode = /[\s。、,.!?！？]/.test(hiragana);
  const chars = [...hiragana];
  let result = "";
  let geminate = false;

  for (let i = 0; i < chars.length; i += 1) {
    const char = chars[i];
    const next = chars[i + 1] || "";

    if (char === "っ" || char === "ッ") {
      geminate = true;
      continue;
    }

    if (char === "ー") {
      const vowel = lastVowel(result);
      if (vowel) result += vowel;
      continue;
    }

    if (/\s/.test(char)) {
      result = result.trimEnd() + " ";
      geminate = false;
      continue;
    }

    if (/[。、,.!?！？・･/／()（）「」『』［］\[\]:：;；]/.test(char)) {
      if (char === "・" || char === "･" || char === "/" || char === "／") result += " ";
      geminate = false;
      continue;
    }

    let roma = "";
    const pair = char + next;
    if (yoon[pair]) {
      roma = yoon[pair];
      i += 1;
    } else if (basicKana[char]) {
      roma = basicKana[char];
    } else if (smallVowels[char]) {
      roma = smallVowels[char];
    } else if (/[a-zA-Z0-9]/.test(char)) {
      roma = char.toLowerCase();
    } else {
      geminate = false;
      continue;
    }

    if (phraseMode || options.particleMode) {
      const previous = chars[i - 1] || "";
      const following = chars[i + 1] || "";
      const boundaryBefore = !previous || /[\s。、,.!?！？「」『』()（）]/.test(previous);
      const boundaryAfter = !following || /[\s。、,.!?！？「」『』()（）]/.test(following);
      if (char === "は" && boundaryAfter && !boundaryBefore) roma = "wa";
      if (char === "へ" && boundaryAfter && !boundaryBefore) roma = "e";
      if (char === "を") roma = "o";
    }

    if (geminate) {
      const consonant = roma.match(/^[bcdfghjklmnpqrstvwxyz]/)?.[0] || "";
      if (consonant && consonant !== "n") result += consonant;
      geminate = false;
    }
    result += roma;
  }

  return result.replace(/\s+/g, " ").trim();
}

function expectedRomajiForField(value, pathLabel = "") {
  const particleMode = /\.kana\.hiragana\[\d+\]$/.test(pathLabel);
  return romanizeKana(value, { particleMode });
}

function lastVowel(value) {
  const match = String(value || "").match(/[aeiou](?!.*[aeiou])/);
  return match?.[0] || "";
}

function addIssue(file, pathLabel, kanji, field, type, message, expected, actual) {
  report.push({
    file: path.relative(projectRoot, file).replaceAll("\\", "/"),
    path: pathLabel,
    kanji: kanji || "",
    field,
    type,
    message,
    expected,
    actual
  });
}

function nearestKanji(node, fallback = "") {
  if (!node || typeof node !== "object") return fallback;
  if (typeof node.kanji === "string") return node.kanji;
  if (Array.isArray(node.kanji) && node.kanji.length) return node.kanji.join("");
  if (typeof node.word === "string" && /[\u4e00-\u9fff]/.test(node.word)) return node.word;
  return fallback;
}

function setFixed(parent, key, value) {
  if (!fixMode) return;
  if (parent[key] === value) return;
  parent[key] = value;
  fixedEntries += 1;
  currentFileChanged = true;
}

function validateRomajiPair(file, pathLabel, node, readingKey, romajiKey, kanji) {
  const kana = node[readingKey];
  const romaji = node[romajiKey];
  if (typeof kana !== "string") return;
  if (typeof romaji !== "string" && !isBlank(romaji)) return;
  if (!isKanaText(kana)) return;
  checkedEntries += 1;
  const expected = expectedRomajiForField(kana, pathLabel);
  if (isBlank(romaji)) {
    addIssue(file, pathLabel, kanji, romajiKey, "missing-romaji", `Missing romaji for ${readingKey}`, expected, romaji);
    setFixed(node, romajiKey, expected);
    return;
  }
  if (normalizeRomaji(romaji) !== normalizeRomaji(expected)) {
    addIssue(file, pathLabel, kanji, romajiKey, "romaji-mismatch", `Romaji does not match ${readingKey}`, expected, romaji);
    setFixed(node, romajiKey, expected);
  }
}

function validateReadingArrays(file, pathLabel, readings, kanji) {
  if (!readings || typeof readings !== "object") return;
  for (const key of ["onyomi", "kunyomi", "hiragana", "romaji", "nanori"]) {
    if (key in readings && !Array.isArray(readings[key])) {
      addIssue(file, pathLabel, kanji, `readings.${key}`, "bad-format", "Reading set field must be an array", "array", typeof readings[key]);
    }
  }
  for (const key of ["onyomi", "kunyomi", "hiragana"]) {
    const values = readings[key];
    if (!Array.isArray(values)) continue;
    validateArrayValues(file, `${pathLabel}.readings.${key}`, values, kanji, `readings.${key}`);
  }
  const hira = Array.isArray(readings.hiragana) ? readings.hiragana : [];
  const romaji = Array.isArray(readings.romaji) ? readings.romaji : [];
  if (!hira.length) return;
  const expected = hira.map((value) => romanizeKana(value));
  checkedEntries += hira.length;
  const hasCriticalMissing = romaji.length !== expected.length || expected.some((value, index) => normalizeRomaji(value) !== normalizeRomaji(romaji[index] || ""));
  if (!hasCriticalMissing) return;
  addIssue(
    file,
    `${pathLabel}.readings`,
    kanji,
    "readings.romaji",
    romaji.length ? "romaji-mismatch" : "missing-romaji",
    "readings.romaji must match readings.hiragana one-to-one",
    expected,
    romaji
  );
  if (fixMode) {
    readings.romaji = expected;
    fixedEntries += 1;
    currentFileChanged = true;
  }
}

function validateArrayValues(file, pathLabel, values, kanji, field) {
  const seen = new Map();
  let hasDuplicate = false;
  values.forEach((value, index) => {
    if (isBlank(value) || String(value) === "undefined") {
      addIssue(file, `${pathLabel}[${index}]`, kanji, field, "blank-value", "Empty or damaged reading value", "non-empty string", value);
      return;
    }
    const normalized = String(value).trim();
    if (seen.has(normalized)) {
      hasDuplicate = true;
      addIssue(file, `${pathLabel}[${index}]`, kanji, field, "duplicate-reading", "Duplicate reading value", seen.get(normalized), value);
      return;
    }
    seen.set(normalized, index);
  });
  if (fixMode && hasDuplicate) {
    const deduped = [];
    const unique = new Set();
    for (const value of values) {
      const normalized = String(value).trim();
      if (unique.has(normalized)) continue;
      unique.add(normalized);
      deduped.push(value);
    }
    values.splice(0, values.length, ...deduped);
    fixedEntries += 1;
    currentFileChanged = true;
  }
}

function walk(file, node, pathLabel = "$", inheritedKanji = "") {
  if (!node || typeof node !== "object") return;
  const kanji = nearestKanji(node, inheritedKanji);

  if (Array.isArray(node)) {
    node.forEach((child, index) => walk(file, child, `${pathLabel}[${index}]`, kanji));
    return;
  }

  if (node.readings && typeof node.readings === "object") {
    validateReadingArrays(file, pathLabel, node.readings, kanji);
  }

  for (const key of Object.keys(node)) {
    const value = node[key];
    if (romajiFields.has(key) && (isBlank(value) || String(value) === "undefined")) {
      const pairedReadingKey = key.endsWith("_romaji") ? key.replace(/_romaji$/, "") : "";
      if (pairedReadingKey && isBlank(node[pairedReadingKey])) continue;
      addIssue(file, pathLabel, kanji, key, "blank-value", "Empty or damaged romaji value", "non-empty string", value);
    }
  }

  if ("romaji" in node) {
    for (const readingKey of readingFields) {
      if (readingKey in node) validateRomajiPair(file, pathLabel, node, readingKey, "romaji", kanji);
    }
  } else if (shouldRequireRomaji(node)) {
    for (const readingKey of readingFields) {
      if (readingKey in node && isKanaText(node[readingKey])) {
        addIssue(file, pathLabel, kanji, "romaji", "missing-romaji", `Missing romaji for ${readingKey}`, expectedRomajiForField(node[readingKey], pathLabel), undefined);
        if (fixMode) {
          node.romaji = expectedRomajiForField(node[readingKey], pathLabel);
          fixedEntries += 1;
          currentFileChanged = true;
        }
      }
    }
  }

  for (const [key, value] of Object.entries(node)) {
    if (value && typeof value === "object") walk(file, value, `${pathLabel}.${key}`, kanji);
  }
}

function shouldRequireRomaji(node) {
  if (!node || typeof node !== "object" || Array.isArray(node)) return false;
  if (!Object.keys(node).some((key) => readingFields.has(key) && isKanaText(node[key]))) return false;
  if ("romaji" in node) return true;
  if ("word" in node && ("translation" in node || "translation_ru" in node || "translation_en" in node)) return true;
  if (!("kanji" in node)) return false;
  return Boolean(
    "jlpt" in node
    || "meaning" in node
    || "meaning_ru" in node
    || "meaning_en" in node
    || "strokes" in node
    || "stroke_order" in node
    || "examples" in node
    || "readings" in node
  );
}

function printReport() {
  const critical = report.filter((item) => item.type !== "duplicate-reading");
  const duplicates = report.filter((item) => item.type === "duplicate-reading");
  console.log(`SRS validation ${fixMode ? "(fix mode)" : ""}`);
  console.log(`Files checked: ${fileCount}`);
  console.log(`Reading entries checked: ${checkedEntries}`);
  console.log(`Issues: ${report.length} critical=${critical.length} duplicates=${duplicates.length}`);
  if (fixMode) console.log(`Fixes written: ${fixedEntries}`);
  if (summaryOnly) return;
  for (const issue of report.slice(0, 500)) {
    console.log(`[${issue.type}] ${issue.file} ${issue.kanji || "-"} ${issue.field} ${issue.path}`);
    console.log(`  ${issue.message}`);
    if (issue.expected !== undefined) console.log(`  expected: ${JSON.stringify(issue.expected)}`);
    if (issue.actual !== undefined) console.log(`  actual:   ${JSON.stringify(issue.actual)}`);
  }
  if (report.length > 500) console.log(`... ${report.length - 500} more issue(s) omitted; rerun with --summary for totals.`);
}

const files = listJsonFiles(dataRoot);
for (const file of files) {
  fileCount += 1;
  const fixesBeforeFile = fixedEntries;
  currentFileChanged = false;
  let payload;
  try {
    payload = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    addIssue(file, "$", "", "json", "bad-json", error.message, "valid JSON", "parse failure");
    continue;
  }
  walk(file, payload);
  if (fixMode && (currentFileChanged || fixedEntries > fixesBeforeFile)) {
    fs.writeFileSync(file, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  }
  currentFileChanged = false;
}

printReport();

if (report.some((issue) => issue.type !== "duplicate-reading")) {
  process.exitCode = 1;
}
