import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanosRoutingModule } from './planos-routing.module';
import { PlanosComponent } from './components/planos/planos.component';


@NgModule({
  declarations: [
    PlanosComponent
  ],
  imports: [
    CommonModule,
    PlanosRoutingModule
  ]
})
export class PlanosModule { }
