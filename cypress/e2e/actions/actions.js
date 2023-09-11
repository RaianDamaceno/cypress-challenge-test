const locators = require('../locators/locators')

export function register(user, password) {
    cy.get(locators.btnSignIn)
        .should('be.visible')
        .click()

    cy.wait(2000)
    cy.get(locators.fieldSignUsername)
        .should('be.visible')
        .should('be.enabled')
        .type(user)

    cy.get(locators.fieldSignPassword)
        .should('be.visible')
        .should('be.enabled')
        .type(password)

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .click()

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
        .click()
}

export function createLogin(user, password) {
   cy.intercept('GET', '/login').as('apiRequest');
   cy.get(locators.btnLogin)
    .should('be.visible')
    .click()
    cy.wait(2000)
    cy.get(locators.fieldLoginUserName)
        .should('be.visible')
        .should('be.enabled')
        .type(user)

    cy.get(locators.fieldLoginPassword)
        .should('be.visible')
        .should('be.enabled')
        .type(password)

    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .click()
    
    cy.get(locators.nameOfUserElement)
        .should('be.visible')
}

export function createInvalidLogin(user, password) {
    cy.intercept('POST', '/login').as('apiRequest');

    cy.get(locators.btnLogin)
     .should('be.visible')
     .click()
 
     cy.get(locators.fieldLoginUserName)
         .should('be.visible')
         .should('be.enabled')
         .type(user)
 
     cy.get(locators.fieldLoginPassword)
         .should('be.visible')
         .should('be.enabled')
         .type(password)
 
     cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
         .click()
     
    cy.wait('@apiRequest').then((interception) => {
        const ApiResponse = interception.response.body;
        cy.log(ApiResponse)
        expect(ApiResponse.errorMessage).to.equal("Wrong password.")
    });
 }

export function logout() {
    cy.get(locators.btnLogout)
            .should('be.visible')
            .click()

    cy.get(locators.btnLogin)
        .should('be.visible')

    cy.url().should('include', '/index')
}

export function AddProdutctToCart(productName, productID) {
    cy.get(`[onclick="byCat('${productName}')"]`)
        .click()

    cy.get(`[href="prod.html?idp_=${productID}"]`)
        .first()
        .click()
    
    cy.contains('Add to cart')
        .click()
}

export function goToHome() {
    cy.get(locators.btnHome)
        .should('be.visible')
        .first()
        .click()
}

export function goToCart() {

    cy.get(locators.goToCart)
        .should('be.visible')
        .first()
        .click()
}

export function deleteItem() {
    cy.intercept('POST', '/deleteitem').as('apiRequestDelete');
    cy.contains('Delete')
        .first()
        .click()

    cy.wait('@apiRequestDelete').then((interception) => {
        const ApiResponse = interception.response.statusCode;
        expect(ApiResponse).to.equal(200);
    });
}

export function placeOrder() {
    cy.get('[data-target="#orderModal"]')
        .click()
}