var express = require('express');
var router = express.Router();
const authMiddleware = require("../middlewares/auth");
const ProdutoController = require("../controllers/ProdutoController");

router.get('/', authMiddleware, ProdutoController.index);
router.get('/:id', authMiddleware, ProdutoController.search);
// router.post("/cadastrar/:fk_usuario/", authMiddleware, ProdutoController.new);
// router.put('/:id', authMiddleware, ProdutoController.update);
router.delete('/:id', authMiddleware, ProdutoController.delete);

module.exports = router;