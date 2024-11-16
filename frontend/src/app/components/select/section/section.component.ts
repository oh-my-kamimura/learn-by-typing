import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionDataService } from '../../../services/question-data.service';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';
import { PlayingDataService } from '../../../services/playing-data.service';

@Component({
  selector: 'lbt-section',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, BreadcrumbsComponent],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss', '/src/styles.scss'],
})

export class SectionComponent {
  examId: number = 0;

  constructor(
    private route: ActivatedRoute,
    public questionDataService: QuestionDataService,
    public PlayingDataService: PlayingDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.examId = params['exam-id'])
    );
    if (this.examId) {
      this.PlayingDataService.setGameInfo(this.examId);
    }
    if (!this.examId) {
      let selectedExamId = this.PlayingDataService.getSelectedExam()?.examId;
      if (selectedExamId) {
        this.examId = selectedExamId;
      }
    }
  }
}
