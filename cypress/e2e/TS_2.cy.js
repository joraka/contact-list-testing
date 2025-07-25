/// <reference types="cypress" />

import HomePage from "../pages/homePage.js";
import RegistrationPage from "../pages/registrationPage.js";
import ContactsPage from "../pages/contactsPage.js";
import { generateEmail } from "../support/dataGenerator.js";

describe("TS_2 Register Page", () => {
  beforeEach(() => {
    homePage.visit();
    homePage.getSignUpButton().click();
  });

  const homePage = new HomePage();
  const regPage = new RegistrationPage();
  const contPage = new ContactsPage();

  describe("Positive Tests", () => {
    it("TC_2.1 Register with valid data", () => {
      const user = {
        firstName: "Bob",
        lastName: "Marley",
        email: generateEmail(),
        password: "pass123",
      };

      regPage.getFirstNameField().should("be.visible").type(user.firstName);
      regPage.getLastNameField().should("be.visible").type(user.lastName);
      regPage.getEmailField().should("be.visible").type(user.email);
      regPage
        .getPasswordField()
        .should("be.visible")
        .type(user.password, { parseSpecialCharSequences: false });
      regPage.getSubmitButton().should("be.visible").click();
      contPage.getHeaderTitle().should("be.visible");
      contPage.getAddNewContactButton().should("be.visible");
    });
  });

  describe("Negative tests", () => {
    it("TC_2.2.1.1 Register with empty first name", () => {
      const user = {
        lastName: "Marley",
        email: generateEmail(),
        password: "pass123",
      };

      regPage.getLastNameField().should("be.visible").type(user.lastName);
      regPage.getEmailField().should("be.visible").type(user.email);
      regPage
        .getPasswordField()
        .should("be.visible")
        .type(user.password, { parseSpecialCharSequences: false });
      regPage.getSubmitButton().should("be.visible").click();
      regPage.getError().should("contain.text", "User validation failed").should("be.visible");
    });

    it("TC_2.2.1.2 Register with first name longer than allowed", () => {
      const user = {
        firstName: "Bobobobobobobobobobobobobobobobobobobobobobobob",
        lastName: "Marley",
        email: generateEmail(),
        password: "pass123",
      };

      regPage.getFirstNameField().should("be.visible").type(user.firstName);
      regPage.getLastNameField().should("be.visible").type(user.lastName);
      regPage.getEmailField().should("be.visible").type(user.email);
      regPage
        .getPasswordField()
        .should("be.visible")
        .type(user.password, { parseSpecialCharSequences: false });
      regPage.getSubmitButton().should("be.visible").click();
      regPage.getError().should("contain.text", "User validation failed").should("be.visible");
    });

    it("TC_2.2.2.1 Register with empty last name", () => {
      const user = {
        firstName: "Bobobobobobobobobobobobobobobobobobobobobobobob",
        email: generateEmail(),
        password: "pass123",
      };

      regPage.getFirstNameField().should("be.visible").type(user.firstName);
      regPage.getEmailField().should("be.visible").type(user.email);
      regPage
        .getPasswordField()
        .should("be.visible")
        .type(user.password, { parseSpecialCharSequences: false });
      regPage.getSubmitButton().should("be.visible").click();
      regPage.getError().should("contain.text", "User validation failed").should("be.visible");
    });

    it("TC_2.2.3.1 Register with empty email", () => {
      const user = {
        firstName: "Bob",
        lastName: "Marley",
        password: "pass123",
      };

      regPage.getFirstNameField().should("be.visible").type(user.firstName);
      regPage.getLastNameField().should("be.visible").type(user.lastName);
      regPage
        .getPasswordField()
        .should("be.visible")
        .type(user.password, { parseSpecialCharSequences: false });
      regPage.getSubmitButton().should("be.visible").click();
      regPage.getError().should("contain.text", "User validation failed").should("be.visible");
    });

    it("TC_2.2.3.2 Register with email longer than allowed", () => {
      const user = {
        firstName: "Bob",
        lastName: "Marley",
        email: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbob@bob.com",
        password: "pass123",
      };

      regPage.getFirstNameField().should("be.visible").type(user.firstName);
      regPage.getLastNameField().should("be.visible").type(user.lastName);
      regPage.getEmailField().should("be.visible").type(user.email);
      regPage
        .getPasswordField()
        .should("be.visible")
        .type(user.password, { parseSpecialCharSequences: false });
      regPage.getSubmitButton().should("be.visible").click();
      regPage.getError().should("contain.text", "User validation failed").should("be.visible");
    });

    it("TC_2.2.3.3 Register with invalid email format", () => {
      const user = {
        firstName: "Bob",
        lastName: "Marley",
        email: "bob.bob.com",
        password: "pass123",
      };

      regPage.getFirstNameField().should("be.visible").type(user.firstName);
      regPage.getLastNameField().should("be.visible").type(user.lastName);
      regPage.getEmailField().should("be.visible").type(user.email);
      regPage
        .getPasswordField()
        .should("be.visible")
        .type(user.password, { parseSpecialCharSequences: false });
      regPage.getSubmitButton().should("be.visible").click();
      regPage.getError().should("contain.text", "User validation failed").should("be.visible");
    });

    it("TC_2.2.3.4 Register with email that already exists", () => {
      const user = {
        firstName: "Bob",
        lastName: "Marley",
        email: "bobmarley123@marley.com",
        password: "pass123",
      };

      regPage.registerUserIfDoesntExist(user);

      regPage.visit();
      regPage.getFirstNameField().should("be.visible").type(user.firstName);
      regPage.getLastNameField().should("be.visible").type(user.lastName);
      regPage.getEmailField().should("be.visible").type(user.email);
      regPage
        .getPasswordField()
        .should("be.visible")
        .type(user.password, { parseSpecialCharSequences: false });
      regPage.getSubmitButton().should("be.visible").click();
      regPage
        .getError()
        .should("contain.text", "Email address is already in use")
        .should("be.visible");
    });

    it("TC_2.2.4.1 Register with no password", () => {
      const user = {
        firstName: "Bob",
        lastName: "Marley",
        email: generateEmail(),
      };

      regPage.getFirstNameField().should("be.visible").type(user.firstName);
      regPage.getLastNameField().should("be.visible").type(user.lastName);
      regPage.getEmailField().should("be.visible").type(user.email);
      regPage.getSubmitButton().should("be.visible").click();
      regPage.getError().should("contain.text", "User validation failed").should("be.visible");
    });

    it("TC_2.2.4.2 Register with password shorter than allowed", () => {
      const user = {
        firstName: "Bob",
        lastName: "Marley",
        email: generateEmail(),
        password: "p",
      };

      regPage.getFirstNameField().should("be.visible").type(user.firstName);
      regPage.getLastNameField().should("be.visible").type(user.lastName);
      regPage.getEmailField().should("be.visible").type(user.email);
      regPage
        .getPasswordField()
        .should("be.visible")
        .type(user.password, { parseSpecialCharSequences: false });
      regPage.getSubmitButton().should("be.visible").click();
      regPage.getError().should("contain.text", "User validation failed").should("be.visible");
    });

    it("TC_2.2.4.3 Register with password longer than allowed", () => {
      const user = {
        firstName: "Bob",
        lastName: "Marley",
        email: generateEmail(),
        password:
          "passpasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspasspass",
      };

      regPage.getFirstNameField().should("be.visible").type(user.firstName);
      regPage.getLastNameField().should("be.visible").type(user.lastName);
      regPage.getEmailField().should("be.visible").type(user.email);
      regPage
        .getPasswordField()
        .should("be.visible")
        .type(user.password, { parseSpecialCharSequences: false });
      regPage.getSubmitButton().should("be.visible").click();
      regPage.getError().should("contain.text", "User validation failed").should("be.visible");
    });
  });
});
