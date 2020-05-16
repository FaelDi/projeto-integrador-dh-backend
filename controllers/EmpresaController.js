const { Empresa, Usuario } = require("../models");
const fetch = require("node-fetch");

const buscaCnpj = async(cnpj) => {
		let res = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
		const data =  await res.json();	
		return data;
}

module.exports = {

	index: async (req, res)=>{
		let companies = await Empresa.findAll();
		if(companies !==  null){
			res.send(companies);
		}else{
			res.send("Nao há empresas cadastradas");
		}
	},
	// store: (req, res) => {
  //       let busca = req.params.cnpj;
  //       let url = 'https://www.receitaws.com.br/v1/cnpj/';
  //       let urlFetch = url+busca;
	// 	fetch(urlFetch)
  //   .then(res => res.json())
  //   .then(json => res.send(json));
	// },
	store: async(req, res) => {	
    const { id_usuario } = req.params;
		const { cnpj } = req.body;  
		
		const { 
			qsa,
			atividade_principal, 
			atividades_secundarias, 
			...dados 
		} = await buscaCnpj(cnpj);
		dados.atividade_principal	= atividade_principal[0].text;
		dados.atividades_secundarias	= atividades_secundarias[0].text;
		dados.qsa	= qsa[0].nome;
		dados.fk_usuario	= id_usuario;

		console.log();
		

		const user = await Usuario.findByPk(id_usuario);
		
    if(!user) {
      return res.status(400).json({ error: 'Usuario não encontrado!'});
		}
		

    const empresa = await Empresa.create(dados);

    return res.json(empresa);
  },
}

