import { TestBed } from '@angular/core/testing';

import { JTabsService } from './j-tabs.service';

describe('JTabsService', () => {
  let service: JTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
