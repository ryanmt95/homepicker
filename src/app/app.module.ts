import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PreferencesModule } from './preferences/preferences.module';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PreferencesModule,
    LoginModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
