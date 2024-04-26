import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    projectId: "ec189971-7e2d-4dbf-93e5-594eea64dcc5",
    setupNodeEvents(on, config) {
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
