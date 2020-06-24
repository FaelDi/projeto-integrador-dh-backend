var express = require('express');
var router = express.Router();

const auth = require('../middlewares/auth');

router.get('/', (req, res) => {
  res.render('index', { msg: 'teste' });
});

/* !!!!!!!!! COLOQUEI EMPRESA PARA EVITAR CONFLITO COM EMPRESAS */ // MOVIDO PARA EmpresaController.js

router.get('/login', (req, res) => {
  res.render('login', { err: 'Enviar', display: "hidden" });
});

router.get('/register', (req, res) => {
  res.render('register', { err: '' });
});

router.get('/me', auth, (req, res) => {
  res.send(req.auth);
});

module.exports = router;
