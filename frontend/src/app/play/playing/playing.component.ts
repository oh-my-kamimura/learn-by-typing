import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionDataService, Exam } from '../../service/question-data.service';

@Component({
  selector: 'lbt-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss']
})
export class PlayingComponent implements OnInit {

  examId: number;
  categoryId: number;
  sectionId: number;

  constructor(private route: ActivatedRoute, private questionDataService: QuestionDataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => (
      this.examId = params['exam-id'],
      this.categoryId = params['category-id'],
      this.sectionId = params['section-id']
    ));
  }

  getExam(examId: number): Exam{
    return this.questionDataService.getExam(this.examId);
  }

}
