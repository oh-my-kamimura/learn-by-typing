import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'lbt-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent, HttpClientModule]
})
export class AppComponent {
  title = 'learn-by-typing';
}
