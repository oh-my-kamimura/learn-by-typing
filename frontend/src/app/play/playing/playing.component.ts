import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionDataService} from '../../service/question-data.service';

@Component({
  selector: 'lbt-playing',
  templateUrl: './playing.component.html',
  styleUrls: ['./playing.component.scss']
})
export class PlayingComponent implements OnInit {

  examId: string;
  categoryId: string;
  sectionId: string;
  gameData: object;

  constructor(private route: ActivatedRoute, private questionDataService: QuestionDataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => (
      this.examId = params['exam-id'],
      this.categoryId = params['category-id'],
      this.sectionId = params['section-id']
    ));
    this.questionDataService.getGameData().subscribe((result) => {
      this.gameData = result;
      console.log('ゲームデータを取得しました。', this.gameData);
    });
  }

}
