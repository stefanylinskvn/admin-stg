const { defineConfig } = require("cypress");
const fs = require("fs");

module.exports = defineConfig({

  e2e: {

    setupNodeEvents(on, config) {
    // Captura a variável de ambiente ao executar testes
    const env = config.env.environment || "stg";

    // Define as URLs para cada ambiente
    const environments = {
      stg: "http://app-stg.kirvano.com",
      qa: "http://app-qa.kirvano.com",
      qa2: "http://app-qa2.kirvano.com",
      prd: "http://app-prd.kirvano.com",


    };

    // Verifica se o ambiente é válido antes de definir a baseUrl
    if (!environments[env]) {
      throw new Error(
        `Ambiente inválido: '${env}'. Escolha entre: ${Object.keys(environments).join(", ")}`
      );

    } 

    // Define a baseUrl do ambiente escolhido
    config.baseUrl = environments[env] || environments.stg;

    // Lê credenciais do ficheiro cypress.env.json
    if (fs.existsSync("cypress.env.json")) {
      const envConfig = JSON.parse(fs.readFileSync("cypress.env.json"));

      if (envConfig[env]) {
        config.env = { ...config.env, ...envConfig[env] };
      }
    }

    return config;
      
    },
    
  },
  
});
