import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PlayingDataService } from '../service/playing-data.service';
import { Question } from 'src/app/service/question-data.service';

@Component({
  selector: 'lbt-nomal',
  templateUrl: './nomal.component.html',
  styleUrls: ['./nomal.component.scss']
})
export class NomalComponent implements OnInit {

  public countdown: number = 3;
  public showCountdown: boolean = true;
  public countdownMessage: string;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private playingDataService: PlayingDataService
  ) {}

  ngOnInit(): void {
    this.playingDataService.fetchPlayingQuestionList();
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

  getPlayingQuestion(): Question{
    return this.playingDataService.getPlayingQuestion();
  }
}
