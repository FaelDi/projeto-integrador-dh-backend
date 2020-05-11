module.exports = (sequelize,DataType) => {
    const Empresa = sequelize.define("Empresa", {
        atividade_principal: {
            type: Sequelize.STRING,
            allowNull: false
          },
          data_situacao: {
            type: Sequelize.STRING,
            allowNull: false
          },
          complemento: {
            type: Sequelize.STRING,
            allowNull: false
          },
          nome: {
            type: Sequelize.STRING,
            allowNull: false
          },
          uf: {
            type: Sequelize.STRING,
            allowNull: false
          },
          telefone: {
            type: Sequelize.STRING,
            allowNull: false
          },
          atividades_secundarias: {
            type: Sequelize.STRING,
            allowNull: false
          },
          qsa: {
            type: Sequelize.STRING,
            allowNull: false
          },
          situacao: {
            type: Sequelize.STRING,
            allowNull: false
          },
          bairro: {
            type: Sequelize.STRING,
            allowNull: false
          },
          logradouro: {
            type: Sequelize.STRING,
            allowNull: false
          },
          numero: {
            type: Sequelize.INTEGER,
            allowNull: false
          },
          cep: {
            type: Sequelize.STRING,
            allowNull: false
          },
          municipio: {
            type: Sequelize.STRING,
            allowNull: false
          },
          porte: {
            type: Sequelize.STRING,
            allowNull: false
          },
          abertura: {
            type: Sequelize.STRING,
            allowNull: false
          },
          natureza_juridica: {
            type: Sequelize.STRING,
            allowNull: false
          },
          cnpj: {
            type: Sequelize.STRING,
            allowNull: false
          },
          ultima_atualizacao: {
            type: Sequelize.STRING,
            allowNull: false
          },
          status: {
            type: Sequelize.STRING,
            allowNull: false
          },
          tipo: {
            type: Sequelize.STRING,
            allowNull: false
          },
          fantasia: {
            type: Sequelize.STRING,
            allowNull: false
          },
          email: {
            type: Sequelize.STRING,
            allowNull: false
          },
          efr: {
            type: Sequelize.STRING,
            allowNull: false
          },
          motivo_situacao: {
            type: Sequelize.STRING,
            allowNull: false
          },
          situacao_especial: {
            type: Sequelize.STRING,
            allowNull: false
          },
          data_situacao_especial: {
            type: Sequelize.STRING,
            allowNull: false
          },
          capital_social: {
            type: Sequelize.DECIMAL(20, 2),
            allowNull: false
          }
    },{
        tableName:'empresa',
        timestamps:true
    });

    // Permission.associate = function(models) {
    //     Permission.belongsToMany(models.Group, { through: models.GroupPermission, foreignKey: 'permissionId', otherKey: 'groupId' });
    //   };
    return Empresa;
}