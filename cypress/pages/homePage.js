/// <reference types="cypress" />

class HomePage {
  urlPath = "/";

  visit() {
    return cy.visit(this.urlPath);
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

  getSignUpButton() {
    return cy.contains("button#signup", "Sign up");
  }

  getFooter() {
    return cy.get("footer");
  }

  loginUser(email, password) {
    this.visit();
    this.getLoginEmailInput().type(email);
    this.getLoginPasswordInput().type(password, { parseSpecialCharSequences: false });
    this.getLoginButton().click();

    cy.getCookie("token").then((cookie) => {
      Cypress.env("savedToken", cookie);
    });
  }
}

export default HomePage;
