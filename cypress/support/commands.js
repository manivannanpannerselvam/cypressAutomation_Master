// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Customized Commands   

import 'cypress-iframe';
import '@4tw/cypress-drag-drop';
import 'cypress-file-upload';


Cypress.Commands.add("login",(email, password) => {

        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.get("input[name='Email']").clear()
        cy.get("input[name='Email']").type(email)
        cy.get("input[id='Password']").clear()
        cy.get("input[id='Password']").type(password)
        cy.get("button[type='submit']").click()
})

Cypress.Commands.add('getIframe', (iframe) => {
        return cy.get(iframe)
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);
    })

Cypress.Commands.add("parseXlsx", (inputFile) => {
        return cy.task('parseXlsx', { filePath: inputFile })
});


