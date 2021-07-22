import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlataformasRoutingModule } from './plataformas-routing.module';
import { PlataformasComponent } from './components/plataformas/plataformas.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PlataformasComponent
  ],
  imports: [
    CommonModule,
    PlataformasRoutingModule,
    SharedModule
  ]
})
export class PlataformasModule { }
