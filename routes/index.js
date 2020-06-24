var express = require('express');
var router = express.Router();
const { Empresa } = require("../models");

router.get('/', (req, res) => {
  res.render('index', { msg: 'teste' });
});

/* !!!!!!!!! COLOQUEI EMPRESA PARA EVITAR CONFLITO COM EMPRESAS */ // MOVIDO PARA EmpresaController.js

router.get('/login', (req, res) => {
  res.render('login', { err: '', display: "hidden" });
});

router.get('/register', (req, res) => {
  res.render('register', { err: '' });
});

router.get('/me', (req, res) => {
  res.send(req.auth);
});

module.exports = router;
