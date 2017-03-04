import { TestBed, inject } from '@angular/core/testing';

import { FishingService } from './fishing.service';

describe('FishingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FishingService]
    });
  });

  it('should ...', inject([FishingService], (service: FishingService) => {
    expect(service).toBeTruthy();
  }));
});
