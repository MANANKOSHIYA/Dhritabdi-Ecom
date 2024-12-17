import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddtocardService {


  baseURL = environment.baseURL;  
  constructor(private http: HttpClient) { }


removeCartItemByID(id:number){
    return this.http.get(this.baseURL + "Cart/DeleteCartItemByID/"+ id);
  }

  GetProductByID(id:number) {
    return this.http.get(this.baseURL + "Admin/GetProductByID/" + id);
  }
}
