var express = require('express');
var router = express.Router();
const { Empresa } = require("../models");

const authMiddleware = require("../middlewares/auth");

// router.get('/', authMiddleware, (req, res) => {
//   res.send({ message: 'Servidor Rodando' });
// });

router.get('/', (req, res) => {
  res.render('index', { msg: 'teste' });
});

/* !!!!!!!!! COLOQUEI EMPRESA PARA EVITAR CONFLITO COM EMPRESAS */ // MOVIDO PARA EmpresaController.js

router.get('/login', (req, res) => {
  res.render('login', { msg: 'login' });
});

router.get('/register', (req, res) => {
  res.render('register', { msg: 'Cadastre-se' });
});

router.get('/me', /*authMiddleware,*/ (req, res) => {
  res.send(req.auth);
});


module.exports = router;
