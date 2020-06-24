const { Usuario, Pagamento, Empresa } = require("../models");

module.exports = (req, res, next) => {
  console.log(req.session.usuario)
  if (req.session.usuario) {
    next();
  } else {
    res.render("login", { err: "É necessário login para acessar a página!", display: '' });
  };
};