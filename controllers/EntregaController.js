const { Usuario, Pagamento, Empresa, Entrega, Cotacao, Produto } = require("../models");

module.exports = {
	index: async (req, res)=>{
		let entregas = await Entrega.findAll({
			include: [
                // { model: Usuario, as: 'usuario' },
                // { model: Empresa, as: 'empresa' },
                // { model: Cotacao, as: 'cotacao' },
                // { model: Pagamento, as: 'pagamento' },
                // { model: Produto, as: 'produto' },
                // { model: Venda, as: 'venda' }
			],
		});
		if(entregas !==  null){
			res.send(entregas);
		}else{
			res.send("Nao há entregas cadastradas");
		}
	},
	search: async (req, res) => {
		let id = req.params.id
		
		let entrega = await Entrega.findByPk(id);
		if(entrega !==  null){
			res.send(entrega);
		}else{
			res.send("entrega nao encontrada");
		}
	},
//     new: async (req, res) => {		
// 		const { cpf, ...data } = req.body;		
					
// 		let [result] = await entrega.findOrCreate({
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
	
		const deletedEntrega = Entrega.destroy({
			where: {
				id: id
			}
		})
		res.redirect("/");
	}
}

