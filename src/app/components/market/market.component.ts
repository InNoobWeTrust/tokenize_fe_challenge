import { Component, OnInit } from '@angular/core';
import { flatMap, map, Observable, of, shareReplay } from 'rxjs';
import { BookingService } from 'src/app/services/booking.service';
import { Booking, BookingList } from 'src/app/types/booking';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
  bids$: Observable<Booking[]>;
  asks$: Observable<Booking[]>;

  constructor(bookingService: BookingService) {
    this.bids$ = bookingService.bookings$.pipe(
      map((bookingList: BookingList) => bookingList.bids),
      shareReplay(),
    );
    this.asks$ = bookingService.bookings$.pipe(
      map((bookingList: BookingList) => bookingList.asks)
    );
  }

  ngOnInit(): void {
  }

}
