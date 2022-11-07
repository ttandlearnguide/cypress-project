const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
module.exports = {
  projectId: "5xpqjs"
  // The rest of the Cypress config options go here...
}
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080'
  }
})

    module.exports = defineConfig({
  projectId: '91fyqc',
      e2e: {
        experimentalSessionAndOrigin: false
      }
    })
    module.exports = {
  projectId: '9zcfbj',
      e2e: {
        setupNodeEvents(on, config) {
          require("cypress-localstorage-commands/plugin")(on, config);
          return config;
        },
      },
    };
  
   