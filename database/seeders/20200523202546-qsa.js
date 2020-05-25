'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    [
      {
        //"CNPJ": "47.960.950/0001-21",
        "qsa": [
          { "qual": "10-Diretor", "nome": "MARIA ISABEL BONFIM DE OLIVEIRA" },
          { "qual": "16-Presidente", "nome": "FREDERICO TRAJANO INACIO RODRIGUES" },
          { "qual": "10-Diretor", "nome": "FABRICIO BITTAR GARCIA" },
          { "qual": "10-Diretor", "nome": "ROBERTO BELLISSIMO RODRIGUES" },
          { "qual": "10-Diretor", "nome": "ANDRE LUIZ DE SOUZA FATALA" },
          { "qual": "10-Diretor", "nome": "EDUARDO BENJAMIN GALANTERNICK" }
        ]
      }
    ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
