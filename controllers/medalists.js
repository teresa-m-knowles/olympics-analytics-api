var Olympian = require('../models').Olympian
var Sport = require('../models').Sport
var Team = require('../models').Team
var OlympianEvent = require('../models').OlympianEvent
var Event = require('../models').Event
const sequelize = require('sequelize');
const op = sequelize.Op;
pry = require('pryjs')

module.exports = class MedalistsController {
  static index(request, response){
    let name;
    Event.findByPk(request.params.event_id)
      .then(event => {
        if (event){
          name = event.name
          event.getOlympianEvents({
            raw:true,
            attributes:['medal'],
            where: {
              [op.not]:[
                {medal: 'NA'}
              ]
            },
            include:[{
              model: Olympian,
              attributes:['name', 'age'],
              include: [{
                model: Team,
                as:'team',
                attributes:['name']
              }]
            },

          ]
          })
            .then(olympian_events => {
              return olympian_events.map(olympian_event => {
                let formattedResult = {
                  name: olympian_event['Olympian.name'],
                  team:olympian_event['Olympian.team.name'],
                  age:olympian_event['Olympian.age'],
                  medal:olympian_event.medal,
                }
                return formattedResult
              })
              eval(pry.it)

            })
            .then(formattedResults => {
              response.status(200).send(JSON.stringify({
                event: name,
                medalists: formattedResults
              }))
            })
        }
        else{
          response.status(400).send(JSON.stringify({error: "No event with that id"}))

        }

      })
  }
}
