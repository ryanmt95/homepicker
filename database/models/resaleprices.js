'use strict';
module.exports = (sequelize, DataTypes) => {
  const ResalePrices = sequelize.define('ResalePrices', {
    town: DataTypes.STRING,
    flatType: DataTypes.STRING,
    price: DataTypes.DOUBLE
  }, {});
  ResalePrices.associate = function(models) {
    // associations can be defined here
  };
  return ResalePrices;
};