/// <reference path="../../support/index.d.ts" />


Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });
  
  beforeEach(() => {
    cy.visit('/')
  })

describe('Página de Vendas', () => {
  
  it('Validar se todos os botões estão habilitados para vendedor que possui vendas', () => {
  
  cy.sellerLogin()
  cy.get('a[href="/sales"]').click({ multiple: true })

  //ASSERT

  //Campo de busca
  cy.get('input[placeholder="Buscar por CPF, transação, e-mail ou nome..."]')
 .should('be.visible')

 //Botão filtrar
 cy.get('.c-lkqPoU').should('be.visible')

 //Comissão
 cy.get(':nth-child(1) > .c-gYlSzt-bIlHAf-variant-darkGray')
  .invoke('text') // Obtém o texto do elemento
  .then((texto) => {
    const match = texto.match(/[\d,.]+/g); // Extrai números com vírgulas ou pontos
    expect(match).to.not.be.null; // Garante que encontramos um número antes de converter
    const numeroExtraido = parseFloat(match[0].replace(',', '.')); // Substitui vírgula por ponto (caso seja número decimal)
    expect(numeroExtraido).to.not.be.NaN;
    expect(numeroExtraido).to.be.greaterThan(0);
  });

 //Total
 cy.get(':nth-child(2) > .c-gYlSzt-bIlHAf-variant-darkGray')
 .invoke('text') // Obtém o texto do elemento
  .then((texto) => {
    const match = texto.match(/[\d,.]+/g); // Extrai números com vírgulas ou pontos
    expect(match).to.not.be.null; // Garante que encontramos um número antes de converter
    const numeroExtraido = parseFloat(match[0].replace(',', '.')); // Substitui vírgula por ponto (caso seja número decimal)
    expect(numeroExtraido).to.not.be.NaN;
    expect(numeroExtraido).to.be.greaterThan(0);
  });

 //Filtro aprovado e pendente
 cy.contains('p','Aprovado').should('be.visible')
 cy.contains('p','Pendente').should('be.visible')
  

  })

  it('Listar apenas as vendas aprovadas', () => {
  
    cy.sellerLogin()
    cy.get('a[href="/sales"]').click({ multiple: true })
    //Remover o filtro de vendas pendentes
    cy.get(':nth-child(2) > .removeFilterIcon').click()

  //ASSERT

  cy.get('table tbody tr') // Seleciona todas as linhas da tabela
  .contains('Aprovada') // Procura o texto dentro da tabela
  .should('be.visible'); // Garante que está visível
   
   })

   it('Listar todas as vendas até hoje', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()

  //ASSERT


   
   })

   it('Filtrar apenas vendas aprovadas', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar vendas aprovadas
    cy.get('.c-lkqPoU').click()
    cy.get('#approved').check({ force: true })
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

  //ASSERT

  cy.get('table tbody tr') // Seleciona todas as linhas da tabela
  .contains('Aprovada') // Procura o texto dentro da tabela
  .should('be.visible'); // Garante que está visível
   
   })

   it('Filtrar apenas vendas pendentes', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar vendas pendente
    cy.get('.c-lkqPoU').click()
    cy.get('#pending').check({ force: true })
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

  //ASSERT

  cy.get('table tbody tr') // Seleciona todas as linhas da tabela
  .contains('Pendente') // Procura o texto dentro da tabela
  .should('be.visible'); // Garante que está visível
   
   })

   it('Filtrar apenas vendas canceladas', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar vendas canceladas
    cy.get('.c-lkqPoU').click()
    cy.get('#expired').check({ force: true })
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

  //ASSERT

  cy.get('table tbody tr') // Seleciona todas as linhas da tabela
  .contains('Cancelada') // Procura o texto dentro da tabela
  .should('be.visible'); // Garante que está visível
   
   })

   it('Filtrar apenas vendas recusadas', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar vendas recusadas
    cy.get('.c-lkqPoU').click()
    cy.get('#refused').check({ force: true })
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

  //ASSERT

  cy.get('table tbody tr') // Seleciona todas as linhas da tabela
  .contains('Recusada') // Procura o texto dentro da tabela
  .should('be.visible'); // Garante que está visível


   
   })

   it('Filtrar apenas vendas estornadas', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar vendas estornadas
    cy.get('.c-lkqPoU').click()
    cy.get('#refunded').check({ force: true })
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

    //ASSERT

  cy.get('table tbody tr') // Seleciona todas as linhas da tabela
  .contains('Estornada') // Procura o texto dentro da tabela
  .should('be.visible'); // Garante que está visível

  
   
   })

   it('Filtrar apenas vendas chargeback', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar vendas chargeback
    cy.get('.c-lkqPoU').click()
    cy.get('#chargeback').check({ force: true })
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

    //ASSERT

  cy.get('table tbody tr') // Seleciona todas as linhas da tabela
  .contains('Chargeback') // Procura o texto dentro da tabela
  .should('be.visible'); // Garante que está visível


   
   })

    it('Filtrar apenas vendas de um comprador especifico', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar e-mail comprador
    cy.get('.c-lkqPoU').click()
    cy.get('input[id="affiliateEmail"]').type('d.santoslopes@gmail.com')
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

  //ASSERT
  cy.contains('p','d.santoslopes@gmail.com').should('be.visible')

  
   
   })

   it('Filtrar apenas vendas com cartão de crédito', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar vendas canceladas
    cy.get('.c-lkqPoU').click()
    cy.get('#creditCard').check({ force: true })
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

  //ASSERT

  cy.contains('p','Cartão de crédito').should('be.visible')

 
   
   })

   it('Filtrar apenas vendas com pix', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar vendas canceladas
    cy.get('.c-lkqPoU').click()
    cy.get('#pix').check({ force: true })
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

  //ASSERT
  cy.contains('p','PIX').should('be.visible')

  
   
   })

   it('Filtrar apenas vendas com nupay', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar vendas nupay
    cy.get('.c-lkqPoU').click()
    cy.get('#nupay').check({ force: true })
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

  //ASSERT
  cy.contains('p','Nupay').should('be.visible')


   
   })

   it('Filtrar apenas vendas com picpay', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar vendas picpay
    cy.get('.c-lkqPoU').click()
    cy.get('#picpay').check({ force: true })
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

  //ASSERT
  cy.contains('p','Picpay').should('be.visible')

 
   
   })

   it('Filtrar apenas vendas com boleto', () => {
  
    cy.sellerLogin()
    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()
    //Filtrar vendas boleto
    cy.get('.c-lkqPoU').click()
    cy.get('#bankSlip').check({ force: true })
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

  //ASSERT
  cy.contains('p','Boleto').should('be.visible')

 
   
   })
    
 
    it('Filtrar apenas vendas gratuitas', () => {
   
     cy.sellerLogin()
     cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
     //Remover o filtro de vendas pendentes e aprovadas
     cy.get(':nth-child(1) > .removeFilterIcon').click()
     cy.get('.removeFilterIcon').click()
     //Filtrar vendas canceladas
     cy.get('.c-lkqPoU').click()
     cy.get('#free').check({ force: true })
     cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
 
   //ASSERT
   cy.contains('p','Gratuito').should('be.visible')
 

    
    })

    it.only('Filtrar cupom com valor 100', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar cupom
      cy.get('.c-lkqPoU').click()
      cy.get('#coupon').type('100')
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
      cy.get('tr[class="has-details false"]').first().click({force : true})
  
    //ASSERT

    //Clicar em algum registro da tabela e verificar na modal se possui no campo Cupom de desconto o valor -1,00
    cy.contains('p', 'Cupom de desconto').should('have.text', 'Cupom de desconto')

 
     
     })

     it('Filtrar cupom com valor 1', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar cupom
      cy.get('.c-lkqPoU').click()
      cy.get('#coupon').type('1')
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
  
    //ASSERT

    cy.contains('p', 'Não há registros...').should('have.text', 'Não há registros...')
  
 
     
     })

     it('Filtrar vendas de preço único', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar vendas de preço único
      cy.get('.c-lkqPoU').click()
      cy.get('#oneTime').check({ force: true })
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
  
    //ASSERT
    cy.contains('p','Preço único').should('be.visible')

 
     
     })

     it('Filtrar vendas de assinatura', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar vendas de assinatura
      cy.get('.c-lkqPoU').click()
      cy.get('#recurring').check({ force: true })
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
  
    //ASSERT
    cy.contains('p','Assinatura').should('be.visible')

    
  
 
     
     })

     it('Filtrar vendas de afiliado especifico', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar vendas de afiliado
      cy.get('.c-lkqPoU').click()
      cy.get('input[id="affiliateEmail"]').type('danilucio1501@gmail.com')
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
  
    //ASSERT

    //Sistema deve listar apenas registros de vendas que seja do Afiliado danilucio1501@gmail.com
    //Verificar na modal da venda se possui a informação 
    //danilucio1501@gmail.com no campo Afiliado

    
  
 
     
     })

     it('Filtrar vendas de afiliado com e-mail incorreto', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar vendas de afiliado
      cy.get('.c-lkqPoU').click()
      cy.get('input[id="affiliateEmail"]').type('sss@gmail.com')
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
  
    //ASSERT

    cy.contains('p', 'Não há registros...').should('have.text', 'Não há registros...')
  
 
     
     })

     it('Filtrar UTM Term', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar UTM
      cy.get('.c-lkqPoU').click()
      cy.get('#utmTerm').check({ force: true })
      cy.get('input[id="utmTermValue"]').type('teste')
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
  
    //ASSERT
    //Sistema deve listar apenas registros de vendas que tenha UTM Term com a informação teste
    //Verificar na modal da venda se possui a informação 
    //teste no campo UTM Term

    
  
 
     
     })

     it('Filtrar UTM Content', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar UTM
      cy.get('.c-lkqPoU').click()
      cy.get('input[id="utmContent"]').check({ force: true })
      cy.get('input[id="utmContentValue"]').type('teste')
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
  
    //ASSERT

    cy.contains('p', 'Não há registros...').should('have.text', 'Não há registros...')
  
 
     
     })

     it('Filtrar vendas autoral', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar vendas autoral
      cy.get('.c-lkqPoU').click()
      cy.get('#autoral').check({ force: true })
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
  
    //ASSERT

    //Sistema deve listar apenas registros de vendas autoral
   //Clicar no registro qualquer e confirmar senão possui a informação Afiliado e Coprodutor na modal

    cy.contains('p', 'Autoral').should('have.text', 'Autoral')

      
 
     
     })

     it('Filtrar vendas de afiliação', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar vendas de afiliação
      cy.get('.c-lkqPoU').click()
      cy.get('#affiliation').check({ force: true })
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
  
    //ASSERT

    //Sistema deve listar apenas registros de vendas afiliação
    //Clicar no registro qualquer e confirmar que possui a informação Comissão do afiliado na modal


    cy.contains('p', 'Afiliação').should('have.text', 'Afiliação')

      
 
     
     })

     it('Filtrar vendas de coprodução', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar vendas de coprodução
      cy.get('.c-lkqPoU').click()
      cy.get('#coproduction').check({ force: true })
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
  
    //ASSERT

    //Sistema deve listar apenas registros de vendas Coprodutor
    //Clicar no registro qualquer e confirmar que possui a informação Comissão do coprodutor na modal

    cy.contains('p', 'Coprodução').should('have.text', 'Coprodução')

    cy.get('table tbody tr').first().click(); // Seleciona a primeira linha do corpo da tabela



      
 
     
     })

     it('Filtrar o primeiro produto da listagem de vendas', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar primeiro produto
      cy.get('.c-lkqPoU').click()
      cy.get('#product > .kirvano__control > .kirvano__indicators > .kirvano__indicator').click()
      cy.get('#react-select-2-option-1').click()
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
      cy.get('tr[class="has-details false"]').first().click({force : true})
    //ASSERT

    // Verificando se o texto de um elemento é igual ao de outro
    cy.get('.c-gVDTel > .c-gYlSzt').invoke('text').then((text1) => {
    cy.get(':nth-child(3) > .c-etaDDd > .c-cwlLar > .c-TbbQX').invoke('text').should('equal', text1); // Compara o texto dos dois elementos
    });


      
 
     
     })

     it('Filtrar o primeiro produto e a primeira oferta da listagem', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar vendas de afiliação
      cy.get('.c-lkqPoU').click()
      //Selecionando o primeiro produto
      cy.get('#product > .kirvano__control > .kirvano__indicators > .kirvano__indicator').click()
      cy.get('#react-select-2-option-1').click()
      //Selecionando a primeira oferta
      cy.get('#offer > .kirvano__control > .kirvano__indicators > .kirvano__indicator').click()
      cy.get('#react-select-3-option-1').click()
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
      cy.get('tr[class="has-details false"]').first().click({force : true})
  
    //ASSERT

     // Verificando se o texto de um elemento é igual ao de outro
     cy.get('.c-cmyXNi > :nth-child(1) > .c-gYlSzt').invoke('text').then((text1) => {
      cy.get(':nth-child(3) > .c-etaDDd > .c-cwlLar > .c-TbbQX').invoke('text').should('equal', text1); // Compara o texto dos dois elementos
    });

    cy.get('p.c-gYlSzt').first().scrollIntoView().should('be.visible');
    

     
     })

     it('Filtrar o primeiro produto e a primeira oferta da listagem', () => {
   
      cy.sellerLogin()
      cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
      //Remover o filtro de vendas pendentes e aprovadas
      cy.get(':nth-child(1) > .removeFilterIcon').click()
      cy.get('.removeFilterIcon').click()
      //Filtrar vendas de afiliação
      cy.get('.c-lkqPoU').click()
      //Selecionando a primeira oferta
      cy.get('#offer > .kirvano__control > .kirvano__indicators > .kirvano__indicator').click()

      //ASSERT
      //Validando que a opção oferta só lista apenas a opção "Todas"
      cy.get('#react-select-3-option-0').should('have.text', 'Todas')
      cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()
    

     
     })

     it('Listar apenas as vendas da data de hoje', () => {
  
      cy.sellerLogin()
      cy.currentDate()

      //ASSERT
      //verificar se a data gerada está visível na interface
      cy.get('.c-gVDTel > .c-gYlSzt')
      .should('be.visible')


    })

    it('Listar apenas as vendas dos últimos 30 dias', () => {
  
      cy.sellerLogin()
      cy.lastMonth()

        //ASSERT
        //verificar se a data gerada está visível na interface
        cy.get('.c-gVDTel > .c-gYlSzt')
        .should('be.visible')
  
    })

    it('Listar apenas as vendas do mês atual', () => {
  
      cy.sellerLogin()
      cy.currentMonth()

      //ASSERT
      //verificar se a data gerada está visível na interface
      cy.get('.c-gVDTel > .c-gYlSzt')
      .should('be.visible')
  

    })

  it('Listar apenas com data personalizada', () => {
  
      cy.sellerLogin()
      cy.customDate()

      //ASSERT

      //verificar se a data gerada está visível na interface
      cy.get('.c-gVDTel > .c-gYlSzt')
      .should('be.visible')

    


    })
 





})

