import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const root = path.resolve(import.meta.dirname, "..");
const dataDir = path.join(root, "public", "data", "jlpt", "n5");

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(dataDir, file), "utf8"));
}

const meta = readJson("meta.json");
const lessons = readJson("lessons.json");
const kanji = readJson("kanji.json");
const exercises = readJson("exercises.json");
const errors = [];

const lessonItems = Array.isArray(lessons.items) ? lessons.items : [];
const kanjiItems = Array.isArray(kanji.items) ? kanji.items : [];
const exerciseTypes = Array.isArray(exercises.types) ? exercises.types : [];

if (meta.level !== "N5") errors.push("meta.level must be N5.");
if (Number(meta.lessonCount) !== 10) errors.push(`meta.lessonCount expected 10, got ${meta.lessonCount}.`);
if (Number(meta.kanjiCount) !== 80) errors.push(`meta.kanjiCount expected 80, got ${meta.kanjiCount}.`);
if (lessonItems.length !== 10) errors.push(`lessons.items expected 10, got ${lessonItems.length}.`);
if (kanjiItems.length !== 80) errors.push(`kanji.items expected 80, got ${kanjiItems.length}.`);
if (!exerciseTypes.length) errors.push("exercises.types must not be empty.");
if (Number(exercises.lessonQuestionCount || 0) <= 0) errors.push("exercises.lessonQuestionCount must be positive.");

const lessonIds = new Set();
const kanjiByLiteral = new Map();
const cardIds = new Set();

for (const card of kanjiItems) {
  const literal = String(card.kanji || "");
  const id = String(card.id || card.courseCardId || literal);
  if (!literal) errors.push("Found N5 card without kanji literal.");
  if (!id) errors.push(`Found N5 card ${literal || "<empty>"} without id.`);
  if (kanjiByLiteral.has(literal)) errors.push(`Duplicate N5 kanji literal: ${literal}.`);
  if (cardIds.has(id)) errors.push(`Duplicate N5 card id: ${id}.`);
  kanjiByLiteral.set(literal, card);
  cardIds.add(id);
}

for (const lesson of lessonItems) {
  const id = String(lesson.id || "");
  if (!id) errors.push("Found N5 lesson without id.");
  if (lessonIds.has(id)) errors.push(`Duplicate N5 lesson id: ${id}.`);
  lessonIds.add(id);

  const lessonKanji = Array.isArray(lesson.kanji) ? lesson.kanji.map(String).filter(Boolean) : [];
  if (lessonKanji.length !== 8) errors.push(`${id} expected 8 kanji references, got ${lessonKanji.length}.`);
  for (const literal of lessonKanji) {
    if (!kanjiByLiteral.has(literal)) errors.push(`${id} references missing kanji ${literal}.`);
  }
  const uniqueLessonKanji = new Set(lessonKanji);
  if (uniqueLessonKanji.size !== lessonKanji.length) errors.push(`${id} has duplicate kanji references.`);
  if (!Array.isArray(lesson.sentences) || !lesson.sentences.length) errors.push(`${id} should include sentence examples.`);
}

const referencedKanji = new Set(lessonItems.flatMap((lesson) => Array.isArray(lesson.kanji) ? lesson.kanji.map(String) : []));
if (referencedKanji.size !== 80) errors.push(`Expected 80 unique kanji referenced by lessons, got ${referencedKanji.size}.`);

if (errors.length) {
  console.error("N5 course validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("N5 course validation passed: 10 lessons, 80 unique kanji, 8 cards per lesson.");
