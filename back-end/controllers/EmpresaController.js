const { Empresa, Usuario } = require("../models");
const fetch = require("node-fetch");

const buscaCnpj = async(cnpj) => {
	try {
		const res = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
		const data = res.json();
		console.log(data);
		return data;
		
	} catch (e) {
		console.error(e);
	}
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
		
		const dados = buscaCnpj(cnpj); 
		console.log(dados);
								
		const user = await Usuario.findByPk(id_usuario);
		
    if(!user) {
      return res.status(400).json({ error: 'Usuario não encontrado!'});
		}
		
    const empresa = await Empresa.create({ 
       dados 
    });
    return res.json(empresa);
  },
}

