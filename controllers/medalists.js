var Olympian = require('../models').Olympian
var Sport = require('../models').Sport
var Team = require('../models').Team
var OlympianEvent = require('../models').OlympianEvent
const sequelize = require('sequelize');
const op = sequelize.Op;
pry = require('pryjs')

module.exports = class OldestController {
  static index(request, response){
    eval(pry.it)
    console.log(request)
  }
}
