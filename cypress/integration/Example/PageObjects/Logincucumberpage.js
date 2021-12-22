class Logincucumberpage
{
    visit()
    {
        cy.visit("https://www.way2automation.com/angularjs-protractor/banking/#/login")
    }
    fillEmail()
    {
       // const field = cy.xpath(".//button[text()='Bank Manager Login']")
       cy.fixture('example1').then((profile) => {
           cy.log("Log is ---->  "+profile.BankManageLogin)
           const field = cy.xpath(profile.BankManageLogin)
        field.click()   
       })
       // return this
    }
    verifyData()
    {
        cy.title().should('eq','Protractor practice website - Banking App')

        cy.log("Test Access FirstName");
        cy.fixture('example1').then((profile) => {
     //   const fields = cy.xpath(".//button[@ng-class='btnClass1']")
     cy.log("Log is ---> "+profile.name);
         const fields = cy.xpath(profile.name)
        fields.click()
        })
    }
    
    firstname(value)
    {
        const search = cy.xpath(".//input[@ng-model='fName']")
        search.type(value)
        return value;
       
    }
    AddcustomerDetails(firstnames,lastnenames,pincode)
    {
        cy.fixture('example1').then((profile) => {
      //  const firtName = cy.get("input[ng-model='fName']")
      cy.log("Log is ---> "+profile.firstnames);
        const firtName = cy.get(profile.firstnames);
        firtName.type(firstnames)
       // const lastnames = cy.get("input[ng-model='lName']")
        const lastnames = cy.get(profile.lastnewnames);
        lastnames.type(lastnenames)
       // const pincodes = cy.get("input[ng-model='postCd']")
        const pincodes = cy.get(profile.pincodes)
        pincodes.type(pincode)
        })
        
    }
}
export default Logincucumberpage