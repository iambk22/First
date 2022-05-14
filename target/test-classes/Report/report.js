$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Sample.feature");
formatter.feature({
  "name": "Validation of Facebook Login Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "TC01_Validation of Login Page with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "User enters invalid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Click Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User verify Error Message is Displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "invaln",
        "valp"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch facebook web application",
  "keyword": "Given "
});
formatter.match({
  "location": "ExecutionClass.user_Launch_facebook_web_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verify facebook login page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ExecutionClass.user_verify_facebook_login_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC01_Validation of Login Page with valid username and valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "User enters invalid \"invaln\" and valid \"valp\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExecutionClass.user_enters_invalid_and_valid(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "ExecutionClass.user_Click_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verify Error Message is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ExecutionClass.user_verify_Error_Message_is_Displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "TC03_Validation of Login Page with valid usename and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters valid \"\u003cusername\u003e\" and invalid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User Click Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User verify Error Message is Displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "valn",
        "invalp"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User Launch facebook web application",
  "keyword": "Given "
});
formatter.match({
  "location": "ExecutionClass.user_Launch_facebook_web_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verify facebook login page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ExecutionClass.user_verify_facebook_login_page_is_displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "TC03_Validation of Login Page with valid usename and invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User enters valid \"valn\" and invalid \"invalp\"",
  "keyword": "When "
});
formatter.match({
  "location": "ExecutionClass.user_enters_valid_and_invalid(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Click Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "ExecutionClass.user_Click_Login_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User verify Error Message is Displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ExecutionClass.user_verify_Error_Message_is_Displayed()"
});
formatter.result({
  "status": "skipped"
});
});