import { TestBed } from '@angular/core/testing';

import { DonationsReceivedService } from './donations-received.service';

describe('DonationsReceivedService', () => {
  let service: DonationsReceivedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationsReceivedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
