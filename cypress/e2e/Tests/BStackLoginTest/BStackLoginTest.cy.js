// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../../Pages/TestGridLoginPage/TestGridLoginPage.cy";

Given("I navigate to the Website", () => {
login.enterURL();
});
When("I click on Sign In Link", () => {
login.clickSignInLink();
});
When("I entered valid credential", (datatable) => {
datatable.hashes().forEach((element) => {
  login.enterUsernamePassword(element.validUsername, element.validPassword);
});
});
When("Click on LOG IN button", () => {
login.clickLoginButton();
});
Then("Validate user is logged in", () => {
login.verifyUserLoggedIn();
});
Then("Validate the title after login", () => {
login.verifyPageTitle();
});


