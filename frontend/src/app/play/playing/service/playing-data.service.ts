import { Injectable } from '@angular/core';
import {
  QuestionDataService,
  Exam,
  Category,
  Section,
  Question
} from 'src/app/service/question-data.service';

@Injectable({
  providedIn: 'root',
})
export class PlayingDataService {
  private selectedExamId: number;
  private selectedCategoryId: number;
  private selectedSectionId: number;
  private questionList: Array<Question>;

  constructor(private questionDataService: QuestionDataService) {
    this.loadGameInfo();
  }

  setGameInfo(examId: number, categoryId: number, sectionId: number) {
    this.selectedExamId = examId;
    this.selectedCategoryId = categoryId;
    this.selectedSectionId = sectionId;
    console.log('Setting game information.');

    sessionStorage.setItem('selectedExamId', this.selectedExamId.toString());
    sessionStorage.setItem('selectedCategoryId', this.selectedCategoryId.toString());
    sessionStorage.setItem('selectedSectionId', this.selectedSectionId.toString());
  }

  private loadGameInfo() {
    const examId = sessionStorage.getItem('selectedExamId');
    const categoryId = sessionStorage.getItem('selectedCategoryId');
    const sectionId = sessionStorage.getItem('selectedSectionId');
    if (examId && categoryId && sectionId) {
      this.selectedExamId = +examId;
      this.selectedCategoryId = +categoryId;
      this.selectedSectionId = +sectionId;
    }
  }

  getSelectedExam(): Exam {
    return this.questionDataService.getExam(this.selectedExamId);
  }

  getSelectedCategory(): Category {
    return this.questionDataService
      .getExam(this.selectedExamId)
      .getCategory(this.selectedCategoryId);
  }

  getSelectedSection(): Section {
    return this.questionDataService
      .getExam(this.selectedExamId)
      .getCategory(this.selectedCategoryId)
      .getSection(this.selectedSectionId);
  }

  getQuestionList(){
    this.questionList = this.questionDataService.getQuestionList(this.selectedSectionId, 3);
  }
}
