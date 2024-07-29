import { TestBed } from '@angular/core/testing';

import { UrlmanagerService } from './urlmanager.service';

describe('UrlmanagerService', () => {
  let service: UrlmanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlmanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
