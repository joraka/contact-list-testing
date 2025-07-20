/// <reference types="cypress" />

import HomePage from "../pages/homePage";
import RegistrationPage from "../pages/registrationPage";
import { generateEmail } from "../support/dataGenerator";
import ContactsPage from "../pages/contactsPage";

describe("TS_3 Login Page", () => {
  const regPage = new RegistrationPage();
  const homePage = new HomePage();
  const contPage = new ContactsPage();

  it("TC_3.1 Login with valid data", () => {
    const regUser = regPage.registerUserIfDoesntExist();

    homePage.visit();
    cy.intercept('POST', '**/users/login').as('loginRequest');
    homePage.getLoginEmailInput().type(regUser.email);
    homePage.getLoginPasswordInput().type(regUser.password, { parseSpecialCharSequences: false });
    homePage.getLoginButton().click();
    cy.wait('@loginRequest')
    contPage.getHeaderTitle().should("be.visible");
    contPage.getAddNewContactButton().should("be.visible");
  });
});