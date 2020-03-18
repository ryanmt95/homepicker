import { Component } from '@angular/core';

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

    constructor() {}

    public calculate_results(): void {}

    public rank_results(): void {}

    public set_results(): void {}
}