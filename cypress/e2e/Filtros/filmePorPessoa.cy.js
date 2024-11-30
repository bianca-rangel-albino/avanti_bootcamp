describe('template spec', () => {
  it('CASO DE TESTE 13 - Busca por Pessoa', () => {
    cy.visit('https://www.themoviedb.org')
    cy.get('#inner_search_v4', { timeout: 10000 }).should('be.visible').type('Mandy Moore');
    cy.get('input[value="Buscar"]').click()
    cy.get('#person_16855').click()
    cy.url().should('contain', 'person/16855-mandy-moore')
  
  })
})