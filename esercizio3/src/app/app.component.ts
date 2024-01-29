import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondoComponenteComponent } from './secondo-componente/secondo-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio3';
}
