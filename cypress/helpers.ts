class Helpers {
    typeTextIntoField(element: string, text: string): void {
        cy.xpath(element).type(text);
    }

    clickOnElement(element: string): void {
        cy.xpath(element).click();
    }
}

export const helpers: Helpers = new Helpers();
