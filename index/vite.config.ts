import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";

const buildId = process.env.GITHUB_SHA?.slice(0, 12) || `local-${Date.now()}`;

function isDownloadRoute(url = "") {
  const pathname = url.split(/[?#]/, 1)[0];
  return pathname === "/download" || pathname === "/download/";
}

function downloadPageRoutePlugin(): Plugin {
  return {
    name: "flash-kanji-download-page-route",
    configureServer(server) {
      const htmlPath = fileURLToPath(new URL("./public/download/index.html", import.meta.url));
      server.middlewares.use(async (request, response, next) => {
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
      });
    },
    configurePreviewServer(server) {
      const htmlPath = fileURLToPath(new URL("./dist/download/index.html", import.meta.url));
      server.middlewares.use(async (request, response, next) => {
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
      });
    }
  };
}

export default defineConfig({
  appType: "mpa",
  base: "./",
  publicDir: "public",
  plugins: [downloadPageRoutePlugin()],
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
    target: "es2018",
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false
  }
});
