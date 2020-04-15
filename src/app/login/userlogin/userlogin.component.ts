import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/login.service';

/*
This class implements the controller LoginManager. It uses reactive
forms to handle form inputs (email & password).
Key attributes:
 - login_form: uses reactive forms to track user input.
 - max_attempts: restricts users login attempts 
 - current_attempts: tracks number of login attempts made by user
Key public methods:
 - login: executes login functionalities by calling AuthService.
    navigates to preferences page if login is successful.
*/
@Component({
    selector: 'app-userlogin',
    templateUrl: './userlogin.component.html',
    styleUrls: ['./userlogin.component.css']
})
export class UserLogin {

    public max_attempts: number = 3;
    private current_attempts: number = 0;
    public error: boolean = false;
    public error_message: string = '';

    login_form = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    })

    constructor(
        private router: Router,
        private authservice: AuthService,
    ) { }

    public login() {

        let { email, password } = this.login_form.value
        var response = this.authservice.verify_credentials(email, password);

        response.then(res => {
            var { verification, error_message } = res

            if (verification) {
                this.router.navigate([''])
            } else if (error_message.length > 0) {
                this.error = true
                this.error_message = error_message
            } else {
                this.current_attempts += 1
            }
        })

        if (this.current_attempts >= this.max_attempts) {
            this.error = true
            this.error_message = 'You have exceeded the maximium login attempts'
        }
    }


    public forgot_password(): void {
        // route to forgot password page
    }


}