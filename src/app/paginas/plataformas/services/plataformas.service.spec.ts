import { HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PlataformasMock } from 'src/app/shared/utils/mocks/plataformas.mock';

import { PlataformasService } from './plataformas.service';

describe('PlataformasService', () => {
  let service: PlataformasService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PlataformasService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve obter plataforma', () => {
    service.obterPlataformas().subscribe(plataforma => {
      expect(plataforma).toEqual(PlataformasMock.obterPlataformas());
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
