const { Usuario, Cotacao, Empresa } = require("../models");

module.exports = {
	index: async (req, res) => {
		// Recupera as cotações
		let cotacoes = await Cotacao.findAll({
			include: [
				// { model: Empresa, as: 'empresa' }
				// { model: Usuario, as: 'usuario' }
			],
		});

		let user = req.session.usuario;

		console.log(cotacoes);

		if (cotacoes !== null) {
			res.render("cotacoes", { user, cotacoes });
		} else {
			res.send("Nao há cotacoes cadastrados");
		};
	},
	search: async (req, res) => {
		let id = req.params.id;

		let cotacao = await Cotacao.findByPk(id);
		if (cotacao !== null) {
			res.send(cotacao);
		} else {
			res.send("Cotacao nao encontrado");
		};
	},
	//     new: async (req, res) => {		
	// 		const { cpf, ...data } = req.body;		

	// 		let [result] = await Cotacao.findOrCreate({
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

		const deletedCotacao = Cotacao.destroy({
			where: {
				id: id
			}
		});
		return res.redirect("/cotacoes");
	}
};
