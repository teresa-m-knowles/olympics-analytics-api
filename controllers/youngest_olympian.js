var Olympian = require('../models').Olympian
var Sport = require('../models').Sport
var Team = require('../models').Team
var OlympianEvent = require('../models').OlympianEvent
const sequelize = require('sequelize');
const op = sequelize.Op;

module.exports = class YoungestController {
  static show(request, response) {
    response.setHeader("Content-Type", "application/json");
    Olympian.findAll({
      raw: true,
      attributes: [
        'name', 'age',

        [sequelize.fn('COUNT', sequelize.col('OlympianEvents.id')), 'total_medals_won']
      ] ,
      include: [{
        model: Sport,
        as: 'sport',
        attributes: ['name']
      },
        {
        model: Team,
        as: 'team',
        attributes: ['name']
      },
        {
        model: OlympianEvent,
        where: {
          medal: {[op.not]: 'NA'}
        },
        attributes: [],
        required: false
      }
    ],
      group: ['Olympian.id', 'sport.id', 'team.id' ],
      order: ['age']

    })
    .then(olympians => {
      let first = olympians[0]
      response.status(200).send(JSON.stringify([first]))
    })
}
}
