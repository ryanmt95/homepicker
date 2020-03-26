import { Injectable} from '@angular/core';
import axios from 'axios';

/*
This class implements the controller DataManager.
This class is responsible for the interactions with the server &
api calls.
*/
const host = 'http://localhost:8000';

@Injectable({
    providedIn: 'root',
})
export class DataManager {

    public get_googleapi_key() {
        var api_key = null;
        var request = `${host}/api/googlemaps_apikey`
        return axios.get(request)
    }
}