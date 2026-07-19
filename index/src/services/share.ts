export interface AchievementSharePayload {
  level: number;
  xp: number;
  moonFragments: number;
  title: string;
  levelLabel: string;
  fragmentsLabel: string;
  fallbackText: string;
  appUrl: string;
  logoUrl?: string;
  mascotUrl?: string;
}

export type AchievementShareMode = "file" | "url" | "clipboard";

export interface AchievementShareResult {
  mode: AchievementShareMode;
  copied?: boolean;
}

export function normalizeShareUrl(href: string): string {
  const url = new URL(href);
  url.search = "";
  url.hash = "home";
  return url.href;
}

export function achievementShareText(payload: AchievementSharePayload): string {
  return `${payload.fallbackText}: ${payload.levelLabel} ${payload.level}, ${payload.xp} XP, ${payload.moonFragments} ${payload.fragmentsLabel}.`;
}

export async function shareAchievementCard(payload: AchievementSharePayload): Promise<AchievementShareResult> {
  const text = achievementShareText(payload);

  if (!navigator.share) {
    const copied = await copyText(`${text}\n${payload.appUrl}`);
    return { mode: "clipboard", copied };
  }

  const imageBlob = await createAchievementCardImage(payload);

  if (imageBlob && typeof File !== "undefined") {
    const file = new File([imageBlob], `flash-kanji-level-${payload.level}.png`, { type: "image/png" });
    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ title: "Flash Kanji", text, url: payload.appUrl, files: [file] });
      return { mode: "file" };
    }
  }

  await navigator.share({ title: "Flash Kanji", text, url: payload.appUrl });
  return { mode: "url" };
}

export async function createAchievementCardImage(payload: AchievementSharePayload): Promise<Blob | null> {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const context = canvas.getContext("2d");
  if (!context) return null;

  paintBackground(context, canvas.width, canvas.height);

  const [logo, mascot] = await Promise.all([
    payload.logoUrl ? loadImage(payload.logoUrl) : Promise.resolve(null),
    payload.mascotUrl ? loadImage(payload.mascotUrl) : Promise.resolve(null)
  ]);

  if (logo) drawContainedImage(context, logo, 58, 48, 330, 116);
  if (mascot) drawContainedImage(context, mascot, 780, 95, 330, 450);

  context.fillStyle = "#f7f4ee";
  context.font = "900 58px system-ui, sans-serif";
  context.fillText(payload.title, 64, 230);

  context.font = "900 110px serif";
  context.fillStyle = "#ffe15a";
  context.fillText(`${payload.levelLabel} ${payload.level}`, 64, 340);

  context.font = "800 38px system-ui, sans-serif";
  context.fillStyle = "#f7f4ee";
  context.fillText(`${payload.xp} XP`, 70, 425);
  context.fillText(`${payload.moonFragments} ${payload.fragmentsLabel}`, 70, 482);

  context.fillStyle = "rgba(255,255,255,0.74)";
  context.font = "700 28px system-ui, sans-serif";
  context.fillText("Flash Kanji | SRS Japanese learning", 70, 558);

  context.strokeStyle = "rgba(255, 225, 90, 0.7)";
  context.lineWidth = 3;
  context.strokeRect(34, 30, canvas.width - 68, canvas.height - 60);

  return new Promise((resolve) => canvas.toBlob(resolve, "image/png", 0.94));
}

async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the legacy path.
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.append(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);
  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
  }
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = src;
  });
}

function drawContainedImage(
  context: CanvasRenderingContext2D,
  image: HTMLImageElement,
  x: number,
  y: number,
  width: number,
  height: number
): void {
  const ratio = Math.min(width / image.naturalWidth, height / image.naturalHeight);
  const drawWidth = image.naturalWidth * ratio;
  const drawHeight = image.naturalHeight * ratio;
  context.drawImage(image, x + (width - drawWidth) / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
}

function paintBackground(context: CanvasRenderingContext2D, width: number, height: number): void {
  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#08080c");
  gradient.addColorStop(0.45, "#1c1018");
  gradient.addColorStop(1, "#071a18");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  context.fillStyle = "rgba(255, 56, 92, 0.22)";
  context.beginPath();
  context.moveTo(0, 70);
  context.lineTo(720, 0);
  context.lineTo(560, 630);
  context.lineTo(0, 630);
  context.closePath();
  context.fill();

  context.strokeStyle = "rgba(255,255,255,0.08)";
  context.lineWidth = 1;
  for (let x = -width; x < width * 2; x += 38) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x + width, height);
    context.stroke();
  }
}
