import { TestBed } from '@angular/core/testing';

import { MyCustomPaginatorIntlService } from './my-custom-paginator-intl.service';

describe('MyCustomPaginatorIntlService', () => {
  let service: MyCustomPaginatorIntlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCustomPaginatorIntlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
