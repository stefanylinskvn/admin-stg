/// <reference types="cypress"/>

declare namespace Cypress {
    interface Chainable{
        /**
         * @example cy.loginSeller() // Função para fazer login na aplicação com perfil vendedor, utilizando user e password default do aqruivo cypress.env.json
         */
        loginSeller(): Chainable

        /**
         * @example cy.logout() // Função para fazer logout na aplicação
        */
        logout(): Chainable

        /**
         * @example cy.logout() // Função para fazer logout na aplicação
        */
        loginWithInvalidCredentialsSeller(): Chainable

    }
}