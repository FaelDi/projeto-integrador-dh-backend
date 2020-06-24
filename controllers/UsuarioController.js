const { Usuario, Pagamento, Empresa } = require("../models");
const bcrypt = require("bcrypt");
const fetch = require("node-fetch");

const consultaCEP = async (cep) => {
	let res = await fetch(`https://viacep.com.br/ws/` + cep + `/json/`)
	const data = await res.json();
	return data;
};

// Função para validar CPF (fonte Receita Federal)
function validarCPF(cpf) {
	cpf = cpf.replace(/[^\d]+/g, ''); // Remove qualquer caracter nao numerico
	if (cpf == '') return false; // Verifica se não esta vazio
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 ||
		cpf == "00000000000" ||
		cpf == "11111111111" ||
		cpf == "22222222222" ||
		cpf == "33333333333" ||
		cpf == "44444444444" ||
		cpf == "55555555555" ||
		cpf == "66666666666" ||
		cpf == "77777777777" ||
		cpf == "88888888888" ||
		cpf == "99999999999") {
		return false;
	}
	// Valida 1o digito	
	add = 0;
	for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11) rev = 0;
	if (rev != parseInt(cpf.charAt(9))) return false;
	// Valida 2o digito	
	add = 0;
	for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
	rev = 11 - (add % 11);
	if (rev == 10 || rev == 11) rev = 0;
	if (rev != parseInt(cpf.charAt(10))) return false;
	return true;
};

module.exports = {
	// Retorna a página de login
	show: async (req, res) => {
		res.render("dash-index", { user });
	},
	// Modulo CEP faz a consulta do cep e não mais do cnpj
	cep: async (req, res) => {
		try {
			if (req.params.cep.length == 8) {
				const address = await consultaCEP();
				if (address.status == "ERROR") {
					res.render('404');;
				};
				return res.status(200).json(address);
			} else {
				res.render('404', { err: "Cep inválido!" });
			}
		} catch (err) {
			return res.render('404', { err: err });
		};

	},

	login: async (req, res) => {
		const { email, senha } = req.body;
		try {
			// Busca o usuario no banco de dados pelo email
			const user = await Usuario.findOne({
				where: { email }
			});

			// Verifica se o user existe
			if (!user) {
				return res.render('login', { err: "Email não cadastrado", display: "" });
			};

			// Compara a senha com o hash gravado
			if (!bcrypt.compareSync(senha, user.senha)) {
				return res.render('login', { err: "Email ou senha não conferem!", display: "" });
			};

			req.session.usuario = user;

			// Renderiza a view de usuario logado
			res.render("dash-index", { user });
		} catch (err) {
			return res.render('404', { err: err, display: "" });
		};
	},

	index: async (req, res) => {
		let users = await Usuario.findAll({
			include: [
				{ model: Pagamento, as: 'pagamento' },
				{ model: Empresa, as: 'empresa' }
			],
		});
		if (users !== null) {
			return res.status(200).json(users);
		} else {
			return res.render('404', { err: 'Não existe usuário cadastado!' });
		}
	},

	search: async (req, res) => {
		let id = req.params.id;

		let user = await Usuario.findByPk(id);
		if (user !== null) {
			return res.status(200).json(user);
		} else {
			return res.render('404', { err: 'Usuário  não foi encontrado!' });
		}
	},

	new: async (req, res) => {
		try {
			const { cpf, ...data } = req.body;
			console.log(req.body.cpf);
			// Hashes password to store in database uses senha length to generate salt
			data.senha = bcrypt.hashSync(data.senha, (data.senha.length % 5));

			// Email validation
			let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
			if (!data.email.match(regexEmail)) {
				console.log('O email fornecido parece inválido. Verifique e tente novamente!');
				return res.render('404');;
			};

			// CPF Validation
			if (!validarCPF(cpf)) {
				console.log("O cpf fornecido parece inválido. Verifique e tente novamente!");
				return res.render('404');;
			};

			// Name validation
			if (!(data.nome) && data.nome.length > 2) {
				console.log("O nome fornecido parece inválido ou vazio. Verifique e tente novamente!");
				return res.render('404');;
			};

			// Busca um usuario pelo cpf e se não existir o cria
			const [result] = await Usuario.findOrCreate({
				where: {
					cpf: cpf,
					email: data.email
				},
				defaults: { ...data }
			});

			req.session.usuario = result;

			res.render("dash-index", { user });

		} catch (err) {
			return res.render('404', { err: err });
		};
	},

	update: async (req, res) => {
		try {
			const { id } = req.params;
			const { ...data } = req.body;
			const user = await Usuario.findByPk(id);

			// Compara a senha antiga com o hash gravado
			if (!bcrypt.compareSync(data.senha0, user.senha)) {
				throw new Error("Senha inválida"); // Retorna Forbidden se senha não confere
			};

			// Hashes password to store in database uses senha length to generate salt
			data.senha = bcrypt.hashSync(data.senha, (data.senha.length % 5));

			// Email validation
			let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
			if (!data.email && !data.email.match(regexEmail)) {
				// Verifica se email null e se o formato é valido
				return res.render('404', { err: "Erro ao criar usuário. O email fornecido parece inválido. Verifique e tente novamente!" });
			};

			// Name validation
			if (!(data.nome) && data.nome.length < 3) {
				// Valida se nome é null
				return res.render('404', { err: "Erro ao criar usuário. O nome fornecido parece inválido ou vazio. Verifique e tente novamente!" });
			};

			// Faz update com os novos dados passados para o user
			user.update(data);
			return res.status(200).json(user);

		} catch (err) {
			return res.render('401', { err: err });
		};
	},

	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const user = await Usuario.findByPk(id);
			user.destroy();

			return res.status(200).json(user);
		} catch (err) {
			return res.render('404', { err: err });
		};
	},
};

