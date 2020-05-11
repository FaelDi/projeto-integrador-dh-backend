'use strict';
module.exports = (sequelize, DataType) => {
    const Pagamento = sequelize.define('Pagamento', {
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
        }
    }, {
        tableName: 'pagamento',
        timestamps: true
    });
    Pagamento.associate = function (models) {
        // associations can be defined here
    };
    return Pagamento;
};