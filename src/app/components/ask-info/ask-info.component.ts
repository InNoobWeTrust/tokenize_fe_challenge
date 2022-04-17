import { Component, Input, OnInit } from '@angular/core';
import { Booking } from 'src/app/types/booking';

@Component({
  selector: 'app-ask-info',
  templateUrl: './ask-info.component.html',
  styleUrls: ['./ask-info.component.scss']
})
export class AskInfoComponent implements OnInit {
  @Input('records')
  records: Booking[] = [];

  get size(): number {
    return this.records.map(record => record.size)
      .reduce((prev, curr) => prev + curr, 0)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
