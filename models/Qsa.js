module.exports = (sequelize, DataType) => {
    const Qsa = sequelize.define("Qsa", {
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

    Qsa.associate = (models) => {
        //Pertence a um usuário
        Qsa.belongsTo(models.Empresa, {
            foreignKey: 'fk_qsa',
            as: 'empresa'
        });
        //Pertence a um usuário
        Qsa.belongsTo(models.Usuario, {
            foreignKey: 'fk_empresa',
            as: 'usuario'
        });
    }
    return Qsa;
}