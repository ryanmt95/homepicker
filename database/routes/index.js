// const userController = require('../controllers').user;
const { user, googlemaps, locationPriorities, userPriorities} = require('../controllers')

module.exports = (app) => {
    app.get('/api', (req,res) => res.status(200).send({
        message: 'The route that you are looking for does not exist',
    }));

    app.post('/api/user', user.create);
    app.get('/api/user', user.findAll);

    app.post('/api/authenticate', user.authenticate);

    app.get('/api/locationPriorities', locationPriorities.findAll);
    app.post('/api/locationPriorities', locationPriorities.create);
    app.post('/api/locationPriorities/cutoff', locationPriorities.prioritiesCutOff);
    
    app.get('/api/userPriorities', userPriorities.findAll);
    app.post('/api/userPriorities', userPriorities.create);
    app.get('/api/userPriorities/:userId', userPriorities.userFindAll);
    app.get('/api/userPrioritiesLatest/:userId', userPriorities.userFindLatest);
    
    app.get('/api/googlemaps_apikey', googlemaps.get_apikey)

};