import { TestBed } from '@angular/core/testing';

import { StepAssureService } from './step-assure.service';

describe('StepAssureService', () => {
  let service: StepAssureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepAssureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
