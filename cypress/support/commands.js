/// <reference types="cypress"/>
//Login Seller

Cypress.Commands.add('loginSeller',(
    userSeller = Cypress.env('user_seller'),
    passwordSeller = Cypress.env('password_seller')
    )=> {

    cy.get('.space-y-3 > :nth-child(1) > .flex-col > .relative').type(userSeller)
    cy.get('.text-end > .group > .flex-col > .relative').type(passwordSeller, {log: false})//Proteção de dados sensíveis
    cy.contains('button', 'Acessar minha conta').click()
});

Cypress.Commands.add('logout',() => {
    cy.get('.c-eKHDBd').click()
    cy.get('.c-ebonRJ').click()
});

Cypress.Commands.add('loginWithoutPasswordSeller',() => {
    cy.get('.space-y-3 > :nth-child(1) > .flex-col > .relative').type('qastefany@gmail.com')
    cy.contains('button', 'Acessar minha conta').click()
});

Cypress.Commands.add('loginWithInvalidCredentialsSeller',(
    userSeller = Cypress.env('user_seller'),
    ) => {

    cy.get('.space-y-3 > :nth-child(1) > .flex-col > .relative').type(userSeller)
    cy.contains('button', 'Acessar minha conta').click()
});

Cypress.Commands.add('loginWithInvalidEmailSeller',(
    userInvalidSeller = Cypress.env('user_invalid_seller'),
    passwordSeller = Cypress.env('password_seller')
    ) => {

    cy.get('.space-y-3 > :nth-child(1) > .flex-col > .relative').type(userInvalidSeller)
    cy.get('.text-end > .group > .flex-col > .relative').type(passwordSeller)
    cy.contains('button', 'Acessar minha conta').click()    
});

//Login Buyer

Cypress.Commands.add('loginBuyer',(
    userBuyer = Cypress.env('user_buyer'),
    passwordBuyer = Cypress.env('password_buyer'),
    ) => {

    cy.get('.space-y-3 > :nth-child(1) > .flex-col > .relative').type(userBuyer)
    cy.get('.text-end > .group > .flex-col > .relative').type(passwordBuyer, {log: false}) //Proteção de dados sensíveis
    cy.contains('button', 'Acessar minha conta').click()
});

Cypress.Commands.add('loginWithInvalidCredentialsBuyer',(
    userBuyer = Cypress.env('user_buyer'),
    ) => {

    cy.get('.space-y-3 > :nth-child(1) > .flex-col > .relative').type(userBuyer)
    cy.contains('button', 'Acessar minha conta').click()
});

Cypress.Commands.add('loginWithoutPasswordBuyer',() => {
    cy.get('.space-y-3 > :nth-child(1) > .flex-col > .relative').type('larissa@mailinator.com')
    cy.contains('button', 'Acessar minha conta').click()
});

Cypress.Commands.add('loginWithInvalidEmailBuyer',(
    userInvalidBuyer = Cypress.env('user_invalid_buyer'),
    passwordBuyer = Cypress.env('password_buyer')
    ) => {

    cy.get('.space-y-3 > :nth-child(1) > .flex-col > .relative').type(userInvalidBuyer)
    cy.get('.text-end > .group > .flex-col > .relative').type(passwordBuyer)
    cy.contains('button', 'Acessar minha conta').click()    
});

//Convert Buyer to Seller

Cypress.Commands.add('loginConvertBuyer',(
    userBuyerConvert = Cypress.env('user_buyer_convert'),
    passwordBuyerConvert = Cypress.env('password_buyer_convert'),
    ) => {

    cy.get('.space-y-3 > :nth-child(1) > .flex-col > .relative').type(userBuyerConvert)
    cy.get('.text-end > .group > .flex-col > .relative').type(passwordBuyerConvert, {log: false}) //Proteção de dados sensíveis
    cy.contains('button', 'Acessar minha conta').click()
});

Cypress.Commands.add('convertBuyerToSeller',() => {
    cy.get(':nth-child(8) > .c-jfuDGd').click()
      cy.get('.c-lkqPoU').click()
      cy.get('.c-kiRJQD > .c-lkqPoU-cpYJBa-variant-info').click()
});

//Recover Password

Cypress.Commands.add('recoverAccountSuccesfully',(
    userSeller = Cypress.env('user_seller'),
    ) => {

    cy.contains('span', 'E-mail').type(userSeller)
    cy.contains('button', 'Recuperar').click()
    cy.wait(65000)
    cy.contains('button', 'Reenviar e-mail').click()   
});

Cypress.Commands.add('resetPasswordSuccesfully',()=> {

    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.contains('span', 'Senha').type('Kirvano@2024')
    cy.contains('span', 'Confirmar senha').type('Kirvano@2024')
    cy.contains('button', 'Avançar').click() 
});

Cypress.Commands.add('resetPasswordWithWeakAndValidPasswords',()=> {

    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.contains('span', 'Senha').type('kirvano')
    cy.contains('span', 'Confirmar senha').type('kirvano') 
});

Cypress.Commands.add('resetPasswordWithMismatchedPasswords',()=> {

    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.contains('span', 'Senha').type('kirv')
    cy.contains('span', 'Confirmar senha').type('kirva') 
});

Cypress.Commands.add('resetPasswordWithMediumStrengthAndAtLeastOneUppercaseLetter',()=> {

    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.contains('span', 'Senha').type('kirvano1')
    cy.contains('span', 'Confirmar senha').type('kirvano1') 
});

Cypress.Commands.add('resetPasswordWithMediumStrengthAndAtLeastOneSpecialCharacter',()=> {

    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.contains('span', 'Senha').type('kirvano1S')
    cy.contains('span', 'Confirmar senha').type('kirvano1S')
});

Cypress.Commands.add('resetPasswordWithStrongPassword',()=> {
    cy.visit('https://app-stg.kirvano.com/reset-password/$2b$15$')
    cy.contains('span', 'Senha').type('kirvano1S#')
    cy.contains('span', 'Confirmar senha').type('kirvano1S#')
    cy.contains('button', 'Avançar').click()
});


//User sign up

Cypress.Commands.add('newUser',(firstName, lastName, email, celular, password )=> {

    cy.get(':nth-child(2) > .flex-col > .relative').type(firstName)
    cy.get(':nth-child(3) > .flex-col > .relative').type(lastName)
    cy.get(':nth-child(4) > .flex-col > .relative').type(email)
    cy.get(':nth-child(5) > .flex-col > .relative').type(celular)
    cy.get(':nth-child(8) > .group > .flex-col > .relative').type(password)
    cy.get(':nth-child(9) > .flex-col > .relative').type(password)
    cy.get('.space-y-6 > .z-0').click()
    
    
});

Cypress.Commands.add('userWithEmailAlreadyInUse',(firstName, lastName, celular, password )=> {

    cy.get(':nth-child(2) > .flex-col > .relative').type(firstName)
      cy.get(':nth-child(3) > .flex-col > .relative').type(lastName)
      cy.get(':nth-child(4) > .flex-col > .relative').type('qastefanykirvano@gmail.com')
      cy.get(':nth-child(5) > .flex-col > .relative').type(celular)
      cy.get(':nth-child(8) > .group > .flex-col > .relative').type(password)
      cy.get(':nth-child(9) > .flex-col > .relative').type(password)
      cy.get('.space-y-6 > .z-0').click()

    
});

Cypress.Commands.add('userRegistrationFailure', ()=> {

      cy.get(':nth-child(2) > .flex-col > .relative').type('   ')
      cy.get(':nth-child(3) > .flex-col > .relative').type('   ')
      cy.get(':nth-child(4) > .flex-col > .relative').type('   ')
      cy.get(':nth-child(5) > .flex-col > .relative').type('   ')
      cy.get(':nth-child(8) > .group > .flex-col > .relative').type('   ')
      cy.get(':nth-child(9) > .flex-col > .relative').type('   ')
      cy.get('.space-y-6 > .z-0').click()


});

Cypress.Commands.add('passwordValidationWeakandMissingNumber',(firstName, lastName, email, celular )=> {

    cy.get(':nth-child(2) > .flex-col > .relative').type(firstName)
      cy.get(':nth-child(3) > .flex-col > .relative').type(lastName)
      cy.get(':nth-child(4) > .flex-col > .relative').type(email)
      cy.get(':nth-child(5) > .flex-col > .relative').type(celular)
      cy.get(':nth-child(8) > .group > .flex-col > .relative').type('hello')
      cy.get(':nth-child(9) > .flex-col > .relative').type('hello')
      cy.get('.space-y-6 > .z-0').click()

    
});

Cypress.Commands.add('validateWeakPasswordWithUppercase',(firstName, lastName, email, celular )=> {

    cy.get(':nth-child(2) > .flex-col > .relative').type(firstName)
      cy.get(':nth-child(3) > .flex-col > .relative').type(lastName)
      cy.get(':nth-child(4) > .flex-col > .relative').type(email)
      cy.get(':nth-child(5) > .flex-col > .relative').type(celular)
      cy.get(':nth-child(8) > .group > .flex-col > .relative').type('ste1R')
      cy.get(':nth-child(9) > .flex-col > .relative').type('ste1R')
      cy.get('.space-y-6 > .z-0').click()

    
});

Cypress.Commands.add('validateMediumPasswordWithSpecialCharacter',(firstName, lastName, email, celular )=> {

    cy.get(':nth-child(2) > .flex-col > .relative').type(firstName)
      cy.get(':nth-child(3) > .flex-col > .relative').type(lastName)
      cy.get(':nth-child(4) > .flex-col > .relative').type(email)
      cy.get(':nth-child(5) > .flex-col > .relative').type(celular)
      cy.get(':nth-child(8) > .group > .flex-col > .relative').type('ste1R')
      cy.get(':nth-child(9) > .flex-col > .relative').type('ste1R')
      cy.get('.space-y-6 > .z-0').click()
    
});

Cypress.Commands.add('validateMediumPasswordWithMinLength',(firstName, lastName, email, celular )=> {

    cy.get(':nth-child(2) > .flex-col > .relative').type(firstName)
      cy.get(':nth-child(3) > .flex-col > .relative').type(lastName)
      cy.get(':nth-child(4) > .flex-col > .relative').type(email)
      cy.get(':nth-child(5) > .flex-col > .relative').type(celular)
      cy.get(':nth-child(8) > .group > .flex-col > .relative').type('ste1R$')
      cy.get(':nth-child(9) > .flex-col > .relative').type('ste1R$')
      cy.get('.space-y-6 > .z-0').click()
    
});

Cypress.Commands.add('resendVerificationEmail',(firstName, lastName, email, celular, password )=> {

    cy.get(':nth-child(2) > .flex-col > .relative').type(firstName)
      cy.get(':nth-child(3) > .flex-col > .relative').type(lastName)
      cy.get(':nth-child(4) > .flex-col > .relative').type(email)
      cy.get(':nth-child(5) > .flex-col > .relative').type(celular)
      cy.get(':nth-child(8) > .group > .flex-col > .relative').type(password)
      cy.get(':nth-child(9) > .flex-col > .relative').type(password)
      cy.get('.space-y-6 > .z-0').click()

        
});

Cypress.Commands.add('editVerificationEmail',(firstName, lastName, email, celular, password )=> {

    cy.get(':nth-child(2) > .flex-col > .relative').type(firstName)
      cy.get(':nth-child(3) > .flex-col > .relative').type(lastName)
      cy.get(':nth-child(4) > .flex-col > .relative').type(email)
      cy.get(':nth-child(5) > .flex-col > .relative').type(celular)
      cy.get(':nth-child(8) > .group > .flex-col > .relative').type(password)
      cy.get(':nth-child(9) > .flex-col > .relative').type(password)
      cy.get('.space-y-6 > .z-0').click()

        
});

Cypress.Commands.add('registerNewBuyer',(fullName, email, cpf, celular)=> {

    cy.visit('https://pay-stg.kirvano.com/42bb3f47-afe4-4e4e-97f7-34c9c105c9d7')
    cy.get('.c-jRPtAX > :nth-child(2) > :nth-child(1) > .c-iGxTuJ > .c-hPQFJZ > .c-hSXWqr').type(fullName)
    cy.get('.c-JcNov > .c-iGxTuJ > .c-hPQFJZ > .c-hSXWqr').type(email)
    cy.get('.c-PJLV-hakyQ-visible-true > .c-jRPtAX > :nth-child(4) > :nth-child(1) > .c-iGxTuJ > .c-hPQFJZ > .c-hSXWqr').type(cpf)
    cy.get('.PhoneInput > .c-iGxTuJ > .c-hPQFJZ > .c-hSXWqr').type(celular)
    cy.get('.c-jRPtAX > .c-dTzrZN').click()
    cy.contains('button', 'Acessar conteúdo').invoke('removeAttr', 'target').click()
    cy.visit ('')

        
});

