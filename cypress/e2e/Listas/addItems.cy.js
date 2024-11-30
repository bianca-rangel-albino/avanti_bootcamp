describe('template spec', () => {
    it('CASO DE TESTE 21 - Adicionar itens na listas', () => {
  
      cy.visit('https://www.themoviedb.org')
      cy.get('a[aria-label="Entrar"]').click();
      cy.get('#username').type('archiefraga');
      cy.get('#password').type('qwe123');
      cy.get('#login_button').click();
      cy.get('.avatar.background_color.pink').click();
      cy.get('a').contains('Listas').click();
      cy.get('a').contains('Minha Lista - Squad 5').click();
      cy.get('a').contains('Editar').click();
      cy.get('a').contains('Adicionar/Editar itens').click();
      cy.get('#list_item_search').type('Capitão América: Guerra Civil');
      cy.get('.submit_comment')
        .should('be.visible') 
        .should('not.be.disabled') 
        .click();
    })
  })