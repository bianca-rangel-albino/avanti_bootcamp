describe('template spec', () => {
  it('CASO DE TESTE 07 - Login com nome do usuario inválido', () => {
    cy.visit('https://www.themoviedb.org');
    cy.get('a[aria-label="Entrar"]').click();
    cy.get('#username').type('usuarioErrado');
    cy.get('#password').type('qwe123');
    cy.get('#login_button').click();
    cy.contains("We couldn't find your username.").should('exist');
  });
});