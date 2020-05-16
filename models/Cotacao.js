'use strict';
module.exports = (sequelize, DataTypes) => {
    const Cotacao = sequelize.define('Cotacao', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }
    }, {
        tableName: 'cotacao',
        timestamps: true
    });
    Cotacao.associate = function (models) {
        // associations can be defined here
    };
    return Cotacao;
};