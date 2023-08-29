import { helpers } from "../helpers";
import { loginPage } from "../pageObjectModels/login.page";
import { resetPage } from "../pageObjectModels/reset-password.page";

describe("US-1-1", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Im properly logged in with a valid email and password (+MFA) for all cases", () => {
        helpers.typeTextIntoField(loginPage.emailField, "test@gmail.com");
        helpers.typeTextIntoField(loginPage.passwordField, "qwe123");
        helpers.clickOnElement(loginPage.signInButton);
        // No further steps due not having a valid account with MFA
    });

    it("The user should get an ability to reset password (an email with reset link)", () => {
        helpers.clickOnElement(loginPage.forgotPasswordButton);
        helpers.checkUrl("https://app2.abtasty.com/reset-password");
        helpers.typeTextIntoField(resetPage.emailField, "test@gmail.com");
        helpers.clickOnElement(resetPage.sendResetLinkButton);
        helpers.verifyElementIsVisible(resetPage.successEmailMessage);
    });
});
