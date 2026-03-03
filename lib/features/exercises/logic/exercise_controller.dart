import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../data/providers.dart';
import '../../stats/stats_repository.dart';
import 'exercise_repository.dart';

class ExerciseState {
  final ExerciseItem? item;
  final Map<int, String> selected;
  final bool checked;

  const ExerciseState({this.item, this.selected = const {}, this.checked = false});

  ExerciseState copyWith({ExerciseItem? item, Map<int, String>? selected, bool? checked}) {
    return ExerciseState(
      item: item ?? this.item,
      selected: selected ?? this.selected,
      checked: checked ?? this.checked,
    );
  }
}

final exerciseControllerProvider = AutoDisposeAsyncNotifierProvider<ExerciseController, ExerciseState>(
  ExerciseController.new,
);

class ExerciseController extends AutoDisposeAsyncNotifier<ExerciseState> {
  @override
  Future<ExerciseState> build() async {
    await ref.watch(seedProvider.future);
    final item = await ref.read(exerciseRepositoryProvider).randomExercise();
    return ExerciseState(item: item);
  }

  void place(int index, String kana) {
    final current = state.value;
    if (current == null) return;
    final next = Map<int, String>.from(current.selected)..[index] = kana;
    state = AsyncData(current.copyWith(selected: next));
  }

  Future<void> check() async {
    final current = state.value;
    final item = current?.item;
    if (current == null || item == null) return;

    int mistakes = 0;
    for (int i = 0; i < item.answers.length; i++) {
      if (current.selected[i] != item.answers[i]) mistakes++;
    }

    await ref.read(exerciseRepositoryProvider).logResult(
          exerciseId: item.id,
          isCorrect: mistakes == 0,
          mistakes: mistakes,
        );
    await ref.read(statsRepositoryProvider).touchStudyDay();
    state = AsyncData(current.copyWith(checked: true));
  }

  Future<void> next() async {
    state = const AsyncLoading();
    final item = await ref.read(exerciseRepositoryProvider).randomExercise();
    state = AsyncData(ExerciseState(item: item));
  }
}
