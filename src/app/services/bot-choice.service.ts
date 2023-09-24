import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class BotChoiceService {

  constructor() { } 
  bothCard: any;

  async userChoosesCard(selectedCard: Card){
    const winnerCard = await this.botChoose();
    return this.winner(selectedCard.typeOfCard, winnerCard);
  }

  botChoose(){
    const AllCards: Card[]=  [
      { typeOfCard:'rock' , typeOfColor: 'rock-gradient', typeOfImg: TypeOfImg.ROCK },
      { typeOfCard:'paper' ,  typeOfColor: 'paper-gradient', typeOfImg: TypeOfImg.PAPER },
      { typeOfCard:'scissors' ,  typeOfColor: 'scissors-gradient', typeOfImg: TypeOfImg.SCISSORS },
      { typeOfCard:'lizard' ,  typeOfColor: 'lizard-gradient', typeOfImg: TypeOfImg.LIZARD },
      { typeOfCard:'spock' ,  typeOfColor: 'cyan-gradient', typeOfImg: TypeOfImg.SPOCK },
    ]; 
    const randomTypeIndex = Math.floor(Math.random() * AllCards.length);
    this.bothCard = AllCards[randomTypeIndex];
    return this.bothCard;
  }

  winner(userCard: string, botCard: Card): { result: string, winningCard: any } {
    const typeOfBothCard = botCard.typeOfCard
    if (userCard === typeOfBothCard) {
      return { result: "It's a tie!", winningCard: botCard };
    } else if (
      (userCard === 'rock' && (typeOfBothCard === 'scissors' || typeOfBothCard === 'lizard')) ||
      (userCard === 'paper' && (typeOfBothCard === 'rock' || typeOfBothCard === 'spock')) ||
      (userCard === 'scissors' && (typeOfBothCard === 'paper' || typeOfBothCard === 'lizard')) ||
      (userCard === 'lizard' && (typeOfBothCard === 'spock' || typeOfBothCard === 'paper')) ||
      (userCard === 'spock' && (typeOfBothCard === 'scissors' || typeOfBothCard === 'rock'))
    ) {
      return { result: `You win`, winningCard: userCard };  
    } else {
      return { result: `The House wins`, winningCard: botCard };
    }
  }
  

  async playGame(userSelectedCard: Card): Promise<{ result: string; winningCard: string, botCard: string }> {
    const botCard = await this.botChoose(); 
    const result = await this.userChoosesCard(userSelectedCard);
    const winner = this.winner(userSelectedCard.typeOfCard, botCard);
    return { result: winner.result, winningCard: winner.winningCard, botCard: botCard };
  }

}

enum TypeOfImg{
    ROCK = '../../../assets/icons/icon-rock.svg',
    PAPER = '../../../assets/icons/icon-paper.svg',
    SCISSORS = '../../../assets/icons/icon-scissors.svg',
    LIZARD = '../../../assets/icons/icon-lizard.svg',
    SPOCK = '../../../assets/icons/icon-spock.svg',
}




