import { TestBed } from '@angular/core/testing';

import { GetToolsService } from './get-tools.service';

describe('GetToolsService', () => {
  let service: GetToolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetToolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
