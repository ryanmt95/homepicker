const User = require('../models').User;
const Authenticator = require('./authenticator');

module.exports = {
    create(req,res){
        console.log(req.body);
        console.log(req.body.name);
        console.log(req.body.password);
        password = req.body.password;
        hashedPassword = Authenticator.hashPassword(password);
        return User.create({
            name: req.body.name,
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
    }
};