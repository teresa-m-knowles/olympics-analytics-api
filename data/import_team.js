var Promise = require('bluebird');
var csv = require('csv-parser');
var fs = require('fs');
const Event = require('../models').Event
const Olympian = require('../models').Olympian
const Team = require('../models').Team
const OlympianEvent = require('../models').OlympianEvent
const Sport = require('../models').Sport
pry = require('pryjs')
const teams = {};
const results = [];


fs.createReadStream('./data/olympic_data_2016.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log("end")
  });
//
//
// var addTeams = function(results) {
//   var i;
//   for (i=0; i < results.length; i++) {
//     Team.findOrCreate({
//       where: {
//         name: results[i].Team
//       }
//     })
//     .then(team => {
//       console.log(team)
//     })
//   }
// }

var importData = () => {
  var i;
  var j;
  console.log("Importing data...")
  const iterationFunction = (row) => {
    for (i=0; i < results.length; i++) {
      let team = results[i].Team
      let event = results[i].Event
      let sport = results[i].Sport
      let name = results[i].Name
      let sex = results[i].Sex
      let age = parseInt(results[i].Age)
      let height = parseInt(results[i].Height)
      let weight = parseInt(results[i].Weight)
      let medal = results[i].Medal
      let event_id;
      let team_id;
      let olympian_id;
      Sport.findOrCreate({
        where: {
          name: sport
        }
      })
      .then(sport => {
        sport_id = sport[0].id
        return Event.findOrCreate({
          where: {
            name: event,
            SportId: sport_id
          }
        })
      })
      .then(event => {
        event_id = event[0].id
        return Team.findOrCreate({
          where:{
            name: team
          }
        })
      })
      .then(team =>{
        team_id = team[0].id
        return Olympian.findOrCreate({
          where:{
            name: name,
            age: age,
            weight: weight,
            height: height,
            sex: sex,
            TeamId: team_id,
            SportId: sport_id
          }
        })
      })
      .then(olympian => {
        olympian_id = olympian[0].id
        return OlympianEvent.findOrCreate({
          where: {
            OlympianId: olympian_id,
            EventId: event_id,
            medal: medal
          }
        })
      })
    }
  }

  Promise.map(results, iterationFunction, { concurrency: 6000 });

};

eval(pry.it)



  //
  //
  // fs.createReadStream('./data/olympic_data_2016.csv')
  //   .pipe(csv())
  //   .on('data', (data) => results.push(data))
  //   .on('end', () => {
  //     var i;
  //     for (i=0; i < results.length; i++) {
  //       Sport.findOrCreate({
  //         where: {
  //           name: results[i].Sport
  //         }
  //       })
  //       .then(sport=> {
  //         sport_id = sport[0].id
  //         Event.findOrCreate({
  //           where: {
  //             name: results[i].Event,
  //             SportId: sport_id
  //           }
  //         })
  //       })
  //     }
  //   });
  //   //
  //   // fs.createReadStream('./data/olympic_data_2016.csv')
  //   //   .pipe(csv())
  //   //   .on('data', (data) => results.push(data))
  //   //   .on('end', () => {
  //   //     var i;
  //   //     for (i=0; i < results.length; i++) {
  //   //       sport_id =
  //   //       Event.findOrCreate({
  //   //         where: {
  //   //           name: results[i].Event,
  //   //           sport: {
  //   //             Sport.findOne({
  //   //               where: {
  //   //                 name: results[i].Sport
  //   //               }
  //   //             })
  //   //               .then(sport => {
  //   //                 eval(pry.it)
  //   //                 return sport.id
  //   //               })
  //   //           }
  //   //         }
  //   //       })
  //   //       .then(team => {
  //   //         console.log(team)
  //   //       })
  //   //     }
  //   //   });
