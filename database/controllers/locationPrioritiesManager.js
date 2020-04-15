const LocationPriorities = require('../models').LocationPriorities;
const { Op } = require('sequelize');


/**
 * Main function to filter off query results based on certain priorities cut off point
 * @param {*} req 
 * @param {*} successCallback 
 * @param {*} errorCallback 
 */
function prioritiesCutOffFunction(req, successCallback, errorCallback){
    var sports, food,education,healthcare,interconnectivity;
        if (!req.body.sports){
            sports = 0
        } 
        else sports = req.body.sports;
        if (!req.body.food){
            food = 0
        } 
        else food = req.body.food;
        if (!req.body.education){
            education = 0
        } 
        else education = req.body.education;
        if (!req.body.healthcare){
            healthcare = 0
        } 
        else healthcare = req.body.healthcare;
        if (!req.body.interconnectivity){
            interconnectivity = 0
        } 
        else interconnectivity = req.body.interconnectivity;
        LocationPriorities.findAll(
            {
                where: 
                    { 
                        sports: {
                            [Op.gte] : sports
                        },
                        food: {
                            [Op.gte] : food
                        },
                        education: {
                            [Op.gte] :education
                        },
                        healthcare: {
                            [Op.gte] : healthcare
                        },
                        interconnectivity: {
                            [Op.gte] : interconnectivity
                        }

                    }
                
            }
        ).then(
            function (locationPriorities){
                successCallback(locationPriorities);
                //res.send(locationPriorities);
            }
        ).catch(
            error => errorCallback(error)
        )

}

/**
 * Wrapper function for the priorities cut off function to allow for async await promise
 * @param {*} req 
 */
function prioritiesCutOffWrapper(req){
    return new Promise((resolve, reject) => {
        prioritiesCutOffFunction(req, (successResponse) => {
            resolve(successResponse);
        }, (errorResponse) => {
            reject(errorResponse)
        })
    })
}


module.exports = {

    /*
    POST /api/locationPriorities
    Adds location priorities to the database
    location priorities is the score given to each location for each category
    */
    create(req,res){
        return LocationPriorities.create({
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            sports: req.body.sports,
            food: req.body.food,
            education: req.body.education,
            healthcare: req.body.healthcare,
            interconnectivity: req.body.interconnectivity
        })
        .then(locationPriorities => res.status(201).send(locationPriorities))
        .catch(error => res.status(400).send(error));
    },
    
    /*
    GET /api/locationPriorities
    gets all locations and their respective priorities 
    */

    findAll(req,res){
        LocationPriorities.findAll().then(
            function (locationPriorities){
                res.send(locationPriorities);
            }
        )
    },

    /*
    POST '/api/locationPriorities/cutoff
    cut off priorities for each category and returns locations of interest
    */
    async prioritiesCutOff(req,res){
        try {
            results = await prioritiesCutOffWrapper(req)
            res.send(results)
            }
           catch (error) {
               console.error("ERROR" + error);
           }
        }


};