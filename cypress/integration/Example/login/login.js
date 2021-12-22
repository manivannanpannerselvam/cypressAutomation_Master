//import LoginPage from "../PageObjects/LoginPage";
/// <reference types="cypress-xpath" />

   import Logincucumberpage from "../PageObjects/Logincucumberpage";
//   import LoginPage from "../PageObjects/LoginPage";
   const lp=new Logincucumberpage()
//  const lp=new LoginPage()
Given('I navigate  to the website', ()=>
{
  cy.log("WELOCME ---->")
  
//  lp.visit()
    cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
})

When('I  click the Admin login button', ()=>
{
  lp.fillEmail()
  
 // lp.fillEmail("Test@gmail.com")
   // cy.xpath(".//button[text()='Bank Manager Login']").click()
   //lp.fillpassword("Test@123")
})

And('Validate the page title', ()=>
{
  lp.verifyData()
 // lp.submit()
    //  cy.title().should('eq','Protractor practice website - Banking App')
})
And('I should see the title of the page {string}', pageTitle=>
{
   cy.xpath(".//label[text()='First Name :']").invoke('text').then((text1) => {
     expect(text1.trim()).to.equal(pageTitle)
   })
  })
And('Enter the first name in website', ()=>
{
  //lp.firstname()
 // lp.firstname("Murugan")
  
  
 // lp.submit()
    //  cy.title().should('eq','Protractor practice website - Banking App')
})
And('I Entered',(datatable) => {
    datatable.hashes().forEach(element => {
      lp.AddcustomerDetails(element.firstname,element.lastnames,element.pincodes)
      
    });
})