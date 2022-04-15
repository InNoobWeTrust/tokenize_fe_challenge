import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subscription, tap } from 'rxjs';
import { Booking, BookingList } from '../types/booking';
import * as fuzzMarket from './fuzz';

const LOW: number = 0.075666;
const HIGH: number = 0.075667;
const NUM: number = 10;
const fuzz = () => fuzzMarket(LOW, HIGH, NUM);

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookingSubject$: BehaviorSubject<BookingList> = new BehaviorSubject<BookingList>(new BookingList());
  bookings$: Observable<BookingList> = this._bookingSubject$.asObservable();
  private _subscriptions: Subscription[] = [];

  constructor() {
    this._bookingSubject$.next(fuzz());
    this._subscriptions.push(
      interval(30000).pipe(
        tap(() => (this._bookingSubject$.next(fuzz())))
      ).subscribe(),
    );
  }
}
