var Olympian = require('../models').Olympian
var Sport = require('../models').Sport
var Team = require('../models').Team
var OlympianEvent = require('../models').OlympianEvent
const sequelize = require('sequelize');
const op = sequelize.Op;

module.exports = class OlympianStatsController {
  static show(request, response) {
    let total_competing_olympians;
    let avg_male_weight;
    let avg_female_weight;
    let avg_age;
    response.setHeader("Content-Type", "application/json");
    Olympian
      .findAndCountAll()
        .then(result => {
          total_competing_olympians = result.count
          Olympian.findAll({
            attributes: [
              [sequelize.fn('AVG', sequelize.col('age')), 'avg_age']
            ]
          })
            .then(result => {
              let age = parseFloat(result[0].dataValues.avg_age)
              avg_age = Math.round( age * 10 ) / 10
              Olympian.findAll({
                where: {
                  sex: 'M',
                  [op.not]:[
                    {weight: 'NA'}
                  ]
                },
                attributes: ['weight']
              })
                .then(results => {
                  let total_weight=0;
                  var i;
                  for (i = 0; i < results.length; i++)  {
                      total_weight += parseInt(results[i].dataValues.weight)
                  };
                  avg_male_weight = Math.round( (total_weight/results.length) * 10 ) / 10
                  Olympian.findAll({
                    where: {
                      sex: 'F',
                      [op.not]:[
                        {weight: 'NA'}
                      ]
                    },
                    attributes: ['weight']
                  })
                    .then(results => {
                      let total_weight=0;
                      var i;
                      for (i = 0; i < results.length; i++)  {
                          total_weight += parseInt(results[i].dataValues.weight)
                      };
                      avg_female_weight = Math.round( (total_weight/results.length) * 10 ) / 10
                      response.status(200).send(JSON.stringify({
                                    olympian_stats: {
                                      total_competing_olympians: total_competing_olympians,
                                      average_weight: {
                                        unit: "kg",
                                        male_olympians: avg_male_weight,
                                        female_olympians: avg_female_weight
                                      },
                                      average_age: avg_age
                                    }
                                          }))
                })
                    .catch(error => {
                      console.log(error)
                    })
            })
        })

  })
}
}
