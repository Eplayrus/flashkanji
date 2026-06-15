import fs from "node:fs";
import path from "node:path";

const root = path.resolve("index");
const outputPath = path.join(root, "data", "sentences", "index.json");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "data", "lessons.json"), "utf8"));
const cards = [];

for (const lesson of manifest.lessons) {
  const payload = JSON.parse(fs.readFileSync(path.join(root, lesson.file), "utf8"));
  for (const item of payload.items || []) cards.push(item);
}

const cardByKanji = new Map(cards.map((card) => [card.kanji, card]));

const words = [
  w("日本", ["に", "ほん"], "にほん", "N5", "place", "Япония", "Japan"),
  w("今日", ["きょ", "う"], "きょう", "N5", "time", "сегодня", "today"),
  w("学校", ["がく", "こう"], "がっこう", "N5", "place", "школа", "school"),
  w("先生", ["せん", "せい"], "せんせい", "N5", "person", "учитель", "teacher"),
  w("本", ["ほん"], "ほん", "N5", "readable", "книга", "book"),
  w("人", ["ひと"], "ひと", "N5", "person", "человек", "person"),
  w("大人", ["おと", "な"], "おとな", "N5", "person", "взрослый", "adult"),
  w("中国", ["ちゅう", "ごく"], "ちゅうごく", "N5", "place", "Китай", "China"),
  w("山", ["やま"], "やま", "N5", "nature", "гора", "mountain"),
  w("川", ["かわ"], "かわ", "N5", "nature", "река", "river"),
  w("月", ["つき"], "つき", "N5", "nature", "луна", "moon"),
  w("火", ["ひ"], "ひ", "N5", "nature", "огонь", "fire"),
  w("水", ["みず"], "みず", "N5", "object", "вода", "water"),
  w("木", ["き"], "き", "N5", "nature", "дерево", "tree"),
  w("金", ["きん"], "きん", "N5", "object", "золото", "gold"),
  w("土", ["つち"], "つち", "N5", "nature", "земля", "earth"),
  w("語", ["ご"], "ご", "N5", "readable", "язык", "language"),
  w("話", ["はなし"], "はなし", "N5", "readable", "разговор", "story"),
  w("書", ["しょ"], "しょ", "N5", "readable", "письмо", "writing"),
  w("駅", ["えき"], "えき", "N4", "place", "станция", "station"),
  w("電車", ["でん", "しゃ"], "でんしゃ", "N5", "vehicle", "поезд", "train"),
  w("車", ["くるま"], "くるま", "N5", "vehicle", "машина", "car"),
  w("時", ["とき"], "とき", "N5", "time", "время", "time"),
  w("年", ["とし"], "とし", "N5", "time", "год", "year"),
  w("会社", ["かい", "しゃ"], "かいしゃ", "N4", "place", "компания", "company"),
  w("名", ["な"], "な", "N5", "readable", "имя", "name"),
  w("店", ["みせ"], "みせ", "N4", "place", "магазин", "store"),
  w("毎日", ["まい", "にち"], "まいにち", "N5", "time", "каждый день", "every day"),
  w("朝", ["あさ"], "あさ", "N4", "time", "утро", "morning"),
  w("昼", ["ひる"], "ひる", "N4", "time", "день", "daytime"),
  w("夜", ["よる"], "よる", "N4", "time", "вечер", "night"),
  w("外", ["そと"], "そと", "N5", "place", "снаружи", "outside"),
  w("前", ["まえ"], "まえ", "N5", "direction", "перед", "front"),
  w("後", ["あと"], "あと", "N5", "direction", "после / сзади", "after / back"),
  w("東", ["ひがし"], "ひがし", "N5", "direction", "восток", "east"),
  w("西", ["にし"], "にし", "N5", "direction", "запад", "west"),
  w("南", ["みなみ"], "みなみ", "N5", "direction", "юг", "south"),
  w("北", ["きた"], "きた", "N5", "direction", "север", "north"),
  w("海", ["うみ"], "うみ", "N4", "nature", "море", "sea"),
  w("天気", ["てん", "き"], "てんき", "N5", "nature", "погода", "weather"),
  w("雨", ["あめ"], "あめ", "N5", "nature", "дождь", "rain"),
  w("空", ["そら"], "そら", "N4", "nature", "небо", "sky"),
  w("町", ["まち"], "まち", "N4", "place", "городок", "town"),
  w("家", ["いえ"], "いえ", "N4", "place", "дом", "house"),
  w("室", ["しつ"], "しつ", "N4", "place", "комната", "room"),
  w("部", ["ぶ"], "ぶ", "N3", "place", "отдел", "department"),
  w("方", ["ほう"], "ほう", "N4", "direction", "сторона", "direction"),
  w("道", ["みち"], "みち", "N4", "place", "дорога", "road"),
  w("円", ["えん"], "えん", "N5", "money", "иена", "yen"),
  w("万", ["まん"], "まん", "N5", "number", "десять тысяч", "ten thousand"),
  w("百", ["ひゃく"], "ひゃく", "N5", "number", "сто", "hundred"),
  w("千", ["せん"], "せん", "N5", "number", "тысяча", "thousand"),
  w("半", ["はん"], "はん", "N5", "time", "половина", "half"),
  w("男", ["おとこ"], "おとこ", "N5", "person", "мужчина", "man"),
  w("女", ["おんな"], "おんな", "N5", "person", "женщина", "woman"),
  w("子", ["こ"], "こ", "N5", "person", "ребёнок", "child"),
  w("父", ["ちち"], "ちち", "N5", "person", "отец", "father"),
  w("母", ["はは"], "はは", "N5", "person", "мать", "mother"),
  w("私", ["わたし"], "わたし", "N4", "person", "я", "I"),
  w("何", ["なに"], "なに", "N5", "readable", "что", "what"),
  w("一", ["いち"], "いち", "N5", "number", "один", "one"),
  w("二", ["に"], "に", "N5", "number", "два", "two"),
  w("三", ["さん"], "さん", "N5", "number", "три", "three"),
  w("四", ["よん"], "よん", "N5", "number", "четыре", "four"),
  w("五", ["ご"], "ご", "N5", "number", "пять", "five"),
  w("六", ["ろく"], "ろく", "N5", "number", "шесть", "six")
].filter((word) => [...word.word].every((kanji) => cardByKanji.has(kanji)));

const templates = {
  all: [
    t("___です。", "{r}です。", "Это {ru}.", "It is {en}."),
    t("___がすきです。", "{r}が すきです。", "Мне нравится {ru}.", "I like {en}."),
    t("___をみます。", "{r}を みます。", "Я смотрю на {ru}.", "I look at {en}.")
  ],
  place: [
    t("___へいきます。", "{r}へ いきます。", "Я иду в/к: {ru}.", "I go to {en}."),
    t("___でまちます。", "{r}で まちます。", "Я жду в месте: {ru}.", "I wait at {en}."),
    t("___にいます。", "{r}に います。", "Я нахожусь здесь: {ru}.", "I am at {en}."),
    t("___からきました。", "{r}から きました。", "Я пришёл из места: {ru}.", "I came from {en}.")
  ],
  person: [
    t("___にあいます。", "{r}に あいます。", "Я встречаю: {ru}.", "I meet {en}."),
    t("___と話します。", "{r}と はなします。", "Я говорю с: {ru}.", "I talk with {en}."),
    t("___がいます。", "{r}が います。", "Здесь есть: {ru}.", "There is {en}."),
    t("___のなまえをききます。", "{r}の なまえを ききます。", "Я спрашиваю имя: {ru}.", "I ask {en}'s name.")
  ],
  readable: [
    t("___をよみます。", "{r}を よみます。", "Я читаю: {ru}.", "I read {en}."),
    t("___をかきます。", "{r}を かきます。", "Я пишу: {ru}.", "I write {en}."),
    t("___をべんきょうします。", "{r}を べんきょうします。", "Я изучаю: {ru}.", "I study {en}.")
  ],
  object: [
    t("___をのみます。", "{r}を のみます。", "Я пью: {ru}.", "I drink {en}."),
    t("___をかいます。", "{r}を かいます。", "Я покупаю: {ru}.", "I buy {en}."),
    t("___があります。", "{r}が あります。", "Есть: {ru}.", "There is {en}.")
  ],
  vehicle: [
    t("___にのります。", "{r}に のります。", "Я сажусь в транспорт: {ru}.", "I get on {en}."),
    t("___をまちます。", "{r}を まちます。", "Я жду: {ru}.", "I wait for {en}."),
    t("___でいきます。", "{r}で いきます。", "Я еду на: {ru}.", "I go by {en}.")
  ],
  time: [
    t("___にべんきょうします。", "{r}に べんきょうします。", "Я учусь в это время: {ru}.", "I study at/on {en}."),
    t("___はやすみです。", "{r}は やすみです。", "{ru}: время отдыха.", "{en} is a rest time."),
    t("___までまちます。", "{r}まで まちます。", "Я жду до: {ru}.", "I wait until {en}.")
  ],
  nature: [
    t("___がきれいです。", "{r}が きれいです。", "{ru} красивое.", "{en} is beautiful."),
    t("___があります。", "{r}が あります。", "Есть: {ru}.", "There is {en}."),
    t("___をみます。", "{r}を みます。", "Я смотрю на {ru}.", "I look at {en}.")
  ],
  direction: [
    t("___へまがります。", "{r}へ まがります。", "Я поворачиваю в сторону: {ru}.", "I turn toward {en}."),
    t("___にあります。", "{r}に あります。", "Это находится: {ru}.", "It is at {en}."),
    t("___をみます。", "{r}を みます。", "Я смотрю в сторону: {ru}.", "I look toward {en}.")
  ],
  number: [
    t("___つあります。", "{r}つ あります。", "Есть количество: {ru}.", "There are {en}."),
    t("___人います。", "{r}にん います。", "Есть людей: {ru}.", "There are {en} people."),
    t("___ばんめです。", "{r}ばんめです。", "Это номер: {ru}.", "It is number {en}.")
  ],
  money: [
    t("___です。", "{r}です。", "Цена: {ru}.", "The price is {en}."),
    t("___をはらいます。", "{r}を はらいます。", "Я плачу: {ru}.", "I pay {en}.")
  ]
};

const existing = JSON.parse(fs.readFileSync(outputPath, "utf8"));
const items = [...(existing.items || [])];
const seen = new Set(items.map(keyForExercise));
let counter = 1;

for (const word of words) {
  const usableTemplates = [...templates.all, ...(templates[word.category] || [])];
  for (const template of usableTemplates) {
    const item = makeExercise(word, template, counter);
    const key = keyForExercise(item);
    if (seen.has(key)) continue;
    seen.add(key);
    items.push(item);
    counter += 1;
  }
}

const payload = { version: 1, items: items.slice(0, 260) };
fs.writeFileSync(outputPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
console.log(`Generated ${payload.items.length} sentence exercises.`);

function w(word, reading, readingText, jlpt, category, ru, en) {
  return { word, reading, readingText, jlpt, category, ru, en };
}

function t(sentence, reading, ru, en) {
  return { sentence, reading, ru, en };
}

function makeExercise(word, template, index) {
  const id = `sentence-auto-${String(index).padStart(3, "0")}`;
  const answer = [...word.word];
  const answerTiles = answer.map((kanji, i) => ({ kanji, reading: word.reading[i] || readingForKanji(kanji) }));
  return {
    id,
    jlpt: word.jlpt,
    sentence: template.sentence,
    reading: template.reading.replace("{r}", word.readingText),
    translationRu: template.ru.replace("{ru}", word.ru),
    translationEn: template.en.replace("{en}", word.en),
    blanks: [{ answer, reading: answerTiles.map((tile) => tile.reading) }],
    tiles: makeTiles(word, answerTiles, id)
  };
}

function makeTiles(word, answerTiles, seed) {
  const answerSet = new Set(answerTiles.map((tile) => tile.kanji));
  const sameCategory = words.filter((item) => item.category === word.category && item.word !== word.word);
  const sameLevel = words.filter((item) => item.jlpt === word.jlpt && item.category !== word.category);
  const pool = [...sameCategory, ...sameLevel, ...words]
    .flatMap((item) => [...item.word].map((kanji, i) => ({ kanji, reading: item.reading[i] || readingForKanji(kanji) })))
    .filter((tile) => !answerSet.has(tile.kanji))
    .filter((tile, index, list) => list.findIndex((entry) => entry.kanji === tile.kanji) === index)
    .sort((a, b) => stableHash(`${seed}:${a.kanji}`) - stableHash(`${seed}:${b.kanji}`));
  return [...answerTiles, ...pool.slice(0, 6)].filter((tile, index, list) => list.findIndex((entry) => entry.kanji === tile.kanji) === index);
}

function readingForKanji(kanji) {
  const card = cardByKanji.get(kanji);
  return String(card?.onyomi || card?.kunyomi || card?.hiragana || "かな").split("/")[0].trim();
}

function keyForExercise(item) {
  return `${item.sentence}:${(item.blanks || []).flatMap((blank) => blank.answer || []).join("")}`;
}

function stableHash(value) {
  return String(value).split("").reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0) >>> 0;
}
