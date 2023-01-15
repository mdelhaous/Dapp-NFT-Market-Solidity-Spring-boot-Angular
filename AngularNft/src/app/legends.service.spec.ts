import { TestBed } from '@angular/core/testing';

import { LegendsService } from './legends.service';

describe('LegendsService', () => {
  let service: LegendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LegendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
