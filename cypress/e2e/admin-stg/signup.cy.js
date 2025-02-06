import {fakerPT_BR as faker} from '@faker-js/faker'
import { cpf, celular} from 'gerador-br'
/// <reference path="../../support/index.d.ts" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
  
  beforeEach(() => {
    cy.visit('/signup')
  })
  
  describe('Cadastro de novos vendedores', () => {

    it('Efetuar cadastro de novo usuário com sucesso', () => {

     cy.newUser(
      
      faker.person.firstName(),
      faker.person.lastName(),
      faker.internet.email(),
      celular(),
      faker.internet.password({lenght:10, prefix: '$'})
    
    )

      //ASSERT
      cy.get('.text-center > .flex > .antialiased')
        .should('have.text', 'Ao criar sua conta, você confirma que leu e concorda com os termos de uso da Kirvano')
      cy.get('.text-center > .font-bold').click()
        .should('have.text','Verifique seu e-mail')
        cy.wait(65000)

    })

    it('Efetuar cadastro de novo usuário com e-mail já em uso', () => {

      

      cy.userWithEmailAlreadyInUse(
      
      faker.person.firstName(),
      faker.person.lastName(),
      celular(),
      faker.internet.password({lenght:10, prefix: '$'})

      )

      //ASSERT
      cy.get('.text-center > .flex > .antialiased')
        .should('have.text', 'Ao criar sua conta, você confirma que leu e concorda com os termos de uso da Kirvano')
      cy.get('.c-kdxbmA > :nth-child(2)')
        .should('have.text', 'E-mail informado já cadastrado')

    })

    it('Tentar cadastrar usuário sem informar os dados nos campos obrigatórios', () => {
      cy.userRegistrationFailure()

      //ASSERT
      cy.get('.text-center > .flex > .antialiased')
        .should('have.text', 'Ao criar sua conta, você confirma que leu e concorda com os termos de uso da Kirvano')
      cy.get('.c-bUqmCP > span')
        .should('have.text', 'Ops! Algo deu errado.')
    })

    it('Tentar cadastrar usuário sem preencher o campo obrigatório nome', () => {
      cy.get('[aria-label="Nome"]').type(' ')

      //ASSERT
      cy.get('[data-slot="error-message"]')
        .should('have.text', 'Informe seu nome.')
      
    })

    it('Tentar cadastrar usuário sem preencher o campo obrigatório sobrenome', () => {
      cy.get('[aria-label="Sobrenome"]').type(' ')

      //ASSERT
      cy.get('[data-slot="error-message"]')
        .should('have.text', 'Informe seu sobrenome.') 

    })

    it('Tentar cadastrar usuário sem preencher o campo obrigatório e-mail', () => {
      cy.get('[aria-label="E-mail"]').type('   ')

      //ASSERT
      cy.get('[data-slot="error-message"]')
        .should('have.text', 'Informe um e-mail válido.') 

    })

    it('Preencher e-mail inválido', () => {
      cy.get('[aria-label="E-mail"]').type('stefany@teste.c')

      //ASSERT
      cy.get('[data-slot="error-message"]')
      .should('have.text', 'Informe um e-mail válido.') 

    })

    it('Preencher número de celular inválido', () => {
      cy.get('[name="phone"]').type('119812124')

      //ASSERT
      cy.get('[data-slot="error-message"]')
      .should('have.text', 'Celular inválido') 

    })

    it('Tentar cadastrar usuário sem preencher o campo obrigatório número de celular', () => {
      cy.get('[name="phone"]').type('119812124')

      //ASSERT
      cy.get('[data-slot="error-message"]')
      .should('have.text', 'Celular inválido') 

    })

    it('Tentar cadastrar usuário com senha fraca e com pelo menos 1 número', () => {
      cy.passwordValidationWeakandMissingNumber(

      faker.person.firstName(),
      faker.person.lastName(),
      faker.internet.email(),
      celular(),

      )

      //ASSERT
      cy.get(':nth-child(8) > .antialiased.font-normal')
        .should('have.text', 'Senha deve conter pelo menos 1 número.')
      
      
    })

    it('Tentar cadastrar usuário com senha fraca e com pelo menos 1 letra maiúscula', () => {
      cy.validateWeakPasswordWithUppercase(

        faker.person.firstName(),
        faker.person.lastName(),
        faker.internet.email(),
        celular(),
        
      )

      //ASSERT
      cy.get(':nth-child(8) > .antialiased.font-normal')
        .should('have.text', 'Senha deve conter pelo menos 1 caractere especial.')
      
    })

    it('Tentar cadastrar usuário com senha média e com pelo menos 1 caractere especial', () => {
      cy.validateMediumPasswordWithSpecialCharacter(

        faker.person.firstName(),
        faker.person.lastName(),
        faker.internet.email(),
        celular(),
      )

      //ASSERT
      cy.get(':nth-child(8) > .antialiased.font-normal')
        .should('have.text', 'Senha deve conter pelo menos 1 caractere especial.')
      
    })

    it('Tentar cadastrar usuário com senha média e com no minimo 8 caracteres', () => {
      cy.validateMediumPasswordWithMinLength(

        faker.person.firstName(),
        faker.person.lastName(),
        faker.internet.email(),
        celular(),
      )

      //ASSERT
      cy.get(':nth-child(8) > .antialiased.font-normal')
        .should('have.text', 'Sua senha deve ter no mínimo 8 caracteres.')

    })

    it('Reenviar e-mail de verificação', () => {
        cy.resendVerificationEmail(

          faker.person.firstName(),
          faker.person.lastName(),
          faker.internet.email(),
          celular(),
          faker.internet.password({lenght:10, prefix: '$'})

        )

        //ASSERT
        cy.get('.text-center > .flex > .antialiased')
          .should('have.text', 'Ao criar sua conta, você confirma que leu e concorda com os termos de uso da Kirvano')
        cy.get('.text-center > .font-bold')
          .should('have.text','Verifique seu e-mail')

        cy.wait(65000)
        cy.get('.p-4').click()
  
      })

      it('Editar e-mail de verificação', () => {
        cy.editVerificationEmail(

          faker.person.firstName(),
          faker.person.lastName(),
          faker.internet.email(),
          celular(),
          faker.internet.password({lenght:10, prefix: '$'})

        )

        //ASSERT
        cy.get('.text-center > .flex > .antialiased')
          .should('have.text', 'Ao criar sua conta, você confirma que leu e concorda com os termos de uso da Kirvano')
        cy.get('.text-center > .font-bold')
          .should('have.text','Verifique seu e-mail')

        cy.wait(65000)
        cy.get('[type="button"]').click()
        cy.get('[aria-label="E-mail"]').click().clear()
        cy.get('[aria-label="E-mail"]').type(faker.internet.password({lenght:10, prefix: '$'}))
        cy.get('[type="submit"]').click({ multiple: true })

      })

      //it('Confirmar cadastro', () => {
        //cy.visit('https://www.mailinator.com/')
        //cy.get('#search').type('marcia@mailinator.com')
        //cy.get('#site-header > .g5core-top-bar > .container > .g5core-top-bar-inner > .g5core-top-bar-left > .g5core-top-bar-item > button').click()
        //cy.get('#row_marcia-1733759291-13856292013 > [style="width:300px;max-width:300px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size: 22px;"]').click()
        //cy.get('#html_msg_body').click()
        //cy.visit('https://www.mailinator.com/linker?linkid=bb4f10a6-c2e8-453c-9b48-38fc429535f1')  
        
      //})

      // it('Link de confirmação de cadastro expirado', () => {
      //   cy.visit('https://www.mailinator.com/linker?linkid=a8199236-1a9c-40b7-9480-eaf9618c1c96')
      //   cy.contains('button', 'Entendi').click()

      // })

})

describe('Cadastro de novos compradores', () => {

  it.only('Efetuar compra grátis com sucesso', () => {
    cy.registerNewBuyer(

      faker.person.fullName(),
      faker.internet.email(),
      cpf(),
      celular()

    )
      
  })


  
})
