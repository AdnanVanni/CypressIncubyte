const { defineConfig } = require("cypress");
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin = require('@bahmutov/cypress-esbuild-plugin');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const cypressSplit = require("cypress-split");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // First, use the esbuild plugin for pre-processing
      on("file:preprocessor", 
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      
      // Add the Cucumber preprocessor plugin
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      
      // Then, use cypress-split plugin
      cypressSplit(on, config);
      
      // Return the updated config
      return config;
    },
    
    specPattern: ["**/signup.feature", "**/login.feature"]
    //test
    
  },
});
