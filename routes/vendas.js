
var express = require('express');
var router = express.Router();

const VendaController = require("../controllers/VendaController");

router.get('/', VendaController.index);
//router.post("/cadastrar", VendaController.new);
router.delete('/delete/:id',VendaController.delete);
router.get('/busca/:id',VendaController.search);

module.exports = router;