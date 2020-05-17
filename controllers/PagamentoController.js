const { Pagamento, Usuario } = require("../models");

module.exports = {
	index: async (req, res)=>{
		let pagamentos = await Pagamento.findAll({
			include: [
				// { model: Usuario, as: 'usuario' },
			],
		});
		if(pagamentos !==  null){
			res.send(pagamentos);
		}else{
			res.send("Nao há pagamentos cadastrados");
		}
	},
	search: async (req, res) => {
		let id = req.params.id
		
		let pagamento = await Pagamento.findByPk(id);
		if(pagamento !==  null){
			res.send(pagamento);
		}else{
			res.send("pagamento nao encontrado");
		}
	},
//     new: async (req, res) => {		
// 		const { cpf, ...data } = req.body;		
					
// 		let [result] = await Pagamento.findOrCreate({
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
	
		const deletedPagamento = Pagamento.destroy({
			where: {
				id: id
			}
		})
		res.redirect("/");
	}
}

