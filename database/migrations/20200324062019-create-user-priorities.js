'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('userPriorities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      sports:{
        type: Sequelize.FLOAT
      },
      food:{
        type: Sequelize.FLOAT
      },
      education:{
        type: Sequelize.FLOAT
      },
      healthcare:{
        type: Sequelize.FLOAT
      },
      interconnectivity:{
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('userPriorities');
  }
};