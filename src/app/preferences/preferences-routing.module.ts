import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstPreference } from './components/homepage/first-preference.component'

const routes: Routes = [
    {path: '', component: FirstPreference, children: [
        {path: '', component: FirstPreference, data: {title: 'Hello World'}},
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PreferencesRoutingModule { }