import 'dart:convert';
import 'dart:math';

import '../../../data/app_database.dart';

class ExerciseItem {
  final int id;
  final String textTemplate;
  final List<String> answers;
  final List<String> choices;
  final int difficulty;
  final String topic;

  const ExerciseItem({
    required this.id,
    required this.textTemplate,
    required this.answers,
    required this.choices,
    required this.difficulty,
    required this.topic,
  });
}

class ExerciseRepository {
  ExerciseRepository(this.db);

  final AppDatabase db;

  Future<ExerciseItem?> randomExercise() async {
    final rows = await db.select(db.exercises).get();
    if (rows.isEmpty) return null;
    final row = rows[Random().nextInt(rows.length)];
    return ExerciseItem(
      id: row.id,
      textTemplate: row.textTemplate,
      answers: (jsonDecode(row.answersJson) as List).cast<String>(),
      choices: (jsonDecode(row.choicesJson) as List).cast<String>()..shuffle(),
      difficulty: row.difficulty,
      topic: row.topic,
    );
  }

  Future<void> logResult({required int exerciseId, required bool isCorrect, required int mistakes}) {
    return db.into(db.studyLog).insert(
          StudyLogCompanion.insert(
            type: 'exercise',
            itemId: exerciseId,
            timestamp: DateTime.now(),
            isCorrect: isCorrect,
            mistakes: mistakes,
          ),
        );
  }
}
