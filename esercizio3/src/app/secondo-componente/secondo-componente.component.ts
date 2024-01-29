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

array = [{
  nome1 : "Balcani", 
  desc1 : "catena montuosa dei Balcani"
},
{
  nome2 : "Himalaya",
  desc2 : "catena montuosa dell'Himalaya"
}]
}
