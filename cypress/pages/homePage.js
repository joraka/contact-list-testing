/// <reference types="Cypress" />

class homePage {
  visit() {
    return cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
  }

  getHeaderTitle() {
    return cy.contains('h1', "Contact List App");
  }
}

export default homePage;
