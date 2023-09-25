import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/card';
import { UserPointsService } from 'src/app/services/user-points.service';

@Component({
  selector: 'app-resultOfTheRound',
  templateUrl: './resultOfTheRound.component.html',
  styleUrls: ['./resultOfTheRound.component.css']
})
export class ResultOfTheRoundComponent implements OnInit {
  choiceHands:boolean = false
  @Input() item: Card[]= [];
  @Output() switchResult = new EventEmitter<boolean>();
  @Input() bothChoose:any;
  @Input() gameWinner:string = "";
  houseWinner: boolean = false;
  yourWinner: boolean = false;
  constructor(private userPoints: UserPointsService) { }

  ngOnInit(): void {
  this.userPoints.getPoints()
  this.winnerHand()
  }
  
  onSwitchResult(){
    this.switchResult.emit(false)
  }

  winnerHand(){
    if (this.gameWinner === "The House wins") {
      this.houseWinner = true;
      this.userPoints.decreasePoints();
    } else if (this.gameWinner === "You win") {
       this.yourWinner = true
       this.userPoints.increasePoints();
    } else if (this.gameWinner === "It's a tie!") {
      this.houseWinner = true;
      this.yourWinner = true;
    }
  }


}
