import { TestBed } from '@angular/core/testing';

import { ParkingTicketService } from './parking-ticket.service';

describe('ParkingTicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkingTicketService = TestBed.get(ParkingTicketService);
    expect(service).toBeTruthy();
  });
});
