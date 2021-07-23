import { HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PlanosMock } from 'src/app/shared/utils/mocks/planos.mock';
import { PlataformasMock } from 'src/app/shared/utils/mocks/plataformas.mock';

import { DadosService } from './dados.service';

describe('DadosService', () => {
  let service: DadosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DadosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve obter plano', () => {
    service.obterPlano('PLTF1', 'PLNO1').subscribe(plano => {
      expect(plano).toEqual(PlanosMock.obterPlanos()[0]);
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

  it('deve obter plataforma', () => {
    service.obterPlataforma('PLTF2').subscribe(plataforma => {
      expect(plataforma).toEqual(PlataformasMock.obterPlataformas()[1]);
    });

    const req = httpMock.expectOne(
      (request: HttpRequest<any>) => {
        return request.url.endsWith('/plataformas');
      }
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.params).toBeTruthy();
    req.flush({ plataformas: PlataformasMock.obterPlataformas() });
    httpMock.verify();
  });
});
