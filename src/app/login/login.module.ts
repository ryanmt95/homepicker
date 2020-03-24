import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { UserLogin } from './userlogin/userlogin.component';
import { Registration } from './registration/register.component';

@NgModule({
  declarations: [
    UserLogin,
    Registration
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
