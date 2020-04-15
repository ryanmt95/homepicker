const RentalPrices = require('../models').RentalPrices;


const { Op } = require('sequelize');

module.exports = {

    /*
    POST /api/rentalprices
    Adds location priorities to the database
    location priorities is the score given to each location for each category
    */
   create(req,res){
    return RentalPrices.create({
        town: req.body.town,
        flatType: req.body.flatType,
        price: req.body.price
    })
    .then(RentalPrices => res.status(201).send(RentalPrices))
    .catch(error => res.status(400).send(error));
    },
    /*
    GET /api/rentalprices
    get all the rental prices in the database
    */
    findAll(req,res){
        RentalPrices.findAll().then(
            function (rentalprices){
                res.send(rentalprices);
            }
        )
    },
};
