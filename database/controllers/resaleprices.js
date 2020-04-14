const ResalePrices = require('../models').ResalePrices;


const { Op } = require('sequelize');

module.exports = {

    /*
    POST /api/resaleprices
    Adds location priorities to the database
    location priorities is the score given to each location for each category
    */
   create(req,res){
    return ResalePrices.create({
        town: req.body.town,
        flatType: req.body.flatType,
        price: req.body.price
    })
    .then(ResalePrices => res.status(201).send(ResalePrices))
    .catch(error => res.status(400).send(error));
    },

    findAll(req,res){
        ResalePrices.findAll().then(
            function (resalePrices){
                res.send(resalePrices);
            }
        )
    },
};
