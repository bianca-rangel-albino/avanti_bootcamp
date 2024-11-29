describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.themoviedb.org')

    cy.get('#inner_search_v4', { timeout: 10000 }).should('be.visible').type('Mandy Moore');
    cy.get('input[value="Buscar"]').click()
    //cy.get('img[src="https://media.themoviedb.org/t/p/w90_and_h90_face/dzMGzkSmVetAr9ljT6e90YGbK0x.jpg"]').click()
    cy.get('#person_16855').click()
    cy.url().should('contain', 'person/16855-mandy-moore')
  })
})