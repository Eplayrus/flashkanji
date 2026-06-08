import os
import shutil
import re

def find_css_file():
    # Возможные пути до styles.css в стандартных проектах
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
    
    # 1. Создаем бэкап (если его нет)
    if not os.path.exists(backup_path):
        shutil.copy2(css_path, backup_path)
        print(f"✅ Создан бэкап: {backup_path}")
    else:
        print(f"ℹ️ Бэкап уже существует: {backup_path}")

    # 2. Читаем оригинальный файл
    with open(css_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 3. Ищем начало конфликтных патчей (или нашего предыдущего патча)
    # Ищем строку /* =========================================================
    #               MOBILE HERO FIX (любые вариации и V2/V3)
    regex_pattern = r'/\*\s*={10,}\s*\n\s*(FINAL UNIFIED )?MOBILE HERO( & EVA)? FIX[\s\S]*'
    match = re.search(regex_pattern, content)

    if match:
        print("🗑️ Найдена старая версия фикса адаптива. Заменяем на обновленную (V3)...")
        clean_content = content[:match.start()].rstrip()
    else:
        print("⚠️ Старые маркеры патчей не найдены. Фикс будет добавлен в самый конец файла.")
        clean_content = content.rstrip()

    # 4. Новый чистый блок CSS
    new_css = """
/* =========================================================
   FINAL UNIFIED MOBILE HERO & EVA FIX (V3)
   Обеспечивает правильное позиционирование крупной Евы, облака и кнопок.
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
    min-height: 580px !important; /* Даем больше высоты, чтобы уместить крупную Еву и элементы */
  }
  .hero-title {
    font-size: clamp(2.5rem, 15vw, 4.2rem) !important;
    line-height: 0.9 !important;
    max-width: 8ch !important;
  }
  .hero-subtitle {
    max-width: 58% !important; 
    font-size: clamp(0.8rem, 3vw, 0.95rem) !important;
    line-height: 1.3 !important;
  }
  
  /* Фиксируем кнопки строго в левом нижнем углу */
  .hero-actions {
    position: absolute !important;
    bottom: 20px !important;
    left: 18px !important;
    z-index: 45 !important; /* Всегда поверх облака и фона, чтобы быть кликабельными */
    max-width: calc(100% - 150px) !important; /* Оставляем место Еве справа */
    margin-top: 0 !important;
    pointer-events: auto !important;
  }

  /* Контейнер маскота */
  .hero-mascot {
    position: absolute !important;
    right: -15px !important;
    bottom: 0 !important;
    width: clamp(160px, 43vw, 270px) !important; /* Увеличили спрайт Евы по ширине */
    height: 95% !important; /* Ева занимает почти всю высоту карточки */
    max-height: none !important;
    display: block !important;
    pointer-events: none !important; /* Критично: клики проходят сквозь прозрачные области! */
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
    pointer-events: auto !important; /* Сама Ева остается кликабельной */
  }

  /* Облако реплики Евы */
  .hero-mascot .speech,
  .speech {
    position: absolute !important;
    width: clamp(170px, 52vw, 240px) !important; /* Более компактные размеры */
    right: clamp(120px, 35vw, 210px) !important; /* Строго слева от Евы */
    bottom: clamp(175px, 42vw, 250px) !important; /* Подняли выше, полностью освобождая кнопки */
    padding: 10px 12px !important;
    font-size: clamp(0.75rem, 3.2vw, 0.88rem) !important;
    line-height: 1.25 !important;
    pointer-events: auto !important;
  }
}

/* Узкие экраны телефонов (iPhone SE и т.д.) */
@media (max-width: 420px) {
  .hero-panel {
    min-height: 540px !important;
  }
  .hero-subtitle {
    max-width: 55% !important;
  }
  .hero-actions {
    bottom: 18px !important;
    left: 14px !important;
    max-width: calc(100% - 130px) !important; /* Избегаем нахлеста на ноги крупной Евы */
  }
  .hero-mascot {
    width: clamp(130px, 41vw, 170px) !important;
    right: -10px !important;
  }
  .hero-mascot .speech,
  .speech {
    width: clamp(165px, 60vw, 220px) !important;
    right: clamp(100px, 36vw, 150px) !important;
    bottom: clamp(155px, 38vw, 190px) !important; /* Корректируем высоту на ультра-узких дисплеях */
  }
}
"""

    # 5. Записываем обновленный CSS
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(clean_content + "\n\n" + new_css)
    
    print(f"✅ Файл успешно обновлен: {css_path}")
    print("🚀 Изменения применены (Ева увеличена, облако поднято). Проверьте отображение на мобильном устройстве.")

if __name__ == "__main__":
    main()