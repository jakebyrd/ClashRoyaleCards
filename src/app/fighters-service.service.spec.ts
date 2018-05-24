import { TestBed, inject } from '@angular/core/testing';

import { FightersServiceService } from './fighters-service.service';

describe('FightersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FightersServiceService]
    });
  });

  it('should be created', inject([FightersServiceService], (service: FightersServiceService) => {
    expect(service).toBeTruthy();
  }));
});
