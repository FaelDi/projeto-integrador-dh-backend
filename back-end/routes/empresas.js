var express = require('express');
var router = express.Router();

const EmpresaController = require("../controllers/EmpresaController");


router.get('/', EmpresaController.index);
router.get("/cnpj/:cnpj",EmpresaController.search);

module.exports = router;