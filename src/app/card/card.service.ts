import { Injectable } from '@angular/core';
import {ICard} from "./icard";

@Injectable({
  providedIn: 'root'
})
export class CardService {
  booking: Array<ICard> = [
    {
      id: 1,
      user: 'First User',
      roomType: 'Single',
      roomNum: 103,
      guestAmount: 1,
      payment: 'Credit card',
      source: 'Reception',
      dateFrom: new Date(),
      daysAmount: 3,
      dateTo: new Date(),
      subTotal: 1300,
      advancePayment: 300,
      discount: 50,
      total: 1000,
    },
    {
      id: 2,
      user: 'Second User',
      roomType: 'Duo',
      roomNum: 105,
      guestAmount: 2,
      payment: 'Credit card',
      source: 'Reception',
      dateFrom: new Date(),
      daysAmount: 7,
      dateTo: new Date(),
      subTotal: 1700,
      advancePayment: 600,
      discount: 100,
      total: 2000,
    },
  ]

  constructor() { }
}
