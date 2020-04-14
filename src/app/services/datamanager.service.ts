import { Injectable} from '@angular/core';
import axios from 'axios';

/*
This class implements the controller DataManager.
This class is responsible for the interactions with the server &
api calls.
*/
const host = 'http://127.0.0.1:8000';

@Injectable({
    providedIn: 'root',
})
export class DataManager {

    //preferences
    preferences: Object = {};
    priorities: Object = {};
    recommendations =  [];

    public get_googleapi_key() {
        var api_key = null;
        var request = `${host}/api/googlemaps_apikey`
        return axios.get(request)
    }

    public save_preferences(preferences) {
        this.preferences = preferences;
    }

    public save_priorities(priorities) {
        this.priorities = priorities;
    }

    public async calculate_results() {
        var request = host + '/api/resultsCalculator/calculateAll';
        var params = {
            ... this.preferences, 
            ...this.priorities,
            'numResults': 5,
        }
        var reply = null;
        await axios.post(request, params)
        .then(response => {
            this.recommendations = response.data
            console.log(response)
            reply = {error: false, error_message: ""}
        })
        .catch(error => {
            reply = {error: true, error_message:"Error: No results retrieved"};
        })
        return reply
    }

    public get_recommendations() {
        return this.recommendations
    }

    public get_selections() {
        return {...this.priorities, ...this.preferences}
    }

}