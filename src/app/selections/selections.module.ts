import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SelectionsRoutingModule } from './selections-routing.module';
import { Preference } from './preference/preference.component';
import { Priority } from './priority/priority.component';

@NgModule({
  declarations: [
    Preference,
    Priority
  ],
  imports: [
    CommonModule,
    SelectionsRoutingModule,
    ReactiveFormsModule
  ]
})
export class SelectionsModule { }
