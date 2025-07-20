/// <reference types="cypress" />

import HomePage from "../pages/homePage";
import RegistrationPage from "../pages/registrationPage";
import { generateEmail } from "../support/dataGenerator";
import ContactsPage from "../pages/contactsPage";

describe("TS_4 Logout", () => {
  const regPage = new RegistrationPage();
  const homePage = new HomePage();
  const contPage = new ContactsPage();

  it("TC_4.1 Log out", () => {
    const user = {
      firstName: "Bob",
      lastName: "Marley",
      email: generateEmail(),
      password: "pass123",
    };

    regPage.registerUserIfDoesntExist(user);
    homePage.loginUser(user.email, user.password);
    
    contPage.visit();
    contPage.getLogoutButton().should("be.visible").click();
    homePage.getHeaderTitle().should("be.visible");
  });
});
