import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lbt-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '/src/styles.scss']
})
export class HeaderComponent {

}
