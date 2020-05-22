module.exports = (sequelize, DataType) => {
    const AtividadePrincipal = sequelize.define("atividade_principal", {
        text: {
            type: DataType.STRING,
            allowNull: false
        },
        code: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'atividade_principal',
        timestamps: true
    });

    // AtividadePrincipal.associate = function(models) {
    //     AtividadePrincipal.belongsToMany(models.Group, { through: models.GroupPermission, foreignKey: 'permissionId', otherKey: 'groupId' });
    //   };
    return AtividadePrincipal;
}