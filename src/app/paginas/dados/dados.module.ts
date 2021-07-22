import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosRoutingModule } from './dados-routing.module';
import { DadosComponent } from './components/dados/dados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DadosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DadosRoutingModule
  ],
})
export class DadosModule { }
