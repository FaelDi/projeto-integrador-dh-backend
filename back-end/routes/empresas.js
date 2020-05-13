var express = require('express');
var router = express.Router();

const EmpresaController = require("../controllers/EmpresaController");


router.get('/', EmpresaController.index);
router.post("/:id_usuario",EmpresaController.store);

module.exports = router;