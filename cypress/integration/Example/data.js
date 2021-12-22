import { truncate } from "lodash";

let rowsLength;
describe ('Data Driven Testing Using Excel FIle', () =>{
  before(() => {
     cy.task('readXlsx', { file: 'cypress/fixtures/excelData.xlsx', sheet: "Sheet1" }).then((rows) => {
        rowsLength = rows.length;
        cy.writeFile("cypress/fixtures/xlsxData.json", {rows})
      //  cy.writeFile("cypress/fixtures/excelData.xlsx", {rows})
      })
        cy.visit(Cypress.config('baseURL'));
        
      //  cy.visit("http://testautomationpractice.blogspot.com/")
      })
    it ('Data Driven: Register User', () => {
     // it ('Data Driven Register User', function (done) 
     // {
      cy.fixture('xlsxData').then((data) => {
         for ( let i = 0; i < rowsLength; i++) {
         //   cy.get('.btn-link').click();
         //   cy.url().should('include', '/register').then(()=>{
             cy.wait(7000)
             cy.log(data.rows[i].firstName)
           //  cy.writeFile("cypress/fixtures/excelData.xlsx", "HELLO WORLD",data.rows[i].message);
          // cy.writeFile("cypress/fixtures/excelData.xlsx", "Message", "messages")
            
          //   cy.getIframe('#frame-one1434677811').click()x

            // cy.frameLoaded("#frame-one1434677811");
             cy.iframe().find("#RESULT_TextField-1").type(data.rows[i].firstName);
             cy.iframe().find("#RESULT_TextField-2").type(data.rows[i].lastName);
    
            // cy.get('alert').should('have.text', data.rows[i].message);
             break;

          //   cy.getIframe('#frame-one1434677811').xpath(".//input[@name='RESULT_TextField-1']").type(data.rows[i].firstName)
            //  cy.xpath(".//*[@id='frame-one1434677811']").then(function($ele)
            //  {
            //      var ifele = $ele.contents().find('#RESULT_TextField-1')
            //      cy.wrap(ifele).click()
            //  }
            //  )
            // cy.xpath(".//input[@name='RESULT_TextField-1']").type(data.rows[i].firstName);

            // cy.get('input[formcontrolname="lastName"]').type(data.rows[i].lastName);
            // cy.get('input[formcontrolname="username"]').type(data.rows[i].username);
            // cy.get('input[formcontrolname="password"]').type(data.rows[i].password);
            // cy.get('.btn-primary').click();
           //  cy.get('alert').should('have.text', data.rows[i].message);
        //  })
        }
      })     
     })
     it('is doing something very important', () => {
      // this event will automatically be unbound when this
      // test ends because it's attached to 'cy'
     //  cy.scrollIntoView("input[id='age']")
   //  cy.scrollTo(0, 2500)
      // cy.get("input[id='age']").scrollTo('bottom')
     // cy.scrollTo(2500, 0)

   //   cy.get("img[alt='the peaks of high tatras']").dragTo(".ui-widget-header ui-droppable", { smooth: true })
      var x = 1;
      {
        var x = 2;
      }
      cy.log(x);
      if(x==2)
      {
        cy.log("OUTPUT IS RIGHT")
      }
      else
      {
        cy.log("OUTPUT IS NOT GOOD")
      }

     })

     it('but you can forcibly end the test early which does fail', (done) => {
      cy.get('body')
        .then(() => {
          done() // forcibly end test even though there are commands below
        })
        cy.log("Welcome to New Message");
        cy.xpath(".//button[text()='Click Me']").click()
        cy.get("#sdjhfkjdsfh").should('not.be.enabled').click();
    })

    })