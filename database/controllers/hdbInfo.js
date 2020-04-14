const HdbInfo = require('../models').HdbInfo;


module.exports = {

    /*
    POST /api/HdbInfo
    Adds location priorities to the database
    location priorities is the score given to each location for each category
    */
   create(req,res){
    return HdbInfo.create({
        blkNo: req.body.blkNo,
        street: req.body.street,
        town: req.body.town,
        roomSold1: req.body.roomSold1,
        roomSold2: req.body.roomSold2,
        roomSold3: req.body.roomSold3,
        roomSold4: req.body.roomSold4,
        roomSold5: req.body.roomSold5,
        execSold: req.body.execSold,
        multigenSold: req.body.multigenSold,
        studioApartmentSold: req.body.studioApartment_sold,
        roomRental1: req.body.roomRental1,
        roomRental2: req.body.roomRental2,
        roomRental3: req.body.roomRental3,
        roomRentalOther: req.body.roomRentalOther,
        region: req.body.region,
        totalSold: req.body.totalSold,
        totalRent: req.body.totalRent,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    })
    .then(hdbInfo => res.status(201).send(hdbInfo))
    .catch(error => res.status(400).send(error));
    },

    findAll(req,res){
        HdbInfo.findAll().then(
            function (hdbInfo){
                res.send(hdbInfo);
            }
        )
    }
};
