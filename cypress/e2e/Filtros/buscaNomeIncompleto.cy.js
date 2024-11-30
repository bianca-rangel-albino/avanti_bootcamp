describe('template spec', () => {
  it('CASO DE TESTE 10 - Busca de filme usando o nome incompleto', () => {
    cy.visit('https://www.themoviedb.org')

    cy.get('#inner_search_v4', { timeout: 10000 }).should('be.visible').type('amor');
    cy.get('input[value="Buscar"]').click()

    cy.get('h2').each(($el) => {
      const text = $el.text().toLowerCase(); 
      expect(text).to.include('amor'); 
    }) 
  })
})