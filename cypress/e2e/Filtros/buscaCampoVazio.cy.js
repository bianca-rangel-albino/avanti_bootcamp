describe('template spec', () => {
  it('CASO DE TESTE 12 - Busca por campo vazio', () => {
    cy.visit('https://www.themoviedb.org');

    cy.get('#inner_search_v4', { timeout: 10000 }).should('be.visible').type(' ');
    cy.get('input[value="Buscar"]').click()
    cy.get('.movie > .results > p').should('contain', 'Não foram encontrados filmes que correspondam aos seus critérios de busca.')
    cy.get('input[value="Buscar"]').click();
    cy.get('p').should('contain', 'Não foram encontrados filmes que correspondam aos seus critérios de busca.');
  })
})