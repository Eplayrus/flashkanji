(() => {
  "use strict";

  const EFFECT_ID = "effect_cyber_hud";
  const instances = new Map();

  function prefersReducedMotion() {
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  }

  class CyberHUDEffect {
    constructor(container, options = {}) {
      this.container = container;
      this.options = {
        intensity: Number(options.intensity ?? 1),
        reducedMotion: Boolean(options.reducedMotion ?? prefersReducedMotion())
      };
      this.root = null;
      this.canvas = null;
      this.ctx = null;
      this.raf = 0;
      this.glitchTimer = 0;
      this.lineTimer = 0;
      this.noiseTimer = 0;
      this.running = false;
      this.resizeObserver = null;
      this.hLines = [];
      this.vLines = [];
    }

    mount() {
      if (this.root) return this;
      this.isOverlay = Boolean(this.container.closest(".scene-cyber-hud"));
      this.isBackground = !this.isOverlay && Boolean(this.container.closest(".scene-bg, .scene-effects"));
      this.root = document.createElement("div");
      this.root.className = "cyber-hud-effect";
      if (this.isOverlay) this.root.classList.add("is-overlay");
      if (this.isBackground) this.root.classList.add("is-background");
      this.root.setAttribute("aria-hidden", "true");
      this.root.innerHTML = `
        <div class="cyber-hud-bloom"></div>
        <canvas class="cyber-hud-noise"></canvas>
        <div class="cyber-hud-grid"></div>
        <div class="cyber-hud-frame">
          <span class="cyber-hud-corner cyber-hud-corner-tl"></span>
          <span class="cyber-hud-corner cyber-hud-corner-tr"></span>
          <span class="cyber-hud-corner cyber-hud-corner-bl"></span>
          <span class="cyber-hud-corner cyber-hud-corner-br"></span>
        </div>
        <div class="cyber-hud-hlines"></div>
        <div class="cyber-hud-vlines"></div>
        <div class="cyber-hud-scan-trail"></div>
        <div class="cyber-hud-scan"></div>
        <div class="cyber-hud-interference"></div>
        <div class="cyber-hud-glitch"></div>
        <div class="cyber-hud-data">
          <span>SYS::KANJI_LINK</span>
          <span>NEURAL::SYNC</span>
          <span>HUD::LIVE</span>
        </div>
      `;
      this.container.appendChild(this.root);
      this.canvas = this.root.querySelector(".cyber-hud-noise");
      this.ctx = this.canvas?.getContext("2d", { alpha: true }) || null;
      this.buildLines();
      this.resize();
      this.running = true;

      if (!this.options.reducedMotion) {
        this.animate();
        this.scheduleGlitch();
        const lineInterval = this.isOverlay ? 860 : this.isBackground ? 920 : 520;
        const interferenceInterval = this.isOverlay ? 2800 : this.isBackground ? 3200 : 1800;
        this.lineTimer = window.setInterval(() => this.flickerLines(), lineInterval);
        this.noiseTimer = window.setInterval(() => this.pulseInterference(), interferenceInterval);
      } else {
        this.root.classList.add("is-static");
      }

      if (typeof ResizeObserver !== "undefined") {
        this.resizeObserver = new ResizeObserver(() => this.resize());
        this.resizeObserver.observe(this.container);
      } else {
        window.addEventListener("resize", this.onResize = () => this.resize());
      }
      return this;
    }

    buildLines() {
      const hWrap = this.root.querySelector(".cyber-hud-hlines");
      const vWrap = this.root.querySelector(".cyber-hud-vlines");
      const hCount = this.isOverlay ? 11 : this.isBackground ? 12 : 16;
      const vCount = this.isOverlay ? 7 : this.isBackground ? 8 : 12;
      this.hLines = [];
      this.vLines = [];
      for (let i = 0; i < hCount; i += 1) {
        const line = document.createElement("span");
        line.style.setProperty("--i", String(i));
        hWrap.appendChild(line);
        this.hLines.push(line);
      }
      for (let i = 0; i < vCount; i += 1) {
        const line = document.createElement("span");
        line.style.setProperty("--i", String(i));
        vWrap.appendChild(line);
        this.vLines.push(line);
      }
    }

    resize() {
      if (!this.canvas || !this.container) return;
      const rect = this.container.getBoundingClientRect();
      const w = Math.max(1, Math.round(rect.width));
      const h = Math.max(1, Math.round(rect.height));
      const scale = this.container.closest(".scene-cyber-hud, .scene-bg, .scene-effects") ? 0.4 : 0.5;
      this.canvas.width = Math.max(64, Math.round(w * scale));
      this.canvas.height = Math.max(48, Math.round(h * scale));
      this.canvas.style.width = "100%";
      this.canvas.style.height = "100%";
    }

    drawNoise() {
      if (!this.ctx || !this.canvas) return;
      const { width, height } = this.canvas;
      const image = this.ctx.createImageData(width, height);
      const data = image.data;
      const density = (this.isOverlay ? 0.034 : this.isBackground ? 0.04 : 0.055) * this.options.intensity;
      for (let i = 0; i < data.length; i += 4) {
        if (Math.random() > density) continue;
        const tone = Math.random() > 0.55 ? 220 : 90;
        const alphaBase = this.isOverlay ? 12 : this.isBackground ? 14 : 22;
        const alphaRange = this.isOverlay ? 34 : this.isBackground ? 42 : 68;
        const alpha = Math.floor(alphaBase + Math.random() * alphaRange * this.options.intensity);
        data[i] = tone > 150 ? 67 : 255;
        data[i + 1] = tone > 150 ? 214 : 70;
        data[i + 2] = tone > 150 ? 255 : 120;
        data[i + 3] = alpha;
      }
      this.ctx.putImageData(image, 0, 0);
    }

    animate() {
      if (!this.running) return;
      this.drawNoise();
      this.raf = window.requestAnimationFrame(() => this.animate());
    }

    scheduleGlitch() {
      if (!this.running || this.options.reducedMotion) return;
      const delay = this.isOverlay
        ? 3600 + Math.random() * 4800
        : this.isBackground
          ? 4200 + Math.random() * 5200
          : 1600 + Math.random() * 3400;
      this.glitchTimer = window.setTimeout(() => {
        this.triggerGlitch();
        this.scheduleGlitch();
      }, delay);
    }

    triggerGlitch() {
      if (!this.root) return;
      const severity = Math.random();
      this.root.classList.remove("is-glitching", "is-glitch-hard");
      void this.root.offsetWidth;
      this.root.classList.add("is-glitching");
      if (severity > 0.72) this.root.classList.add("is-glitch-hard");
      const scan = this.root.querySelector(".cyber-hud-scan");
      if (scan) {
        scan.style.animationDuration = `${0.9 + Math.random() * 1.4}s`;
      }
      window.setTimeout(() => {
        this.root?.classList.remove("is-glitching", "is-glitch-hard");
      }, severity > 0.72 ? 180 : 110);
    }

    flickerLines() {
      const pool = [...this.hLines, ...this.vLines];
      const count = this.isOverlay || this.isBackground
        ? 1 + Math.floor(Math.random() * 2)
        : 2 + Math.floor(Math.random() * 4);
      for (let n = 0; n < count; n += 1) {
        const line = pool[Math.floor(Math.random() * pool.length)];
        if (!line) continue;
        line.classList.add("is-off");
        window.setTimeout(() => line.classList.remove("is-off"), 60 + Math.random() * 220);
        if (Math.random() > 0.55) {
          line.classList.add("is-jitter");
          window.setTimeout(() => line.classList.remove("is-jitter"), 80 + Math.random() * 120);
        }
      }
    }

    pulseInterference() {
      if (!this.root) return;
      this.root.classList.add("is-interference");
      window.setTimeout(() => this.root?.classList.remove("is-interference"), 120 + Math.random() * 180);
    }

    destroy() {
      this.running = false;
      window.cancelAnimationFrame(this.raf);
      window.clearTimeout(this.glitchTimer);
      window.clearInterval(this.lineTimer);
      window.clearInterval(this.noiseTimer);
      this.resizeObserver?.disconnect();
      if (this.onResize) window.removeEventListener("resize", this.onResize);
      this.root?.remove();
      this.root = null;
      this.canvas = null;
      this.ctx = null;
      this.hLines = [];
      this.vLines = [];
    }
  }

  function mount(container, options = {}) {
    if (!container) return null;
    if (instances.has(container)) return instances.get(container);
    const instance = new CyberHUDEffect(container, options).mount();
    instances.set(container, instance);
    return instance;
  }

  function unmount(container) {
    const instance = instances.get(container);
    if (!instance) return;
    instance.destroy();
    instances.delete(container);
  }

  function syncDocument() {
    const host = document.querySelector(".scene-cyber-hud") || document.querySelector(".scene-bg") || document.querySelector(".scene-effects");
    const active = document.documentElement.dataset.customEffect === EFFECT_ID;
    if (!host) return;
    document.querySelectorAll(".scene-cyber-hud, .scene-bg, .scene-effects").forEach((node) => {
      if (node !== host) unmount(node);
    });
    if (active) {
      mount(host, { intensity: 0.72, reducedMotion: prefersReducedMotion() });
    } else {
      unmount(host);
    }
  }

  function syncShopPreviews() {
    const seen = new Set();
    document.querySelectorAll(`.custom-shop-card[data-item-id="${EFFECT_ID}"] .custom-shop-preview`).forEach((preview) => {
      seen.add(preview);
      mount(preview, { intensity: 0.92, reducedMotion: prefersReducedMotion() });
    });
    for (const [container] of instances) {
      if (container.classList?.contains("scene-effects") || container.classList?.contains("scene-bg") || container.classList?.contains("scene-cyber-hud")) continue;
      if (!seen.has(container) || !document.body.contains(container)) {
        unmount(container);
      }
    }
  }

  function syncAll() {
    syncDocument();
    syncShopPreviews();
  }

  window.CyberHUDEffect = {
    EFFECT_ID,
    CyberHUDEffect,
    mount,
    unmount,
    syncDocument,
    syncShopPreviews,
    syncAll
  };
})();