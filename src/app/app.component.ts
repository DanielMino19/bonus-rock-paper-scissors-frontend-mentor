import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { UserPointsService } from './services/user-points.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private pointsSubscription: Subscription | undefined;
  userScore: number | undefined = 0;
  constructor(private userPoints: UserPointsService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.userScore = this.userPoints.getPoints();
    this.pointsSubscription = this.userPoints.points.subscribe((points) => {
      this.userScore = points;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    this.pointsSubscription?.unsubscribe();
  }

}
