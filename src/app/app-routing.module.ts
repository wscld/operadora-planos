import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '', redirectTo: 'plataformas', pathMatch: 'full'
  },
  {
    path: 'plataformas', loadChildren: () => import('./paginas/plataformas/plataformas.module').then(m => m.PlataformasModule)
  },
  {
    path: 'planos', loadChildren: () => import('./paginas/planos/planos.module').then(m => m.PlanosModule)
  },
  {
    path: 'dados', loadChildren: () => import('./paginas/dados/dados.module').then(m => m.DadosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
