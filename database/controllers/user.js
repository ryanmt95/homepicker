const User = require('../models').User;

module.exports = {
    create(req,res){
        console.log(req.body);
        console.log(req.body.name);
        return User.create({
            name: req.body.name,
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