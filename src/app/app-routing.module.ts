import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Results } from './results/results.component';
import { History } from './history/history.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./selections/selections.module').then(m => m.SelectionsModule)
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'results',
    component: Results
  },
  {
    path: 'history',
    component: History
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
