import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../l10n/app_localizations.dart';
import '../../../common/widgets/dashboard_header.dart';
import '../../stats/stats_repository.dart';
import '../logic/flashcard_controller.dart';
import '../widgets/flip_kana_card.dart';

class FlashcardsScreen extends ConsumerWidget {
  const FlashcardsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final l10n = AppLocalizations.of(context)!;
    final cardAsync = ref.watch(currentCardProvider);
    final statsAsync = ref.watch(dashboardStatsProvider);

    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            DashboardHeader(stats: statsAsync.valueOrNull),
            const SizedBox(height: 12),
            Expanded(
              child: cardAsync.when(
                data: (card) {
                  if (card == null) return Center(child: Text(l10n.noCardsDue));
                  return Column(
                    children: [
                      FlipKanaCard(card: card),
                      const Spacer(),
                      Row(
                        children: [
                          Expanded(
                            child: FilledButton.tonal(
                              onPressed: () => ref.read(currentCardProvider.notifier).review(false),
                              child: Text(l10n.forgot),
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: FilledButton(
                              onPressed: () => ref.read(currentCardProvider.notifier).review(true),
                              child: Text(l10n.remember),
                            ),
                          ),
                        ],
                      ),
                    ],
                  );
                },
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (e, _) => Center(child: Text('Error: $e')),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
