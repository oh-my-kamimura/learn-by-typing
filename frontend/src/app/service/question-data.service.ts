import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class QuestionDataService {

  constructor(private http: HttpClient) {}

  private api: string = '/app/init'

  getInitialData(): Observable<Exam> {
    return this.http.get<Exam>(this.api);
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
