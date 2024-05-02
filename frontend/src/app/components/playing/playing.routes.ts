import { Routes } from '@angular/router';
import { PlayingComponent } from './playing.component';
import { StartComponent } from './start/start.component';
import { NomalComponent } from './nomal/nomal.component';
import { FillingComponent } from './filling/filling.component';

export const playingRoutes: Routes = [
  { path: '' , component: PlayingComponent,
  children: [
    { path: 'start', component: StartComponent },
    { path: 'nomal', component: NomalComponent },
    { path: 'filling', component: FillingComponent }
  ]}
];
