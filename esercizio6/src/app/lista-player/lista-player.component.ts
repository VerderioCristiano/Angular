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
    {ruolo:'toplaner', età:'20', team:'T1', nickname:'Zeus', immagine:'./assets/T1_Zeus_2024_Split_1.png', nazionalità:'corea',link:'https://lol.fandom.com/wiki/Zeus'},
    {ruolo:'jungler', età:'21', team:'T1', nickname:'Oner', immagine:'./assets/T1_Oner_2022_Split_2.png', nazionalità:'corea',link:'https://lol.fandom.com/wiki/Oner'},
    {ruolo:'midlaner', età:'27', team:'T1', nickname:'Faker', immagine:'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/3d/T1_Faker_2024_Split_1.png/revision/latest?cb=20240209182111', nazionalità:'corea',link:'https://lol.fandom.com/wiki/Faker'},
    {ruolo:'support', età:'21', team:'T1', nickname:'Keria', immagine:'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/06/T1_Keria_2024_Split_1.png/revision/latest?cb=20240209182121', nazionalità:'corea',link:'https://lol.fandom.com/wiki/Keria'},
    {ruolo:'adc', età:'24', team:'T1', nickname:'Gumayusi', immagine:'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/0b/T1_Gumayusi_2024_Split_1.png/revision/latest?cb=20240209182116', nazionalità:'corea',link:'https://lol.fandom.com/wiki/Gumayusi'},
    {ruolo:'toplaner', età:'23', team:'WBG', nickname:'TheShy', immagine:'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/9/9f/WBG_TheShy_Worlds_2023.png/revision/latest?cb=20231015054424', nazionalità:'cina',link:'https://lol.fandom.com/wiki/TheShy'},
    {ruolo:'jungler', età:'25', team:'WBG', nickname:'WeiWei', immagine:'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/05/LNG_Weiwei_2024_Split_1.png/revision/latest/scale-to-width-down/220?cb=20240121155805', nazionalità:'cina',link:'https://lol.fandom.com/wiki/Weiwei'},
    {ruolo:'midlaner', età:'24', team:'WBG', nickname:'Xiaohu', immagine:'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/0/05/WBG_Xiaohu_2024_Split_1.png/revision/latest?cb=20240121162343', nazionalità:'cina',link:'https://lol.fandom.com/wiki/Xiaohu'},
    {ruolo:'support', età:'23', team:'WBG', nickname:'Crisp', immagine:'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/2/20/WBG_Crisp_2024_Split_1.png/revision/latest?cb=20240121162340', nazionalità:'cina', link :'https://lol.fandom.com/wiki/Crisp'},
    {ruolo:'adc', età:'23', team:'WBG', nickname:'Light', immagine:'https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/89/WBG_Light_2024_Split_1.png/revision/latest/scale-to-width-down/220?cb=20240121162342', nazionalità:'cina',link:'https://lol.fandom.com/wiki/Light_(Wang_Guang-Yu)'},

  
  ]
}
