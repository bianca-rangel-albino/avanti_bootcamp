describe('template spec', () => {
  it('passes', () => {

    cy.visit('https://www.themoviedb.org')

    cy.get('a[aria-label="Entrar"]').click();
    cy.get('#username').type('archiefraga');
    cy.get('#password').type('qwe123');
    cy.get('#login_button').click();
    
    cy.get('.avatar.background_color.pink').click();
    cy.get('a').contains('Listas').click();

    cy.get('.rounded.button.border_color.background_color.pink').click();
    cy.get('#name').type('Minha Lista - Squad 5');
    cy.get('#description').type('Minha lista de filmes e séries favoritas.');
    cy.get('#step_1_submit').click();
  })
})