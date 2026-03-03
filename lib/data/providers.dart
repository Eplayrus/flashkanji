import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'app_database.dart';
import '../features/exercises/logic/exercise_repository.dart';
import '../features/flashcards/logic/flashcard_repository.dart';
import '../features/stats/stats_repository.dart';

final appDatabaseProvider = Provider<AppDatabase>((ref) {
  final db = AppDatabase();
  ref.onDispose(db.close);
  return db;
});

final seedProvider = FutureProvider<void>((ref) async {
  await ref.read(appDatabaseProvider).seedIfNeeded();
});

final flashcardRepositoryProvider = Provider<FlashcardRepository>(
  (ref) => FlashcardRepository(ref.read(appDatabaseProvider)),
);

final exerciseRepositoryProvider = Provider<ExerciseRepository>(
  (ref) => ExerciseRepository(ref.read(appDatabaseProvider)),
);

final statsRepositoryProvider = Provider<StatsRepository>(
  (ref) => StatsRepository(ref.read(appDatabaseProvider)),
);
