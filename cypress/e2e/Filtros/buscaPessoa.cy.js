describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.themoviedb.org')

    cy.get('#inner_search_v4', { timeout: 10000 }).should('be.visible').type('Leonardo DiCaprio');
    cy.get('input[value="Buscar"]').click()

    cy.title().should('include', 'Leonardo DiCaprio')
  })
})