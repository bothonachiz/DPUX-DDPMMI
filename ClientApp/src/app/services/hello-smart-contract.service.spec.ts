import { TestBed, inject } from '@angular/core/testing';

import { HelloSmartContractService } from './hello-smart-contract.service';

describe('HelloSmartContractService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelloSmartContractService]
    });
  });

  it('should be created', inject([HelloSmartContractService], (service: HelloSmartContractService) => {
    expect(service).toBeTruthy();
  }));
});
