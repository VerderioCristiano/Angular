import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'terzo-componente',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule],
  templateUrl: './terzo-componente.component.html',
  styleUrl: './terzo-componente.component.css'
})
export class TerzoComponenteComponent {
likes:number=0;
disabled=false;
constructor(){

this.likes = Math.floor(Math.random() * 100 );
this.likeChecker();
}

likeChecker():string{
if(this.likes<33 ){
  return "primary";
}
  else if(this.likes>=33 && this.likes<66){
    return "accent";
  }
  else{
    return "warn";
  }
}



clickBottone(){
  this.likes = this.likes + 1;
  this.likeChecker();
  if(this.likes == 100){
    this.disabled = true;
  }
}

}
