const { Empresa, Atividade, Usuario } = require("../models");
const fetch = require("node-fetch");

const buscaCnpj = async (cnpj) => {
	cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove qualquer caracter nao numerico
	if (cnpj == '') throw new Error("CNPJ inválido ou não informado"); // Verifica se não esta vazio
	let res = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
	const data = await res.json();
	return data;
}

module.exports = {
	// Busca todas as empresas cadastradas
	index: async (req, res) => {
		let empresas = await Empresa.findAll({
			include: 'atividade'
		})
		if (empresas) {
			// res.send(empresas);
			res.render('empresas', { data: empresas });
		} else {
			res.send("Nao há empresas cadastradas");
		};
	},
	// Busca empresa pelo id
	search: async (req, res) => {
		let id = req.params.id

		let empresa = await Empresa.findByPk(id);
		if (empresa) {
			return res.status(200).json(empresa);
		} else {
			return res.status(400).json({ err: 'Empresa  não foi encontrada!' });
		};
	},
	// Cria nova empresa relacionada ao usuario
	new: async (req, res) => {
		const { fk_usuario } = req.params;
		const { cnpj } = req.body;

		try {
			// Consulta o cnpj no site da receita e retorna os dados em json
			let company = await buscaCnpj(cnpj);

			// Verifica se houve um erro durante a consulta
			if (company.status == "ERROR") {
				res.status(400).json({ result: "Erro ao criar empresa", message: "O cnpj fornecido parece inválido. Verifique e tente novamente!" });
			};

			const {
				qsa,
				atividade_principal,
				atividades_secundarias,
				teste,
				...dados
			} = company;

			const atividades = [...atividade_principal, ...atividades_secundarias];

			// console.log(atividades);
			// atividades.map(e => console.log(e));

			dados.atividade_principal = atividade_principal[0].text;
			dados.atividades_secundarias = atividades_secundarias[0].text;
			dados.qsa = qsa[0] ? qsa[0].nome : '';
			dados.fk_usuario = fk_usuario;

			const user = await Usuario.findByPk(fk_usuario);

			if (!user) {
				return res.status(400).json({ error: 'Usuario não encontrado!' });
			}

			//const empresa = await Empresa.create(dados);

			const [empresa] = await Empresa.findOrCreate({
				where: { cnpj: cnpj },
				defaults: { ...dados }
			});

			if (atividades) {
				// empresa.setAtividade(teste);
				async function createAtividades(e) {
					const [result] = await Atividade.findOrCreate({
						where: { code: e.code },
						defaults: { text: e.text }
					});

					//empresa.setAtividade(result);
					empresa.setAtividade(result);
				};
				atividades.map(e => createAtividades(e));
			};

			return res.status(200).json(empresa);
		} catch (err) {
			return res.status(400).json({
				result: "Erro ao criar empresa",
				message: err.message
			});
		};
	},
	// Atualiza informações da empresa
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
			return res.status(400).json({
				result: "Erro ao criar empresa",
				message: err.message
			});
		};
	},
	// Deleta uma empresa pelo id dela no banco
	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const empresa = await Empresa.findByPk(id);
			empresa.destroy();

			return res.status(200).json(empresa);
		} catch (err) {
			return res.status(400).json({
				result: "Erro ao criar empresa",
				message: err.message
			});
		};
	},
}



