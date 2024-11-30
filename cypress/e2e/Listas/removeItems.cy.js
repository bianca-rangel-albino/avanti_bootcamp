describe('template spec', () => {
    it('passes', () => {
  
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
      cy.contains('h4', 'Capitão América: Guerra Civil') 
        .parents('li') 
        .find('span.circle-remove')
        .click();
    })
  })