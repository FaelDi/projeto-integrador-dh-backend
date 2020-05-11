'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('empresa', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      atividade_principal: {
        type: Sequelize.STRING,
        allowNull: false
      },

      data_situacao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      atividades_secundarias: {
        type: Sequelize.STRING,
        allowNull: false
      },
      qsa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      situacao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      logradouro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: false
      },
      municipio: {
        type: Sequelize.STRING,
        allowNull: false
      },
      porte: {
        type: Sequelize.STRING,
        allowNull: false
      },
      abertura: {
        type: Sequelize.STRING,
        allowNull: false
      },
      natureza_juridica: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ultima_atualizacao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fantasia: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      efr: {
        type: Sequelize.STRING,
        allowNull: false
      },
      motivo_situacao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      situacao_especial: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data_situacao_especial: {
        type: Sequelize.STRING,
        allowNull: false
      },
      capital_social:Sequelize.DECIMAL(20, 2),
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
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
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('empresa');
  }
};
