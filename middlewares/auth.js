const { Usuario, Pagamento, Empresa } = require("../models");
const jwt = require('../config/jwt');

const authMiddleware = async (req, res, next) => {
  const [, token] = req.headers.authorization.split(' ')
  console.log(req.headers.authorization)
  try {
    const payload = await jwt.verify(token);
    console.log(payload.user);
    
    const user = await Usuario.findByPk(payload.user);
    console.log(user);
    
    if (!user) {
      return res.send(401);
    };

    req.auth = user;

    next();
  } catch (error) {
    res.status(401).send(error)
  };
};

module.exports = authMiddleware;