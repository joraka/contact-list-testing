import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
