/// <reference types="cypress" />

import HomePage from "./homePage";

import { generateEmail } from "../support/dataGenerator";

class RegistrationPage {
  urlPath = "/addUser";

  visit() {
    return cy.visit(this.urlPath);
  }

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

  getError() {
    return cy.get("span#error");
  }

  registerUserIfDoesntExist(user, clearCookies = true) {
    if (!user) {
      user = {
        firstName: "Bob",
        lastName: "Marley",
        email: generateEmail(),
        password: "pass123",
      };
    }

    this.visit();
    this.getFirstNameField().type(user.firstName);
    this.getLastNameField().type(user.lastName);
    this.getEmailField().type(user.email);
    this.getPasswordField().type(user.password, { parseSpecialCharSequences: false });
    cy.intercept("POST", "/users").as("registerRequestInterception");
    this.getSubmitButton().click();
    cy.wait("@registerRequestInterception");

    if (clearCookies) {
      cy.clearCookies();
    }
  }
}

export default RegistrationPage;
