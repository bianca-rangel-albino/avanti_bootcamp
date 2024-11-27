describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.themoviedb.org'); 
  
      cy.get('a[aria-label="Entrar"]').click();
      cy.get('#username').type('archiefraga');
      cy.get('#password').type('9876');
      cy.get('#login_button').click();

      cy.contains("We couldn't validate your information. Want to try again?").should('exist');
    });
  });