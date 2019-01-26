$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Active.feature");
formatter.feature({
  "line": 1,
  "name": "Test cases on webpage Links validation on /Activerisks/",
  "description": "This feature tests all the links works fine under the search results",
  "id": "test-cases-on-webpage-links-validation-on-/activerisks/",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search Terms and check the links work fine and pages loaded properly",
  "description": "",
  "id": "test-cases-on-webpage-links-validation-on-/activerisks/;search-terms-and-check-the-links-work-fine-and-pages-loaded-properly",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The URL in QA Test Environment",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for the string \"\u003cSearch_Term\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "check the links work fine and pages loaded properly",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "test-cases-on-webpage-links-validation-on-/activerisks/;search-terms-and-check-the-links-work-fine-and-pages-loaded-properly;",
  "rows": [
    {
      "cells": [
        "Search_Term"
      ],
      "line": 9,
      "id": "test-cases-on-webpage-links-validation-on-/activerisks/;search-terms-and-check-the-links-work-fine-and-pages-loaded-properly;;1"
    },
    {
      "cells": [
        "Risk Management"
      ],
      "line": 10,
      "id": "test-cases-on-webpage-links-validation-on-/activerisks/;search-terms-and-check-the-links-work-fine-and-pages-loaded-properly;;2"
    },
    {
      "cells": [
        "Leverage"
      ],
      "line": 11,
      "id": "test-cases-on-webpage-links-validation-on-/activerisks/;search-terms-and-check-the-links-work-fine-and-pages-loaded-properly;;3"
    },
    {
      "cells": [
        "Compatibility"
      ],
      "line": 12,
      "id": "test-cases-on-webpage-links-validation-on-/activerisks/;search-terms-and-check-the-links-work-fine-and-pages-loaded-properly;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10462303370,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Search Terms and check the links work fine and pages loaded properly",
  "description": "",
  "id": "test-cases-on-webpage-links-validation-on-/activerisks/;search-terms-and-check-the-links-work-fine-and-pages-loaded-properly;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The URL in QA Test Environment",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for the string \"Risk Management\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "check the links work fine and pages loaded properly",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveSteps.theURLInQATestEnvironment()"
});
formatter.result({
  "duration": 18601769034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Risk Management",
      "offset": 23
    }
  ],
  "location": "ActiveSteps.searchForTheString(String)"
});
formatter.result({
  "duration": 3905490180,
  "status": "passed"
});
formatter.match({
  "location": "ActiveSteps.checkTheLinksWorkFineAndPagesLoadedProperly()"
});
formatter.result({
  "duration": 27281744007,
  "status": "passed"
});
formatter.after({
  "duration": 814867733,
  "status": "passed"
});
formatter.before({
  "duration": 3543396831,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Search Terms and check the links work fine and pages loaded properly",
  "description": "",
  "id": "test-cases-on-webpage-links-validation-on-/activerisks/;search-terms-and-check-the-links-work-fine-and-pages-loaded-properly;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The URL in QA Test Environment",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for the string \"Leverage\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "check the links work fine and pages loaded properly",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveSteps.theURLInQATestEnvironment()"
});
formatter.result({
  "duration": 27009208674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Leverage",
      "offset": 23
    }
  ],
  "location": "ActiveSteps.searchForTheString(String)"
});
formatter.result({
  "duration": 24097080876,
  "status": "passed"
});
formatter.match({
  "location": "ActiveSteps.checkTheLinksWorkFineAndPagesLoadedProperly()"
});
formatter.result({
  "duration": 21517630677,
  "status": "passed"
});
formatter.after({
  "duration": 871516491,
  "status": "passed"
});
formatter.before({
  "duration": 3329789222,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search Terms and check the links work fine and pages loaded properly",
  "description": "",
  "id": "test-cases-on-webpage-links-validation-on-/activerisks/;search-terms-and-check-the-links-work-fine-and-pages-loaded-properly;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "The URL in QA Test Environment",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Search for the string \"Compatibility\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "check the links work fine and pages loaded properly",
  "keyword": "Then "
});
formatter.match({
  "location": "ActiveSteps.theURLInQATestEnvironment()"
});
formatter.result({
  "duration": 9708707335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Compatibility",
      "offset": 23
    }
  ],
  "location": "ActiveSteps.searchForTheString(String)"
});
formatter.result({
  "duration": 12881220387,
  "status": "passed"
});
formatter.match({
  "location": "ActiveSteps.checkTheLinksWorkFineAndPagesLoadedProperly()"
});
formatter.result({
  "duration": 148823,
  "status": "passed"
});
formatter.after({
  "duration": 813877286,
  "status": "passed"
});
});