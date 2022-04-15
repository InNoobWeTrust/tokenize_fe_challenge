import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {
  @Input('isBid')
  isBid: boolean = true;
  @Input('size')
  _size: number = NaN;
  @Input('price')
  _price: number = NaN;

  get size(): string {
    return this._size.toFixed(12);
  }

  get price(): string {
    return this._price.toFixed(12);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
