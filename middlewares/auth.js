const { Usuario, Pagamento, Empresa } = require("../models");

const authMiddleware = async (req, res, next) => {
  try {
    // [, token] taken the second element splited
    const [, token] = req.headers.authorization ? req.headers.authorization.split(' ') : null;
    // console.log(req.headers.authorization)
    // console.log(payload.user);

    const user = await Usuario.findByPk(payload.user);
    // console.log(user);

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