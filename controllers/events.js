var Sport = require('../models').Sport
var Event = require('../models').Event
const sequelize = require('sequelize');
const op = sequelize.Op;

module.exports = class OlympianStatsController {
  static index(request, response) {
    let readySport;
    response.setHeader("Content-Type", "application/json");

    Sport.findAll({
      attributes: [['name', 'sport']],
      include: [{
          model: Event,
          attributes:['name'],
      }],
      order: [['name', 'ASC']],
      order: [
        [
          {
            model: Event
          },
          'name', 'ASC'
        ]
      ]
    })
      .then(sports => {
        return sports.map(sport => {
          var events = sport.Events.map(event => {
            return event.name

          });
          readySport = {
            sport: sport.dataValues.sport,
            events: events
          };
          return readySport
        })
      })
      .then(sports => {
        response.status(200).send(JSON.stringify({events: sports}))
      })

  }
}
