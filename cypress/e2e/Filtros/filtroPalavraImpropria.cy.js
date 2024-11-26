describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.themoviedb.org'); 

    cy.get('a[aria-label="Entrar"]').click();
    cy.get('#username').type('archiefraga');
    cy.get('#password').type('qwe123');
    cy.get('#login_button').click();

    cy.get('.avatar.background_color.pink').click();
    cy.contains('Configurações').click({ force: true });

    cy.get('#filter_profanity').find('option:selected').should('have.text', 'Sim');
    cy.get('#filter_profanity option[selected]').should('have.value', 'true');

    cy.get('input[type="submit"][value="Salvar"]').click();
    cy.get('[aria-label="Início"]').click();
    cy.get('#inner_search_v4').type('merda');
    cy.get('input[type="submit"][value="Buscar"]').click();
    cy.wait(5000);
    cy.get('.result') 
    .should('not.contain.text', 'merda');
  });
});