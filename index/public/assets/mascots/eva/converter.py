from PIL import Image
from pathlib import Path
import json
import zipfile

INPUT_DIR = Path("input")
OUTPUT_DIR = Path("output")
ZIP_NAME = "eva_transparent_pack.zip"
JSON_NAME = "sprites.json"

# Цвет фона, который удаляем.
# Лучше генерировать спрайты на ярко-зелёном фоне #00ff00.
KEY_COLOR = (0, 255, 0)

# Допуск. Чем больше — тем агрессивнее удаляет похожие оттенки.
TOLERANCE = 80

# Единый размер итоговых спрайтов
CANVAS_SIZE = (1024, 1024)

OUTPUT_DIR.mkdir(exist_ok=True)


def color_distance(c1, c2):
    return sum((a - b) ** 2 for a, b in zip(c1, c2)) ** 0.5


def remove_background(img: Image.Image) -> Image.Image:
    img = img.convert("RGBA")
    pixels = img.load()

    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]

            if color_distance((r, g, b), KEY_COLOR) < TOLERANCE:
                pixels[x, y] = (r, g, b, 0)

    return img


def crop_transparent(img: Image.Image) -> Image.Image:
    bbox = img.getbbox()
    if bbox:
        return img.crop(bbox)
    return img


def fit_to_canvas(img: Image.Image) -> Image.Image:
    canvas_w, canvas_h = CANVAS_SIZE

    img.thumbnail((canvas_w, canvas_h), Image.LANCZOS)

    canvas = Image.new("RGBA", CANVAS_SIZE, (0, 0, 0, 0))

    x = (canvas_w - img.width) // 2
    y = canvas_h - img.height  # персонаж стоит снизу

    canvas.paste(img, (x, y), img)
    return canvas


def process_sprite(path: Path):
    img = Image.open(path)

    img = remove_background(img)
    img = crop_transparent(img)
    img = fit_to_canvas(img)

    output_path = OUTPUT_DIR / path.name
    img.save(output_path)

    return {
        "name": path.stem,
        "file": f"assets/eva/{path.name}",
        "width": CANVAS_SIZE[0],
        "height": CANVAS_SIZE[1],
    }


def main():
    sprites = []

    files = list(INPUT_DIR.glob("*.png"))

    if not files:
        print("В папке input нет PNG-файлов.")
        return

    for file in files:
        print(f"Обработка: {file.name}")
        sprite_data = process_sprite(file)
        sprites.append(sprite_data)

    json_path = OUTPUT_DIR / JSON_NAME

    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(
            {
                "character": "Eva",
                "sprites": sprites,
            },
            f,
            ensure_ascii=False,
            indent=2,
        )

    zip_path = Path(ZIP_NAME)

    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
        for file in OUTPUT_DIR.glob("*"):
            zipf.write(file, arcname=file.name)

    print("Готово.")
    print(f"PNG сохранены в: {OUTPUT_DIR}")
    print(f"JSON создан: {json_path}")
    print(f"ZIP создан: {zip_path}")


if __name__ == "__main__":
    main()