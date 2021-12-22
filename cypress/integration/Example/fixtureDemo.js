describe('hooks', function(){
    before(function()
    {
        // open the application
         cy.log("Before Function")
         cy.fixture('example').then(function(data)
         {
             this.data = data
         })
    })
    it("FixtureDemoTest", function()
    {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.get("input[name='Email']").clear()
        cy.get("input[name='Email']").type(this.data.email)
        cy.get("input[id='Password']").clear()
        cy.get("input[id='Password']").type(this.data.password)
        cy.get("button[type='submit']").click()

    })
})