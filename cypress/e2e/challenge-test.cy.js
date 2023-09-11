const actions = require('./actions/actions')
describe('Challenge', () => {
  it('Test 1 ', () => {
    cy.visit('https://www.demoblaze.com/')
    actions.register('Raian', 'password')
    actions.createLogin('Raian', 'password')
    actions.logout()
    actions.createInvalidLogin('Raian', 'password2')
  })

  it.only('Test 2 ', () => {
    cy.visit('https://www.demoblaze.com/')
    actions.createLogin('Raian', 'password')
    actions.AddProdutctToCart('phone', 1)
    actions.goToHome()
    actions.AddProdutctToCart('phone', 2)
    actions.goToCart()
    actions.deleteItem()
    actions.placeOrder()
  })
})