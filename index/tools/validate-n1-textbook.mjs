import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");
const dataRoot = path.join(root, "public", "data");

const EXPECTED_LESSON_COUNT = 53;
const EXPECTED_KANJI_COUNT = 1047;
const EXPECTED_GRAMMAR_COUNT = 142;
const EXPECTED_READING_COUNT = 8;
const EXPECTED_LISTENING_COUNT = 6;
const EXPECTED_FINAL_QUESTIONS = 45;

const errors = [];
const warnings = [];

function full(relativePath) {
  return path.join(root, "public", relativePath);
}

function readJson(relativePath) {
  const filePath = full(relativePath);
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    errors.push(`${relativePath}: cannot read or parse JSON (${error.message})`);
    return null;
  }
}

function exists(relativePath) {
  return fs.existsSync(full(relativePath));
}

function walk(value, visitor, keyPath = "") {
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, visitor, `${keyPath}[${index}]`));
    return;
  }
  if (value && typeof value === "object") {
    Object.entries(value).forEach(([key, item]) => walk(item, visitor, keyPath ? `${keyPath}.${key}` : key));
    return;
  }
  visitor(value, keyPath);
}

function hasJapanese(value) {
  return /[ぁ-んァ-ン一-龯]/u.test(String(value || ""));
}

function hasBrokenEncoding(value) {
  const text = String(value || "");
  return /\uFFFD|\?{3,}|Ð|Ñ|Рџ|Рќ|Рђ|Рґ|Рµ|Рё|Рѕ|Рє|Р»|РЅ|Р°|Р±|РІ|Рі|Р№|Р¶|Р·|Рј|Рї|РЎ|СЃ|С‚|СЊ|С‹|СЏ|СЂ|С‡|Сѓ|С†|С€|С‰|С…|СЋ|СЌ|вЂ/.test(text);
}

function checkTextQuality(name, value) {
  walk(value, (leaf, keyPath) => {
    if (typeof leaf !== "string") return;
    if (hasBrokenEncoding(leaf)) {
      errors.push(`${name}:${keyPath} contains mojibake or OCR placeholder text`);
    }
  });
}

function localizedText(value) {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") return String(value.ru || value.en || "");
  return "";
}

function optionValues(options) {
  return (Array.isArray(options) ? options : []).map((option) => String(option?.value ?? option));
}

function validateQuestion(groupName, item) {
  if (!item || typeof item !== "object") {
    errors.push(`${groupName}: invalid question object`);
    return;
  }
  if (!item.id && !groupName.includes(":q")) warnings.push(`${groupName}: question has no id`);
  if (!item.answer) errors.push(`${groupName}: missing answer`);
  const values = optionValues(item.options);
  if (values.length < 3) errors.push(`${groupName}: expected at least 3 options`);
  if (item.answer && !values.includes(String(item.answer))) {
    errors.push(`${groupName}: answer "${item.answer}" is not present in options`);
  }
}

const meta = readJson("data/jlpt/n1/meta.json");
const lessons = readJson("data/jlpt/n1/lessons.json");
const kanjiCatalog = readJson("data/jlpt/n1/kanji.json");
const grammar = readJson("data/jlpt/n1/grammar.json");
const exercises = readJson("data/jlpt/n1/exercises.json");
const reading = readJson("data/jlpt/n1/reading.json");
const listening = readJson("data/jlpt/n1/listening.json");
const tests = readJson("data/jlpt/n1/tests.json");
const finalTest = readJson("data/jlpt/n1/final-test.json");
const manifest = readJson("data/lessons.json");
const jlptIndex = readJson("data/jlpt/index.json");
const textbooksIndex = readJson("data/textbooks/index.json");

[
  ["meta", meta],
  ["lessons", lessons],
  ["kanji", kanjiCatalog],
  ["grammar", grammar],
  ["exercises", exercises],
  ["reading", reading],
  ["listening", listening],
  ["tests", tests],
  ["final-test", finalTest],
  ["lessons-manifest", manifest],
  ["jlpt-index", jlptIndex],
  ["textbooks-index", textbooksIndex]
].forEach(([name, payload]) => payload && checkTextQuality(name, payload));

const lessonItems = Array.isArray(lessons?.items) ? lessons.items : [];
const kanjiItems = Array.isArray(kanjiCatalog?.items) ? kanjiCatalog.items : [];
const grammarItems = Array.isArray(grammar?.items) ? grammar.items : [];
const readingItems = Array.isArray(reading?.items) ? reading.items : [];
const listeningItems = Array.isArray(listening?.items) ? listening.items : [];
const testItems = Array.isArray(tests?.items) ? tests.items : [];

if (meta?.level !== "N1") errors.push("meta: level must be N1");
if (meta?.kanjiCount !== EXPECTED_KANJI_COUNT) errors.push(`meta: kanjiCount must be ${EXPECTED_KANJI_COUNT}`);
if (meta?.lessonCount !== EXPECTED_LESSON_COUNT) errors.push(`meta: lessonCount must be ${EXPECTED_LESSON_COUNT}`);
if (meta?.grammarCount !== EXPECTED_GRAMMAR_COUNT) errors.push(`meta: grammarCount must be ${EXPECTED_GRAMMAR_COUNT}`);
if (meta?.readingCount !== EXPECTED_READING_COUNT) errors.push(`meta: readingCount must be ${EXPECTED_READING_COUNT}`);
if (meta?.listeningCount !== EXPECTED_LISTENING_COUNT) errors.push(`meta: listeningCount must be ${EXPECTED_LISTENING_COUNT}`);
if (!exists("docs/flashkanji_N1_textbook_flashkanji_space.pdf")) errors.push("PDF file is missing from public/docs");

if (lessonItems.length !== EXPECTED_LESSON_COUNT) errors.push(`lessons: expected ${EXPECTED_LESSON_COUNT}, got ${lessonItems.length}`);
if (kanjiItems.length !== EXPECTED_KANJI_COUNT) errors.push(`kanji: expected ${EXPECTED_KANJI_COUNT}, got ${kanjiItems.length}`);
if (grammarItems.length !== EXPECTED_GRAMMAR_COUNT) errors.push(`grammar: expected ${EXPECTED_GRAMMAR_COUNT}, got ${grammarItems.length}`);
if (readingItems.length !== EXPECTED_READING_COUNT) errors.push(`reading: expected ${EXPECTED_READING_COUNT}, got ${readingItems.length}`);
if (listeningItems.length !== EXPECTED_LISTENING_COUNT) errors.push(`listening: expected ${EXPECTED_LISTENING_COUNT}, got ${listeningItems.length}`);
if ((finalTest?.questionCount || 0) !== EXPECTED_FINAL_QUESTIONS) errors.push(`final-test: questionCount must be ${EXPECTED_FINAL_QUESTIONS}`);

const kanjiChars = kanjiItems.map((item) => String(item.kanji || ""));
const uniqueKanji = new Set(kanjiChars);
if (uniqueKanji.size !== EXPECTED_KANJI_COUNT) errors.push(`kanji: expected ${EXPECTED_KANJI_COUNT} unique characters, got ${uniqueKanji.size}`);
kanjiItems.forEach((item, index) => {
  const label = `kanji:${item.id || index + 1}`;
  if (!/^[\u4e00-\u9fff]$/u.test(String(item.kanji || ""))) errors.push(`${label}: invalid kanji literal`);
  if (!item.id) errors.push(`${label}: missing id`);
  if (!item.lessonId) errors.push(`${label}: missing lessonId`);
  if (!localizedText(item.meaning)) errors.push(`${label}: missing meaning`);
  if (!Array.isArray(item.readings?.hiragana) || !item.readings.hiragana.length) warnings.push(`${label}: no primary hiragana reading`);
  if (Array.isArray(item.examples)) {
    item.examples.forEach((example, exampleIndex) => {
      if (!example.word) {
        errors.push(`${label}: example ${exampleIndex + 1} is missing a dictionary word`);
      }
    });
  }
});

const generatedFiles = [];
const generatedKanji = [];
lessonItems.forEach((lesson, index) => {
  const expectedCount = index === EXPECTED_LESSON_COUNT - 1 ? 7 : 20;
  if (!lesson.id) errors.push(`lessons[${index}]: missing id`);
  if (lesson.level !== "N1") errors.push(`lessons:${lesson.id}: level must be N1`);
  if (!Array.isArray(lesson.kanji) || lesson.kanji.length !== expectedCount) errors.push(`lessons:${lesson.id}: expected ${expectedCount} kanji`);
  if (!Array.isArray(lesson.grammarFocus) || !lesson.grammarFocus.length) errors.push(`lessons:${lesson.id}: missing grammarFocus`);
  if (!lesson.miniReadingId) errors.push(`lessons:${lesson.id}: missing miniReadingId`);
  const file = `data/lessons/generated/${lesson.id}.json`;
  if (!exists(file)) {
    errors.push(`lessons:${lesson.id}: missing generated file ${file}`);
    return;
  }
  generatedFiles.push(file);
  const payload = readJson(file);
  const items = Array.isArray(payload?.items) ? payload.items : [];
  if (items.length !== expectedCount) errors.push(`${file}: expected ${expectedCount} cards, got ${items.length}`);
  generatedKanji.push(...items.map((item) => String(item.kanji || "")));
});
if (generatedFiles.length !== EXPECTED_LESSON_COUNT) errors.push(`generated lessons: expected ${EXPECTED_LESSON_COUNT} files, got ${generatedFiles.length}`);
if (generatedKanji.length !== EXPECTED_KANJI_COUNT) errors.push(`generated lessons: expected ${EXPECTED_KANJI_COUNT} cards, got ${generatedKanji.length}`);
if (new Set(generatedKanji).size !== EXPECTED_KANJI_COUNT) errors.push(`generated lessons: expected ${EXPECTED_KANJI_COUNT} unique kanji`);
if (generatedKanji.join("") !== kanjiChars.join("")) errors.push("generated lessons and kanji catalog are not in the same order");

const grammarPatterns = new Set(grammarItems.map((item) => item.pattern).filter(Boolean));
grammarItems.forEach((item) => {
  if (!item.id) errors.push(`grammar:${item.pattern || "unknown"} missing id`);
  if (!item.pattern) errors.push(`grammar:${item.id || "unknown"} missing pattern`);
  if (!item.answer) errors.push(`grammar:${item.id} missing answer`);
  if (!Array.isArray(item.options) || !item.options.includes(item.answer)) errors.push(`grammar:${item.id} answer must be present in options`);
  if (!Array.isArray(item.examples) || !item.examples.length) errors.push(`grammar:${item.id} missing examples`);
});

const readingIds = new Set(readingItems.map((item) => item.id));
readingItems.forEach((item) => {
  if (!item.jp || !item.ru) errors.push(`reading:${item.id} missing source text or translation`);
  (item.questions || []).forEach((question, index) => validateQuestion(`reading:${item.id}:q${index + 1}`, question));
});
listeningItems.forEach((item) => {
  if (!item.jp || !item.ru) errors.push(`listening:${item.id} missing script or translation`);
  (item.questions || []).forEach((question, index) => validateQuestion(`listening:${item.id}:q${index + 1}`, question));
});
if (testItems.length < 45) errors.push(`tests: expected at least 45 diagnostic items, got ${testItems.length}`);

if (!Array.isArray(finalTest?.types) || finalTest.types.length < 6) errors.push("final-test: expected mixed exercise types");
if (!Array.isArray(finalTest?.kanjiPool) || finalTest.kanjiPool.length < 20) errors.push("final-test: kanjiPool is too small");
if (!Array.isArray(finalTest?.grammarPool) || finalTest.grammarPool.length < 20) errors.push("final-test: grammarPool is too small");
if (!Array.isArray(finalTest?.readingPool) || finalTest.readingPool.length !== EXPECTED_READING_COUNT) errors.push("final-test: readingPool must include all reading texts");
(finalTest?.kanjiPool || []).forEach((kanji) => {
  if (!uniqueKanji.has(kanji)) errors.push(`final-test: kanji ${kanji} is missing in kanji catalog`);
});
(finalTest?.grammarPool || []).forEach((pattern) => {
  if (!grammarPatterns.has(pattern)) errors.push(`final-test: grammar pattern ${pattern} is missing in grammar.json`);
});
(finalTest?.readingPool || []).forEach((id) => {
  if (!readingIds.has(id)) errors.push(`final-test: reading id ${id} is missing in reading.json`);
});

const manifestN1 = (manifest?.lessons || []).filter((lesson) => String(lesson.id || "").startsWith("bulk-n1-"));
if (manifestN1.length !== EXPECTED_LESSON_COUNT) errors.push(`data/lessons.json: expected ${EXPECTED_LESSON_COUNT} N1 lesson entries, got ${manifestN1.length}`);
const jlptN1 = (jlptIndex?.items || []).find((item) => item.jlpt === "N1");
if (!jlptN1 || jlptN1.kanjiCount !== EXPECTED_KANJI_COUNT || jlptN1.lessonCount !== EXPECTED_LESSON_COUNT) errors.push("data/jlpt/index.json: N1 entry has stale counts");
const textbookN1 = (textbooksIndex?.levels || []).find((item) => item.jlpt === "N1");
if (!textbookN1 || textbookN1.kanjiCount !== EXPECTED_KANJI_COUNT || textbookN1.lessonCount !== EXPECTED_LESSON_COUNT) errors.push("data/textbooks/index.json: N1 entry has stale counts");

if (!fs.existsSync(dataRoot)) errors.push("public/data is missing");

if (errors.length) {
  console.error("N1 textbook validation failed:");
  errors.forEach((message) => console.error(`- ${message}`));
  if (warnings.length) {
    console.warn("\nWarnings:");
    warnings.slice(0, 30).forEach((message) => console.warn(`- ${message}`));
    if (warnings.length > 30) console.warn(`- ...and ${warnings.length - 30} more warnings`);
  }
  process.exit(1);
}

console.log(`N1 textbook validation passed: ${EXPECTED_KANJI_COUNT} kanji, ${EXPECTED_LESSON_COUNT} lessons, ${EXPECTED_GRAMMAR_COUNT} grammar items.`);
if (warnings.length) {
  console.warn("Warnings:");
  warnings.slice(0, 30).forEach((message) => console.warn(`- ${message}`));
  if (warnings.length > 30) console.warn(`- ...and ${warnings.length - 30} more warnings`);
}
