/// <reference types="cypress"/>


declare namespace Cypress {
    interface Chainable{
        /**
         * @example cy.loginSeller() // Função para fazer login na aplicação com perfil vendedor, utilizando user e password default do arquivo cypress.env.json
         */
        sellerLogin(): void

        /**
         * @example loginWithInvalidSellerCredentials() // Função para fazer login na aplicação com credenciais inválidas com perfil vendedor
         *         */
        loginWithInvalidSellerCredentials(): void

         /**
         * @example loginWithoutSellerPassword() // Função para tentar logar na aplicação sem digitar a senha com perfil vendedor
         *         */
         loginWithoutSellerPassword(): void

        /**
         * @example loginWithInvalidSellerEmail() // Função para fazer login na aplicação com e-mail inválido com perfil vendedor
         *         */
        loginWithInvalidSellerEmail(): void

        /**
         * @example cy.logout() // Função para fazer logout da aplicação
        */
        logout(): void

        /**
         * @example cy.buyerConvertLogin() // Função para fazer login na aplicação com usuário comprador a ser convertido para seller, utilizando user e password default do arquivo cypress.env.json
        */
        buyerConvertLogin(): void

        /**
         * @example cy.buyerConvertLogin() // Função que converte usuário comprador para vendedor
        */
        buyerConvertToSeller(): void

        /**
         * @example buyerLogin() // Função para fazer login na aplicação com perfil comprador, utilizando user e password default do aqruivo cypress.env.json
         */
        buyerLogin(): void

        /**
         * @example loginWithInvalidBuyerCredentials() // Função para fazer login na aplicação com credenciais inválidas com perfil comprador
         */
        loginWithInvalidBuyerCredentials(): void

        /**
         * @example loginWithoutBuyerPassword() // Função para tentar logar na aplicação sem digitar a senha com perfil comprador
         */
        loginWithoutBuyerPassword(): void

        /**
         * @example loginWithInvalidBuyerEmail() // Função para fazer login na aplicação com e-mail inválido com perfil comprador
         */
        loginWithInvalidBuyerEmail(): void

        /**
         * @example userLoginBlocked() // Função para fazer login na aplicação com usuário bloqueado, utilizando user e password default do arquivo cypress.env.json
         */
        userLoginBlocked(): void

        /**
         * @example userLoginInactive() // Função para tentar fazer login na aplicação com usuário inativo, utilizando user e password default do arquivo cypress.env.json
         */
        userLoginInactive(): void

        /**
         * @example userLoginBanned() // Função para tentar fazer login na aplicação com usuário banido, utilizando user e password default do arquivo cypress.env.json
         */
        userLoginBanned(): void

        /**
         * @example succesfullyRecoverAccount() // Função para recuperar a conta com sucesso
         */
        succesfullyRecoverAccount(): void

        /**
         * @example resetPasswordSuccesfully() // Função para resetar a senha com sucesso
         */
        resetPasswordSuccesfully(): void

        /**
         * @example resetPasswordWithWeakAndValidPasswords() // Função para redefinir senha fraca
         */
        resetPasswordWithWeakAndValidPasswords(): void

        /**
         * @example resetPasswordWithMismatchedPasswords() // Função para tentar redefinir senha com caractere não igual
         */
        resetPasswordWithMismatchedPasswords(): void

        /**
         * @example resetPasswordWithMediumStrengthAndAtLeastOneUppercaseLetter() // Função para tentar redefinir senha média com letra maiuscula
         */
        resetPasswordWithMediumStrengthAndAtLeastOneUppercaseLetter(): void

        /**
         * @example resetPasswordWithMediumStrengthAndAtLeastOneSpecialCharacter() // Função para tentar redefinir senha média com caractere especial
         */
        resetPasswordWithMediumStrengthAndAtLeastOneSpecialCharacter(): void

        /**
         * @example resetPasswordWithStrongPassword() // Função para redefinir senha forte com sucesso
         */
        resetPasswordWithStrongPassword(): void

        /**
         * @example newUser() // Função para cadastrar novo usuário vendedor
         */
        newUser(): void

        /**
         * @example userWithEmailAlreadyInUse() // Função para tentar cadastrar novo usuário com e-mail já em uso
         */
        userWithEmailAlreadyInUse(): void

        /**
         * @example userRegistrationFailure() // Função para tentar cadastrar novo usuário
         */
        userRegistrationFailure(): void

        /**
         * @example passwordValidationWeakandMissingNumber() // Função para tentar cadastrar novo usuário com senha fraca e número
         */
        passwordValidationWeakandMissingNumber(): void

        /**
         * @example validateWeakPasswordWithUppercase() // Função para tentar cadastrar novo usuário com senha fraca e letra maíuscula
         */
        validateWeakPasswordWithUppercase(): void

        /**
         * @example validateMediumPasswordWithSpecialCharacter() // Função para tentar cadastrar novo usuário com senha média e caractere especial
         */
        validateMediumPasswordWithSpecialCharacter(): void

        /**
         * @example validateMediumPasswordWithMinLength() // Função para tentar cadastrar novo usuário com senha média e 8 caracteres
         */
        validateMediumPasswordWithMinLength(): void

        /**
         * @example resendVerificationEmail() // Função para reenviar e-mail de verificação
         */
        resendVerificationEmail(): void

        /**
         * @example editVerificationEmail() // Função para editar e-mail de verificação
         */
        editVerificationEmail(): void

        /**
         * @example registerNewBuyer() // Função para cadastrar novo usuário comprador
         */
        registerNewBuyer(): void


        


    }
}

