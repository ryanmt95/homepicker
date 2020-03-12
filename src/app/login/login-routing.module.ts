import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLogin } from './userlogin/userlogin.component';

const routes: Routes = [
    {path: '', component: UserLogin, children: [
        {path: '', component: UserLogin, data: {title: 'Login'}},
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {}