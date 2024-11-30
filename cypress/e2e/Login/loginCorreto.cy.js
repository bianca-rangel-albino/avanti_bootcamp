describe('template spec', () => {
    it('CASO DE TESTE 09 - Login com dados de cadastros corretos', () => {
      cy.visit('https://www.themoviedb.org'); 
  
      cy.get('a[aria-label="Entrar"]').click();
      cy.get('#username').type('archiefraga');
      cy.get('#password').type('qwe123');
      cy.get('#login_button').click();
      cy.url('https://www.themoviedb.org').should('contain', '/u/archiefraga')
    });
  });