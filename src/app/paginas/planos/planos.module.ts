import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanosRoutingModule } from './planos-routing.module';
import { PlanosComponent } from './components/planos/planos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PlanosComponent
  ],
  imports: [
    CommonModule,
    PlanosRoutingModule,
    SharedModule
  ]
})
export class PlanosModule { }
