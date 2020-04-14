'use strict';
module.exports = (sequelize, DataTypes) => {
  const LocationPriorities = sequelize.define('LocationPriorities', {
    latitude: DataTypes.DOUBLE,
    longitude: DataTypes.DOUBLE,
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