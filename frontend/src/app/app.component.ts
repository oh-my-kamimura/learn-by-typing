import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QuestionDataService } from './services/question-data.service';
import { PlayingDataService } from './services/playing-data.service';
import { InquiryService } from './services/inquiry.service';

@Component({
  selector: 'lbt-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, HttpClientModule],
  providers: [QuestionDataService, PlayingDataService, InquiryService]
})
export class AppComponent {
  title = 'learn-by-typing';
}
