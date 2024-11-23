describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.themoviedb.org')

    cy.get('#inner_search_v4', { timeout: 10000 }).should('be.visible').type('amor');
    cy.get('input[value="Buscar"]').click()
  })
})