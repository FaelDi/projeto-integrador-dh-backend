const { Usuario, Produto, Empresa } = require("../models");

module.exports = {
	index: async (req, res)=>{
		let produtos = await Produto.findAll({
			include: [
                // { model: Empresa, as: 'empresa' },
                // { model: Usuario, as: 'usuario' },
			],
		});
		if(produtos !==  null){
			res.send(produtos);
		}else{
			res.send("Nao há produtos cadastrados");
		}
	},
	search: async (req, res) => {
		let id = req.params.id
		
		let produto = await Produto.findByPk(id);
		if(produto !==  null){
			res.send(produto);
		}else{
			res.send("produto nao encontrado");
		}
	},
//     new: async (req, res) => {		
// 		const { cpf, ...data } = req.body;		
					
// 		let [result] = await Produto.findOrCreate({
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
	
		const deletedProduto = Produto.destroy({
			where: {
				id: id
			}
		})
		res.redirect("/");
	}
}

