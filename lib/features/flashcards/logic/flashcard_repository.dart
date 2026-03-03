import 'package:drift/drift.dart';

import '../../../data/app_database.dart';

class FlashcardRepository {
  FlashcardRepository(this.db);

  final AppDatabase db;

  Future<KanaCard?> nextDueCard() {
    final now = DateTime.now();
    return (db.select(db.kanaCards)
          ..where((tbl) => tbl.dueAt.isSmallerOrEqualValue(now))
          ..orderBy([(t) => OrderingTerm.asc(t.dueAt)]))
        .getSingleOrNull();
  }

  Future<void> markReview(KanaCard card, bool remembered) async {
    final now = DateTime.now();
    final reps = remembered ? card.repetitions + 1 : 0;
    final lapses = remembered ? card.lapses : card.lapses + 1;
    final ease = remembered ? (card.ease + 0.1).clamp(1.3, 3.5) : (card.ease - 0.2).clamp(1.3, 3.5);

    int interval;
    if (!remembered) {
      interval = 1;
    } else if (reps == 1) {
      interval = 1;
    } else if (reps == 2) {
      interval = 3;
    } else {
      interval = (card.intervalDays * ease).round().clamp(1, 180);
    }

    await (db.update(db.kanaCards)..where((t) => t.id.equals(card.id))).write(
      KanaCardsCompanion(
        repetitions: Value(reps),
        lapses: Value(lapses),
        ease: Value(ease),
        intervalDays: Value(interval),
        dueAt: Value(now.add(Duration(days: interval))),
        lastReviewedAt: Value(now),
      ),
    );

    await db.into(db.studyLog).insert(
          StudyLogCompanion.insert(
            type: 'card',
            itemId: card.id,
            timestamp: now,
            isCorrect: remembered,
            mistakes: remembered ? 0 : 1,
          ),
        );
  }
}
