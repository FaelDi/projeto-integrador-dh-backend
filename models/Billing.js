module.exports = (sequelize, DataType) => {
    const Billing = sequelize.define("billing", {
        free: {
            type: DataType.BOOLEAN,
            allowNull: false
        },
        database: {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: 'billing',
        timestamps: true
    });

    // Billing.associate = function(models) {
    //     Billing.belongsToMany(models.Group, { through: models.GroupPermission, foreignKey: 'permissionId', otherKey: 'groupId' });
    //   };
    return Billing;
}