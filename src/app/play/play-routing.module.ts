import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { HomeComponent } from '../home/home.component';
import { PlayComponent } from './play.component';

const routes: Routes = [
  { path: '' , component: PlayComponent,
  children: [
    { path: 'select/exam', component: SelectExamComponent },
    { path: 'select/category', component: SelectCategoryComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayRoutingModule { }
