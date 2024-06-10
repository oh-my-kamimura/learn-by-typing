import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'lbt-log-in',
  standalone: true,
  imports: [RouterLink, BreadcrumbsComponent],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss', '/src/styles.scss']
})
export class LogInComponent {

}
