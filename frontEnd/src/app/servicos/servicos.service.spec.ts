import { TestBed, inject } from '@angular/core/testing';

import { ServicosService } from './servicos.service';

describe('ServicosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicosService]
    });
  });

  it('should be created', inject([ServicosService], (service: ServicosService) => {
    expect(service).toBeTruthy();
  }));
});
