import { Component } from '@angular/core';
import { AuthService } from '../../services/login.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

/*
This class implements the controller RegistrationManager
Key public methods:
 - verify_email(): checks if the email is a valid one
 - set_email(): stores the email in DataManager
 - set_hash(): converts the password to a hash and stores in DataManager
*/
@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class Registration {

    warning_status: boolean = false;
    error_message: string = '';

    registration_form = new FormGroup({
        fname: new FormControl(''),
        lname: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        confirm: new FormControl(''),
    })

    constructor(
        private router: Router,
        private authservice: AuthService,
    ) { }

    public submit(): void {

        let {fname, lname, email, password, confirm} = this.registration_form.value
        
        if (this.check_credentials(fname, lname, email, password, confirm)) {
            this.authservice.create_account(this.registration_form.value);
            this.router.navigate(['/']);
        }
    }

    public check_credentials(fname, lname, email, password, confirm): boolean {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            this.warning_status = true;
            this.error_message = 'Your email is not valid';
            return false
        }
        if (password !== confirm) {
            this.warning_status = true;
            this.error_message = 'Your passwords do not match';
            return false
        }
        return true
    }
}