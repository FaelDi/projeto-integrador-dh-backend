const { Usuario } = require("../models");

module.exports = {
	index: async (req, res)=>{
		let users = await Usuario.findAll();
		if(users !==  null){
			res.send(users);
		}else{
			res.send("Nao há usuários cadastrados");
		}
	},
	search: async (req, res) => {
		let id = req.params.id
		
		let user = await Usuario.findByPk(id);
		if(user !==  null){
			res.send(user);
		}else{
			res.send("user nao encontrado");
		}
	},
    new: async (req, res) => {		
		const { cpf, ...data } = req.body;		
					
		let [result] = await Usuario.findOrCreate({
			where: { cpf: cpf },
			defaults: { ...data }
		})
			
		if(result !==  null){
			return res.status(200).json(result);  
		}else{
			return res.status(400).json({ err });
		}
},
	delete: async (req, res) => {
		
		let id = req.params.id;
	
		const deletedUser = Usuario.destroy({
			where: {
				id: id
			}
		})
		res.redirect("/");
	},companies: (req, res) => {
		let id = req.params.id;
	}
}

