$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AdminAppInstall.feature");
formatter.feature({
  "line": 1,
  "name": "App Install for Unific",
  "description": "",
  "id": "app-install-for-unific",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1688771274,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Admin Installation on Shopify Dev Store [ PD-1517 ]",
  "description": "",
  "id": "app-install-for-unific;admin-installation-on-shopify-dev-store-[-pd-1517-]",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User has successfully logged into Shopify Partners",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User selects a Business",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User selects to create a developement store",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enters Login Information",
  "rows": [
    {
      "cells": [
        "StoreName",
        "Password",
        "Confirm Password"
      ],
      "line": 8
    },
    {
      "cells": [
        "App_AdminInstall_Testing",
        "Testing@123!",
        "Testing@123!"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters Store Details",
  "rows": [
    {
      "cells": [
        "Address",
        "City",
        "Zip",
        "State",
        "Country"
      ],
      "line": 11
    },
    {
      "cells": [
        "TestAddress",
        "TestCity",
        "12345",
        "Alabama",
        "United States"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User saves the store details",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User navigates to Apps in the concerned business",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User is able to Create App Store Listing",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User installs the unlisted App",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User signups at unific",
  "rows": [
    {
      "cells": [
        "Username",
        "Domain Name",
        "Password"
      ],
      "line": 18
    },
    {
      "cells": [
        "unific__qa_",
        "@damcogroup.com",
        "test"
      ],
      "line": 19
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User selects mandatory fields and also verifies pre filled information",
  "rows": [
    {
      "cells": [
        "Industry",
        "Describe Yourself",
        "StoreName",
        "Address",
        "City",
        "Zip",
        "State",
        "Country"
      ],
      "line": 21
    },
    {
      "cells": [
        "Jewelry",
        "Developer",
        "App_AdminInstall_Testing",
        "TestAddress",
        "TestCity",
        "12345",
        "Alabama",
        "United States"
      ],
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "User skips the connection to Facebook and Starts using Unific",
  "keyword": "And "
});
formatter.match({
  "location": "AppInstall.user_has_successfully_logged_into_shopify_partners()"
});
formatter.result({
  "duration": 12395115985,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_a_business()"
});
formatter.result({
  "duration": 3818354609,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_selects_to_create_a_development_store()"
});
formatter.result({
  "duration": 1480743589,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_enters_login_information(DataTable)"
});
formatter.result({
  "duration": 471331929,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_enters_store_details(DataTable)"
});
formatter.result({
  "duration": 678958356,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_saves_the_store_details()"
});
formatter.result({
  "duration": 21690569199,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_navigates_to_apps_for_integrations_business()"
});
formatter.result({
  "duration": 6885456667,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_is_able_to_create_app_store_listing()"
});
formatter.result({
  "duration": 25485772234,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_installs_the_unlisted_app()"
});
formatter.result({
  "duration": 78792119587,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_signups_at_unific(DataTable)"
});
formatter.result({
  "duration": 45918320927,
  "status": "passed"
});
formatter.match({
  "location": "AppInstall.user_enters_company_information_and_also_verifies_pre_filled_information(DataTable)"
});
formatter.result({
  "duration": 30315604791,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.id: react-select-2--value\u0027 (tried for 30 second(s) with 500 MILLISECONDS interval)\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:232)\n\tat com.unific.cucumber.Hooks.explicitWait(Hooks.java:13)\n\tat com.unific.cucumber.StepDefs.AppInstall.user_enters_company_information_and_also_verifies_pre_filled_information(AppInstall.java:140)\n\tat ✽.Then User selects mandatory fields and also verifies pre filled information(AdminAppInstall.feature:20)\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"react-select-2--value\"}\n  (Session info: chrome\u003d65.0.3325.162)\n  (Driver info: chromedriver\u003d2.36.540471 (9c759b81a907e70363c6312294d30b6ccccc2752),platform\u003dLinux 4.13.0-38-generic x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.2\u0027, revision: \u002710229a9\u0027, time: \u00272017-08-21T17:29:55.15Z\u0027\nSystem info: host: \u0027WKS-195\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00274.13.0-38-generic\u0027, java.version: \u00279.0.4\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dLINUX, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540471 (9c759b81a907e70363c6312294d30b6ccccc2752), userDataDir\u003d/tmp/.org.chromium.Chromium.qCpqHc}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d65.0.3325.162, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: e51fae35cd16dd6edaf66e047e03544b\n*** Element info: {Using\u003did, value\u003dreact-select-2--value}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor12.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:641)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:414)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:457)\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:406)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:302)\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:288)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:285)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\n\tat com.unific.cucumber.Hooks.explicitWait(Hooks.java:13)\n\tat com.unific.cucumber.StepDefs.AppInstall.user_enters_company_information_and_also_verifies_pre_filled_information(AppInstall.java:140)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\n",
  "status": "failed"
});
formatter.match({
  "location": "AppInstall.user_skips_the_connection_to_facebook_and_starts_using_unific()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 89693742,
  "status": "passed"
});
formatter.uri("CampaignCreation.feature");
formatter.feature({
  "line": 1,
  "name": "Create a campaign and save it as a draft or publish it",
  "description": "",
  "id": "create-a-campaign-and-save-it-as-a-draft-or-publish-it",
  "keyword": "Feature"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login  Feature",
  "description": "",
  "id": "login--feature",
  "keyword": "Feature"
});
formatter.uri("PvtAppInstall.feature");
formatter.feature({
  "line": 2,
  "name": "Pvt Install for Unific",
  "description": "",
  "id": "pvt-install-for-unific",
  "keyword": "Feature"
});
});