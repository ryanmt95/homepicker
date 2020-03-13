import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLogin } from './userlogin/userlogin.component';

const routes: Routes = [
    {
        path: '', 
        component: UserLogin 
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LoginRoutingModule {}