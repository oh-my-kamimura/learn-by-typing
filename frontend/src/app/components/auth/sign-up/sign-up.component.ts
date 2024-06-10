import { Component } from '@angular/core';
import { BreadcrumbsComponent } from '../../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'lbt-sign-up',
  standalone: true,
  imports: [BreadcrumbsComponent],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss', '/src/styles.scss']
})
export class SignUpComponent {

}
