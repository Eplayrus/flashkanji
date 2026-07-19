import os
import shutil
import re

def find_css_file():
    # Ищем styles.css в стандартных директориях проекта
    search_paths = [
        "styles.css", 
        "public/styles.css", 
        "src/styles.css", 
        "css/styles.css", 
        "assets/styles.css",
        "public/css/styles.css"
    ]
    
    for path in search_paths:
        if os.path.exists(path):
            return path
    return None

def main():
    css_path = find_css_file()
    
    if not css_path:
        print("❌ Ошибка: файл styles.css не найден в корне или стандартных папках.")
        print("Пожалуйста, запустите скрипт из корня репозитория или положите скрипт рядом с styles.css")
        return

    backup_path = css_path + ".bak"
    
    # 1. Создаем бэкап (если его еще нет)
    if not os.path.exists(backup_path):
        shutil.copy2(css_path, backup_path)
        print(f"✅ Создан бэкап: {backup_path}")
    else:
        print(f"ℹ️ Бэкап уже существует: {backup_path}")

    # 2. Читаем оригинальный файл
    with open(css_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 3. Ищем начало конфликтных патчей или нашей предыдущей версии
    regex_pattern = r'/\*\s*={10,}\s*\n\s*(FINAL UNIFIED )?MOBILE HERO( & EVA)? FIX[\s\S]*'
    match = re.search(regex_pattern, content)

    if match:
        print("🗑️ Найдена старая версия фикса. Заменяем на ультра-крупную Еву (V4)...")
        clean_content = content[:match.start()].rstrip()
    else:
        print("⚠️ Предыдущие маркеры патчей не найдены. Фикс будет добавлен в конец файла.")
        clean_content = content.rstrip()

    # 4. Новый оптимизированный блок CSS для максимального размера Евы
    new_css = """
/* =========================================================
   FINAL UNIFIED MOBILE HERO & EVA FIX (V4 - ULTRA LARGE)
   Обеспечивает позиционирование ОЧЕНЬ крупной Евы без перекрытия кнопок.
   ========================================================= */

/* Жесткая фиксация слоев для всех устройств */
.hero-panel {
  position: relative !important;
  isolation: isolate !important;
}
.hero-panel > .eyebrow,
.hero-panel > .hero-title,
.hero-panel > .hero-subtitle {
  position: relative !important;
  z-index: 10 !important;
}
.hero-decoration,
.hero-panel::before {
  z-index: 1 !important;
}
.hero-mascot {
  z-index: 20 !important;
}
.hero-mascot img {
  z-index: 21 !important;
}
.hero-mascot .speech,
.speech,
.hero-panel > .speech {
  z-index: 30 !important;
}
.hero-mascot .speech::after,
.speech::after,
.hero-panel > .speech::after {
  z-index: 31 !important;
}

/* Адаптив для планшетов и мобильных */
@media (max-width: 768px) {
  .hero-panel {
    min-height: 590px !important; /* Немного увеличили высоту блока для гигантского спрайта */
  }
  .hero-title {
    font-size: clamp(2.5rem, 15vw, 4.2rem) !important;
    line-height: 0.9 !important;
    max-width: 8ch !important;
  }
  .hero-subtitle {
    max-width: 55% !important; /* Слегка сузили текст, освобождая центр под облако диалога */
    font-size: clamp(0.8rem, 3vw, 0.95rem) !important;
    line-height: 1.3 !important;
  }
  
  /* Кнопки в левом нижнем углу */
  .hero-actions {
    position: absolute !important;
    bottom: 22px !important;
    left: 18px !important;
    z-index: 45 !important;
    max-width: calc(100% - 160px) !important; /* Жестко ограничиваем ширину кнопок, чтобы они не заходили под Еву */
    margin-top: 0 !important;
    pointer-events: auto !important;
  }

  /* Контейнер маскота Евы */
  .hero-mascot {
    position: absolute !important;
    right: -25px !important; /* Больше сдвигаем вправо, чтобы огромный спрайт не мешал интерфейсу */
    bottom: -15px !important; /* Чуть припускаем ноги за границу карточки для эффекта объема */
    width: clamp(200px, 48vw, 320px) !important; /* Увеличили минимальную и максимальную ширину! */
    height: 100% !important; /* Максимальный размер по высоте */
    max-height: none !important;
    display: block !important;
    pointer-events: none !important; /* Клики проходят насквозь */
  }

  .hero-mascot img {
    position: absolute !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100% !important;
    height: 100% !important;
    max-height: none !important;
    object-fit: contain !important;
    object-position: right bottom !important;
    pointer-events: auto !important; /* Сама Ева кликабельна */
  }

  /* Облако реплики Евы */
  .hero-mascot .speech,
  .speech {
    position: absolute !important;
    width: clamp(160px, 46vw, 220px) !important; /* Оптимальная ширина */
    right: clamp(125px, 41vw, 200px) !important; /* Смещено левее относительно укрупненного тела Евы */
    bottom: clamp(190px, 44vw, 260px) !important; /* Поднято выше к голове, полностью открывая кнопки */
    padding: 10px 12px !important;
    font-size: clamp(0.75rem, 3vw, 0.88rem) !important;
    line-height: 1.25 !important;
    pointer-events: auto !important;
  }
}

/* Узкие экраны телефонов (iPhone SE и т.д.) */
@media (max-width: 420px) {
  .hero-panel {
    min-height: 550px !important;
  }
  .hero-subtitle {
    max-width: 52% !important;
  }
  .hero-actions {
    bottom: 18px !important;
    left: 14px !important;
    max-width: calc(100% - 150px) !important; /* Защита от наезжания на ноги */
  }
  .hero-mascot {
    width: clamp(160px, 46vw, 190px) !important; /* Максимальное масштабирование на телефонах */
    right: -20px !important;
  }
  .hero-mascot .speech,
  .speech {
    width: clamp(150px, 54vw, 200px) !important;
    right: clamp(115px, 40vw, 150px) !important;
    bottom: clamp(180px, 42vw, 210px) !important; /* Балансируем облако над кнопками */
  }
}
"""

    # 5. Записываем обновленный CSS
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(clean_content + "\n\n" + new_css)
    
    print(f"✅ Файл успешно обновлен: {css_path}")
    print("🚀 Изменения применены. Ева стала значительно больше, а облако и кнопки разведены.")

if __name__ == "__main__":
    main()