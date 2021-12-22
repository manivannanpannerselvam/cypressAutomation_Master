/// <reference types="cypress" />

describe('my write-read Test suite', function()
{
    it('write on a file test', function()
    {
        cy.writeFile('sampleFile.txt','Hello world \n')
        cy.writeFile('sampleFile.txt','this is  my sampleFile', {flag:'a+'})

        cy.writeFile('cypress/fixtures/example1.json', {
            name:'murugan',
            email:'murugan@gmail.com',
            password:123456
            
         })
    })

    it('read file test', function()
    {
        cy.readFile('sampleFile.txt').should('exist').and('contains','Hello')

        cy.fixture('example').then((profile)  => {
            expect(profile.name).to.eq('murugan')
        })

    })
    it('login test', function()
    {
        cy.visit('https://login.salesforce.com/')
        cy.fixture('example').then((profile) => {
        cy.get("input[id='username']").type(profile.name)

        })
    })

})