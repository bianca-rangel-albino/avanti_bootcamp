describe('template spec', () => {
    it('Login com dados de cadastros corretos', () => {
      cy.visit('https://www.themoviedb.org'); 
  
      cy.get('a[aria-label="Entrar"]').click();
      cy.get('#username').type('usuarioErrado');
      cy.get('#password').type('qwe123');
      cy.get('#login_button').click();

      cy.contains("We couldn't find your username.").should('exist');
    });
  });