/// <reference types="cypress" />
/// <reference path="../support/commands.d.ts" />

import HomePage from "../pages/homePage";
import RegistrationPage from "../pages/registrationPage";
import ContactsPage from "../pages/contactsPage";
import { generateEmail } from "../support/dataGenerator.js";

describe("TS_6 Add contact", () => {
  const regPage = new RegistrationPage();
  const homePage = new HomePage();
  const contPage = new ContactsPage();

  const regUser = {
    firstName: "John",
    lastName: "Doe",
    email: generateEmail(),
    password: "pass123",
  };

  before(() => {
    const user = regPage.registerUserIfDoesntExist(regUser);
    homePage.loginUser(user.email, user.password);
  });

  beforeEach(() => {
    cy.useSavedTokenCookie();
  });

  describe("Positive Tests", () => {
    it("TC_6.1 Add a new contact", () => {
      const newContactData = {
        firstName: "Bob",
        lastName: "Marley",
      };
      contPage.visit();
      contPage.getAddNewContactButton().should("be.visible").click();
      contPage.getFirstNameField().should("be.visible").type(newContactData.firstName);
      contPage.getLastNameField().should("be.visible").type(newContactData.lastName);
      contPage.getSubmitButton().should("be.visible").click();
      contPage.getAddNewContactButton().should("be.visible");
      cy.contains("td", `${newContactData.firstName} ${newContactData.lastName}`).should(
        "be.visible"
      );
    });

    it("TC_6.2 Add contact with valid data with all fields", () => {
      const newContactData = {
        firstName: "Bob",
        lastName: "Marley",
        birthdate: "1999-09-09",
        email: "bob@marley.com",
        phone: "123123123",
        street1: "Bob marley street 1",
        street2: "123",
        city: "Los Angeles",
        stateProvince: "California",
        postalCode: "123123",
        country: "United States",
      };

      contPage.visit();
      contPage.getAddNewContactButton().should("be.visible").click();
      contPage.getFirstNameField().should("be.visible").type(newContactData.firstName);
      contPage.getLastNameField().should("be.visible").type(newContactData.lastName);
      contPage.getBirthdateField().should("be.visible").type(newContactData.birthdate);
      contPage.getEmailField().should("be.visible").type(newContactData.email);
      contPage.getPhoneField().should("be.visible").type(newContactData.phone);
      contPage.getStreet1Field().should("be.visible").type(newContactData.street1);
      contPage.getStreet2Field().should("be.visible").type(newContactData.street2);
      contPage.getCityField().should("be.visible").type(newContactData.city);
      contPage.getStateProvinceField().should("be.visible").type(newContactData.stateProvince);
      contPage.getPostalCodeField().should("be.visible").type(newContactData.postalCode);
      contPage.getCountryField().should("be.visible").type(newContactData.country);
      contPage.getSubmitButton().should("be.visible").click();
      contPage.getAddNewContactButton().should("be.visible");
      cy.contains("td", `${newContactData.firstName} ${newContactData.lastName}`).should(
        "be.visible"
      );

      contPage
        .getContactRowByNameAndEmail(
          `${newContactData.firstName} ${newContactData.lastName}`,
          newContactData.email
        )
        .should("exist")
        .first()
        .within(() => {
          cy.get("td")
            .eq(1)
            .should("have.text", `${newContactData.firstName} ${newContactData.lastName}`); // Full Name
          cy.get("td").eq(2).should("have.text", newContactData.birthdate); // Birthdate
          cy.get("td").eq(3).should("have.text", newContactData.email); // Email
          cy.get("td").eq(4).should("have.text", newContactData.phone); // Phone
          cy.get("td")
            .eq(5)
            .should("have.text", `${newContactData.street1} ${newContactData.street2}`); // Address combined
          cy.get("td")
            .eq(6)
            .should(
              "have.text",
              `${newContactData.city} ${newContactData.stateProvince} ${newContactData.postalCode}`
            ); // Location combined
          cy.get("td").eq(7).should("have.text", newContactData.country); // Country
        });
    });
  });
  describe("Negative Tests", () => {
    it("TC_6.3.1 Add contact with empty first name", () => {
      const newContactData = {
        firstName: "Bob",
      };
      contPage.visit();
      contPage.getAddNewContactButton().should("be.visible").click();
      contPage.getFirstNameField().should("be.visible").clear().type(newContactData.firstName);
      contPage.getSubmitButton().should("be.visible").click();
      contPage.getError().should("contain.text", "Contact validation failed").should("be.visible");
    });

    it("TC_6.3.2b Add contact with first name shorter than allowed", () => {
      const newContactData = {
        firstName: "B",
      };
      contPage.visit();
      contPage.getAddNewContactButton().should("be.visible").click();
      contPage.getFirstNameField().should("be.visible").clear();
      contPage.getFirstNameField().should("be.visible").type(newContactData.firstName);
      contPage.getSubmitButton().should("be.visible").click();
      contPage.getError().should("contain.text", "Contact validation failed").should("be.visible");
    });
  });
});
