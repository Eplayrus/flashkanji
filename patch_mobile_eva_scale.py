"""Patch script to adjust Eva mascot scale and positioning on mobile screens.

This script creates a backup of the existing `index/styles.css` file and then
appends responsive CSS rules to improve the appearance of the Eva sprite and
its speech bubble on narrow viewports. On desktop widths the original styles
remain unchanged. When run, the script will:

1. Locate the `index/styles.css` file relative to the script's location.
2. Create a backup copy of that file.  If a `styles.css.bak` file already
   exists, the backup will be written to `styles.css.bak2` instead to avoid
   clobbering an existing backup.
3. Check whether the mobile patch has already been applied by searching for
   a specific marker comment.  If the patch is found, no changes are made.
4. Append new `@media (max-width: 768px)` and `@media (max-width: 420px)`
   rules that adjust the `.hero-mascot`, `.hero-mascot img` and
   `.hero-mascot .speech` styles.  These rules use CSS `clamp()` functions
   to provide fluid sizing and positioning.  The right and bottom offsets
   are reduced on small screens so that Eva stays within the hero panel
   without overlapping the title or action buttons.
5. Print a unified diff of the changes so that you can verify what was
   modified.

Run this script from the repository root with:

    python patch_mobile_eva_scale.py

You can view the changes afterwards using `git diff` or revert by copying
back the backup file or using `git checkout -- index/styles.css`.
"""

import difflib
import os
import shutil
from pathlib import Path

CSS_PATH = Path('index') / 'styles.css'
BACKUP_NAMES = ['styles.css.bak', 'styles.css.bak2', 'styles.css.backup']
PATCH_MARKER = '/* eva mobile patch */'


def choose_backup(target: Path) -> Path:
    """Return a backup path that does not already exist.

    The function iterates over a list of candidate backup names and returns
    the first one that does not exist.  If all names exist, it appends a
    numeric suffix to create a unique filename.
    """
    dir_path = target.parent
    for name in BACKUP_NAMES:
        candidate = dir_path / name
        if not candidate.exists():
            return candidate
    # Fallback: add numeric suffix
    i = 3
    while True:
        candidate = dir_path / f"styles.css.bak{i}"
        if not candidate.exists():
            return candidate
        i += 1


def apply_patch() -> None:
    """Apply the mobile styling patch to index/styles.css."""
    if not CSS_PATH.exists():
        raise FileNotFoundError(f"CSS file not found at {CSS_PATH}. Run this script from the project root.")

    with CSS_PATH.open('r', encoding='utf-8') as f:
        original_content = f.read()

    # Check if patch is already applied
    if PATCH_MARKER in original_content:
        print("Mobile Eva patch already present – no changes made.")
        return

    backup_path = choose_backup(CSS_PATH)
    shutil.copy2(CSS_PATH, backup_path)
    print(f"Backup created at: {backup_path}")

    # Construct the mobile override CSS
    mobile_css = f"""

/* {PATCH_MARKER}
 * Responsive adjustments for the Eva mascot and speech bubble on mobile.
 *
 * These overrides ensure that the mascot remains inside the hero panel
 * without overlapping the page title or action buttons.  CSS `clamp()`
 * functions provide fluid sizing based on the viewport width.  The
 * existing desktop styles remain in effect outside of these media queries.
 */
@media (max-width: 768px) {{
  .hero-mascot {{
    position: absolute;
    /* Place Eva inside the hero panel on the right side */
    right: clamp(8px, 3vw, 24px);
    bottom: clamp(18px, 4vw, 42px);
    /* Fluid width: roughly one third of the hero panel but never too small */
    width: clamp(118px, 29vw, 180px);
    /* Let height scale with the width; limit maximum height to stay within panel */
    height: auto;
    max-height: 72%;
    z-index: 4;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }}

  .hero-mascot img {{
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
  }}

  /* Tweak speech bubble positioning and width for smaller screens */
  .hero-mascot .speech,
  .speech {{
    width: clamp(180px, 48vw, 270px);
    right: clamp(110px, 28vw, 190px);
    bottom: clamp(120px, 25vw, 180px);
    z-index: 5;
  }}
}}

@media (max-width: 420px) {{
  .hero-mascot {{
    /* Narrower phones: reduce width and adjust offsets further */
    width: clamp(112px, 34vw, 150px);
    right: clamp(6px, 2vw, 16px);
    bottom: clamp(20px, 5vw, 38px);
  }}

  .hero-mascot .speech,
  .speech {{
    width: clamp(170px, 56vw, 240px);
    right: clamp(95px, 30vw, 150px);
    bottom: clamp(125px, 32vw, 165px);
  }}
}}
"""
    # Append patch to CSS
    patched_content = original_content + mobile_css

    with CSS_PATH.open('w', encoding='utf-8') as f:
        f.write(patched_content)

    diff = difflib.unified_diff(
        original_content.splitlines(keepends=True),
        patched_content.splitlines(keepends=True),
        fromfile=str(CSS_PATH),
        tofile=f"{CSS_PATH} (patched)"
    )
    diff_text = ''.join(diff)
    print("Patch applied successfully. Diff:\n")
    print(diff_text)


if __name__ == '__main__':
    apply_patch()