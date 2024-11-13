import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlayingDataService } from '../../../services/playing-data.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmielService } from '../../../services/emiel.service';

import { TypingComponent } from './typing/typing.component';
import { RecordComponent } from './record/record.component';

@Component({
  selector: 'lbt-nomal',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TypingComponent, RecordComponent],
  templateUrl: './nomal.component.html',
  styleUrls: ['./nomal.component.scss', '/src/styles.scss']
})
export class NomalComponent implements OnInit {

  public countdown: number = 3;
  public showCountdown: boolean = true;
  public countdownMessage: string = '';

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    public playingDataService: PlayingDataService,
    public emielService: EmielService
  ) {}

  ngOnInit(): void {
    this.playingDataService.fetchPlayingQuestionList();
    this.emielService.detectLayout();
    this.emielService.startTyping();
    this.countdownMessage = this.countdown.toString();
    this.startCountdown();
  }

  startCountdown(): void {
    const interval = setInterval(() => {
      this.countdown--;
      if (this.countdown > 0) {
        this.countdownMessage = this.countdown.toString();
      }
      else if(this.countdown == 0){
        this.countdownMessage = "スタート！";
      }
      else{
        this.showCountdown = false;
        clearInterval(interval);
      }
      this.changeDetectorRef.detectChanges();
    }, 1000);
  }
}
