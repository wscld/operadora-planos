import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppStateModel } from 'src/app/shared/app.state';
import { DadosCliente } from 'src/app/shared/models/dados.model';
import { SubSink } from 'subsink';
import { DadosService } from '../../services/dados.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {
  dadosForm?: FormGroup;
  dadosCliente: DadosCliente = new DadosCliente();
  subs = new SubSink();
  @Select() app$?: Observable<AppStateModel>;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dadosService: DadosService
  ) {
    this.dadosForm = this.formBuilder.group({
      nome: [],
      email: [],
      dataNascimento: [],
      cpf: []
    });
  }

  ngOnInit(): void {
    this.carregarSkus();
  }

  carregarSkus() {
    this.subs.sink = this.app$?.subscribe({
      next: state => {
        if (state.plano && state.plataforma) {
          this.dadosCliente.plano = state.plano;
          this.dadosCliente.plataforma = state.plataforma;
        } else {
          const plataformaSku = this.route.snapshot.params.plataformaSku;
          const planoSku = this.route.snapshot.params.planoSku;
          this.carregarPlano(planoSku, plataformaSku);
          this.carregarPlataforma(plataformaSku)
        }
      }
    });
  }

  carregarPlano(planoSku: string, plataformaSku: string) {
    this.subs.sink = this.dadosService.obterPlano(plataformaSku, planoSku).subscribe({
      next: plano => {
        this.dadosCliente.plano = plano;
        console.log(plano);
      }
    });
  }
  carregarPlataforma(plataformaSku: string) {
    this.subs.sink = this.dadosService.obterPlataforma(plataformaSku).subscribe({
      next: plataforma => {
        this.dadosCliente.plataforma = plataforma;
        console.log(plataforma)
      }
    });
  }
}
