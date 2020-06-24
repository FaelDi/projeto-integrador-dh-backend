var express = require('express');
var router = express.Router();

const CotacaoController = require("../controllers/CotacaoController");
const auth = require('../middlewares/auth');

router.get('/', CotacaoController.index);
// router.post("/cadastrar", auth, CotacaoController.new);
router.delete('/delete/:id', CotacaoController.delete);
router.get('/busca/:id', CotacaoController.search);

module.exports = router;