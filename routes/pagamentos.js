
var express = require('express');
var router = express.Router();
const authMiddleware = require("../middlewares/auth");
const PagamentoController = require("../controllers/PagamentoController");

router.get('/', /*authMiddleware,*/ PagamentoController.index);
router.get('/:id', /*authMiddleware,*/ PagamentoController.search);
router.post("/cadastrar/:fk_usuario/", /*authMiddleware,*/ PagamentoController.new);
router.put('/:id', /*authMiddleware,*/ PagamentoController.update);
router.delete('/:id', /*authMiddleware,*/ PagamentoController.delete);

module.exports = router;