const { Usuario, Pagamento, Empresa } = require("../models");
const jwt = require('../config/jwt');
const bcrypt = require("bcrypt");

module.exports = {
	login: async (req, res) => {
		const [, hash] = req.headers.authorization.split(' ')
		const [email, senha] = Buffer.from(hash, 'base64')
			.toString()
			.split(':')

		try {
			const user = await Usuario.findOne({
				where: { email, senha }
			})

			if (!user) {
				return res.send(401)
			}

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

			// Hashes password to store in database
			data.senha = bcrypt.hashSync(data.senha, 10);

			// Email validation
			let regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;
			if (!data.email.match(regexEmail)) {
				return res.status(400).json({ result: "Error creating user", message: "The email provided seems not to be valid. Verify it and try again!" });
			}

			// CPF Validation


			const [result] = await Usuario.findOrCreate({
				where: { cpf: cpf },
				defaults: { ...data }
			});

			const token = jwt.sign({ user: result.dataValues.id });

			// res.send(cpf, data);
			return res.status(201).json({ result: result.dataValues, token: token });

		} catch (err) {
			return res.status(200).json({
				result: "Error creating the user",
				message: err.message
			});
		};
	},

	update: async (req, res) => {
		try {
			const { id } = req.params;
			const { ...data } = req.body;
			const user = await Usuario.findByPk(id);
			user.update(data);
			return res.status(200).json(user);

		} catch{
			return res.status(400).json({ err });
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

