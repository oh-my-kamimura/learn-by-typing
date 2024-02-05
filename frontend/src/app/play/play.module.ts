import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayComponent } from './play.component';
import { SelectCategoryComponent } from './select/category/category.component';
import { SelectExamComponent } from './select/exam/exam.component';
import { SelectSectionComponent } from './select/section/section.component';
import { StartComponent } from './start/start.component';
import { NomalComponent } from './playing/nomal/nomal.component';
import { FillingComponent } from './playing/filling/filling.component';


@NgModule({
  declarations: [
    PlayComponent,
    SelectCategoryComponent,
    SelectExamComponent,
    SelectSectionComponent,
    StartComponent,
    NomalComponent,
    FillingComponent
  ],
  imports: [
    CommonModule,
    PlayRoutingModule
  ]
})
export class PlayModule { }
