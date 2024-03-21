import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lista-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-player.component.html',
  styleUrl: './lista-player.component.css'
})
export class ListaPlayerComponent {
  player = [
    {ruolo:'toplaner', eta:'20', team:'T1', nickname:'Zeus', immagine:'./assets/T1_Zeus_2024_Split_1.png', nz1:'corea', nazionalita:'kr',link:'https://lol.fandom.com/wiki/Zeus'},
    {ruolo:'jungler', eta:'21', team:'T1', nickname:'Oner', immagine:'./assets/T1_Oner_2022_Split_2.png', nz1:'corea', nazionalita:'kr',link:'https://lol.fandom.com/wiki/Oner'},
    {ruolo:'midlaner', eta:'27', team:'T1', nickname:'Faker', immagine:'./assets/T1_Faker_2024_Split_1.png', nz1:'corea', nazionalita:'kr',link:'https://lol.fandom.com/wiki/Faker'},
    {ruolo:'support', eta:'21', team:'T1', nickname:'Keria', immagine:'./assets/T1_Keria_2024_Split_1.png', nz1:'corea', nazionalita:'kr',link:'https://lol.fandom.com/wiki/Keria'},
    {ruolo:'adc', eta:'24', team:'T1', nickname:'Gumayusi', immagine:'./assets/T1_Gumayusi_2024_Split_1.png', nz1:'corea', nazionalita:'kr',link:'https://lol.fandom.com/wiki/Gumayusi'},
  ]
  player1 = [
    {ruolo:'toplaner', eta:'23', team:'WBG', nickname:'TheShy', immagine:'./assets/WBG_TheShy_Worlds_2023.png', nz1:'cina', nazionalita:'cn',link:'https://lol.fandom.com/wiki/TheShy'},
    {ruolo:'jungler', eta:'25', team:'WBG', nickname:'WeiWei', immagine:'./assets/LNG_Weiwei_2024_Split_1.png', nz1:'cina', nazionalita:'cn',link:'https://lol.fandom.com/wiki/Weiwei'},
    {ruolo:'midlaner', eta:'24', team:'WBG', nickname:'Xiaohu', immagine:'./assets/WBG_Xiaohu_2024_Split_1.png', nz1:'cina', nazionalita:'cn',link:'https://lol.fandom.com/wiki/Xiaohu'},
    {ruolo:'support', eta:'23', team:'WBG', nickname:'Crisp', immagine:'./assets/WBG_Crisp_2024_Split_1.png', nz1:'cina', nazionalita:'cn', link :'https://lol.fandom.com/wiki/Crisp'},
    {ruolo:'adc', eta:'23', team:'WBG', nickname:'Light', immagine:'./assets/LNG_Light_2020_Split_1.png', nz1:'cina', nazionalita:'cn',link:'https://lol.fandom.com/wiki/Light_(Wang_Guang-Yu)'},
  ]



  click(index: number){
    var Player = this.player[index];
    window.open(Player.link)
  } 
  click1(index: number){
    var Player1 = this.player1[index];
    window.open(Player1.link)
  } 


}
