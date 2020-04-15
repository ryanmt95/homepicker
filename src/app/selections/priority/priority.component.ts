import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataManager } from '../../services/datamanager.service';

/*
This class implements the controller PriorityManager. 
Key attributes:
 - priority_form: tracks input to priorities using reactive forms
Key public methods:
 - submit: checks if there is no errors in priority input, it saves priorities
    using datamanager and navigates to the results page.
*/
@Component({
    selector: 'app-priority',
    templateUrl: './priority.component.html',
    styleUrls: ['./priority.component.css']
})
export class Priority {

    priority_form = new FormGroup({
        foodWeight: new FormControl(1),
        educationWeight: new FormControl(1),
        healthcareWeight: new FormControl(1),
        interconnectivityWeight: new FormControl(1),
        sportsWeight: new FormControl(1),
    })

    error: boolean = false;
    error_message: string = '';

    constructor(
        private router: Router,
        private datamanager: DataManager
    ) {
    }

    async submit() {
        this.error = false;

        var priority = {}
        var priority_set = new Set()
        for (let key in this.priority_form.value) {
            priority[key] = parseInt(this.priority_form.value[key])
            priority_set.add(priority[key])
        }

        if (priority_set.size < 5) {
            this.error = true;
            this.error_message = "Error: Invalid Input";
            return
        }

        this.datamanager.save_priorities(priority);

        var { error, error_message } = await this.datamanager.calculate_results();

        console.log('success')
        this.error = error;
        this.error_message = error_message;

        if (this.error == false) {
            this.router.navigate(['/results'])
        }
    }

}