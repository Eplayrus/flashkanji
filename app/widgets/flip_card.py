from __future__ import annotations

from kivy.animation import Animation
from kivy.clock import Clock
from kivy.properties import BooleanProperty, NumericProperty
from kivy.uix.relativelayout import RelativeLayout


class FlipCard(RelativeLayout):
    is_front = BooleanProperty(True)
    scale_x = NumericProperty(1.0)
    _animating = BooleanProperty(False)

    def flip(self) -> None:
        if self._animating:
            return
        self._animating = True
        first_half = Animation(scale_x=0.0, duration=0.15)
        second_half = Animation(scale_x=1.0, duration=0.15)
        first_half.bind(on_complete=self._swap)
        second_half.bind(on_complete=self._finish)
        (first_half + second_half).start(self)

    def _swap(self, *_args) -> None:
        self.is_front = not self.is_front

    def _finish(self, *_args) -> None:
        Clock.schedule_once(lambda _dt: setattr(self, "_animating", False), 0)
