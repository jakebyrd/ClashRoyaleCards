import { TestBed, inject } from '@angular/core/testing';

import { CardsServiceService } from './cards-service.service';

describe('FightersServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardsServiceService]
    });
  });

  it('should be created', inject([CardsServiceService], (service: CardsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
