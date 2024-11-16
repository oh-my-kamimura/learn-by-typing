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

  buildAutomatons(layout: emiel.KeyboardLayout): MixedTextAutomaton[] {
    this.words = this.playingDataService
      .getPlayingQuestionList()
      .map(
        (question) =>
          new MixedText(
            question.hiragana.substring(question.hiragana.indexOf("「") + 1, question.hiragana.indexOf("」")),
            question.statement.substring(question.statement.indexOf("「") + 1, question.statement.indexOf("」")).split('').join(',')
          )
      );
    console.log(this.words);
    return this.words.map(word => new MixedTextAutomaton(
      emiel.rule.getRoman(layout).build(word.kanaText.toLowerCase()),
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

  getFrequencyString(): string {
    let frequency: number;
    let frequencyString: string = '';
    frequency = this.playingDataService.getQuestionInfo(this.wordIndex).frequency;

    if (frequency < 0) frequency = 0;
    frequencyString = '★'.repeat(frequency);
    frequencyString += '☆'.repeat(5-frequency);
    return frequencyString;
  }

  getBeforeStatement(): string {
    let beforeStatement: string = '';
    beforeStatement = this.playingDataService.getQuestionInfo(this.wordIndex).statement;
    beforeStatement = beforeStatement.substring(0, beforeStatement.indexOf("「") + 1);
    return beforeStatement;
  }

  getAfterStatement(): string {
    let afterStatement: string = '';
    afterStatement = this.playingDataService.getQuestionInfo(this.wordIndex).statement;
    afterStatement = afterStatement.substring(afterStatement.indexOf("」"));
    return afterStatement;
  }

  max(a: number, b: number): number {
    return Math.max(a, b);
  }
}
