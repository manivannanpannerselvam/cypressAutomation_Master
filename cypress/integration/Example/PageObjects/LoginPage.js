class LoginPage
{
    visit()
    {
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
       
    }
    fillEmail(value)
    {
        cy.fixture('example1').then((profile) => {     
       cy.log("Log is ---> "+profile.EmailId);
      //  const field = cy.get('[id=Email]')
        const field = cy.get(profile.EmailId)
        field.clear()
        field.type(value)
        return this
        })
    }

    fillpassword(value)
    {
        const field = cy.get('[id=Password')
        field.clear();
        field.type(value)
        return this
    }
    submit()
    {
        const button =cy.get('[type=submit]')
        button.click()
        return this 

    }
}
export default LoginPage