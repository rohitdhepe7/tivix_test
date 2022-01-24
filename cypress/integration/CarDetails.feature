Feature: Verify the car details are shown correctly

    Feature If clicked on Rent button the car details can be seen correctly

    Scenario: Car details of a selected car
        Given I navigate to the website
        When I fill all the details and search
        When I click on the Rent button
        And Verify the correct details are being shown