const user = require('./userManager');
const googlemaps = require('./googlemaps');
const locationPriorities = require('./locationPrioritiesManager');
const userPriorities = require('./userPrioritiesManager');
module.exports = {
    user,
    googlemaps,
    locationPriorities,
    userPriorities
};