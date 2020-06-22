const { Usuario, Pagamento, Empresa } = require("../models");
const jwt = require('../config/jwt');
const bcrypt = require("bcrypt");
const fetch = require("node-fetch");

const buscaCnpj = async (cep) => {
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
	cep: async (req, res) => {
		try {
			if (req.params.cep.length == 8) {
				const adress = await buscaCnpj();
				if (adress.status == "ERROR") {
					res.render('error404.ejs').json({ result: "Erro ao consultar cep!" });
				};
				return res.status(200).json(adress);
			} else {
				res.render('error404.ejs').json({ result: "Cep inválido!" });
			}
		} catch (err) {
			return res.render('error404.ejs').json({
				result: "Erro ao consultar cep",
				message: err.message
			});
		};

	},

	login: async (req, res) => {
		// const [, hash] = req.headers.authorization.split(' ');
		// let [email, senha] = Buffer.from(hash, 'base64')
		// 	.toString()
		// 	.split(':')
		// Recebe email e a senha spliting no espaço do que é passado em AUTHORIZATION
		// ------------------- APENAS PARA TESTE ----------------
		// let [cpf, senha] = req.headers.authorization.split(' ');

		// Recebe o email e senha do usuario do form
		const { email, senha } = req.body;

		try {
			// Busca o usuario no banco de dados pelo cpf
			const user = await Usuario.findOne({
				where: { email }
			});

			// Compara a senha com o hash gravado
			if (!bcrypt.compareSync(senha, user.senha)) {
				return res.send(401); // Retorna Forbidden se senha não confere
			};

			// Envia um json web token para autenticação do usuario
			const token = jwt.sign({ user: user.id });

			// Renderiza a view de usuario logado
			res.render("dash-index", { user, token });
			// res.send({ user, token });
		} catch (err) {
			return res.render('404.ejs');
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
			return res.render('error404.ejs').json({ err: 'Não existe usuário cadastado!' });
		}
	},

	search: async (req, res) => {
		let id = req.params.id;

		let user = await Usuario.findByPk(id);
		if (user !== null) {
			return res.status(200).json(user);
		} else {
			return res.render('error404.ejs').json({ err: 'Usuário  não foi encontrado!' });
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
				return res.render('error404');
			};

			// CPF Validation
			if (!validarCPF(cpf)) {
				console.log("O cpf fornecido parece inválido. Verifique e tente novamente!");
				return res.render('error404');
			};

			// Name validation
			if (!(data.nome) && data.nome.length > 2) {
				console.log("O nome fornecido parece inválido ou vazio. Verifique e tente novamente!");
				return res.render('error404');
			};

			// Busca um usuario pelo cpf e se não existir o cria
			const [result] = await Usuario.findOrCreate({
				where: {
					cpf: cpf,
					email: data.email
				},
				defaults: { ...data }
			});

			req.session.usuario = result

			return res.redirect('/me', 201);

		} catch (err) {
			console.log(err)
			return res.render('error404')
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
				return res.render('error404.ejs').json({ result: "Erro ao criar usuário", message: "O email fornecido parece inválido. Verifique e tente novamente!" });
			};

			// Name validation
			if (!(data.nome) && data.nome.length < 3) {
				// Valida se nome é null
				return res.render('error404.ejs').json({ result: "Erro ao criar usuário", message: "O nome fornecido parece inválido ou vazio. Verifique e tente novamente!" });
			};

			// Faz update com os novos dados passados para o user
			user.update(data);
			return res.status(200).json(user);

		} catch (err) {
			return res.status(401).json({
				result: "Erro ao alterar usuário",
				message: err.message
			});
		};
	},

	delete: async (req, res) => {
		console.log(id)
		try {
			const { id } = req.params;
			const user = await Usuario.findByPk(id);
			user.destroy();

			return res.status(200).json(user);
		} catch (err) {
			return res.render('error404.ejs').json({ err });
		};
	},
};

