'use strict';
module.exports = (sequelize, DataTypes) => {
  const userPreferences = sequelize.define('userPreferences', {
    userId: DataTypes.INTEGER
  }, {});
  userPreferences.associate = function(models) {
    // associations can be defined here
  };
  return userPreferences;
};