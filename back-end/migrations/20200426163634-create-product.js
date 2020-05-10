'use strict';
module.exports = {
  up:  async (queryInterface, Sequelize) => {
      try {
        await queryInterface.createTable('products',{
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          codigo: {
            type: Sequelize.STRING
          },
          valorUnitario: {
            type: Sequelize.DECIMAL
          },
          fotodoproduto: {
            type: Sequelize.STRING
          },
          quantidade: {
            type: Sequelize.INTEGER
          },
          descricaoproduto: {
            type: Sequelize.STRING
          },
          marca: {
            type: Sequelize.STRING
          },
          Fornecedor: {
            type: Sequelize.STRING
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });
        await queryInterface.createTable("user", {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          nome: Sequelize.STRING,
          idade: {
              type:Sequelize.INTEGER,
              allowNull:true
          },
          cpf:Sequelize.STRING,
          rg:{
              type:Sequelize.STRING,
              allowNull:true
          },
          data_nasc:{
              type:Sequelize.STRING,
              allowNull:true
          },
          cnpj:{
              type:Sequelize.STRING,
              allowNull:true
          },
          fornecedor:{
              type:Sequelize.STRING,
              allowNull:true
          },
          email: Sequelize.STRING,
          senha: Sequelize.STRING,
          cep:{
              type:Sequelize.STRING,
              allowNull:true
          },
          endereco:{
              type:Sequelize.STRING,
              allowNull:true
          },
          numero:{
              type:Sequelize.INTEGER,
              allowNull:true
          },
          bairro:{
              type:Sequelize.STRING,
              allowNull:true
          },
          cidade:{
              type:Sequelize.STRING,
              allowNull:true
          },
          estado:{
              type:Sequelize.STRING,
              allowNull:true
          },
          telefone:{
              type:Sequelize.STRING,
              allowNull:true
          },
          celular:Sequelize.STRING
      });
        return Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
  },
  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.dropTable('Products');
      await queryInterface.dropTable('User');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
};