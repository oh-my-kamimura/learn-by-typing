import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionDataService, Exam } from '../../../service/question-data.service';

@Component({
  selector: 'lbt-select-category',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SelectSectionComponent implements OnInit {
  examId: number;

  constructor(
    private route: ActivatedRoute,
    private questionDataService: QuestionDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.examId = params['exam-id'])
    );
  }

  getExam(examId: number): Exam{
    return this.questionDataService.getExam(this.examId);
  }
}
