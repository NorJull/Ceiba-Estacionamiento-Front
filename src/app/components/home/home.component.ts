import { Component, OnInit } from '@angular/core';
import { ParkingTicket } from '../../entities/ParkingTicket';
import { ParkingTicketService } from '../../services/parking-ticket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public parkingTickets: ParkingTicket [];
  public parkingTicketSeleted: ParkingTicket;

  constructor(private parkingTicketService: ParkingTicketService, private router:Router) { 

    this.parkingTickets = [];


  	this.setTable();

  }

  setTable(){this.parkingTicketService.getParkingTickets().subscribe((data:ParkingTicket[]) => {

      console.log(data)
      this.parkingTickets = data;
    });}

   toRedirect( route: string){

    this.router.navigate(['/'+route]);

  }

  toCheckOut(parkingTicketId: number){
    this.parkingTicketService.toCheckOut(parkingTicketId).subscribe((data:ParkingTicket) => {

      
      this.parkingTicketSeleted = data;

      console.log(this.parkingTicketSeleted);

    });
  }

  ngOnInit() {
  }

}

