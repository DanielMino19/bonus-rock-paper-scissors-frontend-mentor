import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { BotChoiceService } from 'src/app/services/bot-choice.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  showResult: boolean = false;// TODO: change at true before fix 
  choiceHand: string = '';
  filteredCards: Card[] = [];
  bothChoose: any
  gameWinner: string = "";
  cards: Card[] = [
    { typeOfCard:'rock' , typeOfColor: 'rock-gradient', typeOfImg: TypeOfImg.ROCK },
    { typeOfCard:'paper' ,  typeOfColor: 'paper-gradient', typeOfImg: TypeOfImg.PAPER },
    { typeOfCard:'scissors' ,  typeOfColor: 'scissors-gradient', typeOfImg: TypeOfImg.SCISSORS },
    { typeOfCard:'lizard' ,  typeOfColor: 'lizard-gradient', typeOfImg: TypeOfImg.LIZARD },
    { typeOfCard:'spock' ,  typeOfColor: 'cyan-gradient', typeOfImg: TypeOfImg.SPOCK },
  ];   

  constructor(
    private botService: BotChoiceService
  ) { }



  ngOnInit() {
    console.log(this.cards)
  }

  closeResult(event:any){
    this.showResult = !this.showResult; 
  }

  filterCardsByChoice(card: any) {
    this.choiceHand = card;
    this.filteredCards = this.cards.filter((card) => card.typeOfCard === this.choiceHand);
    const userSelectedCard: Card | undefined = this.filteredCards[0];
    if (userSelectedCard) {
      this.botService.playGame(userSelectedCard).then(gameResult => {
        this.showResult = !this.showResult; 
        this.bothChoose = gameResult.botCard
        this.gameWinner = gameResult.result
        // console.log(this.gameWinner)
      });
    }
  }
  
  

}

enum TypeOfImg{
  ROCK = '../../../assets/icons/icon-rock.svg',
  PAPER = '../../../assets/icons/icon-paper.svg',
  SCISSORS = '../../../assets/icons/icon-scissors.svg',
  LIZARD = '../../../assets/icons/icon-lizard.svg',
  SPOCK = '../../../assets/icons/icon-spock.svg',
}