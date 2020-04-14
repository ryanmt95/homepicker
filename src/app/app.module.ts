import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SelectionsModule } from './selections/selections.module';
import { LoginModule } from './login/login.module';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/login.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataManager } from './services/datamanager.service';
import { GoogleMapsModule } from '@angular/google-maps'
import { Results } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Results,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectionsModule,
    LoginModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GoogleMapsModule,
  ],
  providers: [
    AuthService,
    DataManager
  ],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
