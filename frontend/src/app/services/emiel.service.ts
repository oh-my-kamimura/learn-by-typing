import { Injectable } from '@angular/core';
import * as emiel from 'emiel';
import { WordRecord } from '../models/record.model';
import { MixedTextAutomaton } from '../components/playing/mixed-guide';

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

  finishWord(a: MixedTextAutomaton, displayedAt: Date, missCount: number): void {
    console.log("a:", a);
    this.wordRecords.push({
      automaton: a.base,
      displayedAt: displayedAt,
      firstInputtedAt: a.base.succeededInputs[0].event.timestamp,
      finishedAt: a.base.succeededInputs[a.base.succeededInputs.length - 1].event.timestamp,
      missCount: missCount,
      mixedText: a.metadata.mixedText
    });
  }

  finishTyping(): void {
    this.isFinished = true;
  }

  startTyping(): void {
    this.isFinished = false;
    this.wordRecords = [];
  }
}
