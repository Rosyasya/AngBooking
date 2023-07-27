import {Component} from '@angular/core';
import {CardService} from "./card/card.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends CardService{
  booking = this.info;
}
