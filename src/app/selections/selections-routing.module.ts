import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Priority } from './priority/priority.component';
import { Preference } from './preference/preference.component';

const routes: Routes = [
    {
        path: '', 
        component: Preference,
    },
    {
        path: 'priority', 
        component: Priority,
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SelectionsRoutingModule { }