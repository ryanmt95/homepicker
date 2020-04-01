'use strict';
const csv = require('csv-parser');
const fs = require('fs');


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return new Promise ((resolve, reject)=>{
    var dataArray = [];
    fs.createReadStream('./datasets/Final_Normalised.csv')
    .pipe(csv())
    .on('data', (row) => {
      dataArray.push(row);
      console.log(dataArray)
    })
    .on('end', () => {
      console.log(dataArray)
      resolve(
        queryInterface.bulkInsert('LocationPriorities', 
      dataArray)
      );
    });

   })

        },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('LocationPriorities', null, {});
  }
};
