'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Produto', {
    codigo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    valor_unitario: {
      type: Sequelize.DECIMAL(20,2),
      allowNull: false
    },
    foto: {
      type: Sequelize.STRING,
      allowNull: false
    },
    quantidade: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false
    },
    marca: {
      type: Sequelize.STRING,
      allowNull: false
    },
  }, {
    tableName:'produto',
    timestamps:true
});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};