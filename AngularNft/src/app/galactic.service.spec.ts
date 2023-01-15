import { TestBed } from '@angular/core/testing';

import { GalacticService } from './galactic.service';

describe('GalacticService', () => {
  let service: GalacticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalacticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
