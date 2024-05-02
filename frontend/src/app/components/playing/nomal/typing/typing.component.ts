import { Subscription } from 'rxjs';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlayingDataService } from '../../../../services/playing-data.service';
import * as emiel from 'emiel';

@Component({
  selector: 'lbt-typing',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
})
export class TypingComponent implements OnInit {
  @Input() layout: emiel.KeyboardLayout | undefined;
  @Output() onWordFinished = new EventEmitter<{ automaton: emiel.Automaton, displayedAt: Date, missCount: number }>();
  @Output() onFinished = new EventEmitter<void>();

  automatons: any[] = [];
  wordIndex = 0;
  lastInputKey: emiel.InputStroke | undefined;
  subscription = new Subscription();
  wordDisplayedAt = new Date();
  missCount = 0;
  words: string[] = [];

  constructor(public playingDataService: PlayingDataService) {}

  ngOnInit() {
    emiel.keyboard.detect(window).then(layout => {
      this.automatons = this.buildAutomatons(layout);
    }).catch(console.error);

    this.subscription.add(
      emiel.activate(window, (e) => {
        this.processInput(e);
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  buildAutomatons(layout: emiel.KeyboardLayout): any[] {
    this.words = this.playingDataService.getPlayingQuestionList().map(question => question.hiragana.replace(/「|」/g, ''));
    return this.words.map(word => emiel.rule.getRoman(layout).build(word));
  }

  processInput(e: any) {
    this.lastInputKey = e.input;
    const result = this.automatons[this.wordIndex].input(e);
    if (result.isFailed) {
      this.missCount++;
    }
    if (result.isFinished) {
      this.onWordFinished.emit({
        automaton: this.automatons[this.wordIndex],
        displayedAt: this.wordDisplayedAt,
        missCount: this.missCount
      });
      if (this.wordIndex === this.words.length - 1) {
        this.onFinished.emit();
      } else {
        this.wordIndex++;
        this.wordDisplayedAt = new Date();
        this.missCount = 0;
      }
    }
  }
}
