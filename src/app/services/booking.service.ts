import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, mergeMap, Observable, Subscription, tap } from 'rxjs';
import { BookingList } from '../types/booking';

const API = '.netlify/functions/server/market/10';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookingSubject$: BehaviorSubject<BookingList> = new BehaviorSubject<BookingList>(new BookingList());
  bookings$: Observable<BookingList> = this._bookingSubject$.asObservable();
  private _subscriptions: Subscription[] = [];

  constructor(_http: HttpClient) {
    const firstReqSub = _http.get<BookingList>(API).subscribe((bookingList: BookingList) => {
      this._bookingSubject$.next(bookingList);
      firstReqSub.unsubscribe();
      this._subscriptions.push(
        interval(30000).pipe(
          mergeMap(() => _http.get<BookingList>(API)),
          tap((bookingList: BookingList) => (this._bookingSubject$.next(bookingList)))
        ).subscribe(),
      );
    });
  }
}
