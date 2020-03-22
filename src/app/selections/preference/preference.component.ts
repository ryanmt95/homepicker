import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

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

    preference_form = new FormGroup({
        // email: new FormControl(''),
        // password: new FormControl('')
    })

    constructor (
        private router: Router
    ) {
    }

    next_tab(event, tab1:string, tab2: string): void {
        event.preventDefault();
        
        this.tabs[tab1] = false;
        this.tabs[tab2] = true;
    }

    previous_tab(event, tab1:string, tab2: string): void {
        event.preventDefault();
        
        this.tabs[tab1] = false;
        this.tabs[tab2] = true;
    }

    public submit(): void {
        this.router.navigate(['/priority']);
    }
}