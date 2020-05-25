const { Pagamento, Usuario } = require("../models");

module.exports = {
	index: async (req, res) => {
		let pagamentos = await Pagamento.findAll({
			include: [
				// { model: Usuario, as: 'usuario' },
			],
		});
		if (pagamentos !== null) {
			res.send(pagamentos);
		} else {
			res.send("Nao há pagamentos cadastrados");
		}
	},

	search: async (req, res) => {
		let id = req.params.id

		let pagamento = await Pagamento.findByPk(id);
		if (pagamento !== null) {
			return res.status(200).json(pagamento);
		} else {
			return res.status(400).json({ err:'Usuário  não foi encontrado!' });
		}
	},

	new: async (req, res) => {
		try {
			const { fk_usuario } = req.params;
			const { numero_cartao, ...data } = req.body;

			const user = await Usuario.findByPk(fk_usuario);
			if(!user) {
				return res.status(400).json({ error: 'Usuario não encontrado!'});
			}

			const [result] = await Pagamento.findOrCreate({
				where: { numero_cartao: numero_cartao },
				defaults: { ...data,  fk_usuario }
			})
			return res.status(200).json(result);

		} catch{
			return res.status(400).json({ err });
		}
	},

	update: async (req, res) => {
		try {
			const { id } = req.params;
			const { ...data } = req.body;
			const pagamento = await Pagamento.findByPk(id);
			
			if(!pagamento) {
				return res.status(400).json({ error: 'Pagamento não encontrado!'});
			}

			pagamento.update(data);
			return res.status(200).json(pagamento);

		} catch{
			return res.status(400).json({ err });
		}
	},

	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const pagamento = await Pagamento.findByPk(id);
			pagamento.destroy();

			return res.status(200).json(pagamento);
		} catch{
			return res.status(400).json({ err });
		}
	},
}

