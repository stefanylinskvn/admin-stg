/// <reference path="../../support/index.d.ts" />

Cypress.on('uncaught:exception', (err, runnable) => {
  return false
  });

beforeEach(() => {
  cy.visit('/recover-password')
})

describe('Recuperação de senhas', () => {

  it('Recuperar conta com sucesso', () => {
    cy.succesfullyRecoverAccount()

    //ASSERT
    cy.get('.space-y-3 > .font-bold')
      .should('have.text', 'Recuperação de conta')
    
  })

  it('Redefinir senha com sucesso', () => {
    cy.resetPasswordSuccesfully()

  })

  it.only('Tentar recuperar senha com campos vazios', () => {
    cy.resetPasswordWithEmptyFields()

    //ASSERT
    cy.get('.space-y-1 > .antialiased.font-normal')
      .should('be.visible', 'Senha deve conter pelo menos 1 número.')
    //Fazer melhoria para não aceitar espaçõs vazios inseridos pelo teclado, para apresentar corretamente a mensagem: Preencha a sua nova senha.

    cy.get('[type="submit"]')
    .should('be.disabled')

  })

  it('Validar senha fraca com pelo menos 1 número', () => {
    cy.resetPasswordWithWeakAndValidPasswords()

    //ASSERT
    cy.get('.space-y-1 > .antialiased.font-normal')
      .should('have.text', 'Senha deve conter pelo menos 1 número.')
    cy.get('.flex.transition > .antialiased')
      .should('have.text', 'Fraca')

  })

  it('Redefinir senha com caractere não igual', () => {
    cy.resetPasswordWithMismatchedPasswords()

    //ASSERT
    cy.get('[data-slot="error-message"]')
      .should('have.text', 'Senha e confirmação não são iguais.')
    cy.get('.flex.transition > .antialiased')
      .should('have.text', 'Fraca')

  })

  it('Validar senha média com pelo menos 1 letra maiúscula', () => {
    cy.resetPasswordWithMediumStrengthAndAtLeastOneUppercaseLetter()

    //ASSERT
    cy.get('.space-y-1 > .antialiased.font-normal')
      .should('have.text', 'Senha deve conter pelo menos 1 letra maiúscula.')
    cy.get('.flex.transition > .antialiased')
      .should('have.text', 'Média')

  })

  it('Validar senha média com pelo menos 1 caractere especial', () => {
    cy.resetPasswordWithMediumStrengthAndAtLeastOneSpecialCharacter()

    //ASSERT
    cy.get('.space-y-1 > .antialiased.font-normal')
      .should('have.text', 'Senha deve conter pelo menos 1 caractere especial.')
    cy.get('.flex.transition > .antialiased')
      .should('have.text', 'Média')

  })

  it('Redefinir senha forte', () => {
    cy.resetPasswordWithStrongPassword()

    //ASSERT
    cy.get('.flex.transition > .antialiased')
      .should('have.text', 'Forte')

  })
})