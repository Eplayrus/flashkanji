import { existsSync } from "node:fs";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";
import { defineConfig, type Plugin } from "vite";
import { matchPathname } from "./src/router";

const buildId = process.env.GITHUB_SHA?.slice(0, 12) || `local-${Date.now()}`;
const configDir = fileURLToPath(new URL(".", import.meta.url));
const performanceBudgets = {
  initialJsGzipBytes: 150 * 1024,
  totalCssGzipBytes: 45 * 1024,
  asyncChunkGzipBytes: 120 * 1024
};

function isDownloadRoute(url = "") {
  const pathname = url.split(/[?#]/, 1)[0];
  return pathname === "/download" || pathname === "/download/";
}

function isLegacyIndexRoute(url = "") {
  const pathname = url.split(/[?#]/, 1)[0];
  return /^\/index(?:\/dist)?(?:\/index\.html)?\/?$/i.test(pathname);
}

function legacyRedirectLocation(url = "") {
  const [, suffix = ""] = url.match(/^[^?#]*([?#].*)?$/) || [];
  return `/${suffix || ""}`;
}

function requestWantsHtml(request: { headers: Record<string, string | string[] | undefined> }): boolean {
  const accept = String(request.headers.accept || "");
  return accept.includes("text/html");
}

function pathnameFromUrl(url = ""): string {
  return url.split(/[?#]/, 1)[0] || "/";
}

function htmlFileForPath(rootDir: string, pathname: string): string {
  const normalized = pathname.replace(/\/{2,}/g, "/");
  if (normalized === "/" || normalized === "") return path.join(rootDir, "index.html");
  if (/\.html$/i.test(normalized)) return path.join(rootDir, normalized);
  return path.join(rootDir, normalized, "index.html");
}

function hasStaticHtml(rootDir: string, pathname: string): boolean {
  return existsSync(htmlFileForPath(rootDir, pathname));
}

function shouldServeRoute404(request: { url?: string; headers: Record<string, string | string[] | undefined> }, rootDir: string): boolean {
  if (!request.url || !requestWantsHtml(request)) return false;
  const pathname = pathnameFromUrl(request.url);
  if (isLegacyIndexRoute(pathname) || isDownloadRoute(pathname)) return false;
  if (hasStaticHtml(rootDir, pathname)) return false;
  const match = matchPathname(pathname);
  if (match.status === "valid" && (match.kind === "app-shell" || match.kind === "legacy-index")) return false;
  return true;
}

async function serveRoute404(response: { statusCode: number; setHeader(name: string, value: string): void; end(body?: string): void }, htmlPath: string): Promise<void> {
  const html = await readFile(htmlPath, "utf8");
  response.statusCode = 404;
  response.setHeader("Content-Type", "text/html; charset=utf-8");
  response.end(html);
}

function downloadPageRoutePlugin(): Plugin {
  return {
    name: "flash-kanji-download-page-route",
    configureServer(server) {
      const htmlPath = fileURLToPath(new URL("./public/download/index.html", import.meta.url));
      const notFoundPath = fileURLToPath(new URL("./public/404.html", import.meta.url));
      const publicDir = fileURLToPath(new URL("./public", import.meta.url));
      server.middlewares.use(async (request, response, next) => {
        if (isLegacyIndexRoute(request.url)) {
          response.statusCode = 308;
          response.setHeader("Location", legacyRedirectLocation(request.url));
          response.end();
          return;
        }

        if (!isDownloadRoute(request.url)) {
          next();
          return;
        }

        if (request.url?.startsWith("/download?")) {
          response.statusCode = 308;
          response.setHeader("Location", request.url.replace(/^\/download/, "/download/"));
          response.end();
          return;
        }

        const html = await readFile(htmlPath, "utf8");
        const transformedHtml = await server.transformIndexHtml("/download/index.html", html);
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end(transformedHtml);
        return;
      });
      server.middlewares.use(async (request, response, next) => {
        if (!shouldServeRoute404(request, publicDir)) {
          next();
          return;
        }
        await serveRoute404(response, notFoundPath);
      });
    },
    configurePreviewServer(server) {
      const htmlPath = fileURLToPath(new URL("./dist/download/index.html", import.meta.url));
      const notFoundPath = fileURLToPath(new URL("./dist/404.html", import.meta.url));
      const distDir = fileURLToPath(new URL("./dist", import.meta.url));
      server.middlewares.use(async (request, response, next) => {
        if (isLegacyIndexRoute(request.url)) {
          response.statusCode = 308;
          response.setHeader("Location", legacyRedirectLocation(request.url));
          response.end();
          return;
        }

        if (!isDownloadRoute(request.url)) {
          next();
          return;
        }

        if (request.url?.startsWith("/download?")) {
          response.statusCode = 308;
          response.setHeader("Location", request.url.replace(/^\/download/, "/download/"));
          response.end();
          return;
        }

        const html = await readFile(htmlPath, "utf8");
        response.statusCode = 200;
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end(html);
        return;
      });
      server.middlewares.use(async (request, response, next) => {
        if (!shouldServeRoute404(request, distDir)) {
          next();
          return;
        }
        await serveRoute404(response, notFoundPath);
      });
    }
  };
}

function sourceToBuffer(source: string | Uint8Array): Buffer {
  return typeof source === "string" ? Buffer.from(source) : Buffer.from(source);
}

function bundleSizeReportPlugin(): Plugin {
  return {
    name: "flash-kanji-bundle-size-report",
    async writeBundle(options, bundle) {
      const entries = Object.values(bundle).map((entry) => {
        const source = entry.type === "chunk" ? entry.code : sourceToBuffer(entry.source);
        const buffer = sourceToBuffer(source);
        return {
          fileName: entry.fileName,
          type: entry.type,
          isEntry: entry.type === "chunk" ? entry.isEntry : false,
          isDynamicEntry: entry.type === "chunk" ? entry.isDynamicEntry : false,
          imports: entry.type === "chunk" ? entry.imports : [],
          dynamicImports: entry.type === "chunk" ? entry.dynamicImports : [],
          rawBytes: buffer.byteLength,
          gzipBytes: gzipSync(buffer).byteLength
        };
      }).sort((left, right) => right.gzipBytes - left.gzipBytes);

      const initialJsGzipBytes = entries
        .filter((entry) => entry.type === "chunk" && entry.isEntry)
        .reduce((total, entry) => total + entry.gzipBytes, 0);
      const totalCssGzipBytes = entries
        .filter((entry) => entry.fileName.endsWith(".css"))
        .reduce((total, entry) => total + entry.gzipBytes, 0);
      const asyncChunks = entries.filter((entry) => entry.type === "chunk" && entry.isDynamicEntry);
      const largestAsyncChunkGzipBytes = asyncChunks.reduce((max, entry) => Math.max(max, entry.gzipBytes), 0);
      const budgets = {
        ...performanceBudgets,
        initialJsWithinBudget: initialJsGzipBytes <= performanceBudgets.initialJsGzipBytes,
        cssWithinBudget: totalCssGzipBytes <= performanceBudgets.totalCssGzipBytes,
        asyncChunksWithinBudget: largestAsyncChunkGzipBytes <= performanceBudgets.asyncChunkGzipBytes
      };
      const report = {
        buildId,
        generatedAt: new Date().toISOString(),
        summary: {
          initialJsGzipBytes,
          totalCssGzipBytes,
          largestAsyncChunkGzipBytes,
          assetCount: entries.length
        },
        budgets,
        entries
      };
      const outputDir = options.dir
        ? (path.isAbsolute(options.dir) ? options.dir : path.resolve(configDir, options.dir))
        : path.resolve(configDir, "dist");
      const reportDir = path.join(outputDir, "reports");
      await mkdir(reportDir, { recursive: true });
      await writeFile(path.join(reportDir, "bundle-size.json"), `${JSON.stringify(report, null, 2)}\n`, "utf8");
      if (process.env.STRICT_PERF_BUDGETS === "1" && (!budgets.initialJsWithinBudget || !budgets.cssWithinBudget || !budgets.asyncChunksWithinBudget)) {
        this.error(`Flash Kanji performance budget exceeded. See ${path.join(reportDir, "bundle-size.json")}`);
      }
    }
  };
}

export default defineConfig({
  appType: "mpa",
  base: "./",
  publicDir: "public",
  plugins: [downloadPageRoutePlugin(), bundleSizeReportPlugin()],
  define: {
    __BUILD_ID__: JSON.stringify(buildId)
  },
  server: {
    port: 4173,
    host: "0.0.0.0"
  },
  preview: {
    port: 4173,
    host: "0.0.0.0"
  },
  build: {
    target: "es2020",
    outDir: "dist",
    emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: false
  }
});
