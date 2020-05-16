'use strict';
module.exports = (sequelize, DataType) => {
  const Produto = sequelize.define('Produto', {
    codigo: {
      type: DataType.STRING,
      allowNull: false
    },
    valor_unitario: {
      type: DataType.DECIMAL(20, 2),
      allowNull: false
    },
    foto: {
      type: DataType.STRING,
      allowNull: false
    },
    quantidade: {
      type: DataType.INTEGER,
      allowNull: false
    },
    descricao: {
      type: DataType.STRING,
      allowNull: false
    },
    marca: {
      type: DataType.STRING,
      allowNull: false
    },
  }, {
    tableName: 'produto',
    timestamps: true
  });
  Produto.associate = function (models) {
    // associations can be defined here
  };
  return Produto;
};