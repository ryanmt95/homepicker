import { Component } from '@angular/core';
import { $ } from 'protractor';

/*
This class implements the controller PrefenceManager. The back and forward
functions allow the user to toggle between the different sets of preferences.
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

    constructor () {
    }

    next_tab(event, tab1:string, tab2: string) {
        event.preventDefault();
        
        this.tabs[tab1] = false;
        this.tabs[tab2] = true;
    }

    previous_tab(event, tab1:string, tab2: string) {
        event.preventDefault();
        
        this.tabs[tab1] = false;
        this.tabs[tab2] = true;
    }
}