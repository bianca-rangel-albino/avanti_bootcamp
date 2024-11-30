describe('Cadastro de Usuário - Campo de Senha Vazio', () => {
    it('Não deve permitir o cadastro quando a senha estiver vazia', () => {
        // Acessa a página de cadastro
        cy.visit('https://www.themoviedb.org/signup');  
  
        // Preenche os campos de cadastro
        cy.get('#username').type('Tester Senha Vazia');  // Nome do usuário
        cy.get('#password').clear('');  // Senha vazia
        cy.get('#password_confirm').clear('');  // Confirmação de senha vazia
        cy.get('#email').type('testersenhavazia@ex.com');  // Email
  
        // Envia o formulário
        cy.get('#sign_up_button').click();
       //validação
        cy.get('<h2>').should('contain', 'There was an error processing your signup')
  
    });  
})