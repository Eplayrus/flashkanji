from __future__ import annotations

from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont, ImageOps


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"
OG = ASSETS / "og"
BG = ASSETS / "bg" / "bg_eva_room.png"
EVA = ASSETS / "mascots" / "eva" / "eva_default_pack" / "eva_idle.png"
LOGO = ASSETS / "logo.png"
ICON = ASSETS / "favicon.png"


FONT_TITLE = Path(r"C:\Windows\Fonts\bahnschrift.ttf")
FONT_BODY = Path(r"C:\Windows\Fonts\arial.ttf")
FONT_BOLD = Path(r"C:\Windows\Fonts\arialbd.ttf")


def font(path: Path, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(path), size=size)


def cover_fit(image: Image.Image, size: tuple[int, int], focus: tuple[float, float] = (0.5, 0.42)) -> Image.Image:
    return ImageOps.fit(image, size, method=Image.Resampling.LANCZOS, centering=focus)


def contain(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    return ImageOps.contain(image, size, method=Image.Resampling.LANCZOS)


def rounded_mask(size: tuple[int, int], radius: int) -> Image.Image:
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return mask


def add_shadow(base: Image.Image, box: tuple[int, int, int, int], radius: int, color: tuple[int, int, int, int], blur: int = 26, offset: tuple[int, int] = (0, 0)) -> None:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    ox, oy = offset
    draw.rounded_rectangle((box[0] + ox, box[1] + oy, box[2] + ox, box[3] + oy), radius=radius, fill=color)
    layer = layer.filter(ImageFilter.GaussianBlur(blur))
    base.alpha_composite(layer)


def add_glow(base: Image.Image, center: tuple[int, int], radius: int, color: tuple[int, int, int, int], blur: int = 40) -> None:
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    x, y = center
    draw.ellipse((x - radius, y - radius, x + radius, y + radius), fill=color)
    layer = layer.filter(ImageFilter.GaussianBlur(blur))
    base.alpha_composite(layer)


def draw_text(draw: ImageDraw.ImageDraw, xy: tuple[int, int], text: str, font_obj, fill, shadow: tuple[int, int, int, int] | None = None, spacing: int = 8) -> None:
    if shadow:
        sx, sy, sc = shadow[0], shadow[1], shadow[2:]
        draw.text((xy[0] + sx, xy[1] + sy), text, font=font_obj, fill=sc, spacing=spacing)
    draw.text(xy, text, font=font_obj, fill=fill, spacing=spacing)


def wrap_lines(text: str, font_obj, max_width: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    current = ""
    for word in words:
        candidate = word if not current else f"{current} {word}"
        if font_obj.getlength(candidate) <= max_width:
            current = candidate
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_badge(canvas: Image.Image, x: int, y: int, text: str, fg: tuple[int, int, int], bg: tuple[int, int, int, int], border: tuple[int, int, int, int]) -> tuple[int, int]:
    draw = ImageDraw.Draw(canvas)
    f = font(FONT_BOLD, 28)
    pad_x, pad_y = 22, 12
    text_w = int(f.getlength(text))
    text_h = f.getbbox(text)[3] - f.getbbox(text)[1]
    w = text_w + pad_x * 2
    h = text_h + pad_y * 2
    draw.rounded_rectangle((x, y, x + w, y + h), radius=999, fill=bg, outline=border, width=2)
    draw.text((x + pad_x, y + pad_y - 2), text, font=f, fill=fg)
    return w, h


def create_base(size: tuple[int, int]) -> Image.Image:
    bg = Image.open(BG).convert("RGBA")
    bg = cover_fit(bg, size, focus=(0.56, 0.34))
    bg = bg.filter(ImageFilter.GaussianBlur(1.2))
    canvas = Image.new("RGBA", size, (6, 7, 10, 255))
    canvas.alpha_composite(bg)

    overlay = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    draw.rectangle((0, 0, size[0], size[1]), fill=(8, 7, 12, 125))
    overlay = overlay.filter(ImageFilter.GaussianBlur(0.5))
    canvas.alpha_composite(overlay)

    add_glow(canvas, (int(size[0] * 0.18), int(size[1] * 0.26)), int(min(size) * 0.22), (255, 64, 111, 58), blur=80)
    add_glow(canvas, (int(size[0] * 0.82), int(size[1] * 0.25)), int(min(size) * 0.20), (255, 208, 105, 46), blur=90)
    add_glow(canvas, (int(size[0] * 0.75), int(size[1] * 0.74)), int(min(size) * 0.25), (74, 196, 255, 24), blur=110)

    vignette = Image.new("RGBA", size, (0, 0, 0, 0))
    dv = ImageDraw.Draw(vignette)
    dv.rectangle((0, 0, size[0], size[1]), fill=(0, 0, 0, 0))
    dv.rectangle((0, 0, size[0], size[1]), outline=None)
    vignette = vignette.filter(ImageFilter.GaussianBlur(int(min(size) * 0.08)))
    canvas.alpha_composite(vignette)
    return canvas


def paint_title_block(canvas: Image.Image, title_x: int, title_y: int, width: int, *, compact: bool = False) -> tuple[int, int]:
    draw = ImageDraw.Draw(canvas)
    outer = (title_x, title_y, title_x + width, title_y + (340 if compact else 290))
    add_shadow(canvas, outer, radius=34, color=(0, 0, 0, 160), blur=30, offset=(0, 14))
    draw.rounded_rectangle(outer, radius=34, fill=(14, 13, 20, 170), outline=(243, 202, 90, 126), width=2)
    draw.line((title_x + 32, title_y + 92, title_x + width - 32, title_y + 92), fill=(243, 202, 90, 110), width=1)

    logo = Image.open(LOGO).convert("RGBA")
    logo_w = 380 if compact else 360
    logo = contain(logo, (logo_w, 220))
    logo_x = title_x + 26
    logo_y = title_y + 18
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    shadow.alpha_composite(logo, (logo_x + 2, logo_y + 5))
    shadow = shadow.filter(ImageFilter.GaussianBlur(8))
    canvas.alpha_composite(shadow)
    canvas.alpha_composite(logo, (logo_x, logo_y))

    title_font = font(FONT_TITLE, 44 if compact else 48)
    body_font = font(FONT_BODY, 24 if compact else 26)
    small_font = font(FONT_BOLD, 21)

    subtitle = "Learn Japanese kanji with SRS, JLPT lessons, writing practice, dictionary and Eva Room."
    subtitle_lines = wrap_lines(subtitle, body_font, width - 56)
    y = title_y + (164 if compact else 172)
    for line in subtitle_lines[:2]:
        draw_text(draw, (title_x + 30, y), line, body_font, (240, 232, 214, 228), shadow=(2, 2, 0, 0, 0, 110))
        y += 34

    caption = "Offline PWA  •  Moon Fragments  •  N5 to N1"
    draw_text(draw, (title_x + 30, title_y + (228 if compact else 216)), caption, small_font, (249, 214, 117, 245), shadow=(1, 1, 0, 0, 0, 110))

    chip_y = title_y + (268 if compact else 260)
    chip_x = title_x + 30
    chip_specs = [
        ("SRS", (247, 205, 86, 130)),
        ("JLPT", (233, 61, 104, 120)),
        ("WRITING", (88, 184, 255, 110)),
        ("EVA ROOM", (86, 184, 116, 110)),
    ]
    for text, bg in chip_specs:
        w, _ = draw_badge(canvas, chip_x, chip_y, text, (255, 250, 240), bg, (255, 226, 140, 120))
        chip_x += w + 12
        if chip_x > title_x + width - 110:
            break

    return outer[2], outer[3]


def paint_eva(canvas: Image.Image, area: tuple[int, int, int, int], *, scale: float = 1.0, x_shift: int = 0, y_shift: int = 0) -> None:
    eva = Image.open(EVA).convert("RGBA")
    max_w = int((area[2] - area[0]) * 0.92 * scale)
    max_h = int((area[3] - area[1]) * 0.98 * scale)
    eva = contain(eva, (max_w, max_h))
    x = area[2] - eva.width - 14 + x_shift
    y = area[3] - eva.height + y_shift
    add_glow(canvas, (x + eva.width // 2, y + int(eva.height * 0.62)), int(max(eva.width, eva.height) * 0.28), (247, 205, 86, 52), blur=60)
    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    shadow.alpha_composite(eva, (x + 6, y + 10))
    shadow = shadow.filter(ImageFilter.GaussianBlur(12))
    canvas.alpha_composite(shadow)
    canvas.alpha_composite(eva, (x, y))


def add_ui_mockup(canvas: Image.Image, box: tuple[int, int, int, int], mode: str) -> None:
    draw = ImageDraw.Draw(canvas)
    add_shadow(canvas, box, radius=28, color=(0, 0, 0, 150), blur=26, offset=(0, 10))
    draw.rounded_rectangle(box, radius=28, fill=(10, 12, 16, 158), outline=(244, 205, 97, 84), width=2)
    top = (box[0] + 16, box[1] + 14, box[2] - 16, box[1] + 48)
    draw.rounded_rectangle(top, radius=18, fill=(18, 18, 24, 220), outline=(255, 255, 255, 32), width=1)
    draw.ellipse((box[0] + 22, box[1] + 23, box[0] + 34, box[1] + 35), fill=(244, 205, 97, 220))
    draw.ellipse((box[0] + 42, box[1] + 23, box[0] + 54, box[1] + 35), fill=(244, 205, 97, 120))
    draw.ellipse((box[0] + 62, box[1] + 23, box[0] + 74, box[1] + 35), fill=(244, 205, 97, 80))
    f = font(FONT_BOLD, 18)
    draw.text((box[0] + 92, box[1] + 20), "flashkanji.github.io", font=f, fill=(236, 228, 211, 170))
    if mode == "landscape":
        inner = (box[0] + 22, box[1] + 66, box[0] + 260, box[1] + 300)
        draw.rounded_rectangle(inner, radius=24, fill=(20, 20, 28, 198), outline=(244, 205, 97, 88), width=2)
        draw.text((inner[0] + 20, inner[1] + 16), "Flash Kanji", font=font(FONT_TITLE, 28), fill=(255, 250, 240, 245))
        draw.text((inner[0] + 20, inner[1] + 54), "SRS • JLPT • Writing", font=font(FONT_BOLD, 19), fill=(244, 205, 97, 235))
        draw.rounded_rectangle((inner[0] + 18, inner[1] + 98, inner[2] - 18, inner[1] + 146), radius=16, fill=(24, 24, 34, 190), outline=(255, 255, 255, 20), width=1)
        draw.text((inner[0] + 28, inner[1] + 111), "Daily streak ready.", font=font(FONT_BOLD, 23), fill=(255, 246, 228, 240))
        draw.text((inner[0] + 28, inner[1] + 188), "Moon Fragments", font=font(FONT_BOLD, 19), fill=(244, 205, 97, 245))
        draw_badge(canvas, inner[0] + 20, inner[1] + 214, "Offline", (255, 247, 236), (67, 84, 102, 180), (255, 255, 255, 50))
        draw_badge(canvas, inner[0] + 118, inner[1] + 214, "PWA", (255, 247, 236), (233, 61, 104, 156), (255, 255, 255, 52))
        draw_badge(canvas, inner[0] + 182, inner[1] + 214, "Eva", (255, 247, 236), (86, 184, 116, 156), (255, 255, 255, 52))
    else:
        inner = (box[0] + 24, box[1] + 72, box[2] - 24, box[1] + 360)
        draw.rounded_rectangle(inner, radius=24, fill=(16, 16, 24, 190), outline=(244, 205, 97, 88), width=2)
        draw.text((inner[0] + 24, inner[1] + 18), "Flash Kanji", font=font(FONT_TITLE, 31), fill=(255, 250, 240, 245))
        draw.text((inner[0] + 24, inner[1] + 60), "Learn Japanese kanji with SRS and Eva.", font=font(FONT_BODY, 20), fill=(236, 228, 211, 230))
        draw.rounded_rectangle((inner[0] + 24, inner[1] + 112, inner[2] - 24, inner[1] + 154), radius=18, fill=(24, 24, 34, 200), outline=(255, 255, 255, 20), width=1)
        draw.text((inner[0] + 40, inner[1] + 122), "JLPT lessons • writing • dictionary", font=font(FONT_BOLD, 18), fill=(244, 205, 97, 240))
        draw.rounded_rectangle((inner[0] + 24, inner[1] + 178, inner[2] - 24, inner[1] + 300), radius=22, fill=(12, 12, 18, 170), outline=(255, 255, 255, 16), width=1)
        draw.text((inner[0] + 36, inner[1] + 188), "Review queue", font=font(FONT_BOLD, 18), fill=(244, 205, 97, 240))
        draw.text((inner[0] + 36, inner[1] + 220), "A little progress every day.", font=font(FONT_BOLD, 24), fill=(255, 247, 236, 240))
        draw.text((inner[0] + 36, inner[1] + 255), "No backend. Offline first. Built for streaks.", font=font(FONT_BODY, 19), fill=(236, 228, 211, 215))


def build_landscape() -> Image.Image:
    canvas = create_base((1200, 630))
    add_shadow(canvas, (36, 26, 514, 306), radius=34, color=(0, 0, 0, 155), blur=34, offset=(0, 10))
    paint_title_block(canvas, 36, 26, 480, compact=False)
    add_ui_mockup(canvas, (40, 350, 470, 600), "landscape")
    paint_eva(canvas, (610, 40, 1180, 610), scale=0.98, x_shift=0, y_shift=0)
    draw = ImageDraw.Draw(canvas)
    footer_font = font(FONT_BOLD, 17)
    draw.text((884, 565), "FLASH KANJI • 2026", font=footer_font, fill=(255, 241, 213, 160))
    return canvas


def build_square() -> Image.Image:
    canvas = create_base((1200, 1200))
    add_shadow(canvas, (58, 52, 1142, 410), radius=38, color=(0, 0, 0, 155), blur=34, offset=(0, 12))
    paint_title_block(canvas, 58, 52, 1084, compact=True)
    add_ui_mockup(canvas, (74, 360, 734, 770), "square")
    paint_eva(canvas, (700, 300, 1160, 1140), scale=1.02, x_shift=0, y_shift=20)
    draw = ImageDraw.Draw(canvas)
    draw_badge(canvas, 76, 820, "SRS", (255, 250, 240), (247, 205, 86, 130), (255, 226, 140, 130))
    draw_badge(canvas, 170, 820, "JLPT N5-N1", (255, 250, 240), (233, 61, 104, 125), (255, 226, 140, 110))
    draw_badge(canvas, 378, 820, "Writing", (255, 250, 240), (88, 184, 255, 110), (255, 226, 140, 110))
    draw_badge(canvas, 544, 820, "Eva Room", (255, 250, 240), (86, 184, 116, 110), (255, 226, 140, 110))
    draw.text((76, 900), "The kanji app with streaks, Moon Fragments and a real companion.", font=font(FONT_BODY, 28), fill=(243, 236, 224, 230))
    draw.text((76, 950), "Offline PWA • Search-friendly preview • Share-ready metadata", font=font(FONT_BOLD, 24), fill=(244, 205, 97, 240))
    draw.rounded_rectangle((74, 1008, 1120, 1122), radius=28, fill=(12, 12, 18, 168), outline=(255, 255, 255, 18), width=1)
    draw.text((104, 1048), "Flash Kanji is ready to open from a shared link.", font=font(FONT_BOLD, 30), fill=(255, 248, 234, 242))
    draw.text((104, 1086), "SRS, JLPT lessons, writing practice, dictionary and Eva Room.", font=font(FONT_BODY, 22), fill=(236, 228, 211, 220))
    return canvas


def build_preview() -> Image.Image:
    canvas = create_base((1280, 800))
    frame = (58, 54, 1222, 746)
    add_shadow(canvas, frame, radius=34, color=(0, 0, 0, 175), blur=30, offset=(0, 12))
    draw = ImageDraw.Draw(canvas)
    draw.rounded_rectangle(frame, radius=34, fill=(10, 11, 16, 176), outline=(244, 205, 97, 90), width=2)
    top = (frame[0], frame[1], frame[2], frame[1] + 58)
    draw.rounded_rectangle(top, radius=34, fill=(19, 20, 27, 240), outline=(255, 255, 255, 15), width=1)
    draw.ellipse((84, 74, 98, 88), fill=(244, 205, 97, 225))
    draw.ellipse((106, 74, 120, 88), fill=(244, 205, 97, 140))
    draw.ellipse((128, 74, 142, 88), fill=(244, 205, 97, 90))
    draw.text((166, 71), "Flash Kanji / preview", font=font(FONT_BOLD, 22), fill=(238, 231, 216, 195))
    draw.text((frame[2] - 152, 71), "PWA", font=font(FONT_BOLD, 22), fill=(244, 205, 97, 232))

    inner = (94, 118, 1186, 712)
    draw.rounded_rectangle(inner, radius=28, fill=(12, 12, 18, 156), outline=(255, 255, 255, 18), width=1)
    add_ui_mockup(canvas, (116, 146, 566, 646), "landscape")
    paint_eva(canvas, (680, 120, 1164, 716), scale=0.88, x_shift=0, y_shift=0)

    draw.text((118, 648), "What people see when they open your shared link.", font=font(FONT_BODY, 22), fill=(240, 232, 214, 220))
    draw.text((118, 682), "Brand logo, mascot and app atmosphere all in one card.", font=font(FONT_BOLD, 22), fill=(244, 205, 97, 240))
    return canvas


def main() -> None:
    OG.mkdir(parents=True, exist_ok=True)
    builds = [
        (build_landscape(), OG / "flashkanji-og.png"),
        (build_square(), OG / "flashkanji-og-square.png"),
        (build_preview(), OG / "flashkanji-preview.png"),
    ]
    for image, path in builds:
        image.save(path, format="PNG", optimize=True)
        print(f"wrote {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
