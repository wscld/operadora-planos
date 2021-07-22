import { TestBed } from '@angular/core/testing';

import { DadosService } from './dados.service';

describe('DadosService', () => {
  let service: DadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosService);
  });

  xit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
