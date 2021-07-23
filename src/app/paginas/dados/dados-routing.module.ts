import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DadosComponent } from './components/dados/dados.component';

const routes = [{ path: ':plataformaSku/:planoSku', component: DadosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosRoutingModule { }
