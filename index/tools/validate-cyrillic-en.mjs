import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const dataRoot = path.join(projectRoot, "public", "data");
const baselinePath = path.join(__dirname, "validate-cyrillic-en-baseline.json");
const updateBaseline = process.argv.includes("--update-baseline");
const summaryOnly = process.argv.includes("--summary");
const cyrillicRe = /[\u0400-\u04FF]/u;

const criticalLessons = {
    "public/data/jlpt/n5/kanji.json": { count: 8 },
    "public/data/jlpt/n3/kanji.json": { count: 10 },
    "public/data/jlpt/n2/kanji.json": { count: 10 },
    "public/data/jlpt/n5/lessons.json": { count: 1 },
    "public/data/jlpt/n3/lessons.json": { count: 1 },
    "public/data/jlpt/n2/lessons.json": { count: 1 }
};

const criticalGrammarPatterns = {
    "public/data/jlpt/n3/grammar.json": new Set(["について", "に関して"]),
    "public/data/jlpt/n2/grammar.json": new Set(["に基づいて", "上で", "ことから", "において"])
};

function walkFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    return entries.flatMap((entry) => {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory())
            return walkFiles(fullPath);
        return entry.isFile() && entry.name.endsWith(".json") ? [fullPath] : [];
    });
}

function normalizeFile(file) {
    return path.relative(projectRoot, file).replace(/\\/g, "/");
}

function jsonPath(pathParts) {
    return pathParts.map((part, index) => typeof part === "number" ? `[${part}]` : (index === 0 ? part : `.${part}`)).join("");
}

function isEnglishField(key) {
    return key === "en"
        || key.endsWith("_en")
        || key.endsWith("En")
        || key === "answerEn"
        || key === "optionsEn"
        || key === "interfaceUseEn"
        || key === "lessonTitleEn";
}

function sha256(value) {
    return crypto.createHash("sha256").update(String(value)).digest("hex");
}

function preview(value) {
    return String(value).replace(/\s+/g, " ").slice(0, 120);
}

function collectEnglishStrings(value, file, pathParts = [], englishContext = false, output = []) {
    if (typeof value === "string") {
        if (englishContext && cyrillicRe.test(value)) {
            output.push({
                file,
                path: jsonPath(pathParts),
                sha256: sha256(value),
                preview: preview(value)
            });
        }
        return output;
    }
    if (Array.isArray(value)) {
        value.forEach((item, index) => collectEnglishStrings(item, file, [...pathParts, index], englishContext, output));
        return output;
    }
    if (value && typeof value === "object") {
        Object.entries(value).forEach(([key, item]) => {
            collectEnglishStrings(item, file, [...pathParts, key], englishContext || isEnglishField(key), output);
        });
    }
    return output;
}

function readJson(file) {
    return JSON.parse(fs.readFileSync(file, "utf8"));
}

function collectFindings() {
    const files = walkFiles(dataRoot);
    const findings = [];
    for (const file of files) {
        const rel = normalizeFile(file);
        const json = readJson(file);
        collectEnglishStrings(json, rel, [], false, findings);
    }
    return { files, findings };
}

function loadBaseline() {
    if (!fs.existsSync(baselinePath))
        return [];
    const payload = readJson(baselinePath);
    const allowed = Array.isArray(payload.allowed) ? payload.allowed : [];
    return allowed.map((entry) => typeof entry === "string" ? entry : keyOf(entry));
}

function keyOf(finding) {
    return `${finding.file}\t${finding.path}\t${finding.sha256}`;
}

function findingFromKey(key) {
    const [file = "", pathName = "", digest = ""] = String(key).split("\t");
    return { file, path: pathName, sha256: digest, preview: digest };
}

function criticalKanjiPath(finding) {
    const config = criticalLessons[finding.file];
    if (!config)
        return false;
    const match = /^items\[(\d+)\]\./.exec(finding.path);
    return Boolean(match && Number(match[1]) < config.count);
}

function criticalGrammarPath(finding) {
    const patterns = criticalGrammarPatterns[finding.file];
    if (!patterns)
        return false;
    const match = /^items\[(\d+)\]\./.exec(finding.path);
    if (!match)
        return false;
    const json = readJson(path.join(projectRoot, finding.file));
    const item = json.items?.[Number(match[1])];
    return Boolean(item && patterns.has(String(item.pattern || item.id || "")));
}

function isCriticalFinding(finding) {
    return criticalKanjiPath(finding) || criticalGrammarPath(finding);
}

const { files, findings } = collectFindings();

if (updateBaseline) {
    const allowed = findings
        .filter((finding) => !isCriticalFinding(finding))
        .sort((a, b) => `${a.file}:${a.path}`.localeCompare(`${b.file}:${b.path}`))
        .map(keyOf);
    fs.writeFileSync(baselinePath, JSON.stringify({
        schemaVersion: 1,
        generatedAt: new Date().toISOString(),
        description: "Known legacy Cyrillic strings inside English data fields. Do not add new entries without auditing the source content.",
        allowed
    }, null, 2) + "\n", "utf8");
    console.log(`Updated Cyrillic-in-English baseline: ${allowed.length} allowed findings.`);
}

const baseline = loadBaseline();
const baselineKeys = new Set(baseline);
const findingKeys = new Set(findings.map(keyOf));
const critical = findings.filter(isCriticalFinding);
const unexpected = findings.filter((finding) => !baselineKeys.has(keyOf(finding)));
const stale = baseline.filter((entry) => !findingKeys.has(entry)).map(findingFromKey);

console.log(`Files checked: ${files.length}`);
console.log(`Cyrillic-in-English findings: ${findings.length}`);
console.log(`Allowed baseline findings: ${baseline.length}`);
console.log(`Unexpected findings: ${unexpected.length}`);
console.log(`Stale baseline entries: ${stale.length}`);
console.log(`Critical lesson findings: ${critical.length}`);

function printExamples(title, rows) {
    if (!rows.length || summaryOnly)
        return;
    console.log(`\n${title}`);
    rows.slice(0, 20).forEach((row) => {
        console.log(`- ${row.file} ${row.path}: ${row.preview}`);
    });
    if (rows.length > 20)
        console.log(`... and ${rows.length - 20} more`);
}

printExamples("Unexpected Cyrillic in English fields:", unexpected);
printExamples("Stale baseline entries:", stale);
printExamples("Critical lesson Cyrillic in English fields:", critical);

if (unexpected.length || stale.length || critical.length) {
    process.exitCode = 1;
}
