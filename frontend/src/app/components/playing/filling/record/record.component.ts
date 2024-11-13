// src/app/record/record.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WordRecord } from '../../../../models/record.model';
import { PlayingDataService } from '../../../../services/playing-data.service';

@Component({
  selector: 'lbt-record',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss', '/src/styles.scss']
})

export class RecordComponent {
  @Input() wordRecords: WordRecord[] = [];
  score: number = 0;
  rank: string = '';
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
    this.rank = this.evaluateRank();
  }

  evaluateRank(): string {
    const rankMap = [
      { min: 600, rank: "神" },
      { min: 500, rank: "マスター" },
      { min: 400, rank: "エリート" },
      { min: 350, rank: "プロ" },
      { min: 300, rank: "S" },
      { min: 250, rank: "A+" },
      { min: 200, rank: "A" },
      { min: 150, rank: "B+" },
      { min: 100, rank: "B" },
      { min: 75, rank: "C+" },
      { min: 50, rank: "C" },
      { min: 25, rank: "D" },
      { min: 10, rank: "E" },
      { min: 0, rank: "F" },
    ];
    const result = rankMap.find(item => this.score >= item.min);
    return result ? result.rank : "計測不能";
  }
}
