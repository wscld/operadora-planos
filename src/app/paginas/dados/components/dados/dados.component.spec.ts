import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { of } from 'rxjs';
import { PlanosMock } from 'src/app/shared/utils/mocks/planos.mock';
import { PlataformasMock } from 'src/app/shared/utils/mocks/plataformas.mock';
import { DadosService } from '../../services/dados.service';

import { DadosComponent } from './dados.component';

describe('DadosComponent', () => {
  let component: DadosComponent;
  let fixture: ComponentFixture<DadosComponent>;
  let dadosService: DadosService;
  afterEach(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, NgxsModule.forRoot([])],
      declarations: [DadosComponent],
      providers: [
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { plataformaSku: '123', planoSku: 'abc' } } }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DadosComponent);
    component = fixture.componentInstance;

    dadosService = TestBed.inject(DadosService);

    spyOn(dadosService, 'obterPlano').and.returnValue(of(PlanosMock.obterPlanos()[1]));
    spyOn(dadosService, 'obterPlataforma').and.returnValue(of(PlataformasMock.obterPlataformas()[1]));

    Object.defineProperty(component, 'app$', { writable: true });
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar SKUs sem state', () => {
    const plano = PlanosMock.obterPlanos()[1];
    const plataforma = PlataformasMock.obterPlataformas()[1];
    component.app$ = of({ plataforma: null, plano: null });

    spyOn(component, 'carregarPlano').and.callThrough();
    spyOn(component, 'carregarPlataforma').and.callThrough();
    component.carregarSkus();
    expect(component.carregarPlano).toHaveBeenCalledWith('abc', '123');
    expect(component.carregarPlataforma).toHaveBeenCalledWith('123');
    expect(component.dadosCliente.plano).toEqual(plano);
    expect(component.dadosCliente.plataforma).toEqual(plataforma);
  });

  it('deve carregar SKUs com state', () => {
    const plano = PlanosMock.obterPlanos()[0];
    const plataforma = PlataformasMock.obterPlataformas()[0];
    component.app$ = of({ plataforma, plano });

    spyOn(component, 'carregarPlano');
    spyOn(component, 'carregarPlataforma');
    component.carregarSkus();
    expect(component.carregarPlano).not.toHaveBeenCalled();
    expect(component.carregarPlataforma).not.toHaveBeenCalled();
    expect(component.dadosCliente.plano).toEqual(plano);
    expect(component.dadosCliente.plataforma).toEqual(plataforma);
  });

  it('deve montar dados', () => {
    const date = new Date();
    fixture.detectChanges();
    component.dadosForm.get('nome')?.setValue('Wesley');
    component.dadosForm.get('telefone')?.setValue('21999999999');
    component.dadosForm.get('cpf')?.setValue('00000000000');
    component.dadosForm.get('email')?.setValue('weslcld@gmail.com');
    component.dadosForm.get('dataNascimento')?.setValue(date);

    component.montarDados();
    expect(component.dadosCliente.nome).toEqual('Wesley');
    expect(component.dadosCliente.telefone).toEqual('21999999999');
    expect(component.dadosCliente.cpf).toEqual('00000000000');
    expect(component.dadosCliente.email).toEqual('weslcld@gmail.com');
    expect(component.dadosCliente.dataNascimento).toEqual(date);
  });

  it('deve exibir erro com dados invalidos', () => {
    fixture.detectChanges();
    component.dadosForm.get('nome')?.setValue('Wesley');
    component.dadosForm.get('telefone')?.setValue('21999999');
    component.dadosForm.get('cpf')?.setValue('00000000');
    component.dadosForm.get('email')?.setValue('weslcldgmail.com');
    component.dadosForm.get('dataNascimento')?.setValue(new Date());

    try {
      component.montarDados();
    } catch (err) {
      expect(err).toEqual(new Error('Verifique o formulario'));
    }
  });

  it('deve montar dados ao enviar', () => {
    spyOn(component, 'montarDados');
    spyOn(console, 'log');
    component.enviarDados();
    expect(component.montarDados).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledTimes(2);
  });
});
