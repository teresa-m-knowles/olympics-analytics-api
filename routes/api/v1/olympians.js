var express = require('express');
var router = express.Router();
var AllOlympiansController = require('../../../controllers/all_olympians')

router.get('/', AllOlympiansController.index );


module.exports = router;
