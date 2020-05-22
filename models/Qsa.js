module.exports = (sequelize, DataType) => {
    const Qsa = sequelize.define("qsa", {
        qual: {
            type: DataType.STRING,
            allowNull: false
        },
        nome: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
        tableName: 'qsa',
        timestamps: true
    });

    // Qsa.associate = function(models) {
    //     Qsa.belongsToMany(models.Group, { through: models.GroupPermission, foreignKey: 'permissionId', otherKey: 'groupId' });
    //   };
    return Qsa;
}