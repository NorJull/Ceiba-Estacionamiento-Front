import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParkingTicket } from '../entities/ParkingTicket';

@Injectable({
  providedIn: 'root'
})
export class ParkingTicketService {

private route:string;

  constructor(private httpClient:HttpClient) {

this.route = "http://localhost:8080/parkingtickets";

   }

   getParkingTickets(){
   	return this.httpClient.get<ParkingTicket []>(this.route);
   }


toRegisterEntry(parkingTicket: any){
	
	return this.httpClient.post(this.route + '/toRegisterEntry',parkingTicket);


}

toCheckOut(parkingTicketId: number){
	return this.httpClient.get<ParkingTicket>(this.route+'/toCheckOut/'+parkingTicketId);
}

}
