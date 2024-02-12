import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayingRoutingModule } from './playing-routing.module';
import { StartComponent } from './start/start.component';
import { NomalComponent } from './nomal/nomal.component';
import { FillingComponent } from './filling/filling.component';
import { PlayingComponent } from './playing.component';


@NgModule({
  declarations: [
    StartComponent,
    NomalComponent,
    FillingComponent,
    PlayingComponent
  ],
  imports: [
    CommonModule,
    PlayingRoutingModule
  ]
})
export class PlayingModule { }
