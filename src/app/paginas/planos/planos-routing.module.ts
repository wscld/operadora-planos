import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanosComponent } from './components/planos/planos.component';

const routes: Routes = [
  { path: '', component: PlanosComponent },
  { path: ':plataformaSku', component: PlanosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanosRoutingModule { }
