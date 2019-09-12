import { TestBed } from '@angular/core/testing';

import { ChecklistDataService } from './checklist-data.service';

describe('ChecklistDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChecklistDataService = TestBed.get(ChecklistDataService);
    expect(service).toBeTruthy();
  });
});
