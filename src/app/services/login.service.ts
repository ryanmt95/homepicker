import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import axios from 'axios';

/*
AuthService implements the controller Authenticator. It contains
the attributes: username, password & login_status. 
Key attributes:
 - subject: a subscription variable that allows component to keep track
    of the login status and username attributes in the login service.
 - user_info: a subscription variable that tracks user_id.
Key public methods:
 - verify_credentials: verifies username and password with records 
    in the database.
 - create_account: creates a record in the database, user is automatically
    signed in. 
 - getMessage: returns subject subscription variable
 - getUserInfo: returns user_info subscription variable
*/
const host = 'http://localhost:8000'

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private username: string = 'acrea2010';
    private password: string = 'Escalade';
    private login_status: boolean = false;
    private user_id: number = null;

    //subscription variables
    private subject = new Subject<any>();
    private user_info = new Subject<any>();

    public get_login_status(): any {
        let status = { login_status: this.login_status, username: this.username }

        return status
    }

    public async verify_credentials(username: string, password: string) {

        var request = `${host}/api/authenticate`
        var params = { email: username, password: password }
        var verification = false
        var error_message = ''
        await axios.post(request, params)
            .then(response => {
                verification = response.data.verification
                if (verification) {
                    this.username = username
                    this.password = password
                    this.login_status = verification;
                    this.subject.next({ username: username, login_status: this.login_status })
                }

                this.user_id = response.data.user_id;
                this.user_info.next({ user_id: this.user_id });
            })
            .catch(error => {
                console.log(error)
                error_message = 'Server is down'
            })
        return { verification: verification, error_message: error_message }
    }

    public async create_account(credentials) {

        let { fname, lname, email, password } = credentials

        var request = `${host}/api/user`
        var params = {
            name: `${fname} ${lname}`,
            email: email,
            password: password
        }
        await axios.post(request, params)
            .then(response => {
                this.username = email
                this.password = password
                this.login_status = true;
                this.subject.next({ username: email, login_status: this.login_status })
            })

        return true
    }

    public get_user_id() {
        return this.user_id;
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    getUserInfo(): Observable<any> {
        return this.user_info.asObservable();
    }

}