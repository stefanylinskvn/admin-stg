/// <reference types="cypress"/>
//Login Seller


Cypress.Commands.add('sellerLogin',(
    sellerUser = Cypress.env('seller_user'),
    sellerPassword = Cypress.env('seller_password')
    
    )=> {  

    cy.get('[name="email"]').type(sellerUser)
    cy.get('[name="password"]').type(sellerPassword, {log: false})//Proteção de dados sensíveis
    cy.get('[type="submit"]').click()
    cy.log(`Login realizado com o usuário: ${sellerUser}`);
});

Cypress.Commands.add('sellerWithoutBusinessProfile',(
    sellerWithoutBusinessProfileUser = Cypress.env('seller_without_business_user'),
    sellerWithoutBusinessProfilePassword = Cypress.env('seller_without_business_password')
    
    )=> {  

    cy.get('[name="email"]').type(sellerWithoutBusinessProfileUser)
    cy.get('[name="password"]').type(sellerWithoutBusinessProfilePassword, {log: false})//Proteção de dados sensíveis
    cy.get('[type="submit"]').click()
    cy.log(`Login realizado com o usuário: ${sellerWithoutBusinessProfileUser}`);
});

Cypress.Commands.add('logout',() => {

    //Botão Perfil
    cy.get('.c-eKHDBd').click()

    //Botão Sair
    cy.get('.c-ebonRJ').click()
});

Cypress.Commands.add('loginWithoutSellerPassword',() => {
    cy.get('[name="email"]').type('qastefany@gmail.com')
    cy.get('[type="submit"]').click()
});

Cypress.Commands.add('loginWithInvalidSellerCredentials',(
    sellerUser = Cypress.env('seller_user'),
    ) => {

    cy.get('[name="email"]').type(sellerUser)
    cy.get('[type="submit"]').click()
});

Cypress.Commands.add('loginWithInvalidSellerEmail',(
    invalidSellerUser = Cypress.env('invalid_seller_user'),
    sellerPassword = Cypress.env('seller_password')
    ) => {

    cy.get('[name="email"]').type(invalidSellerUser)
    cy.get('[name="password"]').type(sellerPassword)
    cy.get('[type="submit"]').click()    
});

//Login Buyer

Cypress.Commands.add('buyerLogin',(
    buyerUser = Cypress.env('buyer_user'),
    buyerPassword = Cypress.env('buyer_password'),
    ) => {

    cy.get('[name="email"]').type(buyerUser)
    cy.get('[name="password"]').type(buyerPassword, {log: false}) //Proteção de dados sensíveis
    cy.get('[type="submit"]').click()
});

Cypress.Commands.add('loginWithInvalidBuyerCredentials',(
    buyerUser = Cypress.env('buyer_user'),
    ) => {

    cy.get('[name="email"]').type(buyerUser)
    cy.get('[type="submit"]').click()
});

Cypress.Commands.add('loginWithoutBuyerPassword',() => {
    cy.get('[name="email"]').type('larissa@mailinator.com')
    cy.get('[type="submit"]').click()
});

Cypress.Commands.add('loginWithInvalidBuyerEmail',(
    buyerInvalidUser = Cypress.env('invalid_buyer_user'),
    buyerPassword = Cypress.env('buyer_password')
    ) => {

    cy.get('[name="email"]').type(buyerInvalidUser)
    cy.get('[name="password"]').type(buyerPassword)
    cy.get('[type="submit"]').click()    
});

//Convert Buyer to Seller

Cypress.Commands.add('buyerConvertLogin',(
    convertBuyerUser = Cypress.env('convert_buyer_user'),
    convertBuyerPassword = Cypress.env('convert_buyer_password'),
    ) => {

    cy.get('[name="email"]').type(convertBuyerUser)
    cy.get('[name="password"]').type(convertBuyerPassword, {log: false}) //Proteção de dados sensíveis
    cy.get('[type="submit"]').click()
});

Cypress.Commands.add('buyerConvertToSeller',() => {

    //Botão comece a lucrar
    cy.get(':nth-child(8) > .c-jfuDGd').click()

    //Botão quero começar a vender
    cy.get('.c-lkqPoU').click()

    //Botão quero vender
    cy.get('.c-kiRJQD > .c-lkqPoU-cpYJBa-variant-info').click()
});

//Recover Password

Cypress.Commands.add('succesfullyRecoverAccount',(
    sellerUser = Cypress.env('seller_user'),
    ) => {

    cy.get('[aria-label="e-mail"]').type(sellerUser)
    cy.get('[type="submit"]').click()
    cy.wait(65000)
    cy.get('[type="button"]').click()   
});

Cypress.Commands.add('resetPasswordSuccesfully',()=> {

    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.get('[aria-label="Senha"]').type('Kirvano@2024')
    cy.get('[aria-label="Confirmar senha"]').type('Kirvano@2024')
    cy.get('[type="submit"]').click() 
});

Cypress.Commands.add('resetPasswordWithEmptyFields',()=> {

    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.get('[aria-label="Senha"]').type('  ')
    cy.get('[aria-label="Confirmar senha"]').type('  ')
    cy.get('[type="submit"]').click({force: true}) 
});

Cypress.Commands.add('resetPasswordWithWeakAndValidPasswords',()=> {

    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.get('[aria-label="Senha"]').type('kirvano')
    cy.get('[aria-label="Confirmar senha"]').type('kirvano') 
});

Cypress.Commands.add('resetPasswordWithMismatchedPasswords',()=> {

    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.get('[aria-label="Senha"]').type('kirv')
    cy.get('[aria-label="Confirmar senha"]').type('kirva') 
});

Cypress.Commands.add('resetPasswordWithMediumStrengthAndAtLeastOneUppercaseLetter',()=> {

    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.get('[aria-label="Senha"]').type('kirvano1')
    cy.get('[aria-label="Confirmar senha"]').type('kirvano1') 
});

Cypress.Commands.add('resetPasswordWithMediumStrengthAndAtLeastOneSpecialCharacter',()=> {

    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.get('[aria-label="Senha"]').type('kirvano1S')
    cy.get('[aria-label="Confirmar senha"]').type('kirvano1S')
});

Cypress.Commands.add('resetPasswordWithStrongPassword',()=> {
    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.get('[aria-label="Senha"]').type('kirvano1S#')
    cy.get('[aria-label="Confirmar senha"]').type('kirvano1S#')
    cy.get('[type="Submit"]').click()
});


//User sign up

Cypress.Commands.add('newUser',(firstName, lastName, email, celular, password )=> {

    cy.get('[aria-label="Nome"]').type(firstName)
    cy.get('[aria-label="Sobrenome"]').type(lastName)
    cy.get('[aria-label="E-mail"]').type(email)
    cy.get('[name="phone"]').type(celular)
    cy.get('[name="password"]').type(password)
    cy.get('[aria-label="Confirmar senha"]').type(password)
    cy.get('[type="submit"]').click()
    
    
});

Cypress.Commands.add('userWithEmailAlreadyInUse',(firstName, lastName, celular, password )=> {

    cy.get('[aria-label="Nome"]').type(firstName)
    cy.get('[aria-label="Sobrenome"]').type(lastName)
    cy.get('[aria-label="E-mail"]').type('qastefanykirvano@gmail.com')
    cy.get('[name="phone"]').type(celular)
    cy.get('[name="password"]').type(password)
    cy.get('[aria-label="Confirmar senha"]').type(password)
    cy.get('[type="submit"]').click()

    
});

Cypress.Commands.add('userRegistrationFailure', ()=> {

    cy.get('[aria-label="Nome"]').type('   ')
    cy.get('[aria-label="Sobrenome"]').type('   ')
    cy.get('[aria-label="E-mail"]').type('   ')
    cy.get('[name="phone"]').type('   ')
    cy.get('[name="password"]').type('   ')
    cy.get('[aria-label="Confirmar senha"]').type('   ')
    cy.get('[type="submit"]').click()


});

Cypress.Commands.add('passwordValidationWeakandMissingNumber',(firstName, lastName, email, celular )=> {

    cy.get('[aria-label="Nome"]').type(firstName)
    cy.get('[aria-label="Sobrenome"]').type(lastName)
    cy.get('[aria-label="E-mail"]').type(email)
    cy.get('[name="phone"]').type(celular)
    cy.get('[name="password"]').type('hello')
    cy.get('[aria-label="Confirmar senha"]').type('hello')
    cy.get('[type="submit"]').click()

    
});

Cypress.Commands.add('validateWeakPasswordWithUppercase',(firstName, lastName, email, celular )=> {

    cy.get('[aria-label="Nome"]').type(firstName)
    cy.get('[aria-label="Sobrenome"]').type(lastName)
    cy.get('[aria-label="E-mail"]').type(email)
    cy.get('[name="phone"]').type(celular)
    cy.get('[name="password"]').type('ste1R')
    cy.get('[aria-label="Confirmar senha"]').type('ste1R')
    cy.get('[type="submit"]').click()

    
});

Cypress.Commands.add('validateMediumPasswordWithSpecialCharacter',(firstName, lastName, email, celular )=> {

    cy.get('[aria-label="Nome"]').type(firstName)
    cy.get('[aria-label="Sobrenome"]').type(lastName)
    cy.get('[aria-label="E-mail"]').type(email)
    cy.get('[name="phone"]').type(celular)
    cy.get('[name="password"]').type('ste1R')
    cy.get('[aria-label="Confirmar senha"]').type('ste1R')
    cy.get('[type="submit"]').click()
    
});

Cypress.Commands.add('validateMediumPasswordWithMinLength',(firstName, lastName, email, celular )=> {

    cy.get('[aria-label="Nome"]').type(firstName)
    cy.get('[aria-label="Sobrenome"]').type(lastName)
    cy.get('[aria-label="E-mail"]').type(email)
    cy.get('[name="phone"]').type(celular)
    cy.get('[name="password"]').type('ste1R$')
    cy.get('[aria-label="Confirmar senha"]').type('ste1R$')
    cy.get('[type="submit"]').click()
    
});

Cypress.Commands.add('resendVerificationEmail',(firstName, lastName, email, celular, password )=> {

    cy.get('[aria-label="Nome"]').type(firstName)
    cy.get('[aria-label="Sobrenome"]').type(lastName)
    cy.get('[aria-label="E-mail"]').type(email)
    cy.get('[name="phone"]').type(celular)
    cy.get('[name="password"]').type(password)
    cy.get('[aria-label="Confirmar senha"]').type(password)
    cy.get('[type="submit"]').click()

        
});

Cypress.Commands.add('editVerificationEmail',(firstName, lastName, email, celular, password )=> {

    cy.get('[aria-label="Nome"]').type(firstName)
    cy.get('[aria-label="Sobrenome"]').type(lastName)
    cy.get('[aria-label="E-mail"]').type(email)
    cy.get('[name="phone"]').type(celular)
    cy.get('[name="password"]').type(password)
    cy.get('[aria-label="Confirmar senha"]').type(password)
    cy.get('[type="submit"]').click()

        
});

Cypress.Commands.add('registerNewBuyer',(fullName, email, cpf, celular)=> {

    cy.visit('https://pay-stg.kirvano.com/42bb3f47-afe4-4e4e-97f7-34c9c105c9d7')
    cy.get('[name="customer.name"]').type(fullName)
    cy.get('[name="customer.email"]').type(email)
    cy.get('[name="customer.document"]').type(cpf)
    cy.get('[name="customer.phone"]').type(celular)
    cy.get('[type="submit"]').click()
    
    //abrir tela para cadastrar nova senha na mesma aba
    cy.contains('button', 'Acessar conteúdo').invoke('removeAttr', 'target').click()
    cy.get('[aria-label="Senha"]').type('Teste@1234')
    cy.get('[aria-label="Confirmar senha"]').type('Teste"1234')
    cy.get('button[type="submit"]').click()
  

        
});

//Login Blocked, Inactive and Banned User's

Cypress.Commands.add('userLoginBlocked',(
    blockedUser = Cypress.env('blocked_user'),
    passwordBlockedUser = Cypress.env('password_blocked_user')
    )=> {

    cy.get('[name="email"]').type(blockedUser)
    cy.get('[name="password"]').type(passwordBlockedUser, {log: false})//Proteção de dados sensíveis
    cy.get('[type="submit"]').click()
});

Cypress.Commands.add('userLoginInactive',(
    inactiveUser = Cypress.env('inactive_user'),
    passwordInactiveUser = Cypress.env('password_inactive_user')
    )=> {

    cy.get('[name="email"]').type(inactiveUser)
    cy.get('[name="password"]').type(passwordInactiveUser, {log: false})//Proteção de dados sensíveis
    cy.get('[type="submit"]').click()
});

Cypress.Commands.add('userLoginBanned',(
    bannedUser = Cypress.env('banned_user'),
    passwordBannedUser = Cypress.env('password_banned_user')
    )=> {

    cy.get('[name="email"]').type(bannedUser)
    cy.get('[name="password"]').type(passwordBannedUser, {log: false})//Proteção de dados sensíveis
    cy.get('[type="submit"]').click()
});

Cypress.Commands.add('currentDate',()=> {

    const today = new Date();

    const day = String(today.getDate()).padStart(2, '0'); // Formato para dois dígitos DD
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Formato para dois dígitos MM
    const year = today.getFullYear(); // Formato DD-MM-AAAA
    const currentDate = `${day}/${month}/${year}`;

    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()

    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()

    //Botão Filtrar
    cy.get('.c-lkqPoU').click() 

    // Preencher a data de hoje
    cy.get('[aria-label="dia, Data inicial, "').type(day)
    cy.get('[data-slot="start-input"]').type(`${month}/${year}`)
    cy.get('[data-slot="end-input"]').type(currentDate)

    //Aplicar filtros
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

    //Validar data da venda
    //cy.get('.c-sQlVg').should('be.visible', currentDate)
  
});

Cypress.Commands.add('lastMonth',()=> {

    // Função para calcular a data de 30 dias atrás
    const getLast30DaysStart = () => {
    const now = new Date();
    now.setDate(now.getDate() - 30);
    return now;
};

    // Função para obter a data de hoje
    const getToday = () => {
    return new Date();
};

    // Função para formatar a data nos formatos desejados
    const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = date.getFullYear();

    return { day, month, year };
};

    // Obtendo as datas formatadas corretamente
    const startDate = formatDate(getLast30DaysStart());
    const endDate = formatDate(getToday());

    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()

    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()

    //Botão Filtrar
    cy.get('.c-lkqPoU').click() 

    // Preencher a data de hoje
    cy.get('[aria-label="dia, Data inicial, "').type(`${startDate.day}`)
    cy.get('[data-slot="start-input"]').type(`${startDate.month}/${startDate.year}`)
    cy.get('[data-slot="end-input"]').type(`${endDate.day}/${endDate.month}/${endDate.year}`)

    //Aplicar filtros
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

    //Validar data da venda
    //cy.get('.c-sQlVg').should('be.visible', currentDate)
  
});

Cypress.Commands.add('currentMonth',()=> {

    // Função para obter o primeiro dia do mês atual
    const getFirstDayOfCurrentMonth = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
};

    // Função para obter a data de hoje (último dia disponível no mês até o momento)
    const getToday = () => {
    return new Date();
};

    // Função para formatar a data nos formatos desejados
    const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = date.getFullYear();

    return { day, month, year };
};

    // Obtendo as datas formatadas corretamente para o mês atual
    const startDate = formatDate(getFirstDayOfCurrentMonth()); // Primeiro dia do mês
    const endDate = formatDate(getToday()); // Data de hoje (ou último dia disponível do mês)

    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()

    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()

    //Botão Filtrar
    cy.get('.c-lkqPoU').click() 

    // Preencher a data de hoje
    cy.get('[aria-label="dia, Data inicial, "').type(`${startDate.day}`)
    cy.get('[data-slot="start-input"]').type(`${startDate.month}/${startDate.year}`)
    cy.get('[data-slot="end-input"]').type(`${endDate.day}/${endDate.month}/${endDate.year}`)

    //Aplicar filtros
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

    
});

Cypress.Commands.add('customDate',()=> {

    // Função para obter a data de hoje (data final)
    const getToday = () => {
    return new Date();
};

    // Função para gerar uma data de início aleatória dentro dos últimos 12 meses
    const getRandomStartDate = () => {
        const today = getToday();
    
    // Definir o intervalo: últimos 12 meses até o mês atual
    const minDate = new Date(today.getFullYear(), today.getMonth() - 11, 1); // 12 meses atrás
    const maxDate = today;

    // Gerar uma data aleatória dentro do intervalo
    const randomTimestamp = minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime());
    const randomDate = new Date(randomTimestamp);

    return new Date(randomDate.getFullYear(), randomDate.getMonth(), randomDate.getDate());
};

    // Função para formatar a data como dd/MM/yyyy
    const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam em 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
};

    // Obtendo a data aleatória de início e a data de hoje (final)
    const startDate = formatDate(getRandomStartDate());
    const endDate = formatDate(getToday());




    cy.get('.c-cveNwM-iBxQgR-variant-top > .c-chnQVi > :nth-child(2) > .c-jfuDGd').click()
    
    //Remover o filtro de vendas pendentes e aprovadas
    cy.get(':nth-child(1) > .removeFilterIcon').click()
    cy.get('.removeFilterIcon').click()

    //Botão Filtrar
    cy.get('.c-lkqPoU').click() 

    // Preenchendo os campos no Cypress
    cy.get('[aria-label="dia, Data inicial, "]')
    .type(startDate.split('/')[0]); // Apenas o dia

    cy.get('[data-slot="start-input"]')
    .type(`${startDate.split('/')[1]}/${startDate.split('/')[2]}`); // Mês/Ano

    cy.get('[data-slot="end-input"]')
    .type(endDate); // Data completa dd/MM/yyyy

    //Aplicar filtros
    cy.get('.desktop-only > .c-lkqPoU-ciCNUj-variant-success').click()

    
});

