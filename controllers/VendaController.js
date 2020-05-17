const { Usuario, Pagamento, Empresa, Venda, Cotacao, Produto } = require("../models");

module.exports = {
	index: async (req, res)=>{
		let vendas = await Venda.findAll({
			include: [
                // { model: Usuario, as: 'usuario' },
                // { model: Empresa, as: 'empresa' },
                // { model: Cotacao, as: 'cotacao' },
                // { model: Pagamento, as: 'pagamento' },
                // { model: Produto, as: 'produto' },
			],
		});
		if(vendas !==  null){
			res.send(vendas);
		}else{
			res.send("Nao há vendas cadastradas");
		}
	},
	search: async (req, res) => {
		let id = req.params.id
		
		let venda = await Venda.findByPk(id);
		if(venda !==  null){
			res.send(venda);
		}else{
			res.send("venda nao encontrada");
		}
	},
//     new: async (req, res) => {		
// 		const { cpf, ...data } = req.body;		
					
// 		let [result] = await Venda.findOrCreate({
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
	
		const deletedVenda = Venda.destroy({
			where: {
				id: id
			}
		})
		res.redirect("/");
	}
}

