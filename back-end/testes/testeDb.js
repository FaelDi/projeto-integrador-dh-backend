/* PARA RODAR O TESTE DIGITE node testes/testeDb.js NO TERMINAL */
const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const dbConn = new Sequelize(dbConfig);

dbConn.query("select * from usuarios", Sequelize.QueryTypes.SELECT)
.then(
    data => {
        console.log(data);
        dbConn.close();
    }
);