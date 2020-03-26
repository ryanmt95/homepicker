import { Component, OnInit } from '@angular/core';
import { DataManager } from '../services/datamanager.service';

/*
This class implements the controller ResultsManager. 
Key public methods:
 - calculate_results(): tallies the results based on user preferences
 - rank_results(): filters the top5 results to be displayed
 - set_resutls(): stores the results in DataManager
*/
@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css']
})
export class Results implements OnInit {

    private api_key: string = null;
    private api_status: boolean = false;

    constructor(
        private datamanager: DataManager
    ) {
    }

    async ngOnInit() { 
        await this.datamanager.get_googleapi_key()
        .then(response => {
            this.api_key = response.data.google_apikey;
            this.api_status = true;
        })
    }

    public calculate_results(): void {}

    public rank_results(): void {}

    public set_results(): void {}
}