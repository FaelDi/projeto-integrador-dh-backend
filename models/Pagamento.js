module.exports = (sequelize, DataType) => {
  const pagamento = sequelize.define(
    'Pagamento',
    {
      numero_cartao: {
        type: DataType.STRING,
        allowNull: false
      },
      nome_cartao: {
        type: DataType.STRING,
        allowNull: false
      },
      apelido_cartao: {
        type: DataType.STRING,
        allowNull: false
      },
      validade_mes: {
        type: DataType.INTEGER,
        allowNull: false
      },
      validade_ano: {
        type: DataType.INTEGER,
        allowNull: false
      },
      codigo: {
        type: DataType.STRING,
        allowNull: false
      },
      // fk_usuario: {
      //   type: DataType.STRING,
      //   allowNull: false
      // }
    },
    {
      tableName: 'pagamento',
      timestamps: true
    }
  );

  pagamento.associate = (models) => {

    pagamento.belongsTo(models.Usuario, {
      foreignKey: 'fk_usuario',
      as: 'usuario'
    });

  }

  return pagamento;
}
