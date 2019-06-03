var csv = require('csv-parser');
var fs = require('fs');
const Team = require('../models').Team
const teams = {};
const results = [];


fs.createReadStream('./data/olympic_data_2016.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results[0].Team)
    console.log(results[1].Team)
    console.log(results[2].Team)
    console.log(results[1].Team === results[2].Team)
    var i;
    for (i=0; i < results.length; i++) {
      Team.findOrCreate({
        where: {
          name: results[i].Team
        }
      })
      .then(team => {
        console.log(team)
      })
    }
  });
