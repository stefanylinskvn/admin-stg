Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
  
  beforeEach(() => {
    cy.visit('/')
  })
  
  describe('Sales', () => {
  
    it('Acessar a página de vendas com sucesso', () => {
     cy.loginSeller()
     cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    })

    // Selecionar um range de datas
    // Inserir o select no código para automatizar a seleção do produto e oferta


     it('Pesquisar pelo e-mail do afiliado', () => {
      cy.loginSeller()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      cy.get('.c-lkqPoU').click()
      cy.get('#affiliateEmail').type('qastefanykirvano@gmail.com')

      //ASSERT
        .should('have.value', 'qastefanykirvano@gmail.com')

      cy.contains('button', 'Aplicar filtro').click({force: true})
      
      //ASSERT
      cy.contains('p', 'qastefanykirvano@gmail.com')
      .should('be.visible')
      

     })

     it('Pesquisar pelo cupom de desconto', () => {
      cy.loginSeller()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      cy.get('.c-lkqPoU').click()
      cy.get('#coupon').type('')

      //ASSERT
        .should('have.value', '')

      cy.contains('button', 'Aplicar filtro').click({force: true})
      
      //ASSERT
      cy.contains('p', '')
      .should('be.visible')
      

     })

     it('Selecionar checkbox - Origem', () => {
      cy.loginSeller()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      cy.get('.c-lkqPoU').click()
      
      

     })


})