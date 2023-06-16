import { TestBed } from '@angular/core/testing';

import { CarroselService } from './carrosel.service';

describe('CarroselService', () => {
  let service: CarroselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
