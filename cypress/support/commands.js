
Cypress.Commands.add('insertUsername', (username)=>{
    cy.get('#username').should('be.visible').type(username);
});

Cypress.Commands.add('insertPassword', (password)=>{
    cy.get('#password').should('be.visible').type(password);
});

Cypress.Commands.add('insertPasswordConfirm', (passwordConfirm) =>{
    cy.get('#password_confirm').should('be.visible').type(passwordConfirm);
});

Cypress.Commands.add('insertEmail', (email) =>{
    if(typeof email === 'string' && email.length === 0) {
        // Se email vazio, devemos limpar o campo.
        cy.get('#email').should('be.visible').clear();
        return;
    }
    cy.get('#email').should('be.visible').type(email);
});

Cypress.Commands.add('clickButton', () =>{
    cy.get('#sign_up_button').should('be.visible').click();
});   

Cypress.Commands.add('mensagemError', (mensagemError) =>{
    cy.get('.error_status').should('be.visible').contains(mensagemError);
});   

