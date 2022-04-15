import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Booking } from 'src/app/types/booking';

@Component({
  selector: 'app-bid-info',
  templateUrl: './bid-info.component.html',
  styleUrls: ['./bid-info.component.scss']
})
export class BidInfoComponent implements OnInit {
  @Input('records')
  records: Booking[]= [];

  get volume(): number {
    return this.records.reduce((prev, curr) => prev + curr.price * curr.size, 0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
