/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Locating Element', function()
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
    it('Table Test', function()
    {
         cy.login(this.data.email,this.data.password)
      //   cy.title().should('be.equal','dASHBOARD')
    })

})
