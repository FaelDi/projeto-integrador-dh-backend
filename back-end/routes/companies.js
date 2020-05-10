var express = require('express');
var router = express.Router();

const empresaController = require("../controllers/empresaController");


router.get('/', empresaController.index);
router.get("/cnpj/:cnpj",empresaController.search);

module.exports = router;