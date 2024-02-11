import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionDataService, Category } from '../../service/question-data.service';

@Component({
  selector: 'lbt-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  exam_id: string;
  category_id: string;
  section_id: string;
  gameData: object;

  constructor(private route: ActivatedRoute, private questionDataService: QuestionDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => (
      this.exam_id = params['exam-id'],
      this.category_id = params['category-id'],
      this.section_id = params['section-id']
    ));
    this.questionDataService.getGameData().subscribe((result) => {
      this.gameData = result;
      console.log('ゲームデータを取得しました。', this.gameData);
    });

  }

}
