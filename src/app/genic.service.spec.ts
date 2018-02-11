import { TestBed, inject } from '@angular/core/testing';

import { GenicService } from './genic.service';

describe('GenicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GenicService]
    });
  });

  it('should be created', inject([GenicService], (service: GenicService) => {
    expect(service).toBeTruthy();
  }));
});
