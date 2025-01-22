/// <reference types="cypress" />

describe("Find or Get elements by using different locators", () =>{
    beforeEach(() =>{
        // run before each test case, beforeMethod in testNG
        cy.clearCookies();
        cy.visit('/login');
     })

     it('Check different locators strategies' , () =>{
       // By CSS locators
       cy.get("input[name=username]").type("CydeoStudent"); 
       // every statement creates an object to be interacted, 
       // and next command makes operation to the object created at the previous statement
     
       // attribute name and value
       cy.get("input").each((item, index,list) => {
        // assert the lenght of the list is 2
        expect(list).to.have.length(2); // creating a list
        expect(item).to.have.attr("type")
       }) // clear what is typed


    })
})