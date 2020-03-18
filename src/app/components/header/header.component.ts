import { Component, OnDestroy} from '@angular/core';
import { AuthService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';

/*
This component implements the header display in the app
*/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnDestroy {

  public login_status: boolean = false;
  public username: String;
  subscription: Subscription;

  constructor(
    private authservice: AuthService
  ) { 
    this.subscription = this.authservice.getMessage().subscribe(message => { 
      var {username, login_status} = message
      this.username = username
      this.login_status = login_status
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}