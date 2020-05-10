'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    codigo: DataTypes.STRING,
    valorUnitario: DataTypes.DECIMAL,
    fotodoproduto: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    descricaoproduto: DataTypes.STRING,
    marca: DataTypes.STRING,
    Fornecedor: DataTypes.STRING
  }, {
    tableName:'produto',
    timestamps:false
});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};