import { defineConfig } from "vite";

export default defineConfig({
  appType: "spa",
  publicDir: false,
  server: {
    port: 4173,
    host: "0.0.0.0"
  },
  preview: {
    port: 4173,
    host: "0.0.0.0"
  },
  build: {
    target: "es2023",
    outDir: "dist"
  }
});
