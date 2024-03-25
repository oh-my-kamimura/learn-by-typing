import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'lbt-nomal',
  templateUrl: './nomal.component.html',
  styleUrls: ['./nomal.component.scss']
})
export class NomalComponent implements OnInit {

  public countdown: number = 3;
  public showCountdown: boolean = true;
  public countdownMessage: string;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
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
