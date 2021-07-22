import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreaklinePipe } from './pipes/breakline.pipe';



@NgModule({
  declarations: [BreaklinePipe],
  imports: [
    CommonModule
  ],
  exports: [
    BreaklinePipe
  ]
})
export class SharedModule { }
