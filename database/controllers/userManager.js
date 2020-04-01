const User = require('../models').User;
const Authenticator = require('./authenticator');

module.exports = {

    /*
    POST /api/user 
    Creates new user accounts
    */
    async create(req,res){
        password = req.body.password;
        hashedPassword = await Authenticator.hashPassword(password);
        return User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
    },

    /*
    GET /api/user
    gets the whole list of user accounts
    */
    findAll(req,res){
        User.findAll().then(
            function (user){
                res.send(user);
            }
        )
    },

    /*
    POST '/api/authenticate'
    Checks if user exists in the database
    */
    authenticate(req,res) {
        var email = req.body.email;
        var password = req.body.password

        user = User.findOne({
            where: {
                email: email
            }
        }).then(
            function (user) {
                password_hashed = user.password
                return Authenticator.verifyPassword(password, password_hashed)
            }
        ).then(
            function (verification) {
                res.send({verification: verification})
            }
        )
        
    }

};