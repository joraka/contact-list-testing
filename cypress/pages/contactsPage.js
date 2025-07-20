/// <reference types="cypress" />

class ContactsPage {
  urlPath = "/contactList";

  visit() {
    return cy.visit(this.urlPath);
  }

  getFirstContactRow() {
    return cy.get("tr.contactTableBodyRow").first();
  }

  getEditContactButton() {
    return cy.get("button#edit-contact");
  }

  getHeaderTitle() {
    return cy.contains("header h1", "Contact List");
  }

  getAddNewContactButton() {
    return cy.get("button#add-contact");
  }

  getLogoutButton() {
    return cy.get("button#logout");
  }

  getFirstNameField() {
    return cy.get("input#firstName");
  }

  getLastNameField() {
    return cy.get("input#lastName");
  }

  getSubmitButton() {
    return cy.get("button#submit");
  }

  getBirthdateField() {
    return cy.get("input#birthdate");
  }

  getEmailField() {
    return cy.get("input#email");
  }

  getPhoneField() {
    return cy.get("input#phone");
  }

  getStreet1Field() {
    return cy.get("input#street1");
  }

  getStreet2Field() {
    return cy.get("input#street2");
  }

  getCityField() {
    return cy.get("input#city");
  }

  getStateProvinceField() {
    return cy.get("input#stateProvince");
  }

  getPostalCodeField() {
    return cy.get("input#postalCode");
  }

  getCountryField() {
    return cy.get("input#country");
  }

  getError() {
    return cy.get("span#error");
  }

  getDeleteContactButton() {
    return cy.get("button#delete");
  }

  getContactRowByNameAndEmail(fullName, email) {
    return cy.get("tr.contactTableBodyRow").filter((index, row) => {
      const cells = Cypress.$(row).find("td");
      return (
        cells.eq(1).text().trim() === fullName &&
        (email ? cells.eq(3).text().trim() === email : true)
      );
    });
  }

  createContact(newContactData) {
    this.visit();
    this.getAddNewContactButton().click();
    this.getFirstNameField().type(newContactData.firstName);
    this.getLastNameField().type(newContactData.lastName);
    cy.intercept("POST", "**/contacts").as("createContactRequest");
    this.getSubmitButton().click();
    cy.wait("@createContactRequest");
  }
}

export default ContactsPage;
