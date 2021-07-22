import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { of } from 'rxjs';
import { CacheService } from 'src/app/shared/services/cache-service/cache.service';
import { PlataformasMock } from 'src/app/shared/utils/mocks/plataformas.mock';
import { PlataformasService } from '../../services/plataformas.service';

import { PlataformasComponent } from './plataformas.component';

describe('PlataformasComponent', () => {
  let component: PlataformasComponent;
  let fixture: ComponentFixture<PlataformasComponent>;
  let plataformaService: PlataformasService;

  afterEach(() => {
    TestBed.resetTestingModule();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, NgxsModule.forRoot([])],
      declarations: [PlataformasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlataformasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    plataformaService = TestBed.inject(PlataformasService);

    spyOn(plataformaService, 'obterPlataformas').and.returnValue(of(PlataformasMock.obterPlataformas()));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar plataformas', () => {

  });

  it('deve selecionar plataforma', () => {

  });
});
