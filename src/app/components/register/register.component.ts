import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ParkingTicketService } from '../../services/parking-ticket.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	public form: FormGroup; 

	public disableButton: boolean;

  constructor(private parkingTicketService: ParkingTicketService, private router: Router) {
  	this.disableButton = false;
  	this.form = new FormGroup({

"vehiclePlate" : new FormControl("",Validators.required),
"vehicleType"	 : new FormControl("C",Validators.required),
"vehicleCylinderCapacity" : new FormControl(null)

  	});
this.form.controls['vehicleCylinderCapacity'].setValidators(this.validateCylinderCapacity.bind(this))

this.form.controls['vehicleType']
.valueChanges
.subscribe(() => {this.form.controls['vehicleCylinderCapacity'].setValue(this.form.controls['vehicleCylinderCapacity'].value) })


   }

validateCylinderCapacity(formControl: FormControl){
	if((this.form.controls['vehicleType'].value == 'M')&&(!formControl.value)){
			return {"required": true};
	}

	return null;
}


registerEntry(){

	if (this.form.invalid) {
		return
	}
this.disableButton = true;

this.parkingTicketService.toRegisterEntry(this.form.value).subscribe(resp => {}, error => { 

if(error.status == 200){ this.router.navigate(['/home'])}else{console.log(error);}
});

}

  ngOnInit() {
  }

}
