/// <reference types="Cypress" />

import HomePage from "../support/pageObjects/HomePage";

describe('TS_1 Home Page', () => {
  const pm = new HomePage();

  it('TC_1.1.1 Page loads in less than 3 seconds', () => {
    const start = Date.now();
    pm.visit().then(() => {
      const duration = (Date.now() - start) / 1000;
      expect(duration).to.be.lessThan(3, "Must be less than 3 seconds")
    });
  })

  it('TC_1.1.2 Header is visible', () => {
    pm.visit();
    pm.getHeaderTitle().should('have.text', 'Contact List App').should('be.visible');
  })

  it('TC_1.1.3 Login forms are visible', () => {
    pm.visit();
    cy.get('input#email').should('be.visible');
    cy.get('input#password').should('be.visible');
    cy.contains('button#submit', "Submit").should('be.visible');
  })

  it('TC_1.1.4 Signup button is visible', () => {
    pm.visit();
    cy.contains('button#signup', "Sign up").should('be.visible');
  })
})