const { Usuario, Avaliacao, Empresa } = require("../models");

module.exports = {
	// Lista todas as avaliações
	index: async (req, res) => {
		let avaliacoes = await Avaliacao.findAll({
			include: [
				{ model: Empresa, as: 'empresa' },
				{ model: Usuario, as: 'usuario' }
			],
		});
		if (avaliacoes) {
			res.send(avaliacoes);
		} else {
			res.send("Nao há avaliacoes cadastradas");
		};
	},
	// Busca uma avaliação pelo id
	search: async (req, res) => {
		let id = req.params.id;

		try {
			let avaliacao = await Avaliacao.findByPk(id);
			if (avaliacao) {
				return res.status(200).json(avaliacao);
			} else {
				return res.status(400).json({
					result: "Erro ao buscar avaliacao"
				});
			};
		} catch (err) {
			return res.status(400).json({
				result: "Erro ao buscar avaliacao"
			});
		};
	},
	// Cria nova avaliação
	new: async (req, res) => {
		const { ...data } = req.body;
		// É obrigatório ter os campos
		// estrelas, comentario, fk_usuario & fk_empresa
		// Caso contrário um erro será lançado

		try {
			let avaliacoes = await Avaliacao.create(data);
			return res.status(200).json(avaliacoes);
		} catch (err) {
			return res.status(400).json({
				result: "Erro ao criar avaliacao",
				message: err.message
			});
		};
	},
	// Atualiza a avaliacao feita anteriormente
	update: async (req, res) => {
		const { id } = req.params;
		const { ...data } = req.body;

		try {
			const avaliacao = await Avaliacao.findByPk(id);
			avaliacao.update(data);
			return res.status(200).json(avaliacao);
		} catch (err) {
			return res.status(400).json({
				result: "Erro ao atualizar avaliacao",
				message: err.message
			});
		};
	},
	// Deleta os dados de ua avaliação
	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const avaliacao = await Avaliacao.findByPk(id);
			avaliacao.destroy();

			return res.status(200).json(avaliacao);
		} catch (err) {
			return res.status(400).json({
				result: "Erro ao atualizar avaliacao",
				message: err.message
			});
		};
	},
};

