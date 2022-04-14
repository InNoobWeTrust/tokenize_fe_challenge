import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { RowComponent } from './row/row.component';



@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    RowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
