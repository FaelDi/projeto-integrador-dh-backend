var express = require('express');
var router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");

router.get('/', ProdutoController.index);
router.get('/:id',ProdutoController.search);
// router.post("/cadastrar/:fk_usuario/", ProdutoController.new);
// router.put('/:id',ProdutoController.update);
router.delete('/:id',ProdutoController.delete);

module.exports = router;