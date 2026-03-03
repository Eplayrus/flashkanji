import 'package:flutter/material.dart';

class ExerciseTextSlots extends StatelessWidget {
  const ExerciseTextSlots({
    super.key,
    required this.template,
    required this.slotCount,
    required this.selected,
    required this.checked,
    required this.answers,
    required this.onAccept,
  });

  final String template;
  final int slotCount;
  final Map<int, String> selected;
  final bool checked;
  final List<String> answers;
  final void Function(int index, String value) onAccept;

  @override
  Widget build(BuildContext context) {
    final text = template.replaceAllMapped(RegExp(r'\{(\d+)\}'), (m) {
      final index = int.parse(m.group(1)!);
      return '§$index§';
    });

    final pieces = text.split(RegExp(r'(§\d+§)'));

    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: pieces.where((e) => e.isNotEmpty).map((piece) {
        final match = RegExp(r'^§(\d+)§$').firstMatch(piece);
        if (match == null) {
          return Text(piece, style: Theme.of(context).textTheme.headlineSmall);
        }

        final index = int.parse(match.group(1)!);
        final value = selected[index];
        Color border = Theme.of(context).colorScheme.primary;
        if (checked) {
          border = value == answers[index] ? Colors.green : Colors.red;
        }

        return DragTarget<String>(
          onAcceptWithDetails: (details) => onAccept(index, details.data),
          builder: (_, __, ___) => Container(
            width: 68,
            height: 52,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: border, width: 2),
            ),
            child: Text(value ?? '＿', style: Theme.of(context).textTheme.headlineSmall),
          ),
        );
      }).toList(),
    );
  }
}
