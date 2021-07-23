import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetPlano } from 'src/app/shared/app.actions';
import { Plano } from 'src/app/shared/models/plano.model';
import { SubSink } from 'subsink';
import { PlanosService } from '../../services/planos.service';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit, OnDestroy {
  planos: Plano[] = [];
  plataformaSku = '';
  subs = new SubSink();

  constructor(
    private planosService: PlanosService,
    private route: ActivatedRoute,
    private router: Router,
    public store: Store
  ) { }

  ngOnInit(): void {
    this.carregarSkuPlataforma();
  }

  carregarSkuPlataforma(): void {
    this.plataformaSku = this.route.snapshot.params.plataformaSku;
    this.carregarPlanos();
  }

  carregarPlanos(): void {
    this.subs.sink = this.planosService.obterPlanosParaPlataforma(this.plataformaSku).subscribe({
      next: planos => {
        this.planos = planos;
      }
    });
  }

  selecionarPlano(plano: Plano): void {
    if (plano.ativo) {
      this.store.dispatch(new SetPlano(plano));
      this.router.navigate(['dados', this.plataformaSku, plano.sku]);
    } else {
      throw new Error('Plano inativo');
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
