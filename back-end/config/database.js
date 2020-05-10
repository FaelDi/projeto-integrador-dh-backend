require("dotenv").config()
// const config = {
//   // "development": {
//   //   "username": "root",
//   //   "password": null,
//   //   "database": "database_development",
//   //   "host": "127.0.0.1",
//   //   "dialect": "mysql",
//   //   "operatorsAliases": false
//   // },
//   // "test": {
//   //   "username": "root",
//   //   "password": null,
//   //   "database": "database_test",
//   //   "host": "127.0.0.1",
//   //   "dialect": "mysql",
//   //   "operatorsAliases": false
//   // },
//   // "production": {
//   //   "username": "root",
//   //   "password": null,
//   //   "database": "database_production",
//   //   "host": "127.0.0.1",
//   //   "dialect": "mysql",
//   //   "operatorsAliases": false
//   // },
//   // "externo": ]
//   // {
//     "username":'eupedroc_orca',
//     "password":'Orca123456',
//     "database":'eupedroc_orca',
//     "host":'cpl04.main-hosting.eu',
//     "dialect":'mysql'
//   // }

 const config = {
      username:process.env.DB_USER_NODE,
      password:process.env.DB_PASSWORD_NODE,
      database:'orca',
      host:'localhost',
     dialect:'mysql'
   }

// const config = {
//         "username":process.env.DB_USER,
//         "password":process.env.DB_PASSWORD,
//         "database":'eupedroc_orca',
//         "host":'cpl04.main-hosting.eu',
//         "dialect":'mysql'
// }

//}

module.exports = config;