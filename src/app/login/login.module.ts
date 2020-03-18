import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { UserLogin } from './userlogin/userlogin.component';

@NgModule({
  declarations: [
    UserLogin,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
  ]
})
export class LoginModule { }
