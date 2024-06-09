import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ExamComponent } from './components/select/exam/exam.component';
import { SectionComponent } from './components/select/section/section.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'ホーム'},
  },
  {
    path: 'auth',
    children: [
      { path: 'log-in', component: LogInComponent },
      { path: 'sign-up', component: SignUpComponent },
    ]
  },
  {
    path: 'select',
    data: { breadcrumb: { skip: true } },
    children: [
      {
        path: 'exam',
        component: ExamComponent,
        data: { breadcrumb: '資格選択'},
      },
      {
        path: 'section',
        component: SectionComponent,
        data: { breadcrumb: 'セクション選択' },
      },
    ],
  },
  {
    path: 'playing',
    loadChildren: () =>
      import('./components/playing/playing.routes').then(
        (m) => m.playingRoutes
      ),
  },
];
