const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1440, //Global Viewport can changed here
    viewportHeight: 900,
    defaultCommandTimeout: 70000, //Global wait time can be changed here
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
