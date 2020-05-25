'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    [
      {
        //"CNPJ": "45.242.914/0001-05",
        "atividades_secundarias": [
          {
            "text": "Atividades de intermediação e agenciamento de serviços e negócios em geral, exceto imobiliários",
            "code": "74.90-1-04"
          }, 
          { "text": "Correspondentes de instituições financeiras", "code": "66.19-3-02" }, 
          { "text": "Agências de viagens", "code": "79.11-2-00" }, 
          { "text": "Operadores turísticos", "code": "79.12-1-00" }, 
          { "text": "Serviços de reservas e outros serviços de turismo não especificados anteriormente", "code": "79.90-2-00" }, 
          { "text": "Comércio varejista de outros produtos não especificados anteriormente", "code": "47.89-0-99" }, 
          { "text": "Comércio varejista especializado de eletrodomésticos e equipamentos de áudio e vídeo", "code": "47.53-9-00" }, 
          { "text": "Comércio atacadista de mercadorias em geral, sem predominância de alimentos ou de insumos agropecuários", "code": "46.93-1-00" }
        ], 
      },
      {
        //"CNPJ": "47.960.950/0001-21",
        "atividades_secundarias": [
          { "text": "Comércio varejista de calçados", "code": "47.82-2-01" },
          { "text": "Comercio varejista de artigos de cama, mesa e banho", "code": "47.55-5-03" },
          { "text": "Comércio varejista de artigos de óptica", "code": "47.74-1-00" },
          { "text": "Comércio varejista de artigos esportivos", "code": "47.63-6-02" },
          { "text": "Comércio varejista de artigos de viagem", "code": "47.82-2-02" },
          { "text": "Comércio varejista de suvenires, bijuterias e artesanatos", "code": "47.89-0-01" },
          { "text": "Comércio varejista de cosméticos, produtos de perfumaria e de higiene pessoal", "code": "47.72-5-00" },
          { "text": "Comércio varejista de artigos de papelaria", "code": "47.61-0-03" },
          { "text": "Comércio varejista de brinquedos e artigos recreativos", "code": "47.63-6-01" },
          { "text": "Comércio varejista de tecidos", "code": "47.55-5-01" },
          { "text": "Comercio varejista de artigos de armarinho", "code": "47.55-5-02" },
          { "text": "Comércio varejista de artigos de joalheria", "code": "47.83-1-01" },
          { "text": "Comércio varejista de artigos de relojoaria", "code": "47.83-1-02" },
          { "text": "Comércio varejista especializado de equipamentos de telefonia e comunicação", "code": "47.52-1-00" },
          { "text": "Comércio varejista de discos, CDs, DVDs e fitas", "code": "47.62-8-00" },
          { "text": "Comércio varejista de artigos fotográficos e para filmagem", "code": "47.89-0-08" },
          { "text": "Comércio varejista de livros", "code": "47.61-0-01" },
          { "text": "Comércio varejista especializado de eletrodomésticos e equipamentos de áudio e vídeo", "code": "47.53-9-00" },
          { "text": "Atividades de intermediação e agenciamento de serviços e negócios em geral, exceto imobiliários", "code": "74.90-1-04" },
          { "text": "Outras sociedades de participação, exceto holdings", "code": "64.63-8-00" }], "qsa": [{ "qual": "10-Diretor", "nome": "MILTON LUCATO FILHO" },
          { "qual": "16-Presidente", "nome": "PAULO CORREA JUNIOR" }, { "qual": "10-Diretor", "nome": "FRANCISLEI CASSIO DONATTI" },
          { "qual": "10-Diretor", "nome": "MARCIA CRISTINA LUCENA DO NASCIMENTO COSTA" },
          { "qual": "10-Diretor", "nome": "FERNANDO GARCIA BROSSI" }
          ],
        }
    ]
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
