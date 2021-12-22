/// <reference types="cypress" />


describe('my write-read Test suite', function()
{
    before(function () {
       // cy.visit('https://the-internet.herokuapp.com/upload')
      //  https://cgi-lib.berkeley.edu/ex/fup.html
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
    })

    it('write on a file test', function()
    {
        cy.log("WRITE FILE ACCESS");
        const filepath = "screenshots1.png"
        cy.get("input[name='upfile']").attachFile(filepath)
       // cy.get('#file-submit').click()
       // cy.get('#uploaded-files').contains('evening.png')
    })
})