import sublime
import sublime_plugin


class ChangeLayoutCommand(sublime_plugin.WindowCommand):
    def run(self):
        # Change the layout here, e.g., split the view vertically
        help(sublime)
        self.window.run_command("set_layout", {"cols": [0.0, 0.5, 1.0], "rows": [0.0, 1.0], "cells": [[0, 0, 1, 1], [1, 0, 2, 1]]})
