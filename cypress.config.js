const { defineConfig } = require("cypress");
const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1440, //Global Viewport can changed here
    viewportHeight: 900,
    defaultCommandTimeout: 70000, //Global wait time can be changed here
    setupNodeEvents(on, config) {
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        }
      });
    }
  },
  experimentalWebKitSupport: true,
  "projectId": 'your_prj_id',
  "env": {
    //Global object value pair can be added here
  },
});
