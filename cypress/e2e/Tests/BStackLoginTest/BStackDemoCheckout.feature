Feature: Login into the site with valid data
Background:
    Given I navigate to the Website
    When I click on Sign In Link
    And I entered valid credential
      | validUsername | validPassword  |
      | demouser      | testingisfun99 |

    And Click on LOG IN button
    Then Validate user is logged in
    Then Validate the title after login

  Scenario:Add some product in the cart and checkout
    When I clicked on ADD to Cart button
    Then Products got added to the cart
    Then Validate the Count of Product
    When I clicked on Checkout button
    And Added all Customer Details
    |FirstName| LastName  |Address|State| PostalCode  |
      | Arpita     | Banerjee  |Centralvagen 21|Stockholm| 17168  |

   And Clicked on SUBMIT button
  Then Validate the order is placed
