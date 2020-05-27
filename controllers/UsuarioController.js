const { Usuario, Pagamento, Empresa } = require("../models");
const jwt = require('../config/jwt');
const bcrypt = require("bcrypt");

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
	login: async (req, res) => {
		// const [, hash] = req.headers.authorization.split(' ');
		// let [email, senha] = Buffer.from(hash, 'base64')
		// 	.toString()
		// 	.split(':')

		// Recebe email e a senha spliting no espaço do que é passado em AUTHORIZATION
		// ------------------- APENAS PARA TESTE ----------------
		// let [cpf, senha] = req.headers.authorization.split(' ');
		const { email, senha } = req.body;

		console.log(email);
		console.log(senha);
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
			const token = jwt.sign({ user: user.id })
			res.send({ user, token })
		} catch (error) {
			res.send(error)
		}
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
			return res.status(400).json({ err: 'Não existe usuário cadastado!' });
		}
	},

	search: async (req, res) => {
		let id = req.params.id

		let user = await Usuario.findByPk(id);
		if (user !== null) {
			return res.status(200).json(user);
		} else {
			return res.status(400).json({ err: 'Usuário  não foi encontrado!' });
		}
	},

	new: async (req, res) => {
		try {
			const { cpf, ...data } = req.body;

			// Hashes password to store in database uses senha length to generate salt
			data.senha = bcrypt.hashSync(data.senha, (data.senha.length % 5));

			// Email validation
			let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
			if (!data.email.match(regexEmail)) {
				return res.status(400).json({ result: "Erro ao criar usuário", message: "O email fornecido parece inválido. Verifique e tente novamente!" });
			};

			// CPF Validation
			if (!validarCPF(cpf)) {
				return res.status(400).json({ result: "Erro ao criar usuário", message: "O CPF fornecido parece inválido. Verifique e tente novamente!" });
			};

			// Name validation
			if (!(data.nome) && data.nome.length > 2) {
				return res.status(400).json({ result: "Erro ao criar usuário", message: "O nome fornecido parece inválido ou vazio. Verifique e tente novamente!" });
			}

			// Busca um usuario pelo cpf e se não existir o cria
			const [result] = await Usuario.findOrCreate({
				where: { cpf: cpf },
				where: { email: data.email },
				defaults: { ...data }
			});

			// Gera um token para mandar no response e autenticar usuario
			// const token = jwt.sign({ user: result.dataValues.id });

			return res.status(200).json({ result: result });

		} catch (err) {
			return res.status(400).json({
				result: "Erro ao criar usuário",
				message: err.message
			});
		};
	},

	update: async (req, res) => {
		try {
			const { id } = req.params;
			const { ...data } = req.body;
			const user = await Usuario.findByPk(id);

			// Compara a senha antiga com o hash gravado
			if (!bcrypt.compareSync(data.senha0, user.senha)) {
				throw new Error("Senha inválida") // Retorna Forbidden se senha não confere
			}

			// Hashes password to store in database uses senha length to generate salt
			data.senha = bcrypt.hashSync(data.senha, (data.senha.length % 5));

			// Email validation
			let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
			if (!data.email && !data.email.match(regexEmail)) {
				// Verifica se email null e se o formato é valido
				return res.status(400).json({ result: "Erro ao criar usuário", message: "O email fornecido parece inválido. Verifique e tente novamente!" });
			};

			// Name validation
			if (!(data.nome) && data.nome.length < 3) {
				// Valida se nome é null
				return res.status(400).json({ result: "Erro ao criar usuário", message: "O nome fornecido parece inválido ou vazio. Verifique e tente novamente!" });
			}

			// Faz update com os novos dados passados para o user
			user.update(data);
			return res.status(200).json(user);

		} catch (err) {
			return res.status(401).json({
				result: "Erro ao alterar usuário",
				message: err.message
			});
		}
	},

	delete: async (req, res) => {
		try {
			const { id } = req.params;
			const user = await Usuario.findByPk(id);
			user.destroy();

			return res.status(200).json(user);
		} catch{
			return res.status(400).json({ err });
		}
	},
}

