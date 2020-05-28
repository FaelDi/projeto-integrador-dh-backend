var express = require('express');
var router = express.Router();

const authMiddleware = require("../middlewares/auth");

// router.get('/', authMiddleware, (req, res) => {
//   res.send({ message: 'Servidor Rodando' });
// });

router.get('/', (req, res) => {
  res.render('index', { msg: 'teste' });
});

router.get('/logon', (req, res) => {
  res.render('logon', { msg: 'logon' });
});

router.get('/register', (req, res) => {
  res.render('register', { msg: 'Cadastre-se' });
});

router.get('/me', /*authMiddleware,*/ (req, res) => {
  res.send(req.auth);
});


module.exports = router;
