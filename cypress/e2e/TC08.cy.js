/// <reference types="cypress" />
/// <reference path="../support/commands.d.ts" />

import HomePage from "../pages/homePage";
import RegistrationPage from "../pages/registrationPage";
import ContactsPage from "../pages/contactsPage";

describe("TS_8 Delete Contact", () => {
  const homePage = new HomePage();
  const regPage = new RegistrationPage();
  const contPage = new ContactsPage();

  before(() => {
    const user = regPage.registerUserIfDoesntExist();
    homePage.loginUser(user.email, user.password);
  });

  beforeEach(() => {
    cy.useSavedTokenCookie();
  });

  it("TC_8.1 Delete contact", () => {
    const contactData = {
      firstName: "Bob",
      lastName: "Marley",
    };

    contPage.createContact(contactData);

    contPage.visit();

    cy.on("window:confirm", (str) => {
      expect(str).to.equal("Are you sure you want to delete this contact?");
      return true;
    });

    cy.contains("td", `${contactData.firstName} ${contactData.lastName}`)
      .first()
      .should("be.visible")
      .click();

    cy.wait(500);

    cy.intercept("GET", "**/contacts").as("getContacts");
    contPage.getDeleteContactButton().should("be.visible").click();
    cy.wait("@getContacts");
    cy.contains("td", `${contactData.firstName} ${contactData.lastName}`).should("not.exist");
  });
});
