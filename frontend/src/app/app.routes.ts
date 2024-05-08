import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ExamComponent } from './components/select/exam/exam.component';
import { SectionComponent } from './components/select/section/section.component';
import { PlayingComponent } from './components/playing/playing.component';
import { StartComponent } from './components/playing/start/start.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'auth',
    children: [
      { path: 'log-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent },
    ]
  },
  {
    path: 'select',
    children: [
      { path: 'exam', component: ExamComponent },
      { path: 'section', component: SectionComponent },
    ]
  },
  {
    path: 'playing',
    loadChildren: () => import('./components/playing/playing.routes').then(m => m.playingRoutes),
  },
];
