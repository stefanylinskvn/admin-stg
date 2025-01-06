/// <reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  });

beforeEach(() => {
  cy.visit('/')
})

describe('Login de usuário vendedor', () => {

  it('Efetuar login com sucesso', () => {
   cy.loginSeller()

  })

  it('Efetuar logout com sucesso', () => {
    cy.loginSeller()
    cy.logout()
    
  })

  it('Efetuar login com credenciais incorretas', () => {
    cy.loginWithInvalidCredentialsSeller()
    
  })

  it('Efetuar login sem senha digitada', () => {
    cy.loginWithoutPasswordSeller()

    //ASSERT
    cy.get('.h-full.flex > .flex-col')
      .should('have.text', 'A senha deve conter no mínimo 8 caracteres.')
    
  })

  it('Efetuar login com e-mail inválido', () => {
    cy.loginWithInvalidEmailSeller()

    //ASSERT
    cy.get('.h-full.flex > .flex-col')
      .should('have.text', 'E-mail inválido.')
    
  })
})

describe('Login de usuário comprador', () => {

  it('Efetuar login com sucesso', () => {
    cy.loginBuyer()

    //ASSERT
    cy.get('.c-iZJxHN > .antialiased > span')
      .should('have.text', 'Compras')

  })

  it('Efetuar logout com sucesso', () => {
    cy.loginBuyer()
    cy.logout()
    
  })

  it('Efetuar login com credenciais incorretas', () => {
    cy.loginWithInvalidCredentialsBuyer()
    
  })

  it('Efetuar login sem senha digitada', () => {
    cy.loginWithoutPasswordBuyer()

    //ASSERT
    cy.get('.h-full.flex > .flex-col')
      .should('have.text', 'A senha deve conter no mínimo 8 caracteres.')
    
  })

  it('Efetuar login com e-mail inválido', () => {
    cy.loginWithInvalidEmailBuyer()

    //ASSERT
    cy.get('.h-full.flex > .flex-col')
      .should('have.text', 'E-mail inválido.')
    
  })

})