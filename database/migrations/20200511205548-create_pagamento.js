'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pagamento', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      numero_cartao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nome_cartao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apelido_cartao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      validade_mes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      validade_ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fk_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
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
    return queryInterface.dropTable('pagamento');
  }
};
