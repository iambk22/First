Feature: Validation of Facebook Login Page

  Background: 
    Given User Launch facebook web application
    Then User verify facebook login page is displayed
  @Reg
  Scenario Outline: TC01_Validation of Login Page with valid username and valid password
    When User enters invalid "<username>" and valid "<password>"
    And User Click Login Button
    Then User verify Error Message is Displayed

    Examples: 
      | username | password |
      | invaln     | valp     |
  @Smoke
  Scenario Outline: TC02_Validation of Login Page with invalid usename and valid password
    When User enters valid "<username>" and valid "<password>"
    And User Click Login Button
    Then User verify Home Page is Displayed

    Examples: 
      | username | password |
      | valn   | valp     |
  @Sanity
  Scenario Outline: TC03_Validation of Login Page with valid usename and invalid password
    When User enters valid "<username>" and invalid "<password>"
    And User Click Login Button
    Then User verify Error Message is Displayed

    Examples: 
      | username | password |
      | valn     | invalp   |
  @E2E
  Scenario Outline: TC04_Validation of Login Page with invalid usename and invalid password
    When User enters invalid "<username>" and invalid "<password>"
    And User Click Login Button
    Then User verify Error Message is Displayed

    Examples: 
      | username | password |
      | invaln   | invalp   |
