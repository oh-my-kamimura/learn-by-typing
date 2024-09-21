import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'lbt-home',
  standalone: true,
  imports: [RouterLink, ContactComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '/src/styles.scss']
})
export class HomeComponent {

}
