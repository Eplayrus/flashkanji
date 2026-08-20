# Flash Kanji kana courses — content adaptations

Source materials:

- `flash-kanji-hiragana-textbook-ru (1).pdf`
- `flash-kanji-katakana-textbook-ru (1).pdf`

The PDF content, lesson order, answers, reading practice, final tests, keys and source sections were preserved in the kana JSON courses. The adaptations below describe only how printed tasks were represented in the interactive Flash Kanji shell.

## General UX adaptations

| Area | PDF intent | Interactive adaptation |
| --- | --- | --- |
| Handwriting practice | The learner traces or writes kana on paper. | The app shows the same target signs and marks the block as user-confirmed practice. This is not auto-graded and does not pretend to verify stroke order. |
| Printed fill-in answers | The learner writes directly into a workbook. | The app uses form inputs with `accepted_answers` from course JSON, immediate feedback, and saved per-exercise attempts. |
| Reading practice | The learner reads syllables/words from the page. | The app keeps five reading-practice blocks per course and adds optional Japanese TTS via the existing Flash Kanji TTS service. |
| Review items | The learner repeats the signs from the lesson manually. | The app maps lesson review signs into the existing SRS-compatible `remember`/`forgot` flow inside each kana course. |
| Final tests | The learner completes a printable control section. | The app stores final-test attempts separately from lesson progress and uses an 80% pass threshold for the automatically checked sections. |
| PDF download | The learner may use the original textbook. | The original PDFs are copied unchanged to `index/public/docs/` and linked from the course screens and static SEO pages. |

## Course-specific notes

| Course | Adaptation notes |
| --- | --- |
| Hiragana | 10 lessons, five reading-practice sections, final test, tracker, keys, sources and 362 checked exercise items are represented. |
| Katakana | 11 lessons, five reading-practice sections, final test, tracker, keys, sources and 400 checked exercise items are represented. |

No `CONTENT_REVIEW.md` was added because no fragment was left unresolved or guessed during the import.
