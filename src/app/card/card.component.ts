import { Component } from '@angular/core';
import {CardService} from "./card.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent extends CardService{
  day = this.booking[0].dateFrom.getDay();
  month = this.booking[0].dateFrom.getMonth();
  year = this.booking[0].dateFrom.getFullYear();
  hours = this.booking[0].dateFrom.getHours();
  minutes = this.booking[0].dateFrom.getMinutes();
}
