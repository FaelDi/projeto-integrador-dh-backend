module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define("Usuario", {
    nome:      { type: Sequelize.STRING, allowNull: false },//*
    email:     { type: Sequelize.STRING, allowNull: false},//*
    senha:     { type: Sequelize.STRING, allowNull: false},//*
    cpf:       { type: Sequelize.STRING, allowNull: false},//*
    idade:     { type: Sequelize.STRING, allowNull: true},
    data_nasc: { type: Sequelize.STRING, allowNull: true},      
    rg:        { type: Sequelize.STRING, allowNull: true},
    cep:       { type: Sequelize.STRING, allowNull: true},
    rua:       { type: Sequelize.STRING, allowNull: true},
    numero:    { type: Sequelize.INTEGER, allowNull: true},
    bairro:    { type: Sequelize.STRING, allowNull: true},
    cidade:    { type: Sequelize.STRING, allowNull: true},
    uf:        { type: Sequelize.STRING, allowNull: true},
    telefone:  { type: Sequelize.STRING, allowNull: true},
    celular:   { type: Sequelize.STRING, allowNull: true}
  }, {
    tableName: 'usuario',
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