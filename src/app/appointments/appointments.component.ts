import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../shared-service/appointment.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
  providers: [ AppointmentService ]
})
export class AppointmentsComponent implements OnInit {

 private appointment: Appointment[];
 newAppointment: Appointment = new Appointment();

 showHide: boolean;

  constructor(private appointmentService: AppointmentService) {
    this.showHide = false;
   }

  ngOnInit() {
    
  }

  changeShowStatus(){
    this.showHide = !this.showHide;
  }

  createAppointment(saveForm: NgForm): void {
    this.appointmentService.createAppointment(this.newAppointment)
    .subscribe((createAppointment)=>{
      saveForm.reset();
      this.newAppointment = new Appointment();
      this.appointment.unshift(createAppointment)
    });
  }



}
