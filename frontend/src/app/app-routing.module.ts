import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LogInComponent } from './form/log-in/log-in.component';
import { SignUpComponent } from './form/sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'play',
    loadChildren: () => import('./play/play.module').then(m => m.PlayModule),
  },
  { path: 'form/log-in', component: LogInComponent },
  { path: 'form/sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //, PlayModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }