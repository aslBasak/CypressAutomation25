/// <reference types="cypress" />

describe("Navigate to registration page", () => {
    beforeEach(() => {
        // run before each test case, beforeMethod in testNG
        cy.clearCookies();
        cy.visit('/registration_form');
    });
    it('Check different input box fields and verify'), () => {

        // fill the form for username and other info
        cy.get('input[name = "firstname"]').type('Mike');
        cy.get('input[name = "lastname"]').type('Brown');
        cy.get('input[name = "username"]').type('CrazyHeart');
        /**
         * Math.random(): creates a number between 0- 1 ~ 0.005678
         * Math.floor: makes it a whole number
         */

        // let email = `formTest${Math.floor(10000+Math.random()*9000000)}@cydeo.com`;
        // cy.get('input[name="email"]').type(email);
        console.log(process);

    }
})
