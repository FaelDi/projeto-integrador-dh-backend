'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cotacao_tem_produto = sequelize.define('Cotacao_tem_produto', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      }
  }, {
    tableName:'cotacao_tem_produto',
    timestamps:true
});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Cotacao_tem_produto;
};