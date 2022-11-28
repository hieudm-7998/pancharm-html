/// <reference types="cypress" />
// Add Cypress commands {"cypress:open": "cypress open"} to the scripts field in package.json file
// Command to open the app: npm run cypress:open
// E2E testing
// Browser: Chrome

describe("Shopping cart/ Edit item:", () => {
  // it('Homepage/ Add to cart/ Edit product', () => {
  //     const base_url = 'https://senprints.com';
  //     const uri = '';
  //     // Homepage/ Add to cart: Select normal product
  //     cy.visitSpecificUrl(base_url, uri)
  //     cy.selectNormalProduct()
  //     cy.addToCartModal()
  //     cy.comebackToHomepage()
  //     //Homepage/ Add to cart: Select personalization product
  //     cy.selectPersonalizationProduct()
  //     cy.addToCartModal()
  //
  //     //Cart page
  //         cy.checkSumCart()
  //
  //     //Edit: buy more item
  //     // cy.buyMoreItemCart()
  //     //     cy.checkSumCart()
  //
  //     //Edit: delete item
  //     // cy.deleteItemCart()
  //     //     cy.checkSumCart()
  //
  //     //Edit: product
  //     cy.editCartProduct()
  //         cy.checkSumCart()
  //
  // })
  //
  // it('Homepage/ Add to cart/ Buymore', () => {
  //     const base_url = 'https://senprints.com';
  //     const uri = '';
  //     // Homepage/ Add to cart: Select normal product
  //     cy.visitSpecificUrl(base_url, uri)
  //     cy.selectNormalProduct()
  //     cy.addToCartModal()
  //     cy.comebackToHomepage()
  //     //Homepage/ Add to cart: Select personalization product
  //     cy.selectPersonalizationProduct()
  //     cy.addToCartModal()
  //
  //     //Cart page
  //         //Edit: buy more item
  //         cy.buyMoreItemCart()
  //         cy.checkSumCart()
  //
  //
  // })

  it("Homepage/ Add to cart/ deleteItem", () => {
    const base_url = "https://senprints.com";
    const uri = "";
    // Homepage/ Add to cart: Select normal product
    cy.visitSpecificUrl(base_url, uri);
    cy.selectNormalProduct();
    cy.addToCartModal();
    cy.comebackToHomepage();
    //Homepage/ Add to cart: Select personalization product
    cy.selectPersonalizationProduct();
    cy.addToCartModal();

    //Cart page
    //Edit: buy more item
    cy.get(".product-cart-item").each(($row) => {
      cy.wrap($row)
        .find('div[class="d-none d-lg-flex row col-5 mt-2"]')
        .then(($div) => {
          //click delete item button
          cy.wrap($div)
            .find(".px-0 > button")
            .click({ force: true })
            .wait(1000);
        });
    });
    cy.get(".btn-danger").eq(0).click({ force: true });
  });
});
