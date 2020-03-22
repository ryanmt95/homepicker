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
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SelectionsModule,
    LoginModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [
    AuthService,
  ],
  bootstrap: [AppComponent, HeaderComponent]
})
export class AppModule { }
