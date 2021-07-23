import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlanosComponent } from './planos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { PlanosService } from '../../services/planos.service';
import { PlanosMock } from 'src/app/shared/utils/mocks/planos.mock';
import { of } from 'rxjs';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { SetPlano } from 'src/app/shared/app.actions';

describe('PlanosComponent', () => {
  let component: PlanosComponent;
  let fixture: ComponentFixture<PlanosComponent>;
  let planosService: PlanosService;
  let router: Router;

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanosComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, NgxsModule.forRoot([])],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { params: { plataformaSku: '123' } } }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PlanosComponent);
    component = fixture.componentInstance;

    planosService = TestBed.inject(PlanosService);
    router = TestBed.inject(Router);

    spyOn(planosService, 'obterPlanosParaPlataforma').and.returnValue(of(PlanosMock.obterPlanos()));
    spyOn(component.store, 'dispatch');
    spyOn(router, 'navigate');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar dados ao iniciar', () => {
    spyOn(component, 'carregarSkuPlataforma');
    fixture.detectChanges();
    expect(component.carregarSkuPlataforma).toHaveBeenCalled();
  });

  it('deve carregar SKUs da plataforma', () => {
    component.carregarSkuPlataforma();
    expect(component.plataformaSku).toBe('123');
  });

  it('deve carregar planos', () => {
    component.carregarPlanos();
    expect(component.planos).toEqual(PlanosMock.obterPlanos());
  });

  it('deve selecionar plano', () => {
    const plano = PlanosMock.obterPlanos()[0];
    component.carregarSkuPlataforma();
    component.selecionarPlano(plano);
    expect(component.store.dispatch).toHaveBeenCalledOnceWith(new SetPlano(plano));
    expect(router.navigate).toHaveBeenCalledOnceWith(['dados', '123', plano.sku])
  });

  it('deve exibir erro ao selecionar plano não ativo', () => {
    const plano = PlanosMock.obterPlanos()[3];
    component.carregarSkuPlataforma();
    try {
      component.selecionarPlano(plano)
    } catch (err) {
      expect(err).toEqual(new Error('Plano inativo'));
    }
  });
});
