Feature: to test homepage functionality

  Scenario: to test homepage
    Given User is on homepage
    When User enter login details
    Then Login should be successful
    And Home page should be displayed
