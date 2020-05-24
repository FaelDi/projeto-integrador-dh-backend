'use strict';

module.exports = (sequelize, DataTypes) => {
    const Avaliacao = sequelize.define('Avaliacao', {
        estrelas: {
            type: DataTypes.INTEGER
        },
        comentario: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'avaliacao',
        timestamps: true
    });
    Avaliacao.associate = function (models) {

        Avaliacao.belongsTo(models.Empresa, {
            foreignKey: 'fk_empresa',
            as: 'empresa'
        });
        
        Avaliacao.belongsTo(models.Usuario, {
            foreignKey: 'fk_usuario',
            as: 'usuario'
        });
    };
    return Avaliacao;
};