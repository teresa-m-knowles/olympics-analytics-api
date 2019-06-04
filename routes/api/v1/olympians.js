var express = require('express');
var router = express.Router();
var AllOlympiansController = require('../../../controllers/all_olympians')
var YoungestController = require('../../../controllers/youngest_olympian')
var OldestController = require('../../../controllers/oldest_olympian')

router.get('/', (req, res) => {
  if(req.query.age == 'youngest'){
    YoungestController.show(req, res)
  } else if(req.query.age == 'oldest'){
    OldestController.show(req, res)
  }
  else{
    AllOlympiansController.index(req, res)
  }
});


module.exports = router;
