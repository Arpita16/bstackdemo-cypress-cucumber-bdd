class Checkout{

    clickAddtoCart(){
        cy.get("#\\31  > .shelf-item__buy-btn").click();
        cy.get('#\\33  > .shelf-item__buy-btn').click({force: true}) ;
        return this;
    }
    verifyCartQuantity(){
        cy.get('.bag__quantity').should('be.visible');
    }
    verifyCartProduct(){
       cy.get('.shelf-item__details').each(($el)=>{
        let demo = $el.text();
            cy.log(demo);
     })
    }
    
    clickCheckoutBtn(){
        cy.get('.buy-btn').click();
}
   enterUserDetails(FirstName,LastName,Address,State,PostalCode){
     cy.get('#firstNameInput').type(FirstName);
     cy.get('#lastNameInput').type(LastName);
     cy.get('#addressLine1Input').type(Address);
     cy.get('#provinceInput').type(State);
     cy.get('#postCodeInput').type(PostalCode);


} 
clickSubmitBtn(){
    cy.get('#checkout-shipping-continue').click();
}   
VerifyOrderMsg(){
    cy.get('#confirmation-message').contains('Your Order has been successfully placed.');
}
}

const checkout= new Checkout;
export default checkout;