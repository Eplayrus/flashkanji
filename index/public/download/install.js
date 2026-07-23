(() => {
  "use strict";

  const installButton = document.querySelector("#pwaInstallButton");
  const status = document.querySelector("#pwaStatus");
  let deferredPrompt = null;

  const isStandalone = () => {
    const displayMode = ["standalone", "fullscreen", "minimal-ui"].some((mode) => window.matchMedia?.(`(display-mode: ${mode})`)?.matches);
    return displayMode || navigator.standalone === true;
  };

  const isIosSafari = () => {
    const ua = navigator.userAgent || "";
    const isIos = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isSafari = /safari/i.test(ua) && !/(crios|fxios|edgios|opios|chrome|android)/i.test(ua);
    return isIos && isSafari;
  };

  const setStatus = (message) => {
    if (status)
      status.textContent = message;
  };

  const setButtonState = () => {
    if (!installButton)
      return;
    if (isStandalone()) {
      installButton.textContent = "PWA уже установлена";
      installButton.disabled = true;
      setStatus("Flash Kanji уже открыт как установленное приложение.");
      return;
    }
    installButton.disabled = false;
    installButton.textContent = deferredPrompt ? "Установить PWA" : "Показать инструкцию PWA";
  };

  const revealPwaGuide = () => {
    document.querySelector("#pwa")?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (isIosSafari()) {
      setStatus("На iPhone и iPad установка идёт через Safari: Поделиться → На экран Домой.");
      return;
    }
    setStatus("Если системное окно не появилось, откройте меню браузера и выберите «Установить приложение» или «Добавить на главный экран».");
  };

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredPrompt = event;
    setButtonState();
    setStatus("Браузер готов установить Flash Kanji как PWA.");
  });

  window.addEventListener("appinstalled", () => {
    deferredPrompt = null;
    setButtonState();
    setStatus("Flash Kanji установлен как PWA.");
  });

  installButton?.addEventListener("click", async () => {
    if (isStandalone()) {
      setButtonState();
      return;
    }
    if (!deferredPrompt) {
      revealPwaGuide();
      return;
    }
    const promptEvent = deferredPrompt;
    deferredPrompt = null;
    try {
      await promptEvent.prompt();
      const choice = await promptEvent.userChoice;
      if (choice?.outcome === "accepted") {
        setStatus("Установка принята. Flash Kanji появится среди приложений.");
        setButtonState();
        return;
      }
      setStatus("Установку отменили. Можно попробовать ещё раз через меню браузера.");
    } catch {
      revealPwaGuide();
    }
    setButtonState();
  });

  if ("serviceWorker" in navigator) {
    const scriptUrl = document.currentScript instanceof HTMLScriptElement && document.currentScript.src
      ? document.currentScript.src
      : document.baseURI;
    const serviceWorkerUrl = new URL("../service-worker.js", scriptUrl);
    navigator.serviceWorker.register(serviceWorkerUrl.href).catch(() => {
      setStatus("Страница загрузки открыта. Если PWA-кнопка недоступна, используйте меню браузера.");
    });
  }

  setButtonState();
})();
