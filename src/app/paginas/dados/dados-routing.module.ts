import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DadosComponent } from './components/dados/dados.component';

const routes: Routes = [{ path: ':plataformaSku/:planoSku', component: DadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosRoutingModule { }
