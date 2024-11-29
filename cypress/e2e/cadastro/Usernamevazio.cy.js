const { faker, ColorModule } = require('@faker-js/faker');

describe('testes para validar registro de usuario', () => {
    it('Validar mensagem Username Vazio', () => {
        cy.visit('https://www.themoviedb.org/');
       
        cy.get('.primary').within(() => {
            cy.get('a[href="/signup"]').click();
        })

        cy.url().should('include','signup');
 
        const password = faker.internet.password({ length: 10 });
        cy.log(`password gerado:${password}`);
        
        const email = faker.internet.email();
        cy.log(`email gerado: ${email}`);

        const mensagemError = 'Username é necessário(a)';
        
        //cy.insertUsername(username);  //Nao inserimos o username
        cy.insertPassword(password);
        cy.insertPasswordConfirm(password);
        cy.insertEmail(email);
        cy.clickButton();
        
        // O site possui mecanismos que bloqueiam a automatizacao.
        // Por isso esse wait será usado para verificar se conseguimos
        // passar pela etapa de verificacao
        cy.wait(60000);

        cy.mensagemError(mensagemError);
        
           
    })  
}) 