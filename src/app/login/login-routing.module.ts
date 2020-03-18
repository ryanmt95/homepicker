import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLogin } from './userlogin/userlogin.component';
import { Registration } from './registration/register.component';

const routes: Routes = [
    {
        path: '', 
        component: UserLogin 
    },
    {
        path: 'register',
        component: Registration
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {}