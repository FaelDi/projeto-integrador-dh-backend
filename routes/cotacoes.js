var express = require('express');
var router = express.Router();

const CotacaoController = require("../controllers/CotacaoController");
const auth = require('../middlewares/auth');

router.get('/', auth, CotacaoController.index);
// router.post("/cadastrar", auth, CotacaoController.new);
router.delete('/delete/:id', auth, CotacaoController.delete);
router.get('/busca/:id', auth, CotacaoController.search);

module.exports = router;