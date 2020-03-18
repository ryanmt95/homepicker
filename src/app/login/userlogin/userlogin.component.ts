import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/login.service';

/*
This class implements the controller LoginManager. It uses reactive
forms to handle form inputs (email & password). It contains the attributes:
max_attempts, current_attempts and exceed_attempts.
Key public methods:
 - login(): executes login functionalities by calling AuthService.
*/
@Component({
    selector: 'app-userlogin',
    templateUrl: './userlogin.component.html',
    styleUrls: ['./userlogin.component.css']
})
export class UserLogin {

    public max_attempts: number = 3;
    private current_attempts: number = 0;
    public exceed_attempts: boolean = false;

    login_form = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    })

    constructor (
        private router: Router,
        private authservice: AuthService,
    ) { }

    public login() {

        let {email, password} = this.login_form.value
        var valid = this.authservice.verify_credentials(email, password);

        if (valid) {
            this.router.navigate(['']);     
        } else {
            this.current_attempts += 1;
        }
        if (this.current_attempts >= this.max_attempts) {
            this.exceed_attempts = true
        }
    }


    public forgot_password(): void {
        // route to forgot password page
    }


}