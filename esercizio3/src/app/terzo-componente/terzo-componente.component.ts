import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'terzo-componente',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './terzo-componente.component.html',
  styleUrl: './terzo-componente.component.css'
})
export class TerzoComponenteComponent {
likes:number=10;



clickBottone(){
  this.likes = this.likes + 1
}
}
