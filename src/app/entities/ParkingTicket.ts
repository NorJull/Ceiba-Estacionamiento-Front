
export class ParkingTicket {

id: number;
vehicleType: string;
vehiclePlate: string;
vehicleCylinderCapacity: number;
startDate: string;
finishDate: string;
total: number;
status: string;

constructor(
id: number = 0,
vehicleType: string = "C",
vehiclePlate: string = "",
vehicleCylinderCapacity: number = 0,
startDate: string = "",
finishDate: string = "",
total: number = 0,
status: string = "E"
){
this.id = id;
this.vehicleType = vehicleType;
this.vehiclePlate = vehiclePlate;
this.vehicleCylinderCapacity = vehicleCylinderCapacity;
this.startDate = startDate;
this.finishDate = finishDate;
this.total = total;
this.status = status;
}

}



