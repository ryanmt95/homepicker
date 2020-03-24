'use strict';
module.exports = (sequelize, DataTypes) => {
  const LocationPriorities = sequelize.define('LocationPriorities', {
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    sports: DataTypes.FLOAT,
    food: DataTypes.FLOAT,
    education: DataTypes.FLOAT,
    healthcare: DataTypes.FLOAT,
    interconnectivity: DataTypes.FLOAT,
  }, {});
  LocationPriorities.associate = function(models) {
    // associations can be defined here
  };
  return LocationPriorities;
};