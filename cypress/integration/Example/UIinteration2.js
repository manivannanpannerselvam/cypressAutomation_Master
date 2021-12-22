/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Locating Element', function()
{
    // it('verufy types of locator', function()
    // {
    //      cy.visit("http://demo.automationtesting.in/Register.html") // open the application
    //      cy.url().should('include','demo.automationtesting')   //verify URL should  include   'newtours'
         
    //      //checkbox

    //      cy.get("#checkbox1").check().should('be.checked').and('have.value','Cricket')
    //      cy.get("#checkbox2").check().should('be.checked').and('have.value','Movies')
    //      cy.get("#checkbox3").check().should('be.checked').and('have.value','Hockey')

    //      // Uncheckbox
    //      cy.get("#checkbox1").uncheck().should('not.be.checked')
    //      cy.get('#checkbox2').uncheck().should('not.be.checked')
    //      cy.get('#checkbox3').uncheck().should('not.be.checked')

    //      cy.get('input[type=checkbox]').check(['cricket','Hockey'])

    //      cy.get('#Skills').select('Android').should('have.value','Android')

    //      cy.get('#msdd').click()
    //      cy.get('.ui-corner-all').contains('English').click()
    //      cy.get('.ui-corner-all').contains('Croatian').click()

    //      cy.get('span[role=combobox]').click({ force: true})
    //      cy.get('.select2-search__field').type('india')
    //      cy.get('.select2-search__field').type('{enter}')
    // })

    it('verufy types of locator', function()
    {
         cy.visit("http://testautomationpractice.blogspot.com/") // open the application

         cy.xpath(".//button[text()='Click Me']").click()
         cy.on('window:alert',(str) =>
         {
            expect(str).to.equal('Press a button!')
         })
    })

    it('verufy typesss of locator', function()
    {
         cy.visit("https://demo.nopcommerce.com/") // open the application
         
         cy.title().should('eq','nopCommerce demo store')
         cy.xpath(".//a[text()='Register']").click()
         cy.title().should('eq','nopCommerce demo store. Register')
         cy.go('back')
         cy.title().should('eq','nopCommerce demo store')
         cy.go("forward")
         cy.title().should('eq','nopCommerce demo store. Register')
         cy.reload()

        
    })
})

