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
        // associations can be defined here
    };
    return Avaliacao;
};