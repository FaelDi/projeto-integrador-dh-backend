'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cotacao = sequelize.define('Cotacao', {
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
      },
      fk_empresa: {
        type: Sequelize.INTEGER,
        references: {
          model: 'empresa',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      }
  }, {
    tableName:'cotacao',
    timestamps:true
});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Cotacao;
};