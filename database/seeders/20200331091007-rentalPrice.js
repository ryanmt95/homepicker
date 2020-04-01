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
    fs.createReadStream('./datasets/rental_prices.csv')
    .pipe(csv())
    .on('data', (row) => {
      dataArray.push(row);
      console.log(dataArray)
    })
    .on('end', () => {
      console.log(dataArray)
      resolve(
        queryInterface.bulkInsert('RentalPrices', 
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
   return queryInterface.bulkDelete('RentalPrices', null, {});
  }
};
