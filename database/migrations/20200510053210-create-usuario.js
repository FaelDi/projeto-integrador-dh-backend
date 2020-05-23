'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nome: { type: Sequelize.STRING, allowNull: false }, //*
      email: { type: Sequelize.STRING, allowNull: false }, //*
      senha: { type: Sequelize.STRING, allowNull: false }, //*
      cpf: { type: Sequelize.STRING, allowNull: false }, //*
      idade: { type: Sequelize.STRING, allowNull: true },
      data_nasc: { type: Sequelize.STRING, allowNull: true },
      rg: { type: Sequelize.STRING, allowNull: true },
      cep: { type: Sequelize.STRING, allowNull: true },
      rua: { type: Sequelize.STRING, allowNull: true },
      numero: { type: Sequelize.INTEGER, allowNull: true },
      bairro: { type: Sequelize.STRING, allowNull: true },
      cidade: { type: Sequelize.STRING, allowNull: true },
      uf: { type: Sequelize.STRING, allowNull: true },
      telefone: { type: Sequelize.STRING, allowNull: true },
      celular: { type: Sequelize.STRING, allowNull: true },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};

