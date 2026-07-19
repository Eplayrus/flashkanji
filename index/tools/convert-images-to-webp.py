from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
SKIP_DIR_NAMES = {
    ".git",
    "node_modules",
    "dist",
    ".tsbuild",
    ".tsbuild-reading",
}
SKIP_RELATIVE_PREFIXES = {
    "assets/index",
}
SKIP_FILENAMES = {
    "favicon.png",
    "icon-192.png",
    "icon-512.png",
}
TEXT_SUFFIXES = {
    ".css",
    ".html",
    ".htm",
    ".js",
    ".mjs",
    ".ts",
    ".json",
    ".md",
    ".txt",
    ".webmanifest",
    ".xml",
}


def is_skipped_path(path: Path) -> bool:
    rel = path.relative_to(ROOT).as_posix()
    parts = path.relative_to(ROOT).parts
    if any(part in SKIP_DIR_NAMES for part in parts[:-1]):
        return True
    if any(rel == prefix or rel.startswith(f"{prefix}/") for prefix in SKIP_RELATIVE_PREFIXES):
        return True
    if path.name in SKIP_FILENAMES:
        return True
    return False


def has_alpha(image: Image.Image) -> bool:
    if image.mode in {"RGBA", "LA"}:
        return True
    if "transparency" in image.info:
        return True
    return False


def convert_png(path: Path) -> tuple[Path, bool]:
    with Image.open(path) as image:
        alpha = has_alpha(image)
        output = path.with_suffix(".webp")
        if alpha:
            converted = image.convert("RGBA")
            converted.save(output, "WEBP", lossless=True, method=6, exact=True)
        else:
            converted = image.convert("RGB")
            converted.save(output, "WEBP", quality=88, method=6)
    path.unlink()
    return output, alpha


def iter_text_files():
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        if is_skipped_path(path):
            continue
        if path.suffix.lower() not in TEXT_SUFFIXES:
            continue
        yield path


def replace_image_paths(text: str, mapping: dict[str, str]) -> str:
    updated = text
    for old_rel in sorted(mapping, key=len, reverse=True):
        new_rel = mapping[old_rel]
        updated = updated.replace(f"./{old_rel}", f"./{new_rel}")
        updated = updated.replace(old_rel, new_rel)
    return updated


def main() -> int:
    png_files = [
        path for path in ROOT.rglob("*")
        if path.is_file()
        and path.suffix.lower() == ".png"
        and not is_skipped_path(path)
    ]

    mapping: dict[str, str] = {}
    converted: list[tuple[str, bool]] = []
    skipped_existing: list[str] = []
    failed: list[tuple[str, str]] = []

    for path in sorted(png_files):
        webp_path = path.with_suffix(".webp")
        if webp_path.exists():
            skipped_existing.append(path.relative_to(ROOT).as_posix())
            continue
        try:
            out_path, alpha = convert_png(path)
            mapping[path.relative_to(ROOT).as_posix()] = out_path.relative_to(ROOT).as_posix()
            converted.append((path.relative_to(ROOT).as_posix(), alpha))
        except Exception as exc:  # pragma: no cover - script-level guard
            failed.append((path.relative_to(ROOT).as_posix(), str(exc)))

    updated_files: list[str] = []
    for path in iter_text_files():
        try:
            original = path.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        updated = replace_image_paths(original, mapping)
        if updated != original:
            path.write_text(updated, encoding="utf-8")
            updated_files.append(path.relative_to(ROOT).as_posix())

    print(f"Converted: {len(converted)}")
    for rel, alpha in converted:
        print(f"  - {rel} {'[alpha]' if alpha else ''}")

    if skipped_existing:
        print(f"Skipped existing webp: {len(skipped_existing)}")
        for rel in skipped_existing[:25]:
            print(f"  - {rel}")
        if len(skipped_existing) > 25:
            print(f"  ... and {len(skipped_existing) - 25} more")

    if updated_files:
        print(f"Updated text files: {len(updated_files)}")
        for rel in updated_files:
            print(f"  - {rel}")

    if failed:
        print(f"Failed: {len(failed)}", file=sys.stderr)
        for rel, error in failed:
            print(f"  - {rel}: {error}", file=sys.stderr)
        return 1

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
