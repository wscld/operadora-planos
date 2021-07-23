import { HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PlanosMock } from 'src/app/shared/utils/mocks/planos.mock';

import { PlanosService } from './planos.service';

describe('PlanosService', () => {
  let service: PlanosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PlanosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve obter planos', () => {
    service.obterPlanosParaPlataforma('PLTF1').subscribe(plano => {
      expect(plano).toEqual(PlanosMock.obterPlanos());
    });

    const req = httpMock.expectOne(
      (request: HttpRequest<any>) => {
        return request.url.endsWith('/planos/PLTF1');
      }
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.params).toBeTruthy();
    req.flush({ planos: PlanosMock.obterPlanos() });
    httpMock.verify();
  });
});
