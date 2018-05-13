import { TestBed, inject } from '@angular/core/testing';

import { CommonDataServiceService } from './common-data-service.service';

describe('CommonDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommonDataServiceService]
    });
  });

  it('should be created', inject([CommonDataServiceService], (service: CommonDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
