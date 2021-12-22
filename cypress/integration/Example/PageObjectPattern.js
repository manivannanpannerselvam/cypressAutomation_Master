/// <reference types="cypress" />


import LoginPage from "../PageObjects/LoginPage";

describe('Test suite', function()
{
    before(function()
    {
        // open the application
         cy.log("Before Function")
         cy.fixture('example').then(function(data)
         {
             this.data = data
         })
    })
    it('Valid Login Test', function()
    {
        const lp=new LoginPage()
        lp.visit()
        lp.fillEmail(this.data.email)
        lp.fillpassword(this.data.password)
        lp.submit()
       // cy.title().should('be.equal','')

    })
})