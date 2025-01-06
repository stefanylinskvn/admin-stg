Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
  
  beforeEach(() => {
    cy.visit('/')
  })
  
  describe('Dashboard', () => {
  
    it('Visualizar Dashboard', () => {
     cy.loginSeller()

     // 7 dias true   
     cy.get('.c-dzlBKm-jvimYT-active-true') 
     cy.get('.c-dzlBKm-jvimYT-active-true')
     // 15 dias falso
     cy.get('.c-AJMNd > :nth-child(2)')
     // 30 dias falso   
     cy.get('.c-AJMNd > :nth-child(3)')

  
    })

})