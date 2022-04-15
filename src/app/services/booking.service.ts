import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { BookingList } from '../types/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookingSubject$: BehaviorSubject<BookingList> = new BehaviorSubject<BookingList>(new BookingList());
  bookings$: Observable<BookingList> = this._bookingSubject$.asObservable();

  constructor() {
    this._bookingSubject$.next({
      bids: [
        { price: 0.07565132629168683, size: 7.500268606011436 },
        { price: 0.07565131050917807, size: 0.9945998297967815 },
        { price: 0.0756512571737931, size: 5.901415877608923 },
        { price: 0.07565122018637299, size: 6.686883491702516 },
        { price: 0.07565118249126968, size: 0.14028385065990845 },
        { price: 0.07565114619357, size: 0.300307996702047 },
        { price: 0.07565110904075675, size: 0.3338195375427935 },
        { price: 0.07565107263239103, size: 8.452295941836939 },
        { price: 0.07565103627322363, size: 8.5932938835971 },
        { price: 0.075651, size: 0.0029990595188684743 },
      ],
      asks: [
        { price: 0.07565167370831316, size: 4.3625827566656685 },
        { price: 0.0756516990809453, size: 0.5019839647476505 },
        { price: 0.07565174206047937, size: 2.096385465635932 },
        { price: 0.07565178139645509, size: 8.063197221863117 },
        { price: 0.07565181825686278, size: 0.5844744763557916 },
        { price: 0.07565185483554843, size: 0.30332632641003276 },
        { price: 0.07565189115303596, size: 4.28637727514658 },
        { price: 0.07565192742338599, size: 10.043993594108851 },
        { price: 0.07565196371048934, size: 0.16570094659986911 },
        { price: 0.075652, size: 0.14182987389732027 },
      ]
    } as BookingList)
  }
}
