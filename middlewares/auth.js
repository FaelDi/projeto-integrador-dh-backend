const { Usuario, Pagamento, Empresa } = require("../models");

module.exports = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.render("login", { err: "É necessário login para acessar a página!", display: '' });
  };
};