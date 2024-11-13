import { Subscription } from 'rxjs';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlayingDataService } from '../../../../services/playing-data.service';
import * as emiel from 'emiel';
import { MixedText, MixedTextAutomaton } from '../../mixed-guide';

@Component({
  selector: 'lbt-typing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typing.component.html',
  styleUrls: ['./typing.component.scss'],
})
export class TypingComponent implements OnInit {
  @Input() layout: emiel.KeyboardLayout | undefined;
  @Output() onWordFinished = new EventEmitter<{
    automaton: MixedTextAutomaton;
    displayedAt: Date;
    missCount: number;
  }>();
  @Output() onFinished = new EventEmitter<void>();

  automatons: any[] = [];
  wordIndex = 0;
  lastInputKey: emiel.InputStroke | undefined;
  subscription = new Subscription();
  wordDisplayedAt = new Date();
  missCount = 0;
  words: MixedText[] = [];

  constructor(public playingDataService: PlayingDataService) {}

  ngOnInit() {
    emiel.keyboard
      .detect(window)
      .then((layout) => {
        this.automatons = this.buildAutomatons(layout);
      })
      .catch(console.error);

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
    this.words = this.playingDataService
      .getPlayingQuestionList()
      .map(
        (question) =>
          new MixedText(
            question.hiragana.replace(/「|」/g, ''),
            question.statement.replace(/「|」/g, '').split('').join(',')
          )
      );
    console.log(this.words);
    return this.words.map(word => new MixedTextAutomaton(
      emiel.rule.getRoman(layout).build(word.kanaText),
      word,
      )
    )
  }

  processInput(e: any) {
    this.lastInputKey = e.input;
    const result = this.automatons[this.wordIndex].base.input(e);
    if (result.isFailed) {
      this.missCount++;
    }
    // console.log("this.automatons[this.wordIndex]: ", this.automatons[this.wordIndex]);
    if (result.isFinished) {
      this.onWordFinished.emit({
        automaton: this.automatons[this.wordIndex],
        displayedAt: this.wordDisplayedAt,
        missCount: this.missCount,
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

  getFrequencyString(wordindex: number): string {
    let frequency: number;
    let frequencyString: string = '';
    frequency = this.playingDataService.getQuestionInfo(this.wordIndex).frequency;
    frequencyString = '★'.repeat(frequency);
    frequencyString += '☆'.repeat(5-frequency);
    return frequencyString;
  }
}
