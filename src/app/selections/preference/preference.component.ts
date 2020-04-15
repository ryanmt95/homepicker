import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataManager } from '../../services/datamanager.service';

/*
This class implements the controller PrefenceManager.
Key attributes:
 - preference_form: tracks input to preferences form using reactive forms
Key public methods:
 - next_tab: navigates to next section of the form
 - previous_tab: navigates to the previous section of the form
 - submit: checks if inputs are valid, then stores the data using datamanager
    and navigates to the priorities page.
*/
@Component({
    selector: 'app-first-preference',
    templateUrl: './preference.component.html',
    styleUrls: ['./preference.component.css'],
})
export class Preference {

    tabs = {
        "tab_one": true,
        "tab_two": false,
        "tab_three": false,
        "tab_four": false,
    }

    preference_form = new FormGroup({
        buy: new FormControl(''),
        rooms: new FormControl(''),
        location: new FormControl(''),
        minprice_buy: new FormControl(484250),
        maxprice_buy: new FormControl(484250),
        minprice_rent: new FormControl(2325),
        maxprice_rent: new FormControl(2325),
    })

    error: boolean = false;
    error_message: string = '';

    constructor(
        private router: Router,
        private datamanager: DataManager
    ) {
    }

    next_tab(event, tab1: string, tab2: string): void {
        event.preventDefault();

        Object.keys(this.tabs).forEach(v => this.tabs[v] = false)
        this.tabs[tab2] = true;
    }

    previous_tab(event, tab1: string, tab2: string): void {
        event.preventDefault();

        Object.keys(this.tabs).forEach(v => this.tabs[v] = false)
        this.tabs[tab2] = true;
    }

    public submit(): void {
        this.error = false;

        var form = this.preference_form.value;

        //check for missing inputs
        for (var key in form) {
            if (form[key] == '') {
                console.log(form[key])
                this.error = true;
                this.error_message = "Error: Invalid Input"
                return
            }
        }

        //check for invalid max/min prices
        if (form['buy'] == "true" && form['maxprice_buy'] <= form['minprice_buy']) {
            console.log('error: buy prices')
            this.error = true;
            this.error_message = "Error: Invalid Prices";
            return
        } else if (form['buy'] == "false" && form['maxprice_rent'] <= form['minprice_rent']) {
            console.log('error: rent prices')
            this.error = true;
            this.error_message = "Error: Invalid Prices";
            return
        }

        var preferences = {
            'buyRent': form['buy'] == "true",
            'flatType': form['rooms'],
            'region': form['location']
        }
        if (form['buy'] == "true") {
            preferences['maxPrice'] = form['maxprice_buy']
            preferences['minPrice'] = form['minprice_buy']
        } else if (form['buy'] == "false") {
            preferences['maxPrice'] = form['maxprice_rent']
            preferences['minPrice'] = form['minprice_rent']
        }

        this.datamanager.save_preferences(preferences);
        console.log('success');

        this.router.navigate(['/priority']);
    }
}