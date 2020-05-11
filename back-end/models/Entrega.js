module.exports = (sequelize,DataType) => {
    const Entrega = sequelize.define("Entrega", {
        status: {
            type: Sequelize.BOOLEAN,
            allowNull: false
          },
          rastreamento: {
            type: Sequelize.STRING,
            allowNull: false
          }
    },{
        tableName:'entrega',
        timestamps:true
    });

    // Permission.associate = function(models) {
    //     Permission.belongsToMany(models.Group, { through: models.GroupPermission, foreignKey: 'permissionId', otherKey: 'groupId' });
    //   };
    return Entrega;
}