import { defineConfig } from "cypress";
export default defineConfig({
  env: {
    screenshotsFolder: "./cypress/snapshots/actual",
    trashAssetsBeforeRuns: true,
    video: true,
    failSilently: false,
  },

  retries: {
    runMode: 0,
    openMode: 0,
  },

  viewportWidth: 1280,
  viewportHeight: 800,

  e2e: {
    baseUrl: 'http://localhost:4200',
  },
});

