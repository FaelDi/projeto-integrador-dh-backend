module.exports = (sequelize, DataType) => {
    const Entrega = sequelize.define("Entrega", {
        status: {
            type: DataType.BOOLEAN,
            allowNull: false
        },
        rastreamento: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'entrega',
        timestamps: true
    });

    // Permission.associate = function(models) {
    //     Permission.belongsToMany(models.Group, { through: models.GroupPermission, foreignKey: 'permissionId', otherKey: 'groupId' });
    //   };
    return Entrega;
}