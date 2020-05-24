const { Usuario, Avaliacao, Empresa } = require("../models");

module.exports = {
	index: async (req, res) => {
		let avaliacoes = await Avaliacao.findAll({
			include: [
				{ model: Empresa, as: 'empresa' },
				{ model: Usuario, as: 'usuario' }
			],
		});
		if (avaliacoes !== null) {
			res.send(avaliacoes);
		} else {
			res.send("Nao há avaliacoes cadastradas");
		}
	},
	search: async (req, res) => {
		let id = req.params.id

		let avaliaco = await Avaliacao.findByPk(id);
		if (avaliaco !== null) {
			res.send(avaliaco);
		} else {
			res.send("Avaliacao nao encontrado");
		}
	},
	new: async (req, res) => {

		const { ...data } = req.body;
		
		let avaliacoes = await Avaliacao.create(data)

		if (avaliacoes !== null) {
			return res.status(200).json(avaliacoes);
		} else {
			return res.status(400).json({ err });
		}
	},
	update: async (req, res) => {
		try {
			const { id } = req.params;
			const { ...data } = req.body;
			const avaliacao = await Avaliacao.findByPk(id);
			avaliacao.update(data);
			return res.status(200).json(avaliacao);

		} catch{
			return res.status(400).json({ err });
		}
	},
	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const avaliacao = await Avaliacao.findByPk(id);
			avaliacao.destroy();

			return res.status(200).json(avaliacao);
		} catch{
			return res.status(400).json({ err });
		}
	},
}

