# bstackdemo-cypress-cucumber-bdd

# Introduction

This project is a test automation suite built using Cypress and JavaScript with Cucumber for behavior-driven development (BDD). It leverages Gherkin syntax for defining human-readable test scenarios, making it accessible for both technical and non-technical team members.

# Key Components

Cypress: A JavaScript-based end-to-end testing framework, known for its ease of use and real-time reloading. Cypress enables fast, reliable tests and debugging for web applications.

Cucumber Framework: By integrating Cucumber with Cypress, we can write test cases in Gherkin language, enabling BDD practices. This setup facilitates collaboration by bridging the gap between developers, QA engineers, and stakeholders.

Gherkin Syntax: Gherkin is a plain-English syntax that allows test scenarios to be written in a way that’s easy to understand and review, aligning with user stories or product requirements.

### Automated the Following Test Cases

**Login with Valid Credentials**

Navigate to the login page: (https://bstackdemo.com/)
Enter username: demouser

Enter password: testingisfun99

Click the "LOG IN" button

Verify that the login was successful by:
Checking that the Title:StackDemo
After login the username should be displayed at the right corner

**Add Products to the Cart and Complete a Purchase**

After logging in as standard_user,Add Products in the cart(As many as you want)

Verify the product quantity and productlist in cart page.

Navigate to the cart by clicking the cart icon.

Click "Checkout"

Filled in the following information:

First Name: Any name

Last Name: Any surname

Address:Any Address

State/Province:Any State

Postal Code: Any postal code

Click "SUBMIT" button

Verify that the message "Your Order has been successfully placed." is displayed

# Prerequisites

List of software and versions required to run the project (Node.js, npm, Cypress).

Node.js >= v12 or higher

npm >= 6 or higher 
or yarn

Cypress (this project is configured to use Cypress)

# Installation

## Clone the repository
          git clone https://github.com/Arpita16/bstackdemo-cypress-cucumber-bdd.git

## Navigate to the project directory
           cd bstackdemo-cypress-cucumber-bdd

## Install dependency

1.Install Node.js-Visit the official Node.js website: 

        https://nodejs.org.(if not installed in the system)

2.Install npm latest version:

          npm install -g npm@latest(if not installed in the system already)

3.IDE application(Visual Studio Code recommended)

## Check Version

            node -v

            npm -v
            
## Install Cypress

           npm init -y

           npm install --save-dev cypress

## Indtall Cucumber
           npm install –save-dev cypress-cucumber-preprocessor

## Update cypress.config.js 

    const { defineConfig } = require("cypress");
          const cucumber = require("cypress-cucumber-preprocessor").default;
              module.exports = defineConfig({
                      e2e: {
                               specPattern: "**/*.feature",
                               setupNodeEvents(on, config) {
                                         on("file:preprocessor", cucumber());
                                       },
                             },
                });

## Update package.json

        "cypress-cucumber-preprocessor": {
                         "nonGlobalStepDefinitions": false,
                         "step_definitions": "cypress/e2e/Tests"
               }



**Run Cypress Tests .feature file in GUI mode:**

            npx cypress open->E2E Testing->Start E2E Testing in Chrome->Specs->Double click on the .feature file Specs to run one by one 

