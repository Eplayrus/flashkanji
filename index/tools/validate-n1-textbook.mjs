import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const errors = [];
const warnings = [];

function readJson(relativePath) {
  const fullPath = path.join(root, relativePath);
  try {
    return JSON.parse(fs.readFileSync(fullPath, "utf8"));
  } catch (error) {
    errors.push(`${relativePath}: cannot parse JSON (${error.message})`);
    return null;
  }
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
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

function checkTextQuality(name, value, { failOnBroken = true } = {}) {
  walk(value, (leaf, keyPath) => {
    if (typeof leaf !== "string") return;
    if (!leaf.trim()) warnings.push(`${name}:${keyPath} is an empty string`);
    if (/\?{3,}/.test(leaf)) {
      const message = `${name}:${keyPath} contains OCR/encoding placeholder text`;
      if (failOnBroken) errors.push(message);
      else warnings.push(message);
    }
  });
}

function localizedText(value) {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") return value.ru || value.en || "";
  return "";
}

function validateOptionQuestion(groupName, item) {
  if (!item || typeof item !== "object") return;
  if (!item.id) errors.push(`${groupName}: missing id`);
  if (!item.answer) errors.push(`${groupName}:${item.id || "unknown"} missing answer`);
  const options = Array.isArray(item.options) ? item.options : [];
  if (!options.length) {
    errors.push(`${groupName}:${item.id || "unknown"} missing options`);
    return;
  }
  const values = options.map((option) => String(option.value ?? option));
  if (item.answer && !values.includes(String(item.answer))) {
    errors.push(`${groupName}:${item.id} answer "${item.answer}" is not present in options`);
  }
}

const meta = readJson("data/jlpt/n1/meta.json");
const lessons = readJson("data/jlpt/n1/lessons.json");
const grammar = readJson("data/jlpt/n1/grammar.json");
const exercises = readJson("data/jlpt/n1/exercises.json");
const reading = readJson("data/jlpt/n1/reading.json");
const listening = readJson("data/jlpt/n1/listening.json");
const finalTest = readJson("data/jlpt/n1/final-test.json");
const kanjiCatalog = readJson("data/jlpt/n1/kanji.json");

[
  ["meta", meta],
  ["lessons", lessons],
  ["grammar", grammar],
  ["exercises", exercises],
  ["reading", reading],
  ["listening", listening],
  ["final-test", finalTest]
].forEach(([name, data]) => data && checkTextQuality(name, data));

if (kanjiCatalog) checkTextQuality("kanji-catalog", kanjiCatalog, { failOnBroken: false });

const lessonItems = Array.isArray(lessons?.items) ? lessons.items : [];
const lessonIds = new Set(lessonItems.map((lesson) => lesson.id));
const grammarItems = Array.isArray(grammar?.items) ? grammar.items : [];
const grammarPatterns = new Set(grammarItems.map((item) => item.pattern).filter(Boolean));
const readingIds = new Set((Array.isArray(reading?.items) ? reading.items : []).map((item) => item.id));

if (!lessonItems.length) errors.push("lessons: no N1 lessons found");
if ((meta?.kanjiCount || 0) < 1047) errors.push("meta: kanjiCount must describe the full N1 target of 1047");
if ((meta?.currentKanjiCount || 0) !== 220) warnings.push("meta: currentKanjiCount is expected to be 220 for the current working layer");
if ((lessons?.textbook?.lessonCount || 0) < (meta?.lessonCount || 0)) warnings.push("lessons: textbook lessonCount is lower than meta lessonCount");

lessonItems.forEach((lesson) => {
  if (!lesson.id) errors.push("lessons: lesson without id");
  if (lesson.file && !exists(lesson.file)) errors.push(`lessons:${lesson.id} missing generated file ${lesson.file}`);
  if (!Array.isArray(lesson.sampleKanji) || !lesson.sampleKanji.length) warnings.push(`lessons:${lesson.id} has no sampleKanji`);
});

(exercises?.lessonOverlays || []).forEach((overlay) => {
  if (!lessonIds.has(overlay.lessonId)) errors.push(`exercises:${overlay.lessonId} overlay points to missing lesson`);
  (overlay.grammarFocus || []).forEach((pattern) => {
    if (!grammarPatterns.has(pattern)) errors.push(`exercises:${overlay.lessonId} grammar pattern "${pattern}" is missing in grammar.json`);
  });
  if (overlay.miniReadingId && !readingIds.has(overlay.miniReadingId)) {
    errors.push(`exercises:${overlay.lessonId} miniReadingId "${overlay.miniReadingId}" is missing in reading.json`);
  }
  (overlay.exercises || []).forEach((item) => validateOptionQuestion(`exercises:${overlay.lessonId}`, item));
});

(exercises?.diagnostic || []).forEach((item) => validateOptionQuestion("diagnostic", item));

(grammarItems || []).forEach((item) => {
  if (item.kind === "overview") return;
  if (Array.isArray(item.options) && item.options.length && item.answer && !item.options.includes(item.answer)) {
    errors.push(`grammar:${item.id || item.pattern} answer "${item.answer}" is not present in options`);
  }
});

(reading?.items || []).forEach((item) => {
  (item.questions || []).forEach((question, index) => validateOptionQuestion(`reading:${item.id}:q${index + 1}`, question));
});

if (!Array.isArray(finalTest?.types) || !finalTest.types.length) errors.push("final-test: no exercise types configured");
if (!Array.isArray(finalTest?.kanjiPool) || !finalTest.kanjiPool.length) errors.push("final-test: kanjiPool is empty");
if (!Array.isArray(finalTest?.grammarPool) || !finalTest.grammarPool.length) errors.push("final-test: grammarPool is empty");
if (!Array.isArray(finalTest?.readingPool) || !finalTest.readingPool.length) errors.push("final-test: readingPool is empty");
if (!Number(finalTest?.questionCount)) errors.push("final-test: questionCount is missing");
(finalTest?.grammarPool || []).forEach((pattern) => {
  if (!grammarPatterns.has(pattern)) errors.push(`final-test: grammar pattern "${pattern}" is missing in grammar.json`);
});
(finalTest?.readingPool || []).forEach((id) => {
  if (!readingIds.has(id)) errors.push(`final-test: reading id "${id}" is missing in reading.json`);
});

if (errors.length) {
  console.error("N1 textbook validation failed:");
  errors.forEach((message) => console.error(`- ${message}`));
  if (warnings.length) {
    console.warn("\nWarnings:");
    warnings.forEach((message) => console.warn(`- ${message}`));
  }
  process.exit(1);
}

console.log("N1 textbook validation passed.");
if (warnings.length) {
  console.warn("Warnings:");
  warnings.slice(0, 30).forEach((message) => console.warn(`- ${message}`));
  if (warnings.length > 30) console.warn(`- ...and ${warnings.length - 30} more warnings`);
}
