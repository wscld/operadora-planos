import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreaklinePipe } from './pipes/breakline.pipe';
import { CardComponent } from './components/card/card.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [BreaklinePipe, CardComponent, TopbarComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    BreaklinePipe,
    CardComponent,
    TopbarComponent
  ]
})
export class SharedModule { }
