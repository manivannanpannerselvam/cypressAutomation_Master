/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe('Locating Element', function()
{
    it('Table Test', function()
    {
         cy.visit("http://testautomationpractice.blogspot.com/") // open the application

         cy.get("table[name='BookTable']").contains('td','Learn Selenium').should('be.visible')

         cy.xpath(".//tbody/tr[2]/td[3]").contains('Selenium').should('be.visible')

         cy.xpath(".//table[@name='BookTable']//tr/td[2]").each(($e1,index,$list) => {

         const text= $e1.text()
        
         if(text.includes("Amod"))
         {
             cy.xpath(".//table[@name='BookTable']//tr/td[1]").eq(index).then(function(bname)
             {
                 const bookName =bname.text()
                 cy.log('BookName'+bookName);
                 expect(bookName).to.equal("Master In Java")

             })
         }
    
    })   
    })
})