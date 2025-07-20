// cypress/support/commands.d.ts
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Sets the 'token' cookie from Cypress.env('TOKEN') if available.
       */
      useSavedTokenCookie(): Chainable<void>;
    }
  }
}

export {};
