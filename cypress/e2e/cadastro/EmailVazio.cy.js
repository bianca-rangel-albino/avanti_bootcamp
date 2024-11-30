const { faker } = require('@faker-js/faker');
describe('testes para validar registro de usuario focando no Email', () => {
    beforeEach(()=>{
        cy.visit('https://www.themoviedb.org/');
   
        cy.get('.primary').within(() => {
            cy.get('a[href="/signup"]').click();
        })

        cy.url().should('include','signup');

        const username = faker.internet.username();
        cy.log(`username gerado: ${username}`); 

        const password = faker.internet.password({ length: 10 });
        cy.log(`password gerado:${password}`);
       
        cy.insertUsername(username);
        cy.insertPassword(password);
        cy.insertPasswordConfirm(password);
    })

    it('CASO DE TESTE 03 - Cadastro com erro - Campo de email vazio', () => {

        const mensagemError = 'Email does not appear to be valid'; //tiro daqui cmd
        cy.insertEmail('');
        cy.clickButton();   
        // O site possui mecanismos que bloqueiam a automatizacao.
        // Por isso esse wait será usado para verificar se conseguimos
        // passar pela etapa de verificacao
        cy.wait(60000);
        cy.mensagemError(mensagemError);  
    }) 
    
    it('CASO DE TESTE 06 - Cadastro com erro - Campo com e-mail inválido', () => {

        const mensagemError = 'Email does not appear to be valid';
        cy.insertEmail('avanti_tgmail.com'); //email sem @
        cy.clickButton();   
        cy.wait(60000);
        cy.mensagemError(mensagemError);  
    })
})