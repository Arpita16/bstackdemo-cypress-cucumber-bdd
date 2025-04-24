class LoginPage {
    enterURL() {
      cy.visit("https://bstackdemo.com/");
    }
    clickSignInLink() {
      cy.get('#signin').click();
      return this;
    }
    enterUsernamePassword() {
     
      cy.get("#username").click();
      cy.get('#react-select-2-option-0-0').click();
      cy.get('#password').click();
      cy.get('#react-select-3-option-0-0').click();
      return this;
    }
    clickLoginButton() {
      cy.get("#login-btn").click();
      return this;
    }
    verifyPageTitle() {
    return cy.title().should("eq", "StackDemo");
    }
    verifyUserLoggedIn() {
      return cy.get('.username').contains('demouser');
    }
    
    }
    const login = new LoginPage();
    export default login;