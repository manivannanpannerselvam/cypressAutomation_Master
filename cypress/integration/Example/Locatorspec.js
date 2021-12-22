/// <reference types="cypress" />
describe('Locating Element', function()
{
    it('verufy types of locator', function()
    {
         cy.visit("https://demo.nopcommerce.com/") // open the application
         cy.get("input[type=text].search-box-text.ui-autocomplete-input").should('be.visible').should('be.enabled').type("Apple MacBook Pro 13-inch")
      //   cy.get("input[type=text].search-box-text.ui-autocomplete-input").type("Apple MacBook Pro 13-inch")
         cy.get("button[type=submit].button-1.search-box-button").click()
         cy.get("button[type=button].button-2.product-box-add-to-cart-button").click()
         cy.get(".qty-input").clear().type('3')
         cy.get("button[type=button].button-1.add-to-cart-button").click()
      //   cy.get(".//span[text()='Shopping cart']").click()
         cy.get(".ico-cart").click()
         cy.get(".product-unit-price").contains('$1,800.00')
        
    })
}
)