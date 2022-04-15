import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { RowComponent } from './row/row.component';
import { BidInfoComponent } from './bid-info/bid-info.component';
import { AskInfoComponent } from './ask-info/ask-info.component';
import { MarketComponent } from './market/market.component';



@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    RowComponent,
    BidInfoComponent,
    AskInfoComponent,
    MarketComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
