// const userController = require('../controllers').user;
const { user, googlemaps } = require('../controllers')

module.exports = (app) => {
    app.get('/api', (req,res) => res.status(200).send({
        message: 'The route that you are looking for does not exist',
    }));

    app.post('/api/user', user.create);
    app.get('/api/user', user.findAll);
    app.post('/api/authenticate', user.authenticate);

    app.get('/api/googlemaps_apikey', googlemaps.get_apikey)

};