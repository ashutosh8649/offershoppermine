import { TestBed, inject } from '@angular/core/testing';

import { RelatedOffersService } from './related-offers.service';

describe('RelatedOffersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelatedOffersService]
    });
  });

  it('should be created', inject([RelatedOffersService], (service: RelatedOffersService) => {
    expect(service).toBeTruthy();
  }));
});
