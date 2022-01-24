Feature: Verify the user details

    Feature Type all the details in the form and verify if clicking rent is allowed

    Scenario: Input all the user details
        Given I navigate to the website
        When I fill all the details and search
        When I click on the Rent button
        And Verify the correct details are being shown
        Then I fill the form using user information
        And Verify if the details are correct and the rent button is clicked