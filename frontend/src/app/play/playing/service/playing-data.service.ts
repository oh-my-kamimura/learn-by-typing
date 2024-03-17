import { Injectable } from '@angular/core';
import {
  QuestionDataService,
  Exam,
  Category,
  Section,
} from 'src/app/service/question-data.service';

@Injectable({
  providedIn: 'root',
})
export class PlayingDataService {
  private selectedExamId: number;
  private selectedCategoryId: number;
  private selectedSectionId: number;

  constructor(private questionDataService: QuestionDataService) {}

  setGameInfo(examId: number, categoryId: number, sectionId: number) {
    this.selectedExamId = examId;
    this.selectedCategoryId = categoryId;
    this.selectedSectionId = sectionId;
    console.log('Setting game infomation.');
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
}
