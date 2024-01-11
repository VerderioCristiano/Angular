import { Component } from '@angular/core';
import { TerzoComponenteComponent } from '../terzo-componente/terzo-componente.component';
import { QuartoComponenteComponent } from '../quarto-componente/quarto-componente.component';

@Component({
  selector: 'secondo-componente',
  standalone: true,
  imports: [TerzoComponenteComponent, QuartoComponenteComponent],
  templateUrl: './secondo-componente.component.html',
  styleUrl: './secondo-componente.component.css'
})
export class SecondoComponenteComponent {

}
