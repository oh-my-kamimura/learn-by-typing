import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionDataService } from '../../../service/question-data.service';

@Component({
  selector: 'lbt-select-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class SelectCategoryComponent implements OnInit {

  exam_id: string;
  gameData: object;

  constructor(private route: ActivatedRoute, private questionDataService: QuestionDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.exam_id = params['exam-id']));
    this.questionDataService.getGameData().subscribe((result) => {
      this.gameData = result;
      console.log('ゲームデータを取得しました。', this.gameData);
    });
  }

}
