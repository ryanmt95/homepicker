'use strict';
module.exports = (sequelize, DataTypes) => {
  const userPriorities = sequelize.define('userPriorities', {
    userId: DataTypes.INTEGER,
    sports: DataTypes.FLOAT,
    food: DataTypes.FLOAT,
    education: DataTypes.FLOAT,
    healthcare: DataTypes.FLOAT,
    interconnectivity: DataTypes.FLOAT,
  }, {});
  userPriorities.associate = function(models) {
    // associations can be defined here
  };
  return userPriorities;
};