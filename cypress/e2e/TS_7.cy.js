/// <reference types="cypress" />
/// <reference path="../support/commands.d.ts" />

import HomePage from "../pages/homePage";
import RegistrationPage from "../pages/registrationPage";
import ContactsPage from "../pages/contactsPage";
import { generateEmail } from "../support/dataGenerator";

describe("TS_7 Edit Contact", () => {
  const homePage = new HomePage();
  const regPage = new RegistrationPage();
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
    it("TC_7.1 Edit contact with valid data, first name and last name only", () => {
      const newContractData = {
        firstName: "Bob",
        lastName: "Marley",
      };

      contPage.createContact(newContractData);

      const updatedContactData = {
        firstName: "Andrew",
        lastName: "Anderson",
      };

      contPage.visit();
      cy.contains("td", `${newContractData.firstName} ${newContractData.lastName}`)
        .first()
        .should("be.visible")
        .click();
      contPage.getEditContactButton().should("be.visible").click();
      cy.wait(500);
      contPage.getFirstNameField().should("be.visible").clear().type(updatedContactData.firstName);
      contPage.getLastNameField().should("be.visible").clear().type(updatedContactData.lastName);
      contPage.getSubmitButton().should("be.visible").click();
      cy.wait(500);
      cy.get("#firstName").should("have.text", updatedContactData.firstName).should("be.visible");
      cy.get("#lastName").should("have.text", updatedContactData.lastName).should("be.visible");
    });

    it("TC_7.2 Edit contact with valid data with all fields", () => {
      const newContractData = {
        firstName: "Bob",
        lastName: "Marley",
      };

      contPage.createContact(newContractData);

      const updatedContactData = {
        firstName: "Andrew",
        lastName: "Anderson",
        birthdate: "1990-01-01",
        email: "andrew.anderson@example.com",
        phone: "1234567890",
        street1: "123 Main St",
        street2: "Apt 4B",
        city: "New York",
        stateProvince: "NY",
        postalCode: "10001",
        country: "USA",
      };

      contPage.visit();
      cy.contains("td", `${newContractData.firstName} ${newContractData.lastName}`)
        .first()
        .should("be.visible")
        .click();
      contPage.getEditContactButton().should("be.visible").click();
      cy.wait(500);
      contPage.getFirstNameField().should("be.visible").clear().type(updatedContactData.firstName);
      contPage.getLastNameField().should("be.visible").clear().type(updatedContactData.lastName);
      contPage.getBirthdateField().should("be.visible").clear().type(updatedContactData.birthdate);
      contPage.getEmailField().should("be.visible").clear().type(updatedContactData.email);
      contPage.getPhoneField().should("be.visible").clear().type(updatedContactData.phone);
      contPage.getStreet1Field().should("be.visible").clear().type(updatedContactData.street1);
      contPage.getStreet2Field().should("be.visible").clear().type(updatedContactData.street2);
      contPage.getCityField().should("be.visible").clear().type(updatedContactData.city);
      contPage
        .getStateProvinceField()
        .should("be.visible")
        .clear()
        .type(updatedContactData.stateProvince);
      contPage
        .getPostalCodeField()
        .should("be.visible")
        .clear()
        .type(updatedContactData.postalCode);
      contPage.getCountryField().should("be.visible").clear().type(updatedContactData.country);
      contPage.getSubmitButton().should("be.visible").click();

      cy.wait(500);

      cy.get("span#firstName")
        .should("have.text", updatedContactData.firstName)
        .should("be.visible");
      cy.get("span#lastName").should("have.text", updatedContactData.lastName).should("be.visible");
      cy.get("span#birthdate")
        .should("have.text", updatedContactData.birthdate)
        .should("be.visible");
      cy.get("span#email").should("have.text", updatedContactData.email).should("be.visible");
      cy.get("span#phone").should("have.text", updatedContactData.phone).should("be.visible");
      cy.get("span#street1").should("have.text", updatedContactData.street1).should("be.visible");
      cy.get("span#street2").should("have.text", updatedContactData.street2).should("be.visible");
      cy.get("span#city").should("have.text", updatedContactData.city).should("be.visible");
      cy.get("span#stateProvince")
        .should("have.text", updatedContactData.stateProvince)
        .should("be.visible");
      cy.get("span#postalCode")
        .should("have.text", updatedContactData.postalCode)
        .should("be.visible");
      cy.get("span#country").should("have.text", updatedContactData.country).should("be.visible");
    });
  });

  describe("Negative Tests", () => {
    it("TC_7.3.1 Edit contact with empty first name", () => {
      const newContractData = {
        firstName: "Bob",
        lastName: "Marley",
      };

      contPage.createContact(newContractData);

      contPage.visit();
      cy.contains("td", `${newContractData.firstName} ${newContractData.lastName}`)
        .first()
        .should("be.visible")
        .click();
      contPage.getEditContactButton().should("be.visible").click();
      cy.wait(500);
      contPage.getFirstNameField().should("be.visible").clear();
      contPage.getSubmitButton().should("be.visible").click();
      contPage.getError().should("contain.text", "Validation failed").should("be.visible");
    });
  });
});
