const { Atividade, Usuario, Avaliacao, Empresa } = require("../models");

module.exports = {
	index: async (req, res) => {
		let atividades = await Atividade.findAll();
		if (atividades !== null) {
			res.send(atividades);
		} else {
			res.send("Não há atividades cadastradas");
		}
	},
	search: async (req, res) => {
		let id = req.params.id

		let atividade = await Atividade.findByPk(id);
		if (atividade !== null) {
			res.send(atividade);
		} else {
			res.send("Avaliação não encontrada");
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

