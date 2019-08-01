import { TestBed } from '@angular/core/testing';

import { ServicecartService } from './servicecart.service';

describe('ServicecartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicecartService = TestBed.get(ServicecartService);
    expect(service).toBeTruthy();
  });
});
