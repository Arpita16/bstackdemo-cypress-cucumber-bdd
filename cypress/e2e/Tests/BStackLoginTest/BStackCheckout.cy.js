
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
 
import checkout from "../../Pages/BStackLoginPage/BStackCheckout.cy";

When ("I clicked on ADD to Cart button",()=>{
    checkout.clickAddtoCart();
}),
   Then("Products got added to the cart",()=>{
     checkout.verifyCartQuantity();
   }),
   Then ("Validate the Count of Product",()=>{
        checkout.verifyCartProduct();
   }),
  When ("I clicked on Checkout button",()=>{
    checkout.clickCheckoutBtn();
    }), 
  And ("Added all Customer Details",(datatable)=>{
    
      datatable.hashes().forEach((element) => {
        checkout.enterUserDetails(element.FirstName, element.LastName,element.Address,element.State,element.PostalCode);
      });
  }),
  And ("Clicked on SUBMIT button",()=>{
    checkout.clickSubmitBtn();

  }),
  Then ("Validate the order is placed",()=>{
    checkout.VerifyOrderMsg();
  })
