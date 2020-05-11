module.exports = (sequelize, DataType) => {
    const Empresa = sequelize.define("Empresa", {
        atividade_principal: {
            type: DataType.STRING,
            allowNull: false
        },
        data_situacao: {
            type: DataType.STRING,
            allowNull: false
        },
        complemento: {
            type: DataType.STRING,
            allowNull: false
        },
        nome: {
            type: DataType.STRING,
            allowNull: false
        },
        uf: {
            type: DataType.STRING,
            allowNull: false
        },
        telefone: {
            type: DataType.STRING,
            allowNull: false
        },
        atividades_secundarias: {
            type: DataType.STRING,
            allowNull: false
        },
        qsa: {
            type: DataType.STRING,
            allowNull: false
        },
        situacao: {
            type: DataType.STRING,
            allowNull: false
        },
        bairro: {
            type: DataType.STRING,
            allowNull: false
        },
        logradouro: {
            type: DataType.STRING,
            allowNull: false
        },
        numero: {
            type: DataType.INTEGER,
            allowNull: false
        },
        cep: {
            type: DataType.STRING,
            allowNull: false
        },
        municipio: {
            type: DataType.STRING,
            allowNull: false
        },
        porte: {
            type: DataType.STRING,
            allowNull: false
        },
        abertura: {
            type: DataType.STRING,
            allowNull: false
        },
        natureza_juridica: {
            type: DataType.STRING,
            allowNull: false
        },
        cnpj: {
            type: DataType.STRING,
            allowNull: false
        },
        ultima_atualizacao: {
            type: DataType.STRING,
            allowNull: false
        },
        status: {
            type: DataType.STRING,
            allowNull: false
        },
        tipo: {
            type: DataType.STRING,
            allowNull: false
        },
        fantasia: {
            type: DataType.STRING,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        efr: {
            type: DataType.STRING,
            allowNull: false
        },
        motivo_situacao: {
            type: DataType.STRING,
            allowNull: false
        },
        situacao_especial: {
            type: DataType.STRING,
            allowNull: false
        },
        data_situacao_especial: {
            type: DataType.STRING,
            allowNull: false
        },
        capital_social: {
            type: DataType.DECIMAL(20, 2),
            allowNull: false
        }
    }, {
        tableName: 'empresa',
        timestamps: true
    });

    // Permission.associate = function(models) {
    //     Permission.belongsToMany(models.Group, { through: models.GroupPermission, foreignKey: 'permissionId', otherKey: 'groupId' });
    //   };
    return Empresa;
}