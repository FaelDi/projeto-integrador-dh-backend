module.exports = (sequelize, DataType) => {
    const AtividadeSecundaria = sequelize.define("atividade_secundaria", {
        text: {
            type: DataType.STRING,
            allowNull: false
        },
        code: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'atividade_secundaria',
        timestamps: true
    });

    // AtividadeSecundaria.associate = function(models) {
    //     AtividadeSecundaria.belongsToMany(models.Group, { through: models.GroupPermission, foreignKey: 'permissionId', otherKey: 'groupId' });
    //   };
    return AtividadeSecundaria;
}