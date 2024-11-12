const { defineConfig } = require("cypress");

const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  watchForFileChanges:false,
  e2e: {
   
    specPattern: "**/*.feature",
    projectId: "dk15yx",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
});
