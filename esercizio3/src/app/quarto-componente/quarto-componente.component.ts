import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'quarto-componente',
  standalone: true,
  imports: [MatProgressSpinnerModule],
  templateUrl: './quarto-componente.component.html',
  styleUrl: './quarto-componente.component.css'
})
export class QuartoComponenteComponent {

}
