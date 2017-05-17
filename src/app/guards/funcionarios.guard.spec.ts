import { TestBed, inject } from '@angular/core/testing';

import { FuncionariosGuardService } from './funcionarios.guard';

describe('FuncionariosGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FuncionariosGuardService]
    });
  });

  it('should ...', inject([FuncionariosGuardService], (service: FuncionariosGuardService) => {
    expect(service).toBeTruthy();
  }));
});
