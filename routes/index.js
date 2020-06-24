var express = require('express');
var router = express.Router();

const auth = require('../middlewares/auth');
const UsuarioController = require('../controllers/UsuarioController');

router.get('/', (req, res) => {
  res.render('index');
});

/* !!!!!!!!! COLOQUEI EMPRESA PARA EVITAR CONFLITO COM EMPRESAS */ // MOVIDO PARA EmpresaController.js

router.get('/login', (req, res) => {
  return res.render('login', { err: 'Enviar', display: "hidden" });
});

router.get('/logout', (req, res) => {
  console.log(req.session.destroy());

  return res.render('login', { err: 'Enviar', display: "hidden" });
});

router.get('/register', (req, res) => {
  return res.render('register', { err: '' });
});

router.get('/me', auth, UsuarioController.show);

module.exports = router;
