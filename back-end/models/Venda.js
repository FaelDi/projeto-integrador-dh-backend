'use strict';
module.exports = (sequelize, DataTypes) => {
  const Venda = sequelize.define('Venda', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    }
  }, {
    tableName:'venda',
    timestamps:true
});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Venda;
};