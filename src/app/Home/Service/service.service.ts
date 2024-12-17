import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http : HttpClient) { }

  baseURL = environment.baseURL;

  GetDashboard(){

    return this.http.get(this.baseURL + "Admin/GetDashboard");
    
  }
}
