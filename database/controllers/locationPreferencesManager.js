const HdbInfo = require('../models').HdbInfo;
const RentalPrices = require('../models').RentalPrices;
const ResalePrices = require('../models').ResalePrices;
const { Op } = require('sequelize');


/**
 * Main function for sql call for filtering based on priorities and preferences
 * @param {*} req 
 * @param {*} successCallback 
 * @param {*} errorCallback 
 */

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
                HdbInfo.findAll(
                    {
                        where:
                        {
                            town: 
                            {
                                [Op.in] : townArray
                            },
                            region: region
                        }
                    }
                ).then(
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
                HdbInfo.findAll(
                    {
                        where:
                        {
                            town: 
                            {
                                [Op.in] : townArray
                            },
                            region: region
                        }
                    }
                ).then(
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

module.exports = {
    filterAllWrapper: filterAllWrapper,


    /**
     * Filters all the locations based on whether buy or rent, flattype, price range and region api call 
     * POST 
     * 	"buy" : "false",
	 * "flatType" : "5-room",
	 * "maxPrice": 2500,
	 * "minPrice": 2000,
	 *  "region": "central"
     * @param {buyRent: Bool, flatType: String, maxPrice: int, minPrice:int, region:String} req 
     * @param {*} res 
     */
   async filterAll(req,res){
       try {
        results = await filterAllWrapper(req)
        res.send(results)
        }
       catch (error) {
           console.error("ERROR" + error);
       }
       
       
   }

    
};
