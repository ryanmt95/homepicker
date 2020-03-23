const User = require('../models').User;
const Authenticator = require('./authenticator');

module.exports = {
    create(req,res){
        password = req.body.password;
        hashedPassword = Authenticator.hashPassword(password);
        return User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error));
    },

    findAll(req,res){
        User.findAll().then(
            function (user){
                res.send(user);
            }
        )
    },

    authenticate(req,res){
        email = req.body.email;
        user = User.findOne({
            where: {
                email: email
            }
        });

        return Authenticator.verifyPassword(req.body.password, user.password)
        
    }

};