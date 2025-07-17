/// <reference types="cypress" />

import HomePage from "../pages/homePage";

describe("TS_1 Home Page", () => {
  const pm = new HomePage();

  beforeEach(() => {
    pm.visit();
  });

  it("TC_1.1.1 Page loads in less than 3 seconds", () => {
    cy.window().then((win) => {
      const [nav] = win.performance.getEntriesByType("navigation");
      const loadTime = nav.loadEventEnd - nav.startTime;
      expect(loadTime).to.be.lessThan(3000);
    });
  });

  it("TC_1.1.2 Header is visible", () => {
    pm.getHeaderTitle().should("have.text", "Contact List App").should("be.visible");
  });

  it("TC_1.1.3 Login forms are visible", () => {
    pm.getLoginEmailInput().should("be.visible");
    pm.getLoginPasswordInput().should("be.visible");
    pm.getLoginButton().should("be.visible");
  });

  it("TC_1.1.4 Signup button is visible", () => {
    pm.getSignUpButton().should("be.visible");
  });
});
