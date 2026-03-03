import 'package:flutter/material.dart';

import '../../features/stats/stats_repository.dart';

class DashboardHeader extends StatelessWidget {
  const DashboardHeader({super.key, this.stats});

  final DashboardStats? stats;

  @override
  Widget build(BuildContext context) {
    final s = stats;
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: const LinearGradient(colors: [Color(0xFFFFF4DE), Color(0xFFFFE8C2)]),
      ),
      child: s == null
          ? const LinearProgressIndicator()
          : Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Today: ${s.todayProgress}/${s.dailyGoal}'),
                const SizedBox(height: 4),
                Text('Streak: ${s.streak}'),
                Text('Learned: ${s.totalLearned} • Mistakes (7d): ${s.mistakesWeek}'),
              ],
            ),
    );
  }
}
