module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define("Usuario", {
    // id: {
    //     type:DataType.INTEGER,
    //     primaryKey:true,
    //     autoIncrement:true
    // },
    nome: DataType.STRING,
    email: DataType.STRING,
    senha: DataType.STRING,
    cpf: DataType.STRING,
    idade: {
      type: DataType.INTEGER,
      allowNull: true
    },
    data_nasc: {
      type: DataType.STRING,
      allowNull: true
    },
    rg: {
      type: DataType.STRING,
      allowNull: true
    },
    // cnpj: {
    //   type: DataType.STRING,
    //   allowNull: true
    // },
    // fornecedor: {
    //   type: DataType.STRING,
    //   allowNull: true
    // },
    cep: {
      type: DataType.STRING,
      allowNull: true
    },
    rua: {
      type: DataType.STRING,
      allowNull: true
    },
    numero: {
      type: DataType.INTEGER,
      allowNull: true
    },
    bairro: {
      type: DataType.STRING,
      allowNull: true
    },
    cidade: {
      type: DataType.STRING,
      allowNull: true
    },
    uf: {
      type: DataType.STRING,
      allowNull: true
    },
    telefone: {
      type: DataType.STRING,
      allowNull: true
    },
    celular: DataType.STRING
  }, {
    tableName: 'usuarios',
    timestamps: true
  })

    // usuario.associate = (models) => {
  //   usuario.hasMany(models.Endereco, {
  //     foreignKey: 'fk_usuario',
  //     as: 'endereco'
  //   });
  //   usuario.hasMany(models.Pedido, {
  //     foreignKey: 'fk_usuario',
  //     as: 'pedido'
  //   });
  // }

  
  return Usuario;
}