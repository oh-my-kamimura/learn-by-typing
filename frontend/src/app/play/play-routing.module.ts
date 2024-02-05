import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectExamComponent } from './select/exam/exam.component';
import { SelectCategoryComponent } from './select/category/category.component';
import { SelectSectionComponent } from './select/section/section.component';
import { StartComponent } from './start/start.component';
import { PlayComponent } from './play.component';
import { NomalComponent } from './playing/nomal/nomal.component';
import { FillingComponent } from './playing/filling/filling.component';

const routes: Routes = [
  { path: '' , component: PlayComponent,
  children: [
    { path: 'select/exam', component: SelectExamComponent },
    { path: 'select/:exam-id/section', component: SelectCategoryComponent },
    { path: 'select/section', component: SelectSectionComponent },
    { path: 'start', component: StartComponent },
    { path: 'playing-nomal', component: NomalComponent },
    { path: 'playing-filling', component: FillingComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
