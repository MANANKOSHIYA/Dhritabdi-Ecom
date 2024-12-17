import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductPageService {
  baseURL = environment.baseURL;
  constructor(private http: HttpClient) { }
  

  AllProducts() {
    return this.http.get(this.baseURL + "Admin/GetAllProducts");
  }

  getbyproductid(id: number) {
    return this.http.get(this.baseURL + "Admin/GetProductByID/" + id);
  }

  AddToCart(data: any) {
    return this.http.post(this.baseURL + "Cart/addtocart", data);
  }

}
