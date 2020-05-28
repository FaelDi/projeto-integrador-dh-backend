
var express = require('express');
var router = express.Router();
const authMiddleware = require("../middlewares/auth");
const VendaController = require("../controllers/VendaController");

router.get('/', /*authMiddleware,*/ VendaController.index);
//router.post("/cadastrar", VendaController.new);
router.delete('/delete/:id',/*authMiddleware,*/ VendaController.delete);
router.get('/busca/:id',/*authMiddleware,*/ VendaController.search);

module.exports = router;