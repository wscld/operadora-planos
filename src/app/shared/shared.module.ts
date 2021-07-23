import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreaklinePipe } from './pipes/breakline.pipe';
import { CardComponent } from './components/card/card.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { DividerModule } from 'primeng/divider'



@NgModule({
  declarations: [BreaklinePipe, CardComponent, TopbarComponent, DialogComponent],
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    DividerModule
  ],
  exports: [
    BreaklinePipe,
    CardComponent,
    TopbarComponent,
    DialogComponent
  ]
})
export class SharedModule { }
