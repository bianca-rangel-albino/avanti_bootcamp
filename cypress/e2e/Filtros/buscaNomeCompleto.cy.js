describe('template spec', () => {
  it('CASO DE TESTE 11 - Busca de filme usando o nome completo', () => {
    cy.visit('https://www.themoviedb.org')
    cy.get('#inner_search_v4', { timeout: 10000 }).should('be.visible').type('um amor para recordar');
    cy.get('input[value="Buscar"]').click()
    cy.get('.title h2').should('contain', 'Um Amor para Recordar');
  })
})