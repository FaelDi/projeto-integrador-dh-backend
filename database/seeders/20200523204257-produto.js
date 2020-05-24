'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    [
      {
        // "id" : 
        // "empresa_id" : 
        //  "empresa_usuario_id" : 
        //  "codigo" : 
        "valor_unitario": "R$ 7.880" ,
        "foto_produto": "http/etc",
       "quantidade": "1",
        "descricao_produto": "Iphone11 Pro 64gb Desbloqueado 6.5 Super Retina Display",
        "marca": "Apple"
      },
      {
          // "id" : 
          // "empresa_id" : 
          //  "empresa_usuario_id" : 
          //  "codigo" : 
          "valor_unitario": "R$ 2.967,30",
          "foto_produto": "http/etc",
          "quantidade": "3",
          "descricao_produto": "Multifuncional tanque de tinta Smart Tank 517 1TJ10A HP",
          "marca": "HP"          
      },
      {
          // "id" : 
          // "empresa_id" : 
          //  "empresa_usuario_id" : 
          //  "codigo" : 
          "valor_unitario": "R$ 2.967,30",
          "foto_produto": "http/etc",
          "quantidade": "3",
          "descricao_produto": "Multifuncional tanque de tinta Smart Tank 517 1TJ10A HP",
          "marca": "HP"  
      },
      {
                  // "id" : 
          // "empresa_id" : 
          //  "empresa_usuario_id" : 
          //  "codigo" : 
          "valor_unitario": "R$2.299,00",
          "foto_produto": "http/etc",
          "quantidade": "1",
          "descricao_produto": "Notebook Lenovo Core i3-8130U 4GB 1TB Tela 15.6” Windows 10 Ideapad S145",
          "marca": "LENOVO" ,
      },
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
