Feature: Test cases on webpage Links validation on /Activerisks/
  This feature tests all the links works fine under the search results
  Scenario Outline: Search Terms and check the links work fine and pages loaded properly

    Given The URL in QA Test Environment
    When Search for the string "<Search_Term>"
    Then check the links work fine and pages loaded properly
    Examples:
      |Search_Term      |
      |Risk Management  |
      |Leverage         |
      |Compatibility    |

