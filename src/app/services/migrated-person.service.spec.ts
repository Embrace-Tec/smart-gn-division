import { TestBed } from '@angular/core/testing';

import { MigratedPersonService } from './migrated-person.service';

describe('MigratedPersonService', () => {
  let service: MigratedPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MigratedPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
