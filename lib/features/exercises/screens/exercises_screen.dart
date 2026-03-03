import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../l10n/app_localizations.dart';
import '../logic/exercise_controller.dart';
import '../widgets/exercise_text_slots.dart';

class ExercisesScreen extends ConsumerWidget {
  const ExercisesScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final l10n = AppLocalizations.of(context)!;
    final stateAsync = ref.watch(exerciseControllerProvider);

    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: stateAsync.when(
          data: (state) {
            final item = state.item;
            if (item == null) return Center(child: Text(l10n.noExercises));

            final wrong = <String>[];
            if (state.checked) {
              for (int i = 0; i < item.answers.length; i++) {
                if (state.selected[i] != item.answers[i]) {
                  wrong.add('${item.answers[i]} — ${l10n.wrongAnswerHint}');
                }
              }
            }

            return Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('${l10n.topic}: ${item.topic}', style: Theme.of(context).textTheme.titleMedium),
                const SizedBox(height: 16),
                Card(
                  child: Padding(
                    padding: const EdgeInsets.all(16),
                    child: ExerciseTextSlots(
                      template: item.textTemplate,
                      slotCount: item.answers.length,
                      selected: state.selected,
                      checked: state.checked,
                      answers: item.answers,
                      onAccept: (i, value) => ref.read(exerciseControllerProvider.notifier).place(i, value),
                    ),
                  ),
                ),
                const SizedBox(height: 16),
                Wrap(
                  spacing: 8,
                  children: item.choices
                      .map(
                        (kana) => Draggable<String>(
                          data: kana,
                          feedback: Material(
                            child: Chip(label: Text(kana, style: const TextStyle(fontSize: 22))),
                          ),
                          childWhenDragging: Chip(label: Text(kana), backgroundColor: Colors.grey.shade300),
                          child: Chip(label: Text(kana, style: const TextStyle(fontSize: 22))),
                        ),
                      )
                      .toList(),
                ),
                const SizedBox(height: 16),
                FilledButton(
                  onPressed: () => ref.read(exerciseControllerProvider.notifier).check(),
                  child: Text(l10n.check),
                ),
                if (state.checked) ...[
                  const SizedBox(height: 12),
                  Text(wrong.isEmpty ? l10n.allCorrect : wrong.join('\n')),
                  const SizedBox(height: 8),
                  OutlinedButton(
                    onPressed: () => ref.read(exerciseControllerProvider.notifier).next(),
                    child: Text(l10n.nextExercise),
                  ),
                ],
              ],
            );
          },
          loading: () => const Center(child: CircularProgressIndicator()),
          error: (e, _) => Center(child: Text('Error: $e')),
        ),
      ),
    );
  }
}
