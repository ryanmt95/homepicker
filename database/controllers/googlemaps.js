require('dotenv').config()

module.exports = {
    get_apikey(req,res){

        api_key = process.env.GOOGLEMAPS_APIKEY

        res.send({google_apikey: api_key})
    },
}