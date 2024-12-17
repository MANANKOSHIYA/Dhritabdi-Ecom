import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductlistService {


  constructor(private http: HttpClient) { }

  baseURL = environment.baseURL;
  getallProducts(){
    return this.http.get(this.baseURL + "Admin/GetAllProducts");
  }

  
  GetProductById(id:number){
    return this.http.get(this.baseURL + "Admin/GetProductByID/" + id);
  }
}
