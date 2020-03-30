'use strict';
module.exports = (sequelize, DataTypes) => {
  const HdbInfo = sequelize.define('HdbInfo', {
    blkNo: DataTypes.STRING,
    street: DataTypes.STRING,
    town: DataTypes.STRING,
    roomSold1: DataTypes.INTEGER,
    roomSold2: DataTypes.INTEGER,
    roomSold3: DataTypes.INTEGER,
    roomSold4: DataTypes.INTEGER,
    roomSold5: DataTypes.INTEGER,
    execSold: DataTypes.INTEGER,
    multigenSold: DataTypes.INTEGER,
    studioApartmentSold: DataTypes.INTEGER,
    roomRental1: DataTypes.INTEGER,
    roomRental2: DataTypes.INTEGER,
    roomRental3: DataTypes.INTEGER,
    roomRentalOther: DataTypes.INTEGER,
    region: DataTypes.STRING,
    totalSold: DataTypes.INTEGER,
    totalRent: DataTypes.INTEGER,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {});
  HdbInfo.associate = function(models) {
    // associations can be defined here
  };
  return HdbInfo;
};