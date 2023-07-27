const { defineConfig } = require("cypress");
const cypressSplit = require('cypress-split')
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      // implement node event listeners here
      return config
    },
  },
});
