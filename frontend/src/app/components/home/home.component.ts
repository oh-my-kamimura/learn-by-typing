import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lbt-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '/src/styles.scss']
})
export class HomeComponent {

}
