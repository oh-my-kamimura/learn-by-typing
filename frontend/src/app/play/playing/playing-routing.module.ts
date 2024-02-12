import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayingComponent } from './playing.component';
import { StartComponent } from './start/start.component';
import { NomalComponent } from './nomal/nomal.component';
import { FillingComponent } from './filling/filling.component';

const routes: Routes = [
  { path: ':exam-id/:category-id/:section-id' , component: PlayingComponent,
  children: [
    { path: 'start', component: StartComponent },
    { path: 'nomal', component: NomalComponent },
    { path: 'filling', component: FillingComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayingRoutingModule { }
