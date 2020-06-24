
var express = require('express');
var router = express.Router();
const authMiddleware = require("../middlewares/auth");
const EntregaController = require("../controllers/EntregaController");

router.get('/', authMiddleware, EntregaController.index);
//router.post("/cadastrar", authMiddleware, EntregaController.new);
router.delete('/delete/:id',  /*authMiddleware,*/ EntregaController.delete);
router.get('/busca/:id',  /*authMiddleware,*/EntregaController.search);

module.exports = router;