import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking } from 'src/app/types/booking';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('isBid')
  isBid: boolean = true;
  @Input('records')
  records: Booking[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
