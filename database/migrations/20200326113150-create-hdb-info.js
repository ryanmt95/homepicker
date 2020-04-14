'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('HdbInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blkNo: {
        type: Sequelize.STRING
      },
      street: {
        type: Sequelize.STRING
      },
      town: {
        type: Sequelize.STRING
      },
      roomSold1: {
        type: Sequelize.INTEGER
      },
      roomSold2: {
        type: Sequelize.INTEGER
      },
      roomSold3: {
        type: Sequelize.INTEGER
      },
      roomSold4: {
        type: Sequelize.INTEGER
      },
      roomSold5: {
        type: Sequelize.INTEGER
      },
      execSold: {
        type: Sequelize.INTEGER
      },
      multigenSold: {
        type: Sequelize.INTEGER
      },
      studioApartmentSold: {
        type: Sequelize.INTEGER
      },
      roomRental1: {
        type: Sequelize.INTEGER
      },
      roomRental2: {
        type: Sequelize.INTEGER
      },
      roomRental3: {
        type: Sequelize.INTEGER
      },
      roomRentalOther: {
        type: Sequelize.INTEGER
      },
      region: {
        type: Sequelize.STRING
      },
      totalSold: {
        type: Sequelize.INTEGER
      },
      totalRent: {
        type: Sequelize.INTEGER
      },
      latitude: {
        type: Sequelize.DOUBLE
      },
      longitude: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('HdbInfos');
  }
};