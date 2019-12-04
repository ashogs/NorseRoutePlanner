import { TestBed } from '@angular/core/testing';

import { RoutesearchService } from './routesearch.service';

describe('RoutesearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoutesearchService = TestBed.get(RoutesearchService);
    expect(service).toBeTruthy();
  });
});
