const { Usuario, Pagamento, Empresa } = require("../models");
const jwt = require('../config/jwt');

const authMiddleware = async (req, res, next) => {
  try {
    const [token] = req.headers.authorization
  console.log(req.headers.authorization)
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
    console.log(error)
    res.sendStatus(401);
  };
};

module.exports = authMiddleware;