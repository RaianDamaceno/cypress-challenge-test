const actions = require('./actions/actions')
describe('empty spec', () => {
  // it('Test 1 ', () => {
  //   cy.visit('https://www.demoblaze.com/')
  //   actions.register('Raian', 'password')
  //   actions.createLogin('Raian', 'password')
  //   actions.checkLoginSucess()
  //   actions.logout()
  //   actions.createLogin('Raian', 'password2')
  // })

  it('Test 2 ', () => {
    cy.visit('https://www.demoblaze.com/')
    actions.createLogin('Raian', 'password')
    actions.checkLoginSucess()
    actions.AddProdutctToCart('phone', 1)
    actions.goToHome()
    actions.AddProdutctToCart('phone', 2)
    actions.goToCart()
    actions.deleteItem()
    actions.placeOrder()
  })
})