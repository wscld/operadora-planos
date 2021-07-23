import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { PlanosMock } from 'src/app/shared/utils/mocks/planos.mock';
import { PlataformasMock } from 'src/app/shared/utils/mocks/plataformas.mock';
import { DadosService } from '../../services/dados.service';

import { DadosComponent } from './dados.component';

describe('DadosComponent', () => {
  let component: DadosComponent;
  let fixture: ComponentFixture<DadosComponent>;
  let dadosService: DadosService;
  let router: Router;
  let store: Store;
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
    store = TestBed.inject(Store);

    dadosService = TestBed.inject(DadosService);
    router = TestBed.inject(Router);

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

  it('deve carregar Plano', () => {

  });

  it('deve carregar Plataforma', () => {

  });

  it('deve montar dados', () => {

  });

  it('deve enviar dados', () => {

  });
});
