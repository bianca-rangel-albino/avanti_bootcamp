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


    cy.get('a').contains('Excluir lista').click();

    cy.get('#delete_list').click();

    cy.get('.k-button-text').contains('Sim').click();

  })
})