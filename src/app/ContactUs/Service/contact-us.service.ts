import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http : HttpClient) {}

  baseURL = environment.baseURL;

  AddData(data:any) {
    return this.http.post(this.baseURL + 'ContactUs/AddData', data);
  }
}
