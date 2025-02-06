/// <reference path="../../support/index.d.ts" />


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
  
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Indique e Ganhe', () => {
  
    it('Acessar a tela de indique e ganhe com usuário comprador', () => {

        cy.buyerLogin()

        //ASSERT
        cy.get('.c-cveNwM-iBxQgR-variant-top').should('not.contain', 'Indique e ganhe') 
  
      })

      it('Acessar a tela de indique e ganhe com usuário vendedor que possui empresa criada', () => {

        cy.sellerLogin()
        //Selecionando a opção indique e ganhe
        cy.get(':nth-child(8) > .c-jfuDGd').click()

        //ASSERT
        cy.get('.c-fojpRQ').should('be.visible', 'https://app-stg.kirvano.com/signup?ref=0PRE8ZW5')
  
      })

      it.only('Acessar a tela de indique e ganhe com usuário vendedor que não possui empresa criada', () => {


        cy.sellerWithoutBusinessProfile()
        //Selecionando a opção indique e ganhe
        cy.get(':nth-child(8) > .c-jfuDGd').click()

        //ASSERT
        cy.get('.c-PJLV-cBXXSE-variant-default > .c-gYlSzt').should('be.visible', 'Convide amigos e fique com 10% sobre as taxas* que a Kirvano receber das vendas do seu contato indicado.Incrível, né?')
  
       
      
  
  
      })


})  