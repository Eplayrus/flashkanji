from __future__ import annotations

from kivy.properties import StringProperty
from kivy.uix.label import Label
from kivymd.uix.button import MDRaisedButton


class MDButton(MDRaisedButton):
    """Compatibility shim for KivyMD 2.x-style `MDButton` used in old KV files."""

    style = StringProperty("filled")

    def add_widget(self, widget, *args, **kwargs):
        if isinstance(widget, MDButtonText):
            self.text = widget.text
            return
        return super().add_widget(widget, *args, **kwargs)


class MDButtonText(Label):
    """Compatibility shim for KivyMD 2.x-style `MDButtonText`."""

    def on_text(self, *_args):
        if self.parent and hasattr(self.parent, "text"):
            self.parent.text = self.text
