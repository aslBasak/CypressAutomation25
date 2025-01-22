/// <reference types="cypress" />

describe("Context : My first Tests", () =>{
    before (() => {
        // runs once before all test cases in this describe block, like beforeClass in TestNG
    })
    beforeEach(() =>{
       // run before each test case, beforeMethod in testNG
       cy.clearCookies();
    })
    after(() => {
        // similar to afterClass in TestNG, runs once after all tests finished
    })
    afterEach(() =>{
        // similear to afterMethod in TestNG
    })
    it('Opening a web application', () => {
        cy.visit('https://practice.cydeo.com/');
    })
    it('Test2', () => {
        expect(false).to.equal(false);
    })
    it('Test3', () => {
        expect(false).not.to.equal(true);
    })
    it('Test4', () => {
        expect(5).to.equal(5);
    })

})