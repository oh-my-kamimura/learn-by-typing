// src/app/record/record.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WordRecord } from '../../../../models/record.model';

@Component({
  selector: 'lbt-record',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})



export class RecordComponent {
  @Input() wordRecords: WordRecord[] = [];
  totalSucceededKeys: number = 0;
  totalMissedKeys: number = 0;
  totalLatency: number = 0;
  avgLatency: number = 0;
  overallAccuracy: number = 0;

  ngOnInit() {
    this.getResult();
  }

  getRecords() {
    return this.wordRecords.map(record => {
      const latency = record.firstInputtedAt.getTime() - record.displayedAt.getTime();
      const rkpm = Math.trunc(((record.automaton.succeededInputs.length - 1) / (record.finishedAt.getTime() - record.firstInputtedAt.getTime())) * 1000 * 60);
      const kpm = Math.trunc((record.automaton.succeededInputs.length / (record.finishedAt.getTime() - record.displayedAt.getTime())) * 1000 * 60);
      const accuracy = record.automaton.succeededInputs.length / (record.missCount + record.automaton.succeededInputs.length);
      return {
        latency,
        kpm,
        rkpm,
        record,
        accuracy,
        word: record.automaton.word
      };
    });
  }

  getResult() {
    for (const record of this.wordRecords) {
      const latency = record.firstInputtedAt.getTime() - record.displayedAt.getTime();
      this.totalSucceededKeys += record.automaton.succeededInputs.length;
      this.totalMissedKeys += record.missCount;
      this.totalLatency += latency;
    }
    this.avgLatency = Math.trunc(this.totalLatency / this.wordRecords.length);
    this.overallAccuracy = (this.totalSucceededKeys / (this.totalSucceededKeys + this.totalMissedKeys)) * 100;
  }
}

