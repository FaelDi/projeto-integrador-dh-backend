module.exports = (sequelize, DataType) => {
  const usuario = sequelize.define(
    'Usuario',
    {
      nome: { type: DataType.STRING, allowNull: false },//*
      email: { type: DataType.STRING, allowNull: false },//*
      senha: { type: DataType.STRING, allowNull: false },//*
      cpf: { type: DataType.STRING, allowNull: false },//*
      idade: { type: DataType.STRING, allowNull: true },
      data_nasc: { type: DataType.STRING, allowNull: true },
      rg: { type: DataType.STRING, allowNull: true },
      cep: { type: DataType.STRING, allowNull: true },
      rua: { type: DataType.STRING, allowNull: true },
      numero: { type: DataType.INTEGER, allowNull: true },
      bairro: { type: DataType.STRING, allowNull: true },
      cidade: { type: DataType.STRING, allowNull: true },
      uf: { type: DataType.STRING, allowNull: true },
      telefone: { type: DataType.STRING, allowNull: true },
      celular: { type: DataType.STRING, allowNull: true }
    }, 
    {
      tableName: 'usuario',
      timestamps: true
    }
  )

  usuario.associate = (models) => {
    //HAS MANY - pode ter muitos
    usuario.hasMany(models.Pagamento, {
      foreignKey: 'id',
      as: 'pagamento'
    });

    usuario.hasMany(models.Empresa, {
      foreignKey: 'fk_usuario',
      as: 'empresa'
    });
  }

  return usuario;
}