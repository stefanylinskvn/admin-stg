/// <reference types="cypress"/>
/// <reference path="../../support/index.d.ts" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
  
  beforeEach(() => {
    cy.visit('/')
  })
  
  describe('Converter usuário comprador em vendedor', () => {
  
    it('Converter usuário comprador com sucesso', () => {
      cy.buyerConvertLogin()

      //ASSERT
      cy.get('.c-iZJxHN > .antialiased > span')
        .should('have.text', 'Compras')

      cy.buyerConvertToSeller()
      // Refazer um novo usuário de comprador para o teste
        
    })
  
  })