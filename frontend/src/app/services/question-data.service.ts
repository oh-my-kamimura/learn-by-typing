import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { Exam } from '../models/exam.model';
import { Category } from '../models/category.model';
import { Section } from '../models/section.model';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})

export class QuestionDataService {

  constructor(private http: HttpClient) {};

  private fetchInitDataUrl: string = '/app/init';
  private examListCache$: Observable<any> | undefined;
  private examList: Array<Exam> = [];

  // 　TODO: 資格ごとに問題を取得できるように修正する。
  fetchExamList(examId: number) {
    this.examListCache$ = this.http.get(this.fetchInitDataUrl).pipe(
      tap((data) => console.log('data fetched', data)),
      shareReplay(1)
    );
    this.examListCache$.subscribe((result) => {
      this.examList = result.map((data: any) => {
        const exam = new Exam();
        exam.examId = data.examId;
        exam.examName = data.examName;
        exam.isEnable = data.enable;
        exam.categoryList = data.categoryList.map((categoryData: any) => {
          const category = new Category();
          category.categoryId = categoryData.categoryId;
          category.categoryName = categoryData.categoryName;
          category.examId = categoryData.examId;
          category.sectionList = categoryData.sectionList.map((sectionData: any) => {
            const section = new Section();
            section.sectionId = sectionData.sectionId;
            section.sectionName = sectionData.sectionName;
            section.categoryId = sectionData.categoryId;
            section.isEnable = sectionData.isEnable;
            return section;
          });
          return category;
        });
        return exam;
      });
      console.log('試験情報が取得されました。', this.examList);
    });
  }

  getExam(examId: number): Exam | undefined {
    if (!this.examListCache$) {
      this.fetchExamList(examId);
    }
    return this.examList.find(exam => exam.examId == examId);
  }

  private fetchQuestionUrl: string = '/app/question';

  fetchPlayingQuestionList(sectionId: number, questionNum: number): Observable<Array<Question>> {
      return this.http.get<Array<Question>>(this.fetchQuestionUrl + "/" + sectionId).pipe(
      tap((data) => console.log('data fetched', data)),
      shareReplay(1)
    );
  }

}
