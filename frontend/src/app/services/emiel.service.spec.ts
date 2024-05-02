import { TestBed } from '@angular/core/testing';

import { EmielService } from './emiel.service';

describe('EmielService', () => {
  let service: EmielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
