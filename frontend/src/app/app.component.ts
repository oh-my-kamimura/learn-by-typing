import { Component } from '@angular/core';
import { QuestionDataService } from './service/question-data.service';
import { Observable } from 'rxjs';
import { Exam } from './service/question-data.service';

@Component({
  selector: 'lbt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-by-typing-app';

  constructor(private questionDataService: QuestionDataService) {}
  dataSource: Observable<Exam>;

  ngOnInit(): void {
    this.questionDataService.getInitialData().subscribe((result) => {
      console.log('初期データを取得しました。', result);
    });
  }
}
