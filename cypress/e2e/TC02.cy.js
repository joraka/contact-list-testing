/// <reference types="cypress" />

import HomePage from "../pages/homePage.js";
import RegistrationPage from "../pages/registrationPage.js";
import { generateEmail } from "../support/dataGenerator.js";

describe("TS_2 Register Page", () => {
  const homePage = new HomePage();
  const regPage = new RegistrationPage();

  it("TC_2.1 Register with valid data", () => {
    homePage.visit();
    homePage.getSignUpButton().should("be.visible").click();

    const userObj = {
      firstName: "Bob",
      lastName: "Marley",
      email: generateEmail(),
      password: "pass123",
    };

    regPage.getFirstNameField().should("be.visible").type(userObj.firstName);
    regPage.getLastNameField().should("be.visible").type(userObj.lastName);
    regPage.getEmailField().should("be.visible").type(userObj.email);
    regPage
      .getPasswordField()
      .should("be.visible")
      .type(userObj.password, { parseSpecialCharSequences: false });
    regPage.getSubmitButton().should("be.visible").click();
  });
});
