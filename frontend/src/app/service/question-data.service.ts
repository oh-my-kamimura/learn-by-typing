import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class QuestionDataService {

  constructor(private http: HttpClient) {};

  private fetchInitDataUrl: string = '/app/init';
  private examListCache$: Observable<any>;
  private examList: Array<Exam>;

  // 　TODO: 資格ごとに問題を取得できるように修正する。
  fetchExamList(examId: number) {
    this.examListCache$ = this.http.get(this.fetchInitDataUrl).pipe(
      tap((data) => console.log('data fetched', data)),
      shareReplay(1)
    );
    this.examListCache$.subscribe((result) => {
      this.examList = result.map((data) => {
        const exam = new Exam();
        exam.examId = data.examId;
        exam.examName = data.examName;
        exam.isEnable = data.enable;
        exam.categoryList = data.categoryList.map((categoryData) => {
          const category = new Category();
          category.categoryId = categoryData.categoryId;
          category.categoryName = categoryData.categoryName;
          category.examId = categoryData.examId;
          category.sectionList = categoryData.sectionList.map((sectionData) => {
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

  getExam(examId: number): Exam {
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

export class Exam {
  examId: number;
  examName: string;
  isEnable: boolean;
  categoryList: Category[];

  public getCategory(categoryId: number): Category {
    return this.categoryList.find(category => category.categoryId == categoryId);
  }
}

export class Category {
  categoryId: number;
  categoryName: string;
  examId: number;
  sectionList: Section[];

  public getSection(sectionId: number): Section {
    return this.sectionList.find(section => section.sectionId == sectionId);
  }
}

export class Section {
  sectionId: number;
  sectionName: string;
  categoryId: number;
  isEnable: boolean;
}

export class Question {
  questionId: number;
  sectionId: number;
  statement: string;
  hiragana: string;
  imagePath: string;
  explanation: string;
}
