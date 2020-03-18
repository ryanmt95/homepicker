import { Component } from '@angular/core';

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

    constructor() { }

    public verify_email(): void {}

    public set_email(): void {}

    public set_hash(): void {}
}