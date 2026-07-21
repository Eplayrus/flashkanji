import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 45_000,
  fullyParallel: false,
  retries: process.env.CI ? 1 : 0,
  reporter: "line",
  use: {
    baseURL: "http://127.0.0.1:4180",
    viewport: { width: 390, height: 844 },
    trace: "retain-on-failure"
  },
  projects: [{ name: "mobile-chromium", use: { ...devices["Pixel 5"] } }],
  webServer: {
    command: "npm run preview -- --port 4180",
    url: "http://127.0.0.1:4180",
    reuseExistingServer: false,
    timeout: 120_000
  }
});
