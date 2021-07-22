import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
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
      providers: [FormBuilder]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    dadosService = TestBed.inject(DadosService);

    spyOn(dadosService, 'obterPlano').and.returnValue(of(PlanosMock.obterPlanos()[0]));
    spyOn(dadosService, 'obterPlataforma').and.returnValue(of(PlataformasMock.obterPlataformas()[0]));
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar SKUs', () => {

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
