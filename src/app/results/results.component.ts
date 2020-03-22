import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

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
export class Results {

    env = environment

    constructor() {
        console.log(this.env)
        console.log('Hello world')
    }

    public calculate_results(): void {}

    public rank_results(): void {}

    public set_results(): void {}
}