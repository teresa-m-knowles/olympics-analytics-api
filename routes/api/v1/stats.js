var express = require('express');
var router = express.Router();
var OlympianStatsController = require('../../../controllers/stats')

router.get('/', OlympianStatsController.show )
module.exports = router;
