const { Usuario, Pagamento, Empresa } = require("../models");
const jwt = require('../config/jwt');

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
			return res.status(400).json({ err:'Não existe usuário cadastado!' });
		}
	},

	search: async (req, res) => {
		let id = req.params.id

		let user = await Usuario.findByPk(id);
		if (user !== null) {
			return res.status(200).json(user);
		} else {
			return res.status(400).json({ err:'Usuário  não foi encontrado!' });
		}
	},

	new: async (req, res) => {
		try {
			const { cpf, ...data } = req.body;
			const [result] = await Usuario.findOrCreate({
				where: { cpf: cpf },
				defaults: { ...data }
			})

			const token = jwt.sign({ user: user.id })
		
			return res.status(200).json(result, token);

		} catch{
			return res.status(400).json({ err });
		}
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

