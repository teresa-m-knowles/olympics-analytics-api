var fs = require('fs');
var csv =  require('fast-csv');

const Event = require('../models').Event
const Olympian = require('../models').Olympian
const Team = require('../models').Team
const OlympianEvent = require('../models').OlympianEvent
const Sport = require('../models').Sport

pry = require('pryjs')


let counter  = 0;
let csvStream = csv.fromPath("./data/olympic_data_2016.csv", {headers: true})
.on('data', (record)=>  {
  csvStream.pause();
  let name = record.Name;
  let sex = record.Sex;
  let age = record.Age;
  let team = record.Team;
  let sport = record.Sport;
  let event = record.Event;
  let medal = record.Medal;
  let height = record.Height;
  let weight = record.Weight;


  let event_id;
  let team_id;
  let sport_id;
  let olympian_id;
  // let createdAt = new Date();
  // let updatedAt =  new Date();
  Team.findOrCreate({
    where: {
      name: team
    }
  }).then(team => {
    team_id = team[0].id
    Sport.findOrCreate({
      where: {
        name: sport
      }
    }).then(sport => {
      sport_id = sport[0].id
      Event.findOrCreate({
        where: {
          name: event,
          SportId: sport_id
        }
      }).then(event => {
        event_id = event[0].id
        Olympian.findOrCreate({
          where:{
            name: name,
            age: age,
            weight: weight,
            height: height,
            sex: sex,
            TeamId: team_id,
            SportId: sport_id
          }
        }).then(olympian => {
          olympian_id = olympian[0].id
          OlympianEvent.findOrCreate({
            where:{
              medal: medal,
              EventId: event_id,
              OlympianId: olympian_id
            }
          }).then(olympian_event => {
          })
          .catch(error => {
            console.log(error)
          })
        })

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
}, 180000);
