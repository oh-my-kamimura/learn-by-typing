import { Injectable } from '@angular/core';
import { QuestionDataService } from '../services/question-data.service';
import { Exam } from '../models/exam.model';
import { Category } from '../models/category.model';
import { Section } from '../models/section.model';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class PlayingDataService {

  private selectedExamId: number = 0;
  private selectedCategoryId: number = 0;
  private selectedSectionId: number = 0;
  private totalQuestionNum: number = 2;

  private playingQuestionList: Array<Question> = [];

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

  loadGameInfo() {
    const examId = sessionStorage.getItem('selectedExamId');
    const categoryId = sessionStorage.getItem('selectedCategoryId');
    const sectionId = sessionStorage.getItem('selectedSectionId');
    if (examId && categoryId && sectionId) {
      this.selectedExamId = +examId;
      this.selectedCategoryId = +categoryId;
      this.selectedSectionId = +sectionId;
    }
  }

  getSelectedExam(): Exam | undefined {
    return this.questionDataService.getExam(this.selectedExamId);
  }

  getSelectedCategory(): Category | undefined {
    const exam = this.questionDataService.getExam(this.selectedExamId);
    return exam ? exam.getCategory(this.selectedCategoryId) : undefined;
  }

  getSelectedSection(): Section | undefined {
    const exam = this.questionDataService.getExam(this.selectedExamId);
    if (!exam) return undefined;

    const category = exam.getCategory(this.selectedCategoryId);
    if (!category) return undefined;

    return category.getSection(this.selectedSectionId);
  }

  getTotalQuestionNum(): number {
    return this.totalQuestionNum;
  }

  fetchPlayingQuestionList() {
    this.questionDataService
      .fetchPlayingQuestionList(this.selectedSectionId, this.totalQuestionNum)
      .subscribe((questions) => {
        this.playingQuestionList = questions;
      });
  }

  getPlayingQuestionList(): Question[] {
    return this.playingQuestionList;
  }

  getQuestionInfo(questionNum: number): Question {
    return this.playingQuestionList[questionNum];
  }
}
