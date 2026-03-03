import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../data/providers.dart';
import '../../../data/app_database.dart';

final currentCardProvider = AutoDisposeAsyncNotifierProvider<CurrentCardController, KanaCard?>(
  CurrentCardController.new,
);

class CurrentCardController extends AutoDisposeAsyncNotifier<KanaCard?> {
  @override
  Future<KanaCard?> build() async {
    await ref.watch(seedProvider.future);
    return ref.read(flashcardRepositoryProvider).nextDueCard();
  }

  Future<void> review(bool remembered) async {
    final card = state.value;
    if (card == null) return;
    await ref.read(flashcardRepositoryProvider).markReview(card, remembered);
    state = const AsyncLoading();
    state = AsyncData(await ref.read(flashcardRepositoryProvider).nextDueCard());
  }
}
