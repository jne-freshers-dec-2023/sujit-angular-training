import { TestBed } from '@angular/core/testing';

import { ListOfDataService } from './list-of-data.service';

describe('ListOfDataService', () => {
  let service: ListOfDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListOfDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
