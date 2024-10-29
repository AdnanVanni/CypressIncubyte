Feature: Signup feature
  Scenario: Verify valid login 
    Given I am in signup page
    When I enter valid details in fields
    And I click on Create Account button
    Then I should be logged in and redirected to Home page
    

