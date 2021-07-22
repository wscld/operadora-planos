import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PlanosComponent } from './planos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule } from '@ngxs/store';
import { PlanosService } from '../../services/planos.service';
import { PlanosMock } from 'src/app/shared/utils/mocks/planos.mock';
import { of } from 'rxjs';

describe('PlanosComponent', () => {
  let component: PlanosComponent;
  let fixture: ComponentFixture<PlanosComponent>;
  let planosService: PlanosService;

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanosComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, NgxsModule.forRoot([])],
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    planosService = TestBed.inject(PlanosService);

    spyOn(planosService, 'obterPlanosParaPlataforma').and.returnValue(of(PlanosMock.obterPlanos()));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar SKUs da plataforma', () => {

  });

  it('deve carregar planos', () => {

  });

  it('deve selecionar plano', () => {

  });
});
