import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'features/exercises/screens/exercises_screen.dart';
import 'features/flashcards/screens/flashcards_screen.dart';
import 'l10n/app_localizations.dart';
import 'theme/app_theme.dart';

final localeProvider = StateNotifierProvider<LocaleController, Locale>((_) => LocaleController());

class LocaleController extends StateNotifier<Locale> {
  LocaleController() : super(const Locale('ru')) {
    _load();
  }

  Future<void> _load() async {
    final prefs = await SharedPreferences.getInstance();
    final code = prefs.getString('locale_code') ?? 'ru';
    state = Locale(code);
  }

  Future<void> switchLocale(String code) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('locale_code', code);
    state = Locale(code);
  }
}

class FlashKanaApp extends ConsumerWidget {
  const FlashKanaApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final locale = ref.watch(localeProvider);
    return MaterialApp(
      title: 'FlashKana',
      locale: locale,
      supportedLocales: AppLocalizations.supportedLocales,
      localizationsDelegates: const [
        AppLocalizations.delegate,
        GlobalMaterialLocalizations.delegate,
        GlobalWidgetsLocalizations.delegate,
        GlobalCupertinoLocalizations.delegate,
      ],
      theme: AppTheme.light(),
      home: const HomeTabs(),
    );
  }
}

class HomeTabs extends StatefulWidget {
  const HomeTabs({super.key});

  @override
  State<HomeTabs> createState() => _HomeTabsState();
}

class _HomeTabsState extends State<HomeTabs> {
  int index = 0;

  @override
  Widget build(BuildContext context) {
    final l10n = AppLocalizations.of(context)!;
    return Scaffold(
      appBar: AppBar(
        title: const Text('FlashKana'),
      ),
      body: IndexedStack(
        index: index,
        children: const [
          FlashcardsScreen(),
          ExercisesScreen(),
        ],
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: index,
        destinations: [
          NavigationDestination(icon: const Icon(Icons.style), label: l10n.flashcards),
          NavigationDestination(icon: const Icon(Icons.extension), label: l10n.exercises),
        ],
        onDestinationSelected: (value) => setState(() => index = value),
      ),
    );
  }
}
