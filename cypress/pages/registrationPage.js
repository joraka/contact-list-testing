/// <reference types="cypress" />

class RegistrationPage {
  getFirstNameField() {
    return cy.get("#add-user #firstName");
  }

  getLastNameField() {
    return cy.get("#add-user #lastName");
  }

  getEmailField() {
    return cy.get("#add-user #email");
  }

  getPasswordField() {
    return cy.get("#add-user #password");
  }

  getSubmitButton() {
    return cy.get("button#submit");
  }

  getCancelButton() {
    return cy.get("button#cancel");
  }
}

export default RegistrationPage;
