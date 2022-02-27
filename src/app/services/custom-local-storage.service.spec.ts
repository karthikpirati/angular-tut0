import { TestBed } from '@angular/core/testing';

import { CustomLocalStorageService } from './custom-local-storage.service';

describe('CustomLocalStorageService', () => {
  let service: CustomLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
