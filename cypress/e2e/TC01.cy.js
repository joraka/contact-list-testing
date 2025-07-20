/// <reference types="cypress" />

import HomePage from "../pages/homePage";

describe("TS_1 Home Page", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    homePage.visit();
  });

  it("TC_1.1.1 Page loads in less than 3 seconds", () => {
    cy.window().then((win) => {
      const [nav] = win.performance.getEntriesByType("navigation");
      const loadTime = nav.loadEventEnd - nav.startTime;
      expect(loadTime).to.be.lessThan(3000);
    });
  });

  it("TC_1.1.2 Header is visible", () => {
    homePage.getHeaderTitle().should("be.visible");
  });

  it("TC_1.1.3 Login forms are visible", () => {
    homePage.getLoginEmailInput().should("be.visible");
    homePage.getLoginPasswordInput().should("be.visible");
    homePage.getLoginButton().should("be.visible");
  });

  it("TC_1.1.4 Signup button is visible", () => {
    homePage.getSignUpButton().should("be.visible");
  });

  it("TC_1.1.5 Copyright footer is visible", () => {
    homePage.getFooter().should("contain.text", "Created by Kristin Jackvony, Copyright").should("be.visible");
  });
});
