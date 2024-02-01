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

  constructor(private route: ActivatedRoute, private questionDataService: QuestionDataService) { }
  initialData: object;

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.exam_id = params['exam-id']));
    this.questionDataService.getInitialData().subscribe((result) => {
      this.initialData = result;
      console.log('初期データを取得しました。', this.initialData);
    });
  }

}
