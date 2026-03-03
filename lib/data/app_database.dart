import 'dart:convert';
import 'dart:io';

import 'package:drift/drift.dart';
import 'package:drift/native.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';

part 'app_database.g.dart';

class KanaCards extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get kana => text()();
  TextColumn get romaji => text()();
  TextColumn get ruHint => text()();
  TextColumn get example => text()();
  RealColumn get ease => real().withDefault(const Constant(2.5))();
  IntColumn get intervalDays => integer().withDefault(const Constant(0))();
  IntColumn get repetitions => integer().withDefault(const Constant(0))();
  IntColumn get lapses => integer().withDefault(const Constant(0))();
  DateTimeColumn get dueAt => dateTime()();
  DateTimeColumn get lastReviewedAt => dateTime().nullable()();
}

class Exercises extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get textTemplate => text()();
  TextColumn get answersJson => text()();
  TextColumn get choicesJson => text()();
  IntColumn get difficulty => integer()();
  TextColumn get topic => text()();
}

class StudyLog extends Table {
  IntColumn get id => integer().autoIncrement()();
  TextColumn get type => text()();
  IntColumn get itemId => integer()();
  DateTimeColumn get timestamp => dateTime()();
  BoolColumn get isCorrect => boolean()();
  IntColumn get mistakes => integer().withDefault(const Constant(0))();
}

class UserStats extends Table {
  IntColumn get id => integer()();
  IntColumn get dailyGoal => integer().withDefault(const Constant(15))();
  IntColumn get streak => integer().withDefault(const Constant(0))();
  DateTimeColumn get lastStudyDate => dateTime().nullable()();

  @override
  Set<Column> get primaryKey => {id};
}

@DriftDatabase(tables: [KanaCards, Exercises, StudyLog, UserStats])
class AppDatabase extends _$AppDatabase {
  AppDatabase() : super(_openConnection());

  @override
  int get schemaVersion => 1;

  Future<void> seedIfNeeded() async {
    final cardsCountExp = kanaCards.id.count();
    final cardCountRow = await (selectOnly(kanaCards)..addColumns([cardsCountExp])).getSingle();
    final cardCount = cardCountRow.read(cardsCountExp) ?? 0;

    if (cardCount == 0) {
      final now = DateTime.now();
      await batch((b) {
        b.insertAll(kanaCards, _seedKana.map((e) => KanaCardsCompanion.insert(
              kana: e.kana,
              romaji: e.romaji,
              ruHint: e.ruHint,
              example: e.example,
              dueAt: now,
            )));
        b.insertAll(exercises, _seedExercises.map((e) => ExercisesCompanion.insert(
              textTemplate: e.textTemplate,
              answersJson: jsonEncode(e.answers),
              choicesJson: jsonEncode(e.choices),
              difficulty: e.difficulty,
              topic: e.topic,
            )));
      });
      await into(userStats).insert(
        UserStatsCompanion.insert(
          id: 1,
          dailyGoal: const Value(15),
          streak: const Value(0),
          lastStudyDate: Value(now),
        ),
        mode: InsertMode.insertOrIgnore,
      );
    }
  }
}

LazyDatabase _openConnection() {
  return LazyDatabase(() async {
    final dbFolder = await getApplicationDocumentsDirectory();
    final file = File(p.join(dbFolder.path, 'flashkana.sqlite'));
    return NativeDatabase.createInBackground(file);
  });
}

class SeedKana {
  final String kana;
  final String romaji;
  final String ruHint;
  final String example;

  const SeedKana(this.kana, this.romaji, this.ruHint, this.example);
}

class SeedExercise {
  final String textTemplate;
  final List<String> answers;
  final List<String> choices;
  final int difficulty;
  final String topic;

  const SeedExercise({
    required this.textTemplate,
    required this.answers,
    required this.choices,
    required this.difficulty,
    required this.topic,
  });
}

const _seedKana = <SeedKana>[
  SeedKana('ア', 'a', 'звук: а', 'アイス'),
  SeedKana('イ', 'i', 'звук: и', 'イエ'),
  SeedKana('ウ', 'u', 'звук: у', 'ウドン'),
  SeedKana('エ', 'e', 'звук: э', 'エビ'),
  SeedKana('オ', 'o', 'звук: о', 'オチャ'),
  SeedKana('カ', 'ka', 'звук: ка', 'カメラ'),
  SeedKana('キ', 'ki', 'звук: ки', 'キリン'),
  SeedKana('ク', 'ku', 'звук: ку', 'クラス'),
  SeedKana('ケ', 'ke', 'звук: кэ', 'ケーキ'),
  SeedKana('コ', 'ko', 'звук: ко', 'コーヒー'),
  SeedKana('サ', 'sa', 'звук: са', 'サラダ'),
  SeedKana('シ', 'shi', 'звук: ши', 'シネマ'),
  SeedKana('ス', 'su', 'звук: су', 'スープ'),
  SeedKana('セ', 'se', 'звук: сэ', 'セーター'),
  SeedKana('ソ', 'so', 'звук: со', 'ソース'),
  SeedKana('タ', 'ta', 'звук: та', 'タクシー'),
  SeedKana('チ', 'chi', 'звук: чи', 'チーズ'),
  SeedKana('ツ', 'tsu', 'звук: цу', 'ツナ'),
  SeedKana('テ', 'te', 'звук: тэ', 'テスト'),
  SeedKana('ト', 'to', 'звук: то', 'トマト'),
  SeedKana('ナ', 'na', 'звук: на', 'ナイフ'),
  SeedKana('ニ', 'ni', 'звук: ни', 'ニュース'),
  SeedKana('ヌ', 'nu', 'звук: ну', 'ヌードル'),
  SeedKana('ネ', 'ne', 'звук: нэ', 'ネコ'),
  SeedKana('ノ', 'no', 'звук: но', 'ノート'),
  SeedKana('ハ', 'ha', 'звук: ха', 'ハンバーガー'),
  SeedKana('ヒ', 'hi', 'звук: хи', 'ヒーロー'),
  SeedKana('フ', 'fu', 'звук: фу', 'フルーツ'),
  SeedKana('ヘ', 'he', 'звук: хэ', 'ヘア'),
  SeedKana('ホ', 'ho', 'звук: хо', 'ホテル'),
  SeedKana('マ', 'ma', 'звук: ма', 'マスク'),
  SeedKana('ミ', 'mi', 'звук: ми', 'ミルク'),
  SeedKana('ム', 'mu', 'звук: му', 'ムービー'),
  SeedKana('メ', 'me', 'звук: мэ', 'メモ'),
  SeedKana('モ', 'mo', 'звук: мо', 'モード'),
  SeedKana('ヤ', 'ya', 'звук: я', 'ヤード'),
  SeedKana('ユ', 'yu', 'звук: ю', 'ユニット'),
  SeedKana('ヨ', 'yo', 'звук: ё', 'ヨーグルト'),
  SeedKana('ラ', 'ra', 'звук: ра', 'ラーメン'),
  SeedKana('リ', 'ri', 'звук: ри', 'リズム'),
  SeedKana('ル', 'ru', 'звук: ру', 'ルール'),
  SeedKana('レ', 're', 'звук: рэ', 'レモン'),
  SeedKana('ロ', 'ro', 'звук: ро', 'ロビー'),
  SeedKana('ワ', 'wa', 'звук: ва', 'ワイン'),
  SeedKana('ヲ', 'wo', 'частица о', 'ヲ'),
  SeedKana('ン', 'n', 'носовой н', 'パン'),
];

const _seedExercises = <SeedExercise>[
  SeedExercise(textTemplate: '{0}イス を のみます', answers: ['ジュ'], choices: ['ジュ', 'ア', 'オ'], difficulty: 1, topic: 'food'),
  SeedExercise(textTemplate: '{0}ーメン が すき', answers: ['ラ'], choices: ['ラ', 'リ', 'ロ'], difficulty: 1, topic: 'food'),
  SeedExercise(textTemplate: '{0}ーヒー を のむ', answers: ['コ'], choices: ['コ', 'カ', 'ク'], difficulty: 1, topic: 'food'),
  SeedExercise(textTemplate: '{0}メラ を かう', answers: ['カ'], choices: ['カ', 'ケ', 'コ'], difficulty: 1, topic: 'loanwords'),
  SeedExercise(textTemplate: '{0}トマト を きる', answers: ['ト'], choices: ['ト', 'テ', 'タ'], difficulty: 1, topic: 'food'),
  SeedExercise(textTemplate: 'ホテル は {0}か', answers: ['ド'], choices: ['ド', 'ト', 'ナ'], difficulty: 1, topic: 'travel'),
  SeedExercise(textTemplate: '{0}ース を かける', answers: ['ソ'], choices: ['ソ', 'セ', 'ス'], difficulty: 1, topic: 'food'),
  SeedExercise(textTemplate: 'きょうは {0}ガ', answers: ['ヨ'], choices: ['ヨ', 'ユ', 'ヤ'], difficulty: 1, topic: 'food'),
  SeedExercise(textTemplate: '{0}クシー を よぶ', answers: ['タ'], choices: ['タ', 'ト', 'ツ'], difficulty: 1, topic: 'travel'),
  SeedExercise(textTemplate: '{0}ルク を のむ', answers: ['ミ'], choices: ['ミ', 'メ', 'モ'], difficulty: 1, topic: 'food'),
  SeedExercise(textTemplate: 'わたし の なまえ は {0}オ', answers: ['レ'], choices: ['レ', 'ラ', 'ル'], difficulty: 2, topic: 'names'),
  SeedExercise(textTemplate: '{0}モ を とる', answers: ['メ'], choices: ['メ', 'ミ', 'ネ'], difficulty: 2, topic: 'study'),
  SeedExercise(textTemplate: '{0}ュース を みる', answers: ['ニ'], choices: ['ニ', 'ヌ', 'ネ'], difficulty: 2, topic: 'loanwords'),
  SeedExercise(textTemplate: '{0}ード が いる', answers: ['カード'], choices: ['カード', 'ケーキ', 'コーヒー'], difficulty: 2, topic: 'loanwords'),
  SeedExercise(textTemplate: '{0}ーズ を たべる', answers: ['チ'], choices: ['チ', 'シ', 'ツ'], difficulty: 2, topic: 'food'),
  SeedExercise(textTemplate: '{0}ネマ へ いく', answers: ['シ'], choices: ['シ', 'サ', 'ス'], difficulty: 2, topic: 'loanwords'),
  SeedExercise(textTemplate: '{0}ーム は むずかしい', answers: ['ゲ'], choices: ['ゲ', 'ケ', 'コ'], difficulty: 2, topic: 'loanwords'),
  SeedExercise(textTemplate: '{0}イン を のむ', answers: ['ワ'], choices: ['ワ', 'ウ', 'オ'], difficulty: 3, topic: 'food'),
  SeedExercise(textTemplate: '{0}ール を まもる', answers: ['ル'], choices: ['ル', 'ロ', 'レ'], difficulty: 3, topic: 'study'),
  SeedExercise(textTemplate: '{0}ード の まえ', answers: ['ヤ'], choices: ['ヤ', 'ヨ', 'ユ'], difficulty: 3, topic: 'names'),
];
