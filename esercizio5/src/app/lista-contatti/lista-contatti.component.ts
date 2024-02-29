import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-contatti',
  standalone: true,
  imports: [],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {
  persone = [

    {nome: "Anna", numero: "000 000 0000", cognome: "botta", età: 44, colore: "verde", isOnline: true},

    {nome: "piero", numero: "111 111 1111", cognome: "botta", età: 40, colore: "rosso", isOnline: false},

    {nome: "carlo", numero: "222 222 2222", cognome: "botta", età: 34, colore: "giallo", isOnline: true},

    {nome: "gino", numero: "333 333 3333", cognome: "botta", età: 48, colore: "marrone", isOnline: false},

    {nome: "teresa", numero: "444 444 4444", cognome: "botta", età: 24, colore: "viola", isOnline: true},

    {nome: "pinuccia", numero: "555 5555 555", cognome: "botta", età: 18, colore: "blu", isOnline: false},

    {nome: "clara", numero: "666 6666 666", cognome: "botta", età: 30, colore: "rosa", isOnline: true},

    {nome: "giancarlo", numero: "777 7777 777", cognome: "botta", età: 50, colore: "grigio", isOnline: false},

    {nome: "costanzo", numero: "888 8888 888", cognome: "botta", età: 60, colore: "nero", isOnline: true},

    {nome: "gallo", numero: "999 9999 999", cognome: "botta", età: 70, colore: "bianco", isOnline: false},
 
  ]







}
