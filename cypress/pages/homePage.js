/// <reference types="cypress" />

class homePage {
  visit() {
    return cy.visit("/");
  }

  getHeaderTitle() {
    return cy.contains("h1", "Contact List App");
  }

  getLoginEmailInput() {
    return cy.get("input#email");
  }

  getLoginPasswordInput() {
    return cy.get("input#password");
  }

  getLoginButton() {
    return cy.contains("button#submit", "Submit");
  }

  getSignUpButton(){
    return cy.contains("button#signup", "Sign up");
  }
}

export default homePage;
