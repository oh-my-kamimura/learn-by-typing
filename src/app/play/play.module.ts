import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';
import { SelectCategoryComponent } from './select-category/select-category.component';
import { SelectExamComponent } from './select-exam/select-exam.component';


@NgModule({
  declarations: [
    PlayComponent,
    SelectCategoryComponent,
    SelectExamComponent
  ],
  imports: [
    CommonModule,
    PlayRoutingModule
  ]
})
export class PlayModule { }
