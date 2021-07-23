import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { SetPlataforma } from 'src/app/shared/app.actions';
import { CacheService } from 'src/app/shared/services/cache-service/cache.service';
import { PlataformasMock } from 'src/app/shared/utils/mocks/plataformas.mock';
import { PlataformasService } from '../../services/plataformas.service';

import { PlataformasComponent } from './plataformas.component';

describe('PlataformasComponent', () => {
  let component: PlataformasComponent;
  let fixture: ComponentFixture<PlataformasComponent>;
  let plataformaService: PlataformasService;
  let router: Router;

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, NgxsModule.forRoot([])],
      declarations: [PlataformasComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PlataformasComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);
    plataformaService = TestBed.inject(PlataformasService);

    spyOn(plataformaService, 'obterPlataformas').and.returnValue(of(PlataformasMock.obterPlataformas()));
    spyOn(component.store, 'dispatch');
    spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar dados iniciais', () => {
    spyOn(component, 'carregarPlataformas');
    fixture.detectChanges();
    expect(component.carregarPlataformas).toHaveBeenCalled();
  });

  it('deve carregar plataformas', () => {
    const plataformas = PlataformasMock.obterPlataformas();
    component.carregarPlataformas();
    expect(plataformaService.obterPlataformas).toHaveBeenCalled();
    expect(component.plataformas).toEqual(plataformas);
  });

  it('deve selecionar plataforma', () => {
    const plataforma = PlataformasMock.obterPlataformas()[0];
    component.selecionarPlataforma(plataforma);
    expect(component.store.dispatch).toHaveBeenCalledWith(new SetPlataforma(plataforma));
    expect(router.navigate).toHaveBeenCalledOnceWith(['planos', plataforma.sku]);
  });
});
