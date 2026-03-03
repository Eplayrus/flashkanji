import 'package:drift/drift.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../data/app_database.dart';
import '../../data/providers.dart';

class DashboardStats {
  final int todayProgress;
  final int dailyGoal;
  final int streak;
  final int totalLearned;
  final int mistakesWeek;

  const DashboardStats({
    required this.todayProgress,
    required this.dailyGoal,
    required this.streak,
    required this.totalLearned,
    required this.mistakesWeek,
  });
}

class StatsRepository {
  StatsRepository(this.db);

  final AppDatabase db;

  Future<DashboardStats> getDashboardStats() async {
    final now = DateTime.now();
    final startOfDay = DateTime(now.year, now.month, now.day);
    final weekAgo = now.subtract(const Duration(days: 7));

    final user = await (db.select(db.userStats)..where((u) => u.id.equals(1))).getSingleOrNull();

    final todayCountExp = db.studyLog.id.count();
    final todayRow = await (db.selectOnly(db.studyLog)
          ..addColumns([todayCountExp])
          ..where(db.studyLog.timestamp.isBiggerOrEqualValue(startOfDay)))
        .getSingle();

    final learnedExp = db.kanaCards.id.count();
    final learnedRow = await (db.selectOnly(db.kanaCards)
          ..addColumns([learnedExp])
          ..where(db.kanaCards.repetitions.isBiggerOrEqualValue(1)))
        .getSingle();

    final mistakesExp = db.studyLog.mistakes.sum();
    final mistakesRow = await (db.selectOnly(db.studyLog)
          ..addColumns([mistakesExp])
          ..where(db.studyLog.timestamp.isBiggerOrEqualValue(weekAgo)))
        .getSingle();

    return DashboardStats(
      todayProgress: todayRow.read(todayCountExp) ?? 0,
      dailyGoal: user?.dailyGoal ?? 15,
      streak: user?.streak ?? 0,
      totalLearned: learnedRow.read(learnedExp) ?? 0,
      mistakesWeek: mistakesRow.read(mistakesExp) ?? 0,
    );
  }

  Future<void> touchStudyDay() async {
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final current = await (db.select(db.userStats)..where((u) => u.id.equals(1))).getSingleOrNull();

    if (current == null) {
      await db.into(db.userStats).insert(UserStatsCompanion.insert(id: 1, lastStudyDate: Value(today)));
      return;
    }

    final last = current.lastStudyDate == null
        ? null
        : DateTime(current.lastStudyDate!.year, current.lastStudyDate!.month, current.lastStudyDate!.day);

    int streak = current.streak;
    if (last == null || today.difference(last).inDays > 1) {
      streak = 1;
    } else if (today.difference(last).inDays == 1) {
      streak += 1;
    }

    await (db.update(db.userStats)..where((u) => u.id.equals(1))).write(
      UserStatsCompanion(streak: Value(streak), lastStudyDate: Value(today)),
    );
  }
}

final dashboardStatsProvider = FutureProvider<DashboardStats>((ref) async {
  await ref.watch(seedProvider.future);
  return ref.read(statsRepositoryProvider).getDashboardStats();
});
