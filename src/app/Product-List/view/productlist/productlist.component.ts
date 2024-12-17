import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductlistService } from '../../Service/productlist.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  http: any;
  displayProduct: any;
  ngOnInit(): void {
    this.AllProducts();
  }
  constructor(private service: ProductlistService){}

  imgURL = environment.imgURL;

  AllProducts(){
    this.service.getallProducts().subscribe(
      (resp:any)=>{
        this.displayProduct=resp.data;

        console.log(this.displayProduct);
      }
    )
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 

}
