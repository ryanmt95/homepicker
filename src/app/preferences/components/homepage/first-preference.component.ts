import { Component } from '@angular/core';

import { PreferenceInterface} from '../../preference-interface.component';

@Component({
    selector: 'app-first-preference',
    templateUrl: './first-preference.component.html',
    styleUrls: ['./first-preference.component.css']
})
export class FirstPreference extends PreferenceInterface{

    inputPreference(): void {
        console.log('Hello World');
    }
    setPreference(): void {
        console.log('Hello World');
    }
    back(): void {
        console.log('Hello World');
    }
    forward(): void {
        console.log('Hello World');
    }

    constructor () {
        super();
    }
}