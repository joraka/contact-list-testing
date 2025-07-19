/// <reference types="cypress" />

class ContactsPage {
  getHeaderTitle() {
    return cy.contains("header h1", "Contact List");
  }

  getAddNewContactButton() {
    return cy.get("button#add-contact");
  }
}

export default ContactsPage;
