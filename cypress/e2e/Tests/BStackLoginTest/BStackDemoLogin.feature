Feature: Login into the site with valid data

  Background: Navigate to the Website
    Given I navigate to the Website

  Scenario: Login into the application with valid data
    When I click on Sign In Link
    And I entered valid credential
      | validUsername | validPassword  |
      | demouser      | testingisfun99 |

    And Click on LOG IN button
    Then Validate user is logged in
    Then Validate the title after login

  

  