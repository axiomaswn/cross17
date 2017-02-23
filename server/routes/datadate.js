var express = require('express');
var router = express.Router();
var datadateController = require("../controllers/datadate")

router.post('/', datadateController.create)

router.get('/', datadateController.find)

router.get('/multiSearch', datadateController.multiSearch)

router.get('/:id', datadateController.getData)

router.put('/:id', datadateController.update)

router.delete('/:id', datadateController.delete)

module.exports = router;
