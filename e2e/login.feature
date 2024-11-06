  @second
  Feature: Signup feature
  Scenario: Verify valid login 
    Given I am in login page
    When I enter valid username and password
   And I click on login button
   Then I should be logged in and redirected to the logedin Home page