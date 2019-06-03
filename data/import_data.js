var fs = require('fs');
var csv =  require('fast-csv');
const Event = require('./models').Event
const Olympian = require('./models').Olympian
const Team = require('../models').Team
const OlympianEvent = require('./models').OlympianEvent
const Sport = require('./models').Sport
pry = require('pryjs')


let counter  = 0;
let csvStream = csv.fromPath('./data/olympic_data_2016.csv', {headers: true})
.on('data', (record)=>  {
  csvStream.pause();
  let name = record.Name;
  let sex = record.Sex;
  let age = record.Age;
  let height = record.Height;
  let weight = record.Weight;
  let team = record.Team;
  let sport = record.Sport;
  let title = record.Event;
  let medal = record.Medal;
  // let createdAt = new Date();
  // let updatedAt =  new Date();
  Sport.findOrCreate({
    where: {
      name: sport
    }
  }).then(sport => {
    Event.findOrCreate({
      where: {
        name: title,

      }
    })
  })
  Event.findOrCreate({
    where: {
      name: title,
      sport: sport
    }
  }).then(event => {
    Olympian.findOrCreate({
      where: {
        name: name,
        sex: sex,
        age: age,
        height: height,
        weight: weight,
        team: team,
        sport: sport
      }
    }).then(olympian => {
      var olympian_id = olympian[0].id
      var event_id = event[0].id
      Medalist.findOrCreate({
        where: {
          OlympianId: olympian_id,
          EventId: event_id,
          medal: medal
        }
      })
    })
  });

  counter ++;
  csvStream.resume();
})
.on('end',function(end) {
  console.log('Finised Importing');
})
.on('err',function(err) {
  return console.log(err);
});

setTimeout(function() {
  process.exit();
}, 30000);
