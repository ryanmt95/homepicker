import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectionsRoutingModule } from './selections-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { Preference } from './preference/preference.component';

@NgModule({
  declarations: [
  ],
  imports: [
    MatTabsModule,
    CommonModule,
    SelectionsRoutingModule,
  ]
})
export class SelectionsModule { }
