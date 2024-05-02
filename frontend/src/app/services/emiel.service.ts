import { Injectable } from '@angular/core';
import * as emiel from 'emiel';
import { WordRecord } from '../models/record.model';

@Injectable({
  providedIn: 'root',
})

export class EmielService {
  layout: emiel.KeyboardLayout | undefined;
  isFinished: boolean = false;
  wordRecords: WordRecord[] = [];

  constructor() { }

  detectLayout(): Promise<void> {
    return emiel.keyboard.detect(window).then((layout) => {
      this.layout = layout;
    });
  }

  finishWord(a: emiel.Automaton, displayedAt: Date, missCount: number): void {
    this.wordRecords.push({
      automaton: a,
      displayedAt: displayedAt,
      firstInputtedAt: a.succeededInputs[0].event.timestamp,
      finishedAt: a.succeededInputs[a.succeededInputs.length - 1].event.timestamp,
      missCount: missCount,
    });
  }

  finishTyping(): void {
    this.isFinished = true;
  }
}
