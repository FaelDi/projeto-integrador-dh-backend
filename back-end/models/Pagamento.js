'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pagamento = sequelize.define('Pagamento', {
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
      }
  }, {
    tableName:'pagamento',
    timestamps:true
});
  Product.associate = function(models) {
    // associations can be defined here
  };
  return Pagamento;
};