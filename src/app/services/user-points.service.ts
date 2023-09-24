import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPointsService {
  points = new Subject<number>();
  localPoints:number;

  constructor() { 
    this.localPoints = parseInt(localStorage.getItem('points') || '0', 10);
    this.points.next(this.localPoints);
  }

  getPoints() {
    return this.localPoints;
  }

  increasePoints() {
    this.localPoints += 1;
    this.updatePoints();
  }

  decreasePoints() {
    if (this.localPoints > -10) {
      this.localPoints -= 1;
      this.updatePoints();
    }
  }

  private updatePoints() {
    localStorage.setItem('points', JSON.stringify(this.localPoints));
    this.points.next(this.localPoints);
  }

}
