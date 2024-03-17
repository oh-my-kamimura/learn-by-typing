import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionDataService, Exam, Category, Section } from '../../service/question-data.service';
import { PlayingDataService } from './service/playing-data.service';

@Component({
  selector: 'lbt-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss']
})
export class PlayingComponent implements OnInit {

  examId: number;
  categoryId: number;
  sectionId: number;

  constructor(
    private route: ActivatedRoute,
    private questionDataService: QuestionDataService,
    private playingDataService: PlayingDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (
        (this.examId = params['exam-id']),
        (this.categoryId = params['category-id']),
        (this.sectionId = params['section-id'])
      )
    );
    this.playingDataService.setGameInfo(
      this.examId,
      this.categoryId,
      this.sectionId
    );
  }

  getSelectedExam(): Exam {
    return this.playingDataService.getSelectedExam();
  }

  getSelectedCategory(): Category {
    return this.playingDataService.getSelectedCategory();
  }

  getSelectedSection(): Section {
    return this.playingDataService.getSelectedSection();
  }
}
