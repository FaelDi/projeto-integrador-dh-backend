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

/* !!!!!!!!! COLOQUEI EMPRESA PARA EVITAR CONFLITO COM EMPRESAS */ 
router.get('/empresa', async (req, res) => {
  let empresas = await Empresa.findAll({
    include: 'atividade'
  })
  if (empresas) {
    // res.send(empresas);
    res.render('empresas', { data: empresas });
  } else {
    res.send("Nao há empresas cadastradas");
  };
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
