import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

/*
This class implements the controller PriorityManager. 
Key public methods:
 - add_priority(): allows the user to add a priority
 - remove_priority(): allows the user to remove a priority
 - aggregate_priority(): sums the priority with an algorithm
*/
@Component({
    selector: 'app-priority',
    templateUrl: './priority.component.html',
    styleUrls: ['./priority.component.css']
})
export class Priority {

    priority_form = new FormGroup({
        // email: new FormControl(''),
        // password: new FormControl('')
    })

    constructor (
        private router: Router
    ) {
    }

    public add_priority(): boolean {
        return false
    }

    public remove_priority(): boolean {
        return false
    }

    public aggregate_priority(): void {
    }

    submit() {
        this.router.navigate(['/results'])
    }

}