import { Injectable} from '@angular/core';
import { Observable, Subject } from 'rxjs';

/*
AuthService implements the controller Authenticator. It contains
the attributes: username, password & login_status. 
Key public methods:
 - verify_credentials(): verifies the user's email and password
*/

@Injectable({
    providedIn: 'root',
  })
export class AuthService {

    private username: string = 'acrea2010';
    private password: string = 'Escalade';
    private login_status: boolean = false;
    private subject = new Subject<any>();

    private hash(password: string): void {}

    public get_login_status(): any {
        let status = {login_status: this.login_status, username: this.username}
        
        return status
    }

    public verify_credentials(username: string, password: string): boolean {

        if (this.username == username && this.password == password) {
            this.username = username
            this.password = password
            this.login_status = true;
            this.subject.next({ username: this.username, login_status: this.login_status})
            return true
        }

        return false
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}