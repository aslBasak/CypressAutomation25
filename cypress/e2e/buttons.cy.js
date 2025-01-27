/// <reference types="cypress" />

describe("Context : My first Tests", () =>{
  
    beforeEach(() =>{
       
       cy.clearCookies();
       cy.visit('/multiple_buttons');
    })
    
    it('Check different button actions', () => {
        // select a button with text
        cy.contains('Button 2').should('be.visible').click();
        //Timed out retrying after 5000ms: expected '<button#wooden_spoon.btn.btn-primary>' to contain 'login'

        // find element with class attribute and create a list then select 3rd element from the list
        cy.get('button.btn.btn-primary').then(($buttons) => {
            cy.wrap($buttons).eq(2).click(); // zero index list now
            // in list java, list.get(index)
            // assert the text
            cy.contains('Clicked on button three!').should('be.visible');
        })
        // you got all buttons
        cy.get('button').each((item, index, list) => {
            // assert length of the list, verify number of buttons
            expect(list).to.have.length(6);
            expect(item).to.have.attr("onclick");
        })
        // I will get all buttons like previous approach, get only the item then check for text of each item,
        // if it is equal to button 4, then click on it
        cy.get('button').each((item) => {
            if(item.text() == 'Button 4'){
                cy.log(item.text());  // this command write the text at the test console
                // item.click(); you cannot use cypress click function on jquery element
                cy.wrap(item).click();
                cy.contains('click on button four!').should('be.visible');
            }
        })
})
})