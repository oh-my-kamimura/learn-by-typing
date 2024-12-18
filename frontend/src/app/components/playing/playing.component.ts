import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuestionDataService } from '../../services/question-data.service';
import { PlayingDataService } from '../../services/playing-data.service';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { EmielService } from '../../services/emiel.service';

@Component({
  selector: 'lbt-playing',
  standalone: true,
  imports: [RouterOutlet, CommonModule, BreadcrumbsComponent],
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss', '/src/styles.scss'],
})
export class PlayingComponent {
  examId: number = 0;
  categoryId: number = 0;
  sectionId: number = 0;

  constructor(
    private route: ActivatedRoute,
    public questionDataService: QuestionDataService,
    public playingDataService: PlayingDataService,
    public emielService: EmielService,
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
}
