import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Appointment } from '../appointment';


@Injectable()
export class AppointmentService {

  selectedAppointment: Appointment;

  private baseUrl: String= 'http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'});


  constructor(private _http:Http) { }

  getAppointments(): Observable<Appointment[]>{
    return this._http.get(this.baseUrl+"/app").map((response: Response)=> response.json())
    .catch(this.handleError);

  }

  createAppointment(newAppointment: Appointment): Observable<Appointment>{

    return this._http.post(this.baseUrl+"/app", JSON.stringify(newAppointment), {headers: this.headers})
    .map((res: Response) => res.json())
    .catch(this.handleError);
  }

  handleError(error:any){
    let errMsg = (error.message) ? error.message : error.status ? '${error.status} - ${error.statusText}' : 'Server error';
    return Observable.throw(errMsg);
  }

}
