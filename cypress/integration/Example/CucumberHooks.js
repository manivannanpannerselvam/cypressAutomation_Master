describe('hooks', function(){
   before(function()
   {
        cy.visit("http://testautomationpractice.blogspot.com/") // open the application
        cy.log("Before Function")

   })
   after(function()
   {
        cy.log("After Function")
   })

   beforeEach(function(){

        cy.log("Before Each Function")
        
    })
   afterEach(function(){

        cy.log("After Each functions")
   })      
   
   it('Table Test', function()
   {
        cy.get("table[name='BookTable']").contains('td','Learn Selenium').should('be.visible')

   })

   it('Table Second Test', function()
   {
        cy.get("table[name='BookTable']").contains('td','Learn Selenium').should('be.visible')

   })


})