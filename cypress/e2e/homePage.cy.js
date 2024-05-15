// import cy from 'cypress'
describe('tic0', () => {
  it('check the heading on page', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-testid='heading']").should('exist')
  })
})