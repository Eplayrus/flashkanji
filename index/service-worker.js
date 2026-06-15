const CACHE_NAME = "flash-kanji-cache-v99";
const SW_BUILD_VERSION = "2026-06-15-stable-session-v25";

const NOTIFICATION_FALLBACKS = {
  review: {
    title: "Flash Kanji",
    body: "Р’Р°С€Рё РєР°РЅРґР·Рё Р¶РґСѓС‚ РїРѕРІС‚РѕСЂРµРЅРёСЏ.",
    url: "./index.html#review"
  },
  streak: {
    title: "Р›РµСЏ СЂСЏРґРѕРј рџЊ™",
    body: "РќРµ РїРѕС‚РµСЂСЏР№С‚Рµ СЃРІРѕСЋ СЃРµСЂРёСЋ РґРЅРµР№.",
    url: "./index.html#home"
  },
  daily_bonus: {
    title: "Р•Р¶РµРґРЅРµРІРЅС‹Р№ Р±РѕРЅСѓСЃ",
    body: "Р—Р°Р±РµСЂРёС‚Рµ XP Рё Moon Fragments.",
    url: "./index.html#home"
  },
  lesson: {
    title: "РќРѕРІС‹Рµ Р·РЅР°РЅРёСЏ Р¶РґСѓС‚",
    body: "РџСЂРѕРґРѕР»Р¶РёС‚Рµ РёР·СѓС‡РµРЅРёРµ РєР°РЅРґР·Рё.",
    url: "./index.html#learn"
  }
};

function notificationPayload(type = "review", overrides = {}) {
  const base = NOTIFICATION_FALLBACKS[type] || NOTIFICATION_FALLBACKS.review;
  return {
    title: overrides.title || base.title,
    options: {
      body: overrides.body || base.body,
      tag: overrides.tag || `flash-kanji-${type}`,
      renotify: false,
      icon: "./assets/icon-192.png",
      badge: "./assets/icon-192.png",
      data: { url: overrides.url || base.url, type }
    }
  };
}

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./index/index.html",
  "./styles.css",
  "./styles.css?v=2026-06-15-stable-session-v25",
  "./kanji-page.css",
  "./script.js",
  "./script.js?v=2026-06-15-stable-session-v25",
  "./src/effects/cyberHudEffect.js",
  "./src/effects/cyberHudEffect.js?v=2026-06-15-stable-session-v25",
  "./src/audio/soundManager.js",
  "./src/audio/soundManager.js?v=2026-06-15-stable-session-v25",
  "./manifest.webmanifest",
  "./manifest.webmanifest?v=2026-06-15-stable-session-v25",
  "./vendor/chart.umd.min.js",
  "./vendor/chart.umd.min.js?v=2026-06-15-stable-session-v25",
  "./assets/1.png",
  "./assets/bg/bg_cafe.png",
  "./assets/bg/bg_classroom.png",
  "./assets/bg/bg_cyber_room.png",
  "./assets/bg/bg_eva_room.png",
  "./assets/bg/bg_evening_street.png",
  "./assets/bg/bg_library.png",
  "./assets/bg/bg_moon_room.png",
  "./assets/bg/bg_park.png",
  "./assets/bg/bg_practice_room.png",
  "./assets/bg/bg_school_street.png",
  "./assets/bg/bg_shrine.png",
  "./assets/bg/bg_silent_road.png",
  "./assets/bg/bg_study_hub.png",
  "./assets/bg/bg_winter_city.png",
  "./assets/bg/ChatGPT Image 6 РёСЋРЅ. 2026 Рі., 16_22_03.png",
  "./assets/bg/ChatGPT Image 6 РёСЋРЅ. 2026 Рі., 16_22_09.png",
  "./assets/bg/ChatGPT Image 6 РёСЋРЅ. 2026 Рі., 16_22_15.png",
  "./assets/bg/ChatGPT Image 6 РёСЋРЅ. 2026 Рі., 16_22_21.png",
  "./assets/bg_1.png",
  "./assets/button.png",
  "./assets/effects/effect_cyber_hud.svg",
  "./assets/effects/effect_dust_particles.svg",
  "./assets/effects/effect_golden_glow.svg",
  "./assets/effects/effect_lesson_shine.svg",
  "./assets/effects/effect_level_frame.svg",
  "./assets/effects/effect_moon_particles.svg",
  "./assets/effects/effect_sakura_particles.svg",
  "./assets/effects/effect_snow_particles.svg",
  "./assets/effects/effect_soft_glow.svg",
  "./assets/eva.png",
  "./assets/favicon.ico",
  "./assets/favicon.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/leya.png",
  "./assets/logo.png",
  "./assets/mascots/eva/converter.py",
  "./assets/mascots/eva/eva_cyber/eva_cyber_analyze.png",
  "./assets/mascots/eva/eva_cyber/eva_cyber_command.png",
  "./assets/mascots/eva/eva_cyber/eva_cyber_confirm.png",
  "./assets/mascots/eva/eva_cyber/eva_cyber_determined.png",
  "./assets/mascots/eva/eva_cyber/eva_cyber_explain.png",
  "./assets/mascots/eva/eva_cyber/eva_cyber_mythic.png",
  "./assets/mascots/eva/eva_cyber/eva_cyber_neutral.png",
  "./assets/mascots/eva/eva_cyber/eva_cyber_observe.png",
  "./assets/mascots/eva/eva_cyber/eva_cyber_serious.png",
  "./assets/mascots/eva/eva_cyber/eva_cyber_soft_smile.png",
  "./assets/mascots/eva/eva_default_pack/eva_achievement.png",
  "./assets/mascots/eva/eva_default_pack/eva_angry.png",
  "./assets/mascots/eva/eva_default_pack/eva_approve.png",
  "./assets/mascots/eva/eva_default_pack/eva_correct.png",
  "./assets/mascots/eva/eva_default_pack/eva_default.png",
  "./assets/mascots/eva/eva_default_pack/eva_happy.png",
  "./assets/mascots/eva/eva_default_pack/eva_idle.png",
  "./assets/mascots/eva/eva_default_pack/eva_idle.zip",
  "./assets/mascots/eva/eva_default_pack/eva_levelup.png",
  "./assets/mascots/eva/eva_default_pack/eva_mentor_approve.png",
  "./assets/mascots/eva/eva_default_pack/eva_mentor_encourage.png",
  "./assets/mascots/eva/eva_default_pack/eva_mentor_explain.png",
  "./assets/mascots/eva/eva_default_pack/eva_mentor_neutral.png",
  "./assets/mascots/eva/eva_default_pack/eva_mentor_observe.png",
  "./assets/mascots/eva/eva_default_pack/eva_mentor_ready.png",
  "./assets/mascots/eva/eva_default_pack/eva_mentor_serious.png",
  "./assets/mascots/eva/eva_default_pack/eva_mentor_soft_smile.png",
  "./assets/mascots/eva/eva_default_pack/eva_mentor_strict.png",
  "./assets/mascots/eva/eva_default_pack/eva_mentor_think.png",
  "./assets/mascots/eva/eva_default_pack/eva_proud.png",
  "./assets/mascots/eva/eva_default_pack/eva_review.png",
  "./assets/mascots/eva/eva_default_pack/eva_reward.png",
  "./assets/mascots/eva/eva_default_pack/eva_sad.png",
  "./assets/mascots/eva/eva_default_pack/eva_shy.png",
  "./assets/mascots/eva/eva_default_pack/eva_think.png",
  "./assets/mascots/eva/eva_jacket/eva_winter_cold.png",
  "./assets/mascots/eva/eva_jacket/eva_winter_determined.png",
  "./assets/mascots/eva/eva_jacket/eva_winter_neutral.png",
  "./assets/mascots/eva/eva_jacket/eva_winter_observe.png",
  "./assets/mascots/eva/eva_jacket/eva_winter_ready.png",
  "./assets/mascots/eva/eva_jacket/eva_winter_serious.png",
  "./assets/mascots/eva/eva_jacket/eva_winter_soft_smile.png",
  "./assets/mascots/eva/eva_jacket/eva_winter_think.png",
  "./assets/mascots/eva/eva_jacket/eva_winter_tired.png",
  "./assets/mascots/eva/eva_jacket/eva_winter_walk.png",
  "./assets/mascots/eva/eva_library/eva_librarian_explain.png",
  "./assets/mascots/eva/eva_library/eva_librarian_neutral.png",
  "./assets/mascots/eva/eva_library/eva_librarian_observe.png",
  "./assets/mascots/eva/eva_library/eva_librarian_reading.png",
  "./assets/mascots/eva/eva_library/eva_librarian_ready.png",
  "./assets/mascots/eva/eva_library/eva_librarian_serious.png",
  "./assets/mascots/eva/eva_library/eva_librarian_shy.png",
  "./assets/mascots/eva/eva_library/eva_librarian_soft_smile.png",
  "./assets/mascots/eva/eva_library/eva_librarian_think.png",
  "./assets/mascots/eva/eva_library/eva_librarian_tired.png",
  "./assets/mascots/eva/eva_miko/shrine_maiden_determined.png",
  "./assets/mascots/eva/eva_miko/shrine_maiden_gentle_smile.png",
  "./assets/mascots/eva/eva_miko/shrine_maiden_happy.png",
  "./assets/mascots/eva/eva_miko/shrine_maiden_moonlit_serious.png",
  "./assets/mascots/eva/eva_miko/shrine_maiden_neutral.png",
  "./assets/mascots/eva/eva_miko/shrine_maiden_prayer.png",
  "./assets/mascots/eva/eva_miko/shrine_maiden_sad.png",
  "./assets/mascots/eva/eva_miko/shrine_maiden_shy.png",
  "./assets/mascots/eva/eva_miko/shrine_maiden_surprised.png",
  "./assets/mascots/eva/eva_miko/shrine_maiden_thinking.png",
  "./assets/mascots/eva/eva_moon_princess/eva_moonpriestess_blessing.png",
  "./assets/mascots/eva/eva_moon_princess/eva_moonpriestess_cast.png",
  "./assets/mascots/eva/eva_moon_princess/eva_moonpriestess_determined.png",
  "./assets/mascots/eva/eva_moon_princess/eva_moonpriestess_legendary.png",
  "./assets/mascots/eva/eva_moon_princess/eva_moonpriestess_mystic.png",
  "./assets/mascots/eva/eva_moon_princess/eva_moonpriestess_neutral.png",
  "./assets/mascots/eva/eva_moon_princess/eva_moonpriestess_prayer.png",
  "./assets/mascots/eva/eva_moon_princess/eva_moonpriestess_serious.png",
  "./assets/mascots/eva/eva_moon_princess/eva_moonpriestess_soft_smile.png",
  "./assets/mascots/eva/eva_road/eva_silentroad_determined.png",
  "./assets/mascots/eva/eva_road/eva_silentroad_mythic.png",
  "./assets/mascots/eva/eva_road/eva_silentroad_neutral.png",
  "./assets/mascots/eva/eva_road/eva_silentroad_observe.png",
  "./assets/mascots/eva/eva_road/eva_silentroad_ready.png",
  "./assets/mascots/eva/eva_road/eva_silentroad_serious.png",
  "./assets/mascots/eva/eva_road/eva_silentroad_soft.png",
  "./assets/mascots/eva/eva_road/eva_silentroad_think.png",
  "./assets/mascots/eva/eva_road/eva_silentroad_tired.png",
  "./assets/mascots/eva/eva_road/eva_silentroad_walk.png",
  "./assets/mascots/eva/eva_school_uniform/eva_study_confident.png",
  "./assets/mascots/eva/eva_school_uniform/eva_study_explain.png",
  "./assets/mascots/eva/eva_school_uniform/eva_study_neutral.png",
  "./assets/mascots/eva/eva_school_uniform/eva_study_reading.png",
  "./assets/mascots/eva/eva_school_uniform/eva_study_ready.png",
  "./assets/mascots/eva/eva_school_uniform/eva_study_soft_smile.png",
  "./assets/mascots/eva/eva_school_uniform/eva_study_surprised.png",
  "./assets/mascots/eva/eva_school_uniform/eva_study_think.png",
  "./assets/mascots/eva/eva_school_uniform/eva_study_tired.png",
  "./assets/mascots/eva/eva_school_uniform/eva_study_writing.png",
  "./assets/mascots/eva/eva_teacher_uniform/eva_academy_approve.png",
  "./assets/mascots/eva/eva_teacher_uniform/eva_academy_explain.png",
  "./assets/mascots/eva/eva_teacher_uniform/eva_academy_legendary.png",
  "./assets/mascots/eva/eva_teacher_uniform/eva_academy_neutral.png",
  "./assets/mascots/eva/eva_teacher_uniform/eva_academy_observe.png",
  "./assets/mascots/eva/eva_teacher_uniform/eva_academy_serious.png",
  "./assets/mascots/eva/eva_teacher_uniform/eva_academy_soft_smile.png",
  "./assets/mascots/eva/eva_teacher_uniform/eva_academy_strict.png",
  "./assets/mascots/eva/eva_teacher_uniform/eva_academy_teach.png",
  "./assets/mascots/eva/eva_teacher_uniform/eva_academy_think.png",
  "./assets/mascots/eva/fis_pack/eva_fis_mercenary.png",
  "./assets/mascots/eva/fox_eva/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_56_59 (1).png",
  "./assets/mascots/eva/fox_eva/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_00 (2).png",
  "./assets/mascots/eva/fox_eva/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_01 (3).png",
  "./assets/mascots/eva/fox_eva/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_02 (4).png",
  "./assets/mascots/eva/fox_eva/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_03 (5).png",
  "./assets/mascots/eva/fox_eva/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_03 (6).png",
  "./assets/mascots/eva/fox_eva/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_04 (7).png",
  "./assets/mascots/eva/fox_eva/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_05 (8).png",
  "./assets/mascots/eva/fox_eva/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_06 (9).png",
  "./assets/mascots/eva/fox_eva/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_07 (10).png",
  "./assets/mascots/eva/fox_eva/new/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_56_59 (1).png",
  "./assets/mascots/eva/fox_eva/new/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_00 (2).png",
  "./assets/mascots/eva/fox_eva/new/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_01 (3).png",
  "./assets/mascots/eva/fox_eva/new/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_02 (4).png",
  "./assets/mascots/eva/fox_eva/new/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_03 (5).png",
  "./assets/mascots/eva/fox_eva/new/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_03 (6).png",
  "./assets/mascots/eva/fox_eva/new/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_04 (7).png",
  "./assets/mascots/eva/fox_eva/new/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_05 (8).png",
  "./assets/mascots/eva/fox_eva/new/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_06 (9).png",
  "./assets/mascots/eva/fox_eva/new/ChatGPT Image 3 РёСЋРЅ. 2026 Рі., 17_57_07 (10).png",
  "./assets/mascots/eva_normal.png",
  "./assets/mascots/leya_calm.png",
  "./assets/og/flashkanji-og-square.png",
  "./assets/og/flashkanji-og.png",
  "./assets/og/flashkanji-preview.png",
  "./assets/plate.png",
  "./assets/shop/bg_cyber_room.svg",
  "./assets/shop/bg_moon_room.svg",
  "./assets/shop/bg_silent_road.svg",
  "./assets/shop/bg_winter_city.svg",
  "./assets/shop/deco_bookshelf.svg",
  "./assets/shop/deco_golden_accent.svg",
  "./assets/shop/deco_kanji_board.svg",
  "./assets/shop/deco_lantern.svg",
  "./assets/shop/deco_moon_frame.svg",
  "./assets/shop/deco_plant.svg",
  "./assets/shop/deco_scroll.svg",
  "./assets/shop/deco_tea_table.svg",
  "./assets/shop/decor/deco_bookshelf.png",
  "./assets/shop/decor/deco_golden_accent.png",
  "./assets/shop/decor/deco_kanji_board.png",
  "./assets/shop/decor/deco_lantern.png",
  "./assets/shop/decor/deco_moon_frame.png",
  "./assets/shop/decor/deco_plant.png",
  "./assets/shop/decor/deco_scroll.png",
  "./assets/shop/decor/deco_tea_table.png",
  "./assets/shop/eva_casual_fox.svg",
  "./assets/shop/eva_kimono.svg",
  "./assets/shop/eva_moon_priestess.svg",
  "./assets/shop/eva_school_uniform.svg",
  "./assets/shop/eva_winter_outfit.svg",
  "./assets/shop/previews/bg_cyber_room.png",
  "./assets/shop/previews/bg_silent_road.png",
  "./assets/shop/previews/bg_winter_city.png",
  "./assets/shop/previews/deco_bookshelf.png",
  "./assets/shop/previews/deco_golden_accent.png",
  "./assets/shop/previews/deco_kanji_board.png",
  "./assets/shop/previews/deco_lantern.png",
  "./assets/shop/previews/deco_moon_frame.png",
  "./assets/shop/previews/deco_plant.png",
  "./assets/shop/previews/deco_scroll.png",
  "./assets/shop/previews/deco_tea_table.png",
  "./assets/shop/previews/effect_cyber_hud.png",
  "./assets/shop/previews/effect_dust_particles.png",
  "./assets/shop/previews/effect_golden_glow.png",
  "./assets/shop/previews/effect_lesson_shine.png",
  "./assets/shop/previews/effect_level_frame.png",
  "./assets/shop/previews/effect_moon_particles.png",
  "./assets/shop/previews/effect_sakura_particles.png",
  "./assets/shop/previews/effect_snow_particles.png",
  "./assets/shop/previews/effect_soft_glow.png",
  "./assets/shop/previews/outfit_academy_instructor.png",
  "./assets/shop/previews/outfit_achievement.png",
  "./assets/shop/previews/outfit_approve.png",
  "./assets/shop/previews/outfit_casual_fox.png",
  "./assets/shop/previews/outfit_concerned.png",
  "./assets/shop/previews/outfit_confident.png",
  "./assets/shop/previews/outfit_correct_answer.png",
  "./assets/shop/previews/outfit_cyber_eva.png",
  "./assets/shop/previews/outfit_default_assassin.png",
  "./assets/shop/previews/outfit_fis_mentor.png",
  "./assets/shop/previews/outfit_happy.png",
  "./assets/shop/previews/outfit_level_up.png",
  "./assets/shop/previews/outfit_librarian_eva.png",
  "./assets/shop/previews/outfit_moon_priestess.png",
  "./assets/shop/previews/outfit_reward.png",
  "./assets/shop/previews/outfit_shrine_maiden.png",
  "./assets/shop/previews/outfit_shy.png",
  "./assets/shop/previews/outfit_silent_road.png",
  "./assets/shop/previews/outfit_stern.png",
  "./assets/shop/previews/outfit_study_session.png",
  "./assets/shop/previews/outfit_thinking.png",
  "./assets/shop/previews/outfit_winter_traveler.png",
  "./assets/shop/previews/theme_deep_blue.png",
  "./assets/shop/previews/theme_default_dark.png",
  "./assets/shop/previews/theme_forest_green.png",
  "./assets/shop/previews/theme_moon_gold.png",
  "./assets/shop/previews/theme_sakura_night.png",
  "./assets/themes/theme_deep_blue.svg",
  "./assets/themes/theme_default_dark.svg",
  "./assets/themes/theme_forest_green.svg",
  "./assets/themes/theme_moon_gold.svg",
  "./assets/themes/theme_sakura_night.svg",
  "./audio/ux_sounds/achievement_unlock.mp3",
  "./audio/ux_sounds/answer_correct.mp3",
  "./audio/ux_sounds/answer_wrong.mp3",
  "./audio/ux_sounds/button_click.mp3",
  "./audio/ux_sounds/button_hover.mp3",
  "./audio/ux_sounds/card_flip.mp3",
  "./audio/ux_sounds/daily_bonus.mp3",
  "./audio/ux_sounds/item_unlock.mp3",
  "./audio/ux_sounds/level_up.mp3",
  "./audio/ux_sounds/menu_close.mp3",
  "./audio/ux_sounds/menu_open.mp3",
  "./audio/ux_sounds/moon_fragment_gain.mp3",
  "./audio/ux_sounds/notification_reminder.mp3",
  "./audio/ux_sounds/notification_reward.mp3",
  "./audio/ux_sounds/notification_soft.mp3",
  "./audio/ux_sounds/page_turn.mp3",
  "./audio/ux_sounds/purchase_failed.mp3",
  "./audio/ux_sounds/purchase_success.mp3",
  "./audio/ux_sounds/streak_reward.mp3",
  "./audio/ux_sounds/tab_switch.mp3",
  "./audio/ux_sounds/xp_gain.mp3",
  "./docs/flashkanji_N1_textbook_flashkanji_space.pdf",
  "./docs/flashkanji_N2_textbook_flashkanji_space.pdf",
  "./docs/flashkanji_N3_textbook_flashkanji_space.pdf",
  "./docs/flashkanji_N4_textbook_flashkanji_space.pdf",
  "./docs/flashkanji_N5_expanded_textbook.pdf",
  "./data/achievements/index.json",
  "./data/content-sources.json",
  "./data/customization-shop.json",
  "./data/eva-room-decor-layouts.json",
  "./data/dialogues/index.json",
  "./data/dialogues.json",
  "./data/eva-autonomy-lines.json",
  "./data/eva-backgrounds.json",
  "./data/eva-expanded-dialogues.json",
  "./data/eva-fis-personality.json",
  "./data/eva-presence.json",
  "./data/eva-room-dialogues.json",
  "./data/eva-sprites.json",
  "./data/eva-sprites.json.bak",
  "./data/i18n.json",
  "./data/jlpt/index.json",
  "./data/jlpt/n1/meta.json",
  "./data/jlpt/n1/exercises.json",
  "./data/jlpt/n1/final-test.json",
  "./data/jlpt/n1/grammar.json",
  "./data/jlpt/n1/kanji.json",
  "./data/jlpt/n1/lessons.json",
  "./data/jlpt/n1/listening.json",
  "./data/jlpt/n1/reading.json",
  "./data/jlpt/n1/tests.json",
  "./data/jlpt/n2/meta.json",
  "./data/jlpt/n2/exercises.json",
  "./data/jlpt/n2/final-test.json",
  "./data/jlpt/n2/grammar.json",
  "./data/jlpt/n2/kanji.json",
  "./data/jlpt/n2/lessons.json",
  "./data/jlpt/n2/listening.json",
  "./data/jlpt/n2/reading.json",
  "./data/jlpt/n2/tests.json",
  "./data/jlpt/n3/meta.json",
  "./data/jlpt/n3/exercises.json",
  "./data/jlpt/n3/final-test.json",
  "./data/jlpt/n3/grammar.json",
  "./data/jlpt/n3/kanji.json",
  "./data/jlpt/n3/lessons.json",
  "./data/jlpt/n3/listening.json",
  "./data/jlpt/n3/reading.json",
  "./data/jlpt/n3/tests.json",
  "./data/jlpt/n4/meta.json",
  "./data/jlpt/n4/exercises.json",
  "./data/jlpt/n4/final-test.json",
  "./data/jlpt/n4/grammar.json",
  "./data/jlpt/n4/kanji.json",
  "./data/jlpt/n4/lessons.json",
  "./data/jlpt/n4/listening.json",
  "./data/jlpt/n4/reading.json",
  "./data/jlpt/n4/tests.json",
  "./data/jlpt/n5/grammar.json",
  "./data/jlpt/n5/meta.json",
  "./data/jlpt/n5/exercises.json",
  "./data/jlpt/n5/final-test.json",
  "./data/jlpt/n5/kanji.json",
  "./data/jlpt/n5/lessons.json",
  "./data/jlpt/n5/listening.json",
  "./data/jlpt/n5/reading.json",
  "./data/jlpt/n5/tests.json",
  "./data/jlpt-lessons.json",
  "./data/jlpt-practice-lessons.json",
  "./data/kanji/hints.json",
  "./data/kanji/meta.json",
  "./data/kanji/stroke-order-kanjivg.json",
  "./data/kanji/translations.json",
  "./data/kanji.json",
  "./data/lesson-1.json",
  "./data/lesson-2.json",
  "./data/lesson-3.json",
  "./data/lesson-4.json",
  "./data/lesson-5.json",
  "./data/lessons/generated/bulk-n1-01.json",
  "./data/lessons/generated/bulk-n1-02.json",
  "./data/lessons/generated/bulk-n1-03.json",
  "./data/lessons/generated/bulk-n1-04.json",
  "./data/lessons/generated/bulk-n1-05.json",
  "./data/lessons/generated/bulk-n1-06.json",
  "./data/lessons/generated/bulk-n1-07.json",
  "./data/lessons/generated/bulk-n1-08.json",
  "./data/lessons/generated/bulk-n1-09.json",
  "./data/lessons/generated/bulk-n1-10.json",
  "./data/lessons/generated/bulk-n1-11.json",
  "./data/lessons/generated/bulk-n2-01.json",
  "./data/lessons/generated/bulk-n2-02.json",
  "./data/lessons/generated/bulk-n2-03.json",
  "./data/lessons/generated/bulk-n2-04.json",
  "./data/lessons/generated/bulk-n2-05.json",
  "./data/lessons/generated/bulk-n2-06.json",
  "./data/lessons/generated/bulk-n2-07.json",
  "./data/lessons/generated/bulk-n2-08.json",
  "./data/lessons/generated/bulk-n2-09.json",
  "./data/lessons/generated/bulk-n2-10.json",
  "./data/lessons/generated/bulk-n2-11.json",
  "./data/lessons/generated/bulk-n2-12.json",
  "./data/lessons/generated/bulk-n2-13.json",
  "./data/lessons/generated/bulk-n2-14.json",
  "./data/lessons/generated/bulk-n2-15.json",
  "./data/lessons/generated/bulk-n2-16.json",
  "./data/lessons/generated/bulk-n2-17.json",
  "./data/lessons/generated/bulk-n2-18.json",
  "./data/lessons/generated/bulk-n2-19.json",
  "./data/lessons/generated/bulk-n3-01.json",
  "./data/lessons/generated/bulk-n3-02.json",
  "./data/lessons/generated/bulk-n3-03.json",
  "./data/lessons/generated/bulk-n3-04.json",
  "./data/lessons/generated/bulk-n3-05.json",
  "./data/lessons/generated/bulk-n3-06.json",
  "./data/lessons/generated/bulk-n3-07.json",
  "./data/lessons/generated/bulk-n3-08.json",
  "./data/lessons/generated/bulk-n3-09.json",
  "./data/lessons/generated/bulk-n3-10.json",
  "./data/lessons/generated/bulk-n3-11.json",
  "./data/lessons/generated/bulk-n3-12.json",
  "./data/lessons/generated/bulk-n3-13.json",
  "./data/lessons/generated/bulk-n3-14.json",
  "./data/lessons/generated/bulk-n3-15.json",
  "./data/lessons/generated/bulk-n3-16.json",
  "./data/lessons/generated/bulk-n3-17.json",
  "./data/lessons/generated/bulk-n3-18.json",
  "./data/lessons/generated/bulk-n3-19.json",
  "./data/lessons/generated/bulk-n4-01.json",
  "./data/lessons/generated/bulk-n4-02.json",
  "./data/lessons/generated/bulk-n4-03.json",
  "./data/lessons/generated/bulk-n4-04.json",
  "./data/lessons/generated/bulk-n4-05.json",
  "./data/lessons/generated/bulk-n4-06.json",
  "./data/lessons/generated/bulk-n4-07.json",
  "./data/lessons/generated/bulk-n4-08.json",
  "./data/lessons/generated/bulk-n5-01.json",
  "./data/lessons/generated/bulk-n5-02.json",
  "./data/lessons/generated/bulk-n5-03.json",
  "./data/lessons/generated/bulk-n5-04.json",
  "./data/lessons/generated_with_audio/bulk-n1-01.json",
  "./data/lessons/generated_with_audio/bulk-n1-02.json",
  "./data/lessons/generated_with_audio/bulk-n1-03.json",
  "./data/lessons/generated_with_audio/bulk-n1-04.json",
  "./data/lessons/generated_with_audio/bulk-n1-05.json",
  "./data/lessons/generated_with_audio/bulk-n1-06.json",
  "./data/lessons/generated_with_audio/bulk-n1-07.json",
  "./data/lessons/generated_with_audio/bulk-n1-08.json",
  "./data/lessons/generated_with_audio/bulk-n1-09.json",
  "./data/lessons/generated_with_audio/bulk-n1-10.json",
  "./data/lessons/generated_with_audio/bulk-n1-11.json",
  "./data/lessons/generated_with_audio/bulk-n2-01.json",
  "./data/lessons/generated_with_audio/bulk-n2-02.json",
  "./data/lessons/generated_with_audio/bulk-n2-03.json",
  "./data/lessons/generated_with_audio/bulk-n2-04.json",
  "./data/lessons/generated_with_audio/bulk-n2-05.json",
  "./data/lessons/generated_with_audio/bulk-n2-06.json",
  "./data/lessons/generated_with_audio/bulk-n2-07.json",
  "./data/lessons/generated_with_audio/bulk-n2-08.json",
  "./data/lessons/generated_with_audio/bulk-n2-09.json",
  "./data/lessons/generated_with_audio/bulk-n2-10.json",
  "./data/lessons/generated_with_audio/bulk-n2-11.json",
  "./data/lessons/generated_with_audio/bulk-n2-12.json",
  "./data/lessons/generated_with_audio/bulk-n2-13.json",
  "./data/lessons/generated_with_audio/bulk-n2-14.json",
  "./data/lessons/generated_with_audio/bulk-n2-15.json",
  "./data/lessons/generated_with_audio/bulk-n2-16.json",
  "./data/lessons/generated_with_audio/bulk-n2-17.json",
  "./data/lessons/generated_with_audio/bulk-n2-18.json",
  "./data/lessons/generated_with_audio/bulk-n2-19.json",
  "./data/lessons/generated_with_audio/bulk-n3-01.json",
  "./data/lessons/generated_with_audio/bulk-n3-02.json",
  "./data/lessons/generated_with_audio/bulk-n3-03.json",
  "./data/lessons/generated_with_audio/bulk-n3-04.json",
  "./data/lessons/generated_with_audio/bulk-n3-05.json",
  "./data/lessons/generated_with_audio/bulk-n3-06.json",
  "./data/lessons/generated_with_audio/bulk-n3-07.json",
  "./data/lessons/generated_with_audio/bulk-n3-08.json",
  "./data/lessons/generated_with_audio/bulk-n3-09.json",
  "./data/lessons/generated_with_audio/bulk-n3-10.json",
  "./data/lessons/generated_with_audio/bulk-n3-11.json",
  "./data/lessons/generated_with_audio/bulk-n3-12.json",
  "./data/lessons/generated_with_audio/bulk-n3-13.json",
  "./data/lessons/generated_with_audio/bulk-n3-14.json",
  "./data/lessons/generated_with_audio/bulk-n3-15.json",
  "./data/lessons/generated_with_audio/bulk-n3-16.json",
  "./data/lessons/generated_with_audio/bulk-n3-17.json",
  "./data/lessons/generated_with_audio/bulk-n3-18.json",
  "./data/lessons/generated_with_audio/bulk-n3-19.json",
  "./data/lessons/generated_with_audio/bulk-n4-01.json",
  "./data/lessons/generated_with_audio/bulk-n4-02.json",
  "./data/lessons/generated_with_audio/bulk-n4-03.json",
  "./data/lessons/generated_with_audio/bulk-n4-04.json",
  "./data/lessons/generated_with_audio/bulk-n4-05.json",
  "./data/lessons/generated_with_audio/bulk-n4-06.json",
  "./data/lessons/generated_with_audio/bulk-n4-07.json",
  "./data/lessons/generated_with_audio/bulk-n4-08.json",
  "./data/lessons/generated_with_audio/bulk-n5-01.json",
  "./data/lessons/generated_with_audio/bulk-n5-02.json",
  "./data/lessons/generated_with_audio/bulk-n5-03.json",
  "./data/lessons/generated_with_audio/bulk-n5-04.json",
  "./data/lessons/lesson-1.json",
  "./data/lessons/lesson-2.json",
  "./data/lessons/lesson-3.json",
  "./data/lessons/lesson-4.json",
  "./data/lessons/lesson-5.json",
  "./data/lessons/translations.json",
  "./data/lessons.json",
  "./data/lessons.zip",
  "./data/monetization/catalog.json",
  "./data/review.json",
  "./data/rewards.json",
  "./data/sentences/index.json",
  "./data/sources/kanji-page-sources.json",
  "./data/vocabulary/index.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => Promise.allSettled(PRECACHE_URLS.map((url) => cache.add(url))))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  if (request.destination === "document") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (!response.ok) return caches.match("./index.html");
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  if (new URL(request.url).pathname.includes("/data/")) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request))
    );
    return;
  }

  if (request.destination === "audio" || new URL(request.url).pathname.includes("/audio/kanji/")) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});

self.addEventListener("message", (event) => {
  const type = event.data?.type;
  if (type === "FLASH_KANJI_FORCE_CACHE_RESET") {
    event.waitUntil((async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)));
      const clients = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
      clients.forEach((client) => client.postMessage({
        type: "FLASH_KANJI_CACHE_RESET_DONE",
        cacheName: CACHE_NAME,
        buildVersion: SW_BUILD_VERSION
      }));
    })());
    return;
  }
  if (type !== "SHOW_NOTIFICATION") return;
  const payload = notificationPayload(event.data.notificationType, event.data);
  event.waitUntil(self.registration.showNotification(payload.title, payload.options));
});

self.addEventListener("push", (event) => {
  let data = {};
  try {
    data = event.data ? event.data.json() : {};
  } catch {
    data = { body: event.data?.text() };
  }
  const type = data.type || "review";
  const payload = notificationPayload(type, data);
  event.waitUntil(self.registration.showNotification(payload.title, payload.options));
});

self.addEventListener("periodicsync", (event) => {
  if (event.tag !== "flash-kanji-daily") return;
  const payload = notificationPayload("review");
  event.waitUntil(self.registration.showNotification(payload.title, payload.options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = new URL(event.notification.data?.url || "./index.html#review", self.registration.scope).href;
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((windows) => {
      const existing = windows.find((client) => "focus" in client);
      if (existing) {
        existing.navigate?.(url);
        return existing.focus();
      }
      return clients.openWindow(url);
    })
  );
});



