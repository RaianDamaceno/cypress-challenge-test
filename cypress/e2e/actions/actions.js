const locators = require('../locators/locators')

export function register(user, password) {
    cy.get(locators.btnSignIn)
        .should('be.visible')
        .click()

    cy.get(locators.fieldSignUsername, { delay: 2 })
        .should('be.visible')
        .type(user)

    cy.get(locators.fieldSignPassword)
        .should('be.visible')
        .type(password)

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .click()

    cy.wait(2000)

    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
        .click()
}

export function createLogin(user, password) {
   cy.get(locators.btnLogin)
    .should('be.visible')
    .click()

    cy.get(locators.fieldLoginUserName,{ delay: 10 })
        .should('be.visible')
        .type(user)

    cy.get(locators.fieldLoginPassword,{ delay: 10 })
        .should('be.visible')
        .type(password)

    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        .click()
}

export function checkLoginSucess() {
    cy.get(locators.nameOfUserElement)
        .should('be.visible')
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
    cy.contains('Delete')
        .first()
        .click()
}

export function placeOrder() {
    cy.get('[data-target="#orderModal"]')
        .click()
}