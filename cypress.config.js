const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  experimentalWebKitSupport: true,
  "projectId": 'your_prj_id',
  "env": {
    //Global object value pair can be added here
  },
});
