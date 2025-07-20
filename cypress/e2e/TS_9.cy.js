/// <reference types="cypress" />

import ContactsPage from "../pages/contactsPage";

describe("TS_9 Edge Cases", () => {
  const contPage = new ContactsPage();

  it("TC_9.1 Add contact should not be visible if user is not logged in", () => {
    contPage.visit();
    contPage.getAddNewContactButton().should("not.exist");
    contPage.getLogoutButton().should("not.exist");
  });
});
