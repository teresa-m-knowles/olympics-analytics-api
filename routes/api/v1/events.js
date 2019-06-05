var express = require('express');
var router = express.Router();
var EventsController = require('../../../controllers/events')
var MedalistsController = require('../../../controllers/medalists')

router.get('/', EventsController.index)

router.get('/:event_id/medalists', MedalistsController.index)

module.exports = router;
