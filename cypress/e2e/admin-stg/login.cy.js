/// <reference types="cypress"/>
/// <reference path="../../support/index.d.ts" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  });

beforeEach(() => {
  cy.visit('/')
})

describe('Login de usuário vendedor', () => {

  it('Efetuar login com sucesso', () => {
   cy.sellerLogin()

  })

  it('Efetuar logout com sucesso', () => {
    cy.sellerLogin()
    cy.logout()
    
  })

  it('Efetuar login com credenciais incorretas', () => {
    cy.loginWithInvalidSellerCredentials()
    
  })

  it('Efetuar login sem senha digitada', () => {
    cy.loginWithoutSellerPassword()

    //ASSERT
    cy.get('[data-slot="helper-wrapper"]')
      .should('have.text', 'A senha deve conter no mínimo 8 caracteres.')
    
  })

  it('Efetuar login com e-mail inválido', () => {
    cy.loginWithInvalidSellerEmail()

    //ASSERT
    cy.get('[data-slot="error-message"]')
      .should('have.text', 'E-mail inválido.')
    
  })
})

describe('Login de usuário comprador', () => {

  it('Efetuar login com sucesso', () => {
    cy.buyerLogin()

    //ASSERT
    cy.get('.c-fCPoGd > .antialiased > span')
      .should('have.text', 'Compras')

  })

  it('Efetuar logout com sucesso', () => {
    cy.buyerLogin()
    cy.logout()
    
  })

  it('Efetuar login com credenciais incorretas', () => {
    cy.loginWithInvalidBuyerCredentials()
    
  })

  it('Efetuar login sem senha digitada', () => {
    cy.loginWithoutBuyerPassword()

    //ASSERT
    cy.get('[data-slot="helper-wrapper"]')
      .should('have.text', 'A senha deve conter no mínimo 8 caracteres.')
    
  })

  it('Efetuar login com e-mail inválido', () => {
    cy.loginWithInvalidBuyerEmail()

    //ASSERT
    cy.get('[data-slot="error-message"]')
      .should('have.text', 'E-mail inválido.')
    
  })

})

  describe('Login de usuário bloqueado, inativo e banido', () => {

  it('Efetuar login com usuário bloqueado com sucesso', () => {
    cy.userLoginBlocked()
 
   })

   it('Não autorizar efetuar login com usuário inativo', () => {
    cy.userLoginInactive()

    //ASSERT
    cy.get('.c-bUqmCP > span')
    .should('have.text', 'A sua conta está desativada.')
 
   })

   it('Não autorizar efetuar login com usuário banido', () => {
    cy.userLoginBanned()

    //ASSERT
    cy.get('.c-bUqmCP > span')
    .should('have.text', 'A sua conta foi desativada definitivamente por infringir as regras do nosso termo de uso.')
    
 
   })

})