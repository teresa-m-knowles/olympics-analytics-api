var Olympian = require('../models').Olympian
var Sport = require('../models').Sport
var Team = require('../models').Team
var OlympianEvent = require('../models').OlympianEvent
const sequelize = require('sequelize');
pry = require('pryjs')
const op = sequelize.Op;

module.exports = class AllOlympiansController {
  static index(request, response) {
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
      group: ['Olympian.id', 'sport.id', 'team.id' ]

    })
      .then(olympians => {
        return olympians.map(olympian => {
          let formattedOlympian =
            {
              name: olympian.name,
              team: olympian['team.name'],
              age: olympian.age,
              sport: olympian['sport.name'],
              total_medals_won: olympian.total_medals_won
            };

     return formattedOlympian
    })
  })
    .then(formattedOlympians => {
      response.status(200).send(JSON.stringify({olympians: formattedOlympians}))
    })
      }
  }
