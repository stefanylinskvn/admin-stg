/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
  
  beforeEach(() => {
    cy.visit('/')
  })
  
  describe('Converter usuário comprador em vendedor', () => {
  
    it('Converter usuário comprador com sucesso', () => {
      cy.loginConvertBuyer()

      //ASSERT
      cy.get('.c-iZJxHN > .antialiased > span')
        .should('have.text', 'Compras')

      cy.convertBuyerToSeller()
      // Refazer um novo usuário de comprador para o teste
        
    })
  
  })