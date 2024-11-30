describe('Cadastro de Usuário - Fluxo Bem-Sucedido', () => {
    it('Deve permitir o cadastro de um novo usuário', () => {
      // Acessa a página de cadastro
      cy.visit('https://www.themoviedb.org/signup');  
      // Preenche os campos de cadastro
      cy.get('#username').type('Tester Sucesso');  // Nome do usuário
      cy.get('#password').type('142536');  // senha
      cy.get('#password_confirm').type('142536');  // Confirmação de senha
      cy.get('#email').type('testersuccesso@ex.com');  // Email
      // Envia o formulário
      cy.get('#sign_up_button').click();
      cy.get('h1').should('contain', 'Vamos confirmar que você é humano');
      cy.get('p').should('contain', 'Conclua a verificação de segurança antes de continuar. Essa etapa verifica se você não é um bot, o que ajuda a proteger sua conta e evitar spam.')
      cy.get('#amzn-captcha-verify-button').click();
    });
});