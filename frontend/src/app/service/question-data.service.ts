import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class QuestionDataService {

  constructor(private http: HttpClient) {}

  private getDataUrl: string = '/app/init';
  private examListCache$: Observable<any>;
  private examList: Array<Exam>;

  // 　TODO: 資格ごとに問題を取得できるようにも修正する。
  getExamList() {
    this.examListCache$ = this.http.get(this.getDataUrl).pipe(
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
      console.log('ゲームデータを取得しました。', this.examList);
    });
  }

  getExam(examId: number): Exam {
    if (!this.examListCache$) {
      this.getExamList();
    }
    return this.examList[examId - 1];
  }

}

export class Exam {
  examId: number;
  examName: string;
  isEnable: boolean;
  categoryList: Category[];

  public getCategory(categoryId: number): Category {
    return this.categoryList[categoryId - 1];
  }
}

export class Category {
  categoryId: number;
  categoryName: string;
  examId: number;
  sectionList: Section[];

  public getSection(sectionId: number): Section {
    return this.sectionList[sectionId - 1];
  }
}

export class Section {
  sectionId: number;
  sectionName: string;
  categoryId: number;
  isEnable: boolean;
}
