// src/app/record/record.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WordRecord } from '../../../../models/record.model';
import { PlayingDataService } from '../../../../services/playing-data.service';

@Component({
  selector: 'lbt-record',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss', '/src/styles.scss']
})

export class RecordComponent {
  @Input() wordRecords: WordRecord[] = [];
  score: number = 0;
  totalInputSeconds: number = 0;
  totalSucceededKeys: number = 0;
  totalMissedKeys: number = 0;
  wpm: number = 0;
  overallAccuracy: number = 0;


  constructor(public playingDataService: PlayingDataService) {}

  ngOnInit() {
    this.getResult();
  }

  getRecords() {
    return this.wordRecords.map(record => {
      const inputSeconds = (record.finishedAt.getTime() - record.displayedAt.getTime()) / 1000;
      const wpm = (record.automaton.succeededInputs.length / inputSeconds) * 60;
      const accuracy = record.automaton.succeededInputs.length / (record.missCount + record.automaton.succeededInputs.length);
      return {
        word: record.automaton.word,
        inputSeconds,
        wpm,
        accuracy,
        mixedText: record.mixedText
      };
    });
  }

  getResult() {
    for (const record of this.wordRecords) {
      this.totalSucceededKeys += record.automaton.succeededInputs.length;
      this.totalMissedKeys += record.missCount;
      let inputSeconds = (record.finishedAt.getTime() - record.displayedAt.getTime()) / 1000;
      this.totalInputSeconds += inputSeconds;
    }
    this.wpm = ((this.totalSucceededKeys / this.totalInputSeconds) * 60)
    this.overallAccuracy = (this.totalSucceededKeys / (this.totalSucceededKeys + this.totalMissedKeys));
    this.score = this.wpm * this.overallAccuracy;
  }
}
