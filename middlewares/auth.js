// Função de login e verificação de autenticação

module.exports = (req, res, next) => {
  // Verifica se há uma sessão de usuario criada
  if (req.session.usuario) {
    next();
  } else {
    // Requere o login para a área restrita
    return res.render("login", { err: "É necessário login para acessar a página!", display: '' });
  };
};