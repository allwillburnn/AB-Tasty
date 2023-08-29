class Helpers {
    typeTextIntoField(element: string, text: string): void {
        cy.xpath(element).type(text);
    }

    clickOnElement(element: string): void {
        cy.xpath(element).click();
    }

    checkUrl(expectedUrl: string): void {
        cy.url().should("equal", expectedUrl);
    }

    verifyElementIsVisible(element: string): void {
        cy.xpath(element).should("be.visible");
    }
}

export const helpers: Helpers = new Helpers();
