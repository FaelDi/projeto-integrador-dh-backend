const { sequelize, Usuario, Pagamento, Empresa } = require('../models');

Usuario.findAll().then({
  include: [
    { model: Pagamento, as: 'pagamento' },
    { model: Empresa, as: 'empresa' },
  ],
}).then( 
  data => {
    console.log(data.map( u => u.toJSON()));
    sequelize.close();  
  }
)