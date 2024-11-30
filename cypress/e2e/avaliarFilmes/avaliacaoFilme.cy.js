beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.themoviedb.org/login') 
    cy.get('#username').type('bianca_albinomovies')
    cy.get('#password').type('bia080802')
    cy.get('#login_button').click().wait(200)
    
})
it('CASO DE TESTE 25 - Adicionar avaliação', () => {
    cy.get('a[aria-label="Filmes"]').click()
    cy.contains('a', 'Populares').click()
    cy.get(':nth-child(1) > div.image > .wrapper > .image > .poster').first().click()
    cy.get('#vibes_content > :nth-child(1)').click()
    cy.get('.k-slider-track').click({force:true}).wait(200)
    cy.get('#vibes_submit > .text-white').click().wait(2000)
    cy.scrollTo('top')
    cy.get('.self-start').contains('%') 
})

it('CASO DE TESTE 27 - Remover uma avaliação ', () => {
    cy.get('a[aria-label="Filmes"]').click()
    cy.contains('a', 'Populares').click()
    cy.get(':nth-child(1) > div.image > .wrapper > .image > .poster').first().click()
    cy.get('#vibes_content > :nth-child(1)').click()
    cy.get('#clear_rating').click()
})


