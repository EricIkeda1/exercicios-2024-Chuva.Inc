module.exports = {
  e2e: {
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
};
