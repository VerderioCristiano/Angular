import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPlayerComponent } from './lista-player/lista-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esercizio6';
}
