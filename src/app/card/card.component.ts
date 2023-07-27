import {Component, Input} from '@angular/core';
import {ICard} from "./icard";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input() card: ICard;

  day = this.card.dateFrom.getDay();
  month = this.card.dateFrom.getMonth();
  year = this.card.dateFrom.getFullYear();
  hours = this.card.dateFrom.getHours();
  minutes = this.card.dateFrom.getMinutes();
}
