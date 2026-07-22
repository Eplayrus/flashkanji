import { defineConfig } from "vite";

const buildId = process.env.GITHUB_SHA?.slice(0, 12) || `local-${Date.now()}`;

export default defineConfig({
  appType: "spa",
  base: "./",
  publicDir: "public",
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
