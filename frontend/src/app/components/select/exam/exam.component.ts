import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'lbt-exam',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss', '/src/styles.scss']
})
export class ExamComponent {

}
