import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/interfaces/card';

@Component({
  selector: 'app-resultOfTheRound',
  templateUrl: './resultOfTheRound.component.html',
  styleUrls: ['./resultOfTheRound.component.css']
})
export class ResultOfTheRoundComponent implements OnInit {
  choiceHands:boolean = false
  @Input() item: Card[]= [];
  @Output() switchResult = new EventEmitter<boolean>();
 sexo:boolean = false
  constructor() { }

  ngOnInit() {
  console.log(this.item)
  }
  onSwitchResult(){
    this.switchResult.emit(false)
  }


}
