const user = require('./userManager');
const googlemaps = require('./googlemaps');
const locationPriorities = require('./locationPrioritiesManager');
const userPriorities = require('./userPrioritiesManager');
const hdbInfo = require('./hdbInfo');
const rentalPrices = require('./rentalprices');
const resalePrices = require('./resaleprices');
const locationPreferences = require('./locationPreferencesManager');
const resultsCalculator = require('./resultsCalculator');

module.exports = {
    user,
    googlemaps,
    locationPriorities,
    userPriorities,
    hdbInfo,
    rentalPrices,
    resalePrices,
    locationPreferences,
    resultsCalculator
};