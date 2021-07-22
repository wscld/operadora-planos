import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosRoutingModule } from './dados-routing.module';
import { DadosComponent } from './components/dados/dados.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    DadosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DadosRoutingModule,
    InputTextModule,
    SharedModule,
    CalendarModule,
    ButtonModule,
    NgxMaskModule.forRoot(),
  ],
})
export class DadosModule { }
