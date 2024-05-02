import { TestBed } from '@angular/core/testing';

import { PlayingDataService } from './playing-data.service';

describe('PlayingDataService', () => {
  let service: PlayingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
