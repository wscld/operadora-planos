import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppStateModel } from 'src/app/shared/app.state';
import { DadosCliente } from 'src/app/shared/models/dados.model';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import { FormUtils } from 'src/app/shared/utils/form.utils';
import { SubSink } from 'subsink';
import { DadosService } from '../../services/dados.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {
  yearRange = `1920:${new Date().getFullYear()}`
  dadosForm: FormGroup;
  dadosCliente: DadosCliente = new DadosCliente();
  subs = new SubSink();
  @Select() app$?: Observable<AppStateModel>;

  get prevRoute(): string {
    return `planos/${this.dadosCliente.plataforma?.sku}`
  }

  constructor(
    protected formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private dadosService: DadosService,
    private dialogService: DialogService
  ) {
    this.dadosForm = this.formBuilder.group({
      nome: ['', [Validators.required, FormUtils.genericValidator(FormUtils.genericValidator.bind(this))]],
      email: ['', [Validators.required, FormUtils.genericValidator(FormUtils.validadorEmail.bind(this))]],
      dataNascimento: ['', [Validators.required, FormUtils.genericValidator(FormUtils.genericValidator.bind(this))]],
      cpf: ['', [Validators.required, FormUtils.genericValidator(FormUtils.validarCpfOuCnpj.bind(this))]],
      telefone: ['', [Validators.required, FormUtils.genericValidator(FormUtils.validadorTelefone.bind(this))]]
    });
  }

  ngOnInit(): void {
    this.carregarSkus();
  }

  carregarSkus(): void {
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

  carregarPlano(planoSku: string, plataformaSku: string): void {
    this.subs.sink = this.dadosService.obterPlano(plataformaSku, planoSku).subscribe({
      next: plano => {
        this.dadosCliente.plano = plano;
      }
    });
  }
  carregarPlataforma(plataformaSku: string): void {
    this.subs.sink = this.dadosService.obterPlataforma(plataformaSku).subscribe({
      next: plataforma => {
        this.dadosCliente.plataforma = plataforma;
      }
    });
  }

  montarDados(): void {
    if (!this.dadosForm.invalid) {
      this.dadosCliente.nome = this.dadosForm?.get('nome')?.value
      this.dadosCliente.cpf = this.dadosForm?.get('cpf')?.value
      this.dadosCliente.email = this.dadosForm?.get('email')?.value
      this.dadosCliente.telefone = this.dadosForm?.get('telefone')?.value
      this.dadosCliente.dataNascimento = this.dadosForm?.get('dataNascimento')?.value
    } else {
      throw new Error('Verifique o formulario');
    }
  }

  enviarDados(): void {
    this.montarDados();
    this.dialogService.exibirDialog('Sucesso', 'verifique seu console');
    console.log('Dados enviados com sucesso, verifique o DTO enviado:');
    console.log(this.dadosCliente);
  }
}
