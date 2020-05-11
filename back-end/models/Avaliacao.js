'use strict';
module.exports = (sequelize, DataTypes) => {
  const Avaliacao = sequelize.define('Avaliacao', {
      estrelas: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      comentario: {
        type: Sequelize.STRING,
        allowNull: false
      }
  }, {
    tableName:'avaliacao',
    timestamps:true
});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Avaliacao;
};