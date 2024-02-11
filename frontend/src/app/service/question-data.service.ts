import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class QuestionDataService {

  constructor(private http: HttpClient) {}

  private getDataUrl: string = '/app/init'
  private gameDataCache$: Observable<any>;

  getGameData(): Observable<any> {
    if (!this.gameDataCache$) {
      this.gameDataCache$ = this.http.get(this.getDataUrl).pipe(
        tap(data => console.log('data fetched', data)),
        shareReplay(1)
      );
    }
    return this.gameDataCache$;
  }
}

export class Exam {
  examId: number;
  examName: string;
  isEnable: boolean;
  categoryList: Category[];
}

export class Category {
  categoryId: number;
  categoryName: string;
  sectionList: Section[];
}

export class Section {
  sectionId: number;
  sectionName: string;
  isEnable: boolean;
}
