import 'package:flutter/widgets.dart';

class AppLocalizations {
  AppLocalizations(this.locale);

  final Locale locale;

  static AppLocalizations? of(BuildContext context) {
    return Localizations.of<AppLocalizations>(context, AppLocalizations);
  }

  static const LocalizationsDelegate<AppLocalizations> delegate = _AppLocalizationsDelegate();
  static const supportedLocales = [Locale('ru'), Locale('en')];

  static const _values = {
    'ru': {
      'flashcards': 'Карточки',
      'exercises': 'Упражнения',
      'forgot': 'Не помню',
      'remember': 'Помню',
      'check': 'Проверить',
      'nextExercise': 'Следующее',
      'allCorrect': 'Отлично! Всё верно.',
      'wrongAnswerHint': 'неверно, повторите катакану',
      'noCardsDue': 'Сегодня новых карточек нет',
      'noExercises': 'Нет упражнений',
      'topic': 'Тема',
    },
    'en': {
      'flashcards': 'Flashcards',
      'exercises': 'Exercises',
      'forgot': 'I forgot',
      'remember': 'Remember',
      'check': 'Check',
      'nextExercise': 'Next',
      'allCorrect': 'Great! All correct.',
      'wrongAnswerHint': 'wrong, review this kana',
      'noCardsDue': 'No cards due today',
      'noExercises': 'No exercises yet',
      'topic': 'Topic',
    },
  };

  String get _code => _values.containsKey(locale.languageCode) ? locale.languageCode : 'ru';

  String _t(String key) => _values[_code]![key]!;

  String get flashcards => _t('flashcards');
  String get exercises => _t('exercises');
  String get forgot => _t('forgot');
  String get remember => _t('remember');
  String get check => _t('check');
  String get nextExercise => _t('nextExercise');
  String get allCorrect => _t('allCorrect');
  String get wrongAnswerHint => _t('wrongAnswerHint');
  String get noCardsDue => _t('noCardsDue');
  String get noExercises => _t('noExercises');
  String get topic => _t('topic');
}

class _AppLocalizationsDelegate extends LocalizationsDelegate<AppLocalizations> {
  const _AppLocalizationsDelegate();

  @override
  bool isSupported(Locale locale) => ['ru', 'en'].contains(locale.languageCode);

  @override
  Future<AppLocalizations> load(Locale locale) async => AppLocalizations(locale);

  @override
  bool shouldReload(covariant LocalizationsDelegate<AppLocalizations> old) => false;
}
