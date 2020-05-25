'use strict';

module.exports = (sequelize, DataType) => {
  const Atividade = sequelize.define('Atividade', {
    text: {
      type: DataType.STRING,
      allowNull: false
    },
    code: {
      type: DataType.STRING,
      allowNull: false
    }
  }, {
    tableName: 'atividade',
    timestamps: true
  });

  Atividade.associate = function (models) {
    
    Atividade.belongsToMany(models.Empresa, {      
      through: 'empresa_tem_atividade',      
      foreignKey: 'fk_atividade',
      as: 'empresa'
    });

    // Atividades.belongsToMany(models.Empresa, {
    //   foreignKey: 'fk_atividades',
    //   as: 'empresa'
    // });
    // //Pertence a um usuário
    // Atividades.belongsToMany(models.Usuario, {
    //   foreignKey: 'fk_atividades',
    //   as: 'usuario'
    // });
  };
  return Atividade;
};