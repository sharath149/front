import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../shared-service/appointment.service';
import { Appointment } from '../appointment';
import { FilterPipe } from '../filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit {

  private appointment: Appointment[];

  constructor(private _appointmnetServie: AppointmentService) { }

  ngOnInit() {

      this._appointmnetServie.getAppointments().subscribe((appointment)=>{
        console.log(appointment);
        this.appointment=appointment;
      }, (error)=>{
       console.log(error); 
      })
  }

}
