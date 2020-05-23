const { Empresa, Usuario } = require("../models");
const fetch = require("node-fetch");

const buscaCnpj = async (cnpj) => {
	let res = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
	const data = await res.json();
	return data;
}

module.exports = {
	index: async (req, res) => {
		let empresas = await Empresa.findAll();
		if (empresas !== null) {
			res.send(empresas);
		} else {
			res.send("Nao há empresas cadastradas");
		}
	},

	search: async (req, res) => {
		let id = req.params.id

		let empresa = await Empresa.findByPk(id);
		if (empresa !== null) {
			return res.status(200).json(empresa);
		} else {
			return res.status(400).json({ err: 'Empresa  não foi encontrada!' });
		}
	},

	new: async (req, res) => {
		const { fk_usuario } = req.params;
		const { cnpj } = req.body;

		let company = await buscaCnpj(cnpj);
		if (company.status == "ERROR") {
			res.status(400).json({ result: "Erro ao criar empresa", message: "O cnpj fornecido parece inválido. Verifique e tente novamente!" });
		}

		const {
			qsa,
			atividade_principal,
			atividades_secundarias,
			...dados
		} = company;
		dados.atividade_principal = atividade_principal[0].text;
		dados.atividades_secundarias = atividades_secundarias[0].text;
		dados.qsa = qsa[0].nome;
		dados.fk_usuario = fk_usuario;

		const user = await Usuario.findByPk(fk_usuario);

		if (!user) {
			return res.status(400).json({ error: 'Usuario não encontrado!' });
		}

		const empresa = await Empresa.create(dados);

		return res.status(200).json(empresa);
	},

	update: async (req, res) => {
		try {
			const { id } = req.params;
			const { ...data } = req.body;
			const empresa = await Empresa.findByPk(id);

			if (!empresa) {
				return res.status(400).json({ error: 'Empresa não encontrado!' });
			}

			empresa.update(data);
			return res.status(200).json(empresa);

		} catch (err) {
			return res.status(400).json({ err });
		}
	},

	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const empresa = await Empresa.findByPk(id);
			empresa.destroy();

			return res.status(200).json(empresa);
		} catch (err) {
			return res.status(400).json({ err });
		}
	},
}



