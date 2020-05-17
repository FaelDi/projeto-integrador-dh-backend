const { Usuario, Cotacao_tem_produto, Empresa } = require("../models");

module.exports = {
	index: async (req, res)=>{
		let cotacoesProdutos = await Cotacao_tem_produto.findAll({
			include: [
                // { model: Empresa, as: 'empresa' },
                // { model: Usuario, as: 'usuario' },
			],
		});
		if(cotacoesProdutos !==  null){
			res.send(cotacoesProdutos);
		}else{
			res.send("Nao há cotacoesProdutos cadastrados");
		}
	},
	search: async (req, res) => {
		let id = req.params.id
		
		let cotacoeProduto = await Cotacao_tem_produto.findByPk(id);
		if(cotacoeProduto !==  null){
			res.send(cotacoeProduto);
		}else{
			res.send("Cotacao_tem_produto nao encontrado");
		}
	},
//     new: async (req, res) => {		
// 		const { cpf, ...data } = req.body;		
					
// 		let [result] = await Cotacao_tem_produto.findOrCreate({
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
	
		const deletedCotacao_tem_produto = Cotacao_tem_produto.destroy({
			where: {
				id: id
			}
		})
		res.redirect("/");
	}
}

