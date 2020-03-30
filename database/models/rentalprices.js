'use strict';
module.exports = (sequelize, DataTypes) => {
  const RentalPrices = sequelize.define('RentalPrices', {
    town: DataTypes.STRING,
    flatType: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  RentalPrices.associate = function(models) {
    // associations can be defined here
  };
  return RentalPrices;
};