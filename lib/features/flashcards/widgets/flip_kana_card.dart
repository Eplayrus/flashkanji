import 'dart:math';

import 'package:flutter/material.dart';

import '../../../data/app_database.dart';

class FlipKanaCard extends StatefulWidget {
  const FlipKanaCard({super.key, required this.card});

  final KanaCard card;

  @override
  State<FlipKanaCard> createState() => _FlipKanaCardState();
}

class _FlipKanaCardState extends State<FlipKanaCard> with SingleTickerProviderStateMixin {
  late final AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(vsync: this, duration: const Duration(milliseconds: 380));
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _toggle() {
    if (_controller.value >= 0.5) {
      _controller.reverse();
    } else {
      _controller.forward();
    }
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: _toggle,
      child: AnimatedBuilder(
        animation: _controller,
        builder: (context, child) {
          final angle = _controller.value * pi;
          final isBack = angle > pi / 2;
          return Transform(
            alignment: Alignment.center,
            transform: Matrix4.identity()..setEntry(3, 2, 0.001)..rotateY(angle),
            child: Card(
              child: SizedBox(
                width: double.infinity,
                height: 280,
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: isBack
                      ? Transform(
                          alignment: Alignment.center,
                          transform: Matrix4.identity()..rotateY(pi),
                          child: Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(widget.card.romaji, style: Theme.of(context).textTheme.headlineMedium),
                              const SizedBox(height: 12),
                              Text(widget.card.ruHint, style: Theme.of(context).textTheme.titleMedium),
                              const SizedBox(height: 8),
                              Text(widget.card.example, style: Theme.of(context).textTheme.bodyLarge),
                            ],
                          ),
                        )
                      : Center(
                          child: Text(
                            widget.card.kana,
                            style: Theme.of(context).textTheme.displayLarge?.copyWith(fontSize: 96),
                          ),
                        ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
