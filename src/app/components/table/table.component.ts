import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  showResult: boolean = false;
  choiceHand: string = '';
  filteredCards: Card[] = [];

  cards: Card[] = [
    { typeOfCard:'rock' , power: 3, typeOfColor: 'rock-gradient', typeOfImg: TypeOfImg.ROCK },
    { typeOfCard:'paper' , power: 2, typeOfColor: 'paper-gradient', typeOfImg: TypeOfImg.PAPER },
    { typeOfCard:'scissors' , power: 2, typeOfColor: 'scissors-gradient', typeOfImg: TypeOfImg.SCISSORS },
    { typeOfCard:'lizard' , power: 2, typeOfColor: 'lizard-gradient', typeOfImg: TypeOfImg.LIZARD },
    { typeOfCard:'spock' , power: 2, typeOfColor: 'cyan-gradient', typeOfImg: TypeOfImg.SPOCK },
  ];   

  constructor() { }

  ngOnInit() {
    console.log(this.cards)
  }

  filterCardsByChoice(card: any) {
    this.choiceHand = card;
    this.filteredCards = this.cards.filter((card) => card.typeOfCard === this.choiceHand);
    this.showResult = !this.showResult; 
  }

}

enum TypeOfImg{
  ROCK = '../../../assets/icons/icon-rock.svg',
  PAPER = '../../../assets/icons/icon-paper.svg',
  SCISSORS = '../../../assets/icons/icon-scissors.svg',
  LIZARD = '../../../assets/icons/icon-lizard.svg',
  SPOCK = '../../../assets/icons/icon-spock.svg',
}