import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const INDEX_PATH = path.join(PUBLIC_DIR, "data/kana/index.json");

const EXPECTED = {
  hiragana: {
    title: "Хирагана с нуля",
    lessons: 10,
    baseCharacters: 46,
    tasks: 362,
    practices: 5,
    sha256: "fb8807a1472fdbd4386b44d082dd1e781ac75d99f736e0a616fdfbec61196f4b"
  },
  katakana: {
    title: "Катакана с нуля",
    lessons: 11,
    baseCharacters: 46,
    tasks: 400,
    practices: 5,
    sha256: "038cf0a79fa312333f128e85e522665e7465b5354ada4229710191b56169b393"
  }
};

const failures = [];

function assert(condition, message) {
  if (!condition) failures.push(message);
}

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function sha256(filePath) {
  const buffer = await readFile(filePath);
  return createHash("sha256").update(buffer).digest("hex");
}

function countTasks(course) {
  const lessonTasks = course.lessons.flatMap((lesson) => lesson.exercises || []).reduce((sum, exercise) => sum + (exercise.items || []).length, 0);
  const practiceTasks = course.reading_practice.flatMap((practice) => practice.exercises || []).reduce((sum, exercise) => sum + (exercise.items || []).length, 0);
  const finalTasks = (course.final_test?.sections || []).reduce((sum, section) => sum + (section.items || []).length, 0);
  return lessonTasks + practiceTasks + finalTasks;
}

function validateExercise(courseSlug, exercise, context) {
  assert(exercise.id && typeof exercise.id === "string", `${courseSlug}: ${context} exercise id is missing`);
  assert(exercise.label && typeof exercise.label === "string", `${courseSlug}: ${context} exercise label is missing`);
  assert(Array.isArray(exercise.items) && exercise.items.length > 0, `${courseSlug}: ${context}/${exercise.label} has no items`);
  for (const item of exercise.items || []) {
    assert(item.number && typeof item.number === "string", `${courseSlug}: ${context}/${exercise.label} item number is missing`);
    assert(item.prompt && typeof item.prompt === "string", `${courseSlug}: ${context}/${exercise.label}.${item.number} prompt is missing`);
    assert(!("answer" in item) && !("answers" in item), `${courseSlug}: ${context}/${exercise.label}.${item.number} must use accepted_answers only`);
    assert(Array.isArray(item.accepted_answers) && item.accepted_answers.length > 0, `${courseSlug}: ${context}/${exercise.label}.${item.number} accepted_answers is empty`);
    assert(item.accepted_answers.every((answer) => typeof answer === "string" && answer.trim()), `${courseSlug}: ${context}/${exercise.label}.${item.number} has invalid accepted_answers`);
  }
}

async function validateCourse(entry) {
  const expected = EXPECTED[entry.slug];
  assert(expected, `Unexpected kana course slug: ${entry.slug}`);
  if (!expected) return;

  const coursePath = path.join(PUBLIC_DIR, entry.course_file);
  const course = await readJson(coursePath);
  assert(course.schema_version === 1, `${entry.slug}: schema_version must be 1`);
  assert(course.content_version === "2026-08-kana-v1", `${entry.slug}: unexpected content_version`);
  assert(course.title === expected.title, `${entry.slug}: unexpected title`);
  assert(course.source?.sha256 === expected.sha256, `${entry.slug}: source sha256 mismatch`);
  assert(course.source?.page_count > 0, `${entry.slug}: page count missing`);

  const pdfPath = path.join(PUBLIC_DIR, course.source.pdf_file);
  assert(await sha256(pdfPath) === expected.sha256, `${entry.slug}: copied PDF sha256 mismatch`);

  assert(Array.isArray(course.base_characters) && course.base_characters.length === expected.baseCharacters, `${entry.slug}: expected ${expected.baseCharacters} base characters`);
  assert(new Set(course.base_characters.map((item) => item.kana)).size === expected.baseCharacters, `${entry.slug}: base characters must be unique`);
  assert(Array.isArray(course.lessons) && course.lessons.length === expected.lessons, `${entry.slug}: expected ${expected.lessons} lessons`);
  assert(Array.isArray(course.reading_practice) && course.reading_practice.length === expected.practices, `${entry.slug}: expected ${expected.practices} reading practice blocks`);
  assert(course.final_test?.sections?.length >= 5, `${entry.slug}: final test must contain sections A-E`);
  assert(course.tracker?.body?.length > 0, `${entry.slug}: tracker is missing`);
  assert(course.sources?.length > 0, `${entry.slug}: sources are missing`);

  for (const lesson of course.lessons) {
    assert(lesson.id && lesson.title && Number.isFinite(lesson.order), `${entry.slug}: invalid lesson metadata`);
    assert(Array.isArray(lesson.focus_characters) && lesson.focus_characters.length > 0, `${entry.slug}: ${lesson.id} has no focus characters`);
    assert(Array.isArray(lesson.body) && lesson.body.length > 0, `${entry.slug}: ${lesson.id} body is missing`);
    assert(lesson.writing?.mode === "manual", `${entry.slug}: ${lesson.id} writing must be manual`);
    for (const exercise of lesson.exercises || []) validateExercise(entry.slug, exercise, lesson.id);
  }

  for (const practice of course.reading_practice) {
    assert(practice.id && practice.title, `${entry.slug}: reading practice metadata is invalid`);
    assert(Array.isArray(practice.body) && practice.body.length > 0, `${entry.slug}: ${practice.id} body is missing`);
    for (const exercise of practice.exercises || []) validateExercise(entry.slug, exercise, practice.id);
  }

  for (const section of course.final_test.sections || []) validateExercise(entry.slug, section, "final-test");

  const taskCount = countTasks(course);
  assert(taskCount === expected.tasks, `${entry.slug}: expected ${expected.tasks} tasks, got ${taskCount}`);
  assert(course.stats?.task_count === expected.tasks, `${entry.slug}: stats.task_count mismatch`);
  assert(entry.task_count === expected.tasks, `${entry.slug}: index task_count mismatch`);
}

const index = await readJson(INDEX_PATH);
assert(index.schema_version === 1, "kana index schema_version must be 1");
assert(Array.isArray(index.courses) && index.courses.length === 2, "kana index must contain two courses");

for (const entry of index.courses || []) {
  await validateCourse(entry);
}

if (failures.length) {
  console.error("Kana course validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("Kana course validation passed.");
