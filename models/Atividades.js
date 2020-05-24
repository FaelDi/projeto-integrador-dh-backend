'use strict';

module.exports = (sequelize, DataType) => {
  const Atividades = sequelize.define('atividades', {
    text: {
      type: DataType.STRING,
      allowNull: false
    },
    code: {
      type: DataType.STRING,
      allowNull: false
    }
  }, {
    tableName: 'atividades',
    timestamps: true
  });

  Atividades.associate = function (models) {
    
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
  return Atividades;
};