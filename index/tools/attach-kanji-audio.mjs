import { copyFile, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

export async function attachKanjiAudio(rootDir) {
  const manifestPath = path.join(rootDir, "data", "lessons.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const audioIndex = await scanAudioFiles(rootDir);
  let cardsWithAudio = 0;
  let cardsWithoutAudio = 0;
  let copiedAudioFiles = 0;

  for (const lesson of manifest.lessons) {
    const lessonPath = path.join(rootDir, lesson.file);
    const payload = JSON.parse(await readFile(lessonPath, "utf8"));
    let changed = false;
    const nextItems = [];

    for (const card of payload.items) {
      const { audio, copied } = await resolveKanjiAudio(card, lesson, audioIndex, rootDir);
      if (audio) {
        cardsWithAudio += 1;
        if (copied) copiedAudioFiles += 1;
        if (card.audio !== audio || card.audioSrc) changed = true;
        nextItems.push({ ...card, audio, audioSrc: undefined });
        continue;
      }
      cardsWithoutAudio += 1;
      if (card.audio || card.audioSrc) changed = true;
      const { audio: _audio, audioSrc: _audioSrc, ...withoutAudio } = card;
      nextItems.push(withoutAudio);
    }

    payload.items = nextItems;

    if (changed) {
      await writeFile(lessonPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
    }
  }

  return {
    cardsWithAudio,
    cardsWithoutAudio,
    copiedAudioFiles,
    audioFiles: audioIndex.files.size
  };
}

async function scanAudioFiles(rootDir) {
  const files = new Set();
  const bySlug = new Map();
  const baseDir = path.join(rootDir, "audio", "kanji");

  async function walk(dir) {
    let entries = [];
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch {
      return;
    }

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".mp3")) {
        const normalizedPath = fullPath.replaceAll("\\", "/");
        const slug = entry.name.replace(/^\d+-/, "").replace(/\.mp3$/i, "");
        files.add(normalizedPath);
        if (!bySlug.has(slug)) bySlug.set(slug, []);
        bySlug.get(slug).push(normalizedPath);
      }
    }
  }

  await walk(baseDir);
  return { files, bySlug };
}

async function resolveKanjiAudio(card, lesson, audioIndex, rootDir) {
  const jlpt = String(card.jlpt || lesson.jlpt || "").toLowerCase();
  const slug = audioSlug(card.romaji);
  if (!card.id || !jlpt || !lesson.id || !slug) return { audio: "", copied: false };

  const relativePath = `./audio/kanji/${jlpt}/${lesson.id}/${card.id}-${slug}.mp3`;
  const absolutePath = path.join(rootDir, relativePath.replace(/^\.\//, "")).replaceAll("\\", "/");
  if (audioIndex.files.has(absolutePath)) return { audio: relativePath, copied: false };

  const sourcePath = selectFallbackAudio(slug, jlpt, audioIndex.bySlug);
  if (!sourcePath) return { audio: "", copied: false };

  await mkdir(path.dirname(absolutePath), { recursive: true });
  await copyFile(sourcePath, absolutePath);
  audioIndex.files.add(absolutePath);
  if (!audioIndex.bySlug.has(slug)) audioIndex.bySlug.set(slug, []);
  audioIndex.bySlug.get(slug).push(absolutePath);
  return { audio: relativePath, copied: true };
}

function selectFallbackAudio(slug, jlpt, audioBySlug) {
  const candidates = audioBySlug.get(slug) || [];
  return candidates.find((file) => file.includes(`/audio/kanji/${jlpt}/`)) || candidates[0] || "";
}

function audioSlug(romaji) {
  return String(romaji || "")
    .split("/")[0]
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
