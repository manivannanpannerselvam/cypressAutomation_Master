/// <reference types="cypress" />
/// <reference types="cypress-xpath" />


describe('Locating Element', function()
{
    it('verufy types of locator', function()
    {
         cy.visit("http://demo.guru99.com/test/newtours/") // open the application
         cy.url().should('include','newtours')   //verify URL should  include   'newtours'
         cy.get("input[name='userName']").should('be.visible').should('be.enabled').type("Mercury")
         cy.get("input[name='password']").should('be.visible').should('be.enabled').type('mercury')
         cy.get("input[name='submit']").should('be.visible').should('be.enabled').click()
      ///   cy.title().should('eq','Find a Flight')
         cy.xpath(".//a[text()='Flights']").click()
         cy.get("input[value='roundtrip']").should('be.visible').should('be.checked')
         cy.get("input[value='oneway']").should('be.visible').should('not.be.checked').click()
         cy.get("input[name='findFlights']").should('be.enabled').click()
      //   cy.title().should('eq','Home')
         
         
         
      //   cy.get("input[type=text].search-box-text.ui-autocomplete-input").type("Apple MacBook Pro 13-inch")

    })
}
)
