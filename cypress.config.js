import { defineConfig } from "cypress";
import mochawesome from "cypress-mochawesome-reporter/plugin.js";

export default defineConfig({
  e2e: {
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      mochawesome(on); // initialize the reporter plugin
      return config;
    },
  },
});
