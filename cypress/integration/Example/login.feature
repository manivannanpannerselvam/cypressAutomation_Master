Feature: login Feature

    I Want to login as Admin
   Scenario: Login as Bank Manager
        Given I navigate  to the website
        When I  click the Admin login button
        And Validate the page title
        And I should see the title of the page "First Name :"
        And Enter the first name in website
        And I Entered
          | firstname | lastnames | pincodes  |
          |  Rahul    |  Arora    | 110095    |

    Scenario: Login as Bankx Manager
        Given I navigate  to the website
        When I  click the Admin login button
        And Validate the page title
        And I should see the title of the page "First Name :"
        And Enter the first name in website