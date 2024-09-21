import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/auth/log-in/log-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ExamComponent } from './components/select/exam/exam.component';
import { SectionComponent } from './components/select/section/section.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { breadcrumb: 'ホーム'}
  },
  {
    path: 'auth',
    data: { breadcrumb: {skip: true}},
    children: [
      {
        path: 'log-in',
        component: LogInComponent,
        data: { breadcrumb: 'ログイン'}
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        data: { breadcrumb: '会員登録'}
      },
    ]
  },
  {
    path: 'exam',
    data: { breadcrumb: '資格選択'},
    children: [
      { path: '', component: ExamComponent},
      {
        path: 'section',
        data: { breadcrumb: 'セクション選択' },
        children: [
          { path: '', component: SectionComponent},
          {
            path: 'playing',
            data: { breadcrumb: 'プレイ'},
            loadChildren: () =>
              import('./components/playing/playing.routes').then(
                (m) => m.playingRoutes
              ),
          },
        ]
      },
    ]
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { breadcrumb: {skip: true}},
  }
];
