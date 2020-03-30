const LocationPreferencesManager = require('./locationPreferencesManager');
const HdbInfo = require('../models').HdbInfo;
const RentalPrices = require('../models').RentalPrices;
const ResalePrices = require('../models').ResalePrices;
const LocationPriorities = require('../models').LocationPriorities;
var Heap = require('heap');

const { Op } = require('sequelize');

HdbInfo.belongsTo(LocationPriorities, { foreignKey: 'longitude', targetKey: 'longitude'})
//HdbInfo.belongsTo(LocationPriorities, { foreignKey: 'latitude', targetKey: 'latitude'})

function filterAllFunction(req, successCallback, errorCallback){
    var buy = req.body.buyRent;
    var flatType = req.body.flatType;
    var maxPrice = req.body.maxPrice;
    var minPrice = req.body.minPrice;
    var region = req.body.region;
    if (buy) {
        ResalePrices.findAll(
            {
             distinct: true,
             where: 
                 { 
                    flatType: flatType,
                     price: {
                         [Op.between] : [minPrice, maxPrice]
                     },
                 },
            }
        ).then(
            function (towns){
                var townArray = [];
                towns.forEach(town => townArray.push(town.town))
                console.log(townArray);
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


                HdbInfo.findAll({
                    include: [{
                        model: LocationPriorities,
                        where: { 
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

                        },
                        required: true
                    }],
                    where:
                        {
                            town: 
                            {
                                [Op.in] : townArray
                            },
                            region: region
                        },

                }).then(
                            function (hdbInfo){
                                //res.send(hdbInfo);
                                successCallback(hdbInfo);
                            }
                        ).catch(
                            error => errorCallback(error)
                        )
                        }
                ).catch(
                    error => errorCallback(error)
                );
       }
       else {
        RentalPrices.findAll(
            {
             distinct: true,
             where: 
                 { 
                    flatType: flatType,
                     price: {
                         [Op.between] : [minPrice, maxPrice]
                     },
                 },
            }
        ).then(
            function (towns){
                var townArray = [];
                towns.forEach(town => townArray.push(town.town))
                console.log(townArray);
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


                HdbInfo.findAll({
                    include: [{
                        model: LocationPriorities,
                        where: { 
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

                        },
                        required: true
                    }],
                    where:
                    {
                        town: 
                        {
                            [Op.in] : townArray
                        },
                        region: region
                    }
                }).then(
                            function (hdbInfo){
                                //res.send(hdbInfo);
                                successCallback(hdbInfo);
                            }
                        ).catch(
                            error => errorCallback(error)
                        )
                        }
                ).catch(
                    error => errorCallback(error)
                );
       }
}


/**
 * Wrapper function to create promise for async await
 * @param {*} req 
 */
function filterAllWrapper(req){
    return new Promise((resolve, reject) => {
        filterAllFunction(req, (successResponse) => {
            resolve(successResponse);
        }, (errorResponse) => {
            reject(errorResponse)
        })
    })
}

function resultsCalculator(weightsArray, prioritiesArray){
    if (weightsArray.length != prioritiesArray.length ) {
        return -1
    }
    else{
        var finalResult = 0;
        for ( i = 0; i < weightsArray.length; i ++){
            finalResult = finalResult + (weightsArray[i] * prioritiesArray[i]);
        }
        return finalResult;
    }
}


function cmp(a,b){
    return a[1] - b[1];
}
function returnTopScorers(weightsArray, HdbInfoArray, numResults){
    var resultsArray = []
    HdbInfoArray.forEach(HdbInfo => 
        {
        var prioritiesArray = [HdbInfo.LocationPriority.sports, HdbInfo.LocationPriority.food, HdbInfo.LocationPriority.education, HdbInfo.LocationPriority.healthcare, HdbInfo.LocationPriority.interconnectivity];
        console.log(prioritiesArray);
        console.log(weightsArray)
        result = resultsCalculator(weightsArray, prioritiesArray)
        resultsArray.push([HdbInfo, result])
        }
        )
    return Heap.nlargest(resultsArray, numResults, cmp);
}
module.exports = {

    async calculateResultsAll(req,res){
        try {
            results = await filterAllWrapper(req)
            var weightsArray = [req.body.sportsWeight, req.body.foodWeight, req.body.educationWeight, req.body.healthcareWeight, req.body.interconnectivityWeight];
            res.send(returnTopScorers(weightsArray, results, req.body.numResults));
            //res.send(results)
            }
           catch (error) {
               console.error("ERROR" + error);
           }
        
        

        //TODO : Maybe of using both the APIs, maybe can just join the 2 tables and filter. 
        // var filteredResults 
        // try {
        //     filteredResults = await LocationPreferencesManager.filterAllWrapper(req);
        //     }
        //    catch (error) {
        //        console.error("ERROR" + error);
        // }
        
        // console.log("returned results");
        // console.log(results)
    },
};
