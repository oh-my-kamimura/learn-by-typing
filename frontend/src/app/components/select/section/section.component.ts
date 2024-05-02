import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionDataService } from '../../../service/question-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'lbt-section',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, HttpClientModule],
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss', '/src/styles.scss'],
  providers: [QuestionDataService]
})

export class SectionComponent {
  examId: number = 0;

  constructor(
    private route: ActivatedRoute,
    public questionDataService: QuestionDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.examId = params['exam-id'])
    );
  }
}
