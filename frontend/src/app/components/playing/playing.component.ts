import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { QuestionDataService } from '../../services/question-data.service';
import { PlayingDataService } from '../../services/playing-data.service';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'lbt-playing',
  standalone: true,
  imports: [RouterOutlet, BreadcrumbsComponent],
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss', '/src/styles.scss'],
  providers: [QuestionDataService, PlayingDataService]
})
export class PlayingComponent {
  examId: number = 0;
  categoryId: number = 0;
  sectionId: number = 0;

  constructor(
    private route: ActivatedRoute,
    public questionDataService: QuestionDataService,
    public playingDataService: PlayingDataService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (
        (this.examId = params['exam-id']),
        (this.categoryId = params['category-id']),
        (this.sectionId = params['section-id'])
      )
    );
    if(this.examId && this.categoryId && this.sectionId){
      this.playingDataService.setGameInfo(
        this.examId,
        this.categoryId,
        this.sectionId
      );
    }
  }

  // getSelectedExam(): Exam {
  //   return this.playingDataService.getSelectedExam();
  // }

  // getSelectedCategory(): Category {
  //   return this.playingDataService.getSelectedCategory();
  // }

  // getSelectedSection(): Section {
  //   return this.playingDataService.getSelectedSection();
  // }
}
