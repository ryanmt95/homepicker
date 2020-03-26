import { Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import axios from 'axios';

/*
AuthService implements the controller Authenticator. It contains
the attributes: username, password & login_status. 
Key public methods:
 - verify_credentials(): verifies the user's email and password
*/
const host = 'http://localhost:8000'

@Injectable({
    providedIn: 'root',
  })
export class AuthService {

    private username: string = 'acrea2010';
    private password: string = 'Escalade';
    private login_status: boolean = false;
    
    private subject = new Subject<any>();

    public get_login_status(): any {
        let status = {login_status: this.login_status, username: this.username}
        
        return status
    }

    public async verify_credentials(username: string, password: string) {

        var request = `${host}/api/authenticate`
        var params= {email: username, password: password}
        var verification = false
        var error_message = ''
        await axios.post(request, params)
            .then(response => {
                verification = response.data.verification
                if (verification) {
                    this.username = username
                    this.password = password
                    this.login_status = verification;
                    this.subject.next({ username: username, login_status: this.login_status})
                }
            })
            .catch(error => {
                console.log(error)
                error_message = 'Server is down'
            })
        return {verification: verification, error_message: error_message}
    }

    public async create_account(credentials) {

        let {fname, lname, email, password} = credentials
        
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
                this.subject.next({ username: email, login_status: this.login_status})
            })
        
        return true
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}