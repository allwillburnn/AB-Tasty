import { helpers } from "../helpers";
import { loginPage } from "../pageObjectModels/login.page";

describe("US-1-1", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Im properly logged in with a valid email and password (+MFA) for all cases", () => {
        helpers.typeTextIntoField(loginPage.emailField, "test@gmail.com");
        helpers.typeTextIntoField(loginPage.emailField, "qwe123");
        helpers.clickOnElement(loginPage.signInButton);
        // No further steps due not having a valid account with MFA
    });
});
