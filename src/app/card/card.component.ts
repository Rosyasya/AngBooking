import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  @Input() booking: object = {};
  //
  // day = this.booking.dateFrom.getDay();
  // month = this.booking.dateFrom.getMonth();
  // year = this.booking.dateFrom.getFullYear();
  // hours = this.booking.dateFrom.getHours();
  // minutes = this.booking.dateFrom.getMinutes();
}
