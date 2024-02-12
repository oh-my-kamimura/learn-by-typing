import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayRoutingModule } from './play-routing.module';
import { PlayingModule } from './playing/playing.module';
import { PlayComponent } from './play.component';
import { SelectExamComponent } from './select/exam/exam.component';
import { SelectSectionComponent } from './select/section/section.component';


@NgModule({
  declarations: [
    PlayComponent,
    SelectExamComponent,
    SelectSectionComponent
  ],
  imports: [
    CommonModule,
    PlayRoutingModule,
    PlayingModule
  ]
})
export class PlayModule { }
