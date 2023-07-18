import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { SelectSectionComponent } from './select-section/select-section.component';
import { StartComponent } from './start/start.component';
import { PlayComponent } from './play.component';

const routes: Routes = [
  { path: '' , component: PlayComponent,
  children: [
    { path: 'select/exam', component: SelectExamComponent },
    { path: 'select/category', component: SelectCategoryComponent },
    { path: 'select/section', component: SelectSectionComponent },
    { path: 'start', component: StartComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
