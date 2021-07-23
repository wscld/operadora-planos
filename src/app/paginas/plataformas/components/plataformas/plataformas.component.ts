import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SetPlataforma } from 'src/app/shared/app.actions';
import { Plataforma } from 'src/app/shared/models/plataforma.model';
import { SubSink } from 'subsink';
import { PlataformasService } from '../../services/plataformas.service';

@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.scss']
})
export class PlataformasComponent implements OnInit, OnDestroy {
  plataformas: Plataforma[] = [];
  subs = new SubSink();

  constructor(
    private plataformasService: PlataformasService,
    private router: Router,
    public store: Store
  ) { }

  ngOnInit(): void {
    this.carregarPlataformas();
  }

  carregarPlataformas() {
    this.subs.sink = this.plataformasService.obterPlataformas().subscribe({
      next: plataformas => {
        this.plataformas = plataformas;
      }
    });
  }

  selecionarPlataforma(plataforma: Plataforma) {
    this.store.dispatch(new SetPlataforma(plataforma));
    this.router.navigate(['planos', plataforma.sku]);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
