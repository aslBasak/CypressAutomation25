/// <reference types="cypress" />

describe("Find or Get elements by using different locators", () => {
    beforeEach(() => {
        // run before each test case, beforeMethod in testNG
        cy.clearCookies();
        cy.visit('/login');
     })

     it('Check different locators strategies' , () => {
       // By CSS locators
       cy.get("input[name=username]").type("cydeostudent"); 
       // every statement creates an object to be interacted, 
       // and next command makes operation to the object created at the previous statement
     
       // attribute name and value
       cy.get("input").each((item, index,list) => {

        // tagName
        // assert the lenght of the list is 2
        expect(list).to.have.length(2); // creating a list
        expect(item).to.have.attr("type")
       }) // clear what is typed

       // by attribute name
       cy.get('[type]');

       // by className - class attribute Value
       cy.get('.btn.btn-primary');

       // by id
       cy.get("#wooden_spoon");

       // if I want to use text: no xpath in cypress, but it still possible with a different approach
       cy.get('button').should('contain','Login').click();


    })
})