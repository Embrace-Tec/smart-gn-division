import { TestBed } from '@angular/core/testing';

import { GovernmentDonationsService } from './government-donations.service';

describe('GovernmentDonationsService', () => {
  let service: GovernmentDonationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GovernmentDonationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
