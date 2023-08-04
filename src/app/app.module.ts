import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { ResultOfTheRoundComponent } from './components/resultOfTheRound/resultOfTheRound.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ResultOfTheRoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
