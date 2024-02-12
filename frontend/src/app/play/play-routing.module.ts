import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectExamComponent } from './select/exam/exam.component';
import { SelectSectionComponent } from './select/section/section.component';
import { PlayComponent } from './play.component';

const routes: Routes = [
  { path: '' , component: PlayComponent,
  children: [
    { path: 'select/exam', component: SelectExamComponent },
    { path: 'select/section/:exam-id', component: SelectSectionComponent },
    {
      path: 'playing',
      loadChildren: () => import('./playing/playing.module').then(m => m.PlayingModule),
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
