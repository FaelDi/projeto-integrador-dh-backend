const { Usuario, Avaliacao, Empresa } = require("../models");

module.exports = {
	index: async (req, res)=>{
		let avaliacoes = await Avaliacao.findAll({
			include: [
            //     { model: Empresa, as: 'empresa' },
            //     { model: Usuario, as: 'usuario' },
			 ],
		});
		if(avaliacoes !==  null){
			res.send(avaliacoes);
		}else{
			res.send("Nao há avaliacoes cadastrados");
		}
	},
	search: async (req, res) => {
		let id = req.params.id
		
		let avaliaco = await Avaliacao.findByPk(id);
		if(avaliaco !==  null){
			res.send(avaliaco);
		}else{
			res.send("Avaliacao nao encontrado");
		}
	},
//     new: async (req, res) => {		
// 		const { cpf, ...data } = req.body;		
					
// 		let [result] = await Avaliacao.findOrCreate({
// 			where: { cpf: cpf },
// 			defaults: { ...data }
// 		})
			
// 		if(result !==  null){
// 			return res.status(200).json(result);  
// 		}else{
// 			return res.status(400).json({ err });
// 		}
// },
	delete: async (req, res) => {
		
		let id = req.params.id;
	
		const deletedAvaliacao = Avaliacao.destroy({
			where: {
				id: id
			}
		})
		res.redirect("/");
	}
}

