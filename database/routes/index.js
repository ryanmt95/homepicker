const userController = require('../controllers').user;

module.exports = (app) => {
    app.get('/api', (req,res) => res.status(200).send({
        message: 'The route that you are looking for does not exist',
    }));

    app.post('/api/user', userController.create);
    app.get('/api/user', userController.findAll);
};