var express = require('express');
var router = express.Router();
var dataujianController = require("../controllers/dataujian")

router.post('/', dataujianController.create)

router.get('/', dataujianController.find)

router.get('/multiSearch', dataujianController.multiSearch)

router.get('/:id', dataujianController.getData)

router.put('/:id', dataujianController.update)

router.delete('/:id', dataujianController.delete)

module.exports = router;
