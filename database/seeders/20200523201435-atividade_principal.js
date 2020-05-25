'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    [
      {
        //"CNPJ": "45.242.914/0001-05",
        "atividade_principal":
          [
            {
              "text": "Comércio varejista de artigos do vestuário e acessórios",
              "code": "47.81-4-00"
            }
          ],
      },
      {
        //"CNPJ": "47.960.950/0001-21",
        "atividade_principal": [
          { "text": "Lojas de departamentos ou magazines, exceto lojas francas (Duty free)", "code": "47.13-0-04" }
        ],
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
