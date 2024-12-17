import { Component, OnInit } from '@angular/core';
import { ProductPageService } from '../../service/product-page.service';
import { environment } from 'src/environments/environment';
import { __param } from 'tslib';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  displayproductlist: any;

  imgURL = environment.imgURL;
  product: any;


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const productId = +params['id'];
      this.getalldatabyid(productId);
   
    });
  }

  constructor(private service: ProductPageService, private route: ActivatedRoute) { }

  productlist() {
    this.service.AllProducts().subscribe(
      (resp: any) => {
        this.displayproductlist = resp.data;

        console.log(resp.data);
      }
    );
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  currentdata: any;
  productImage: any;

  productImages: string[] = [];

  changeproductImage(imageUrl: string) {
    this.productImage = imageUrl;
  }

  getalldatabyid(id: number) {
    this.service.getbyproductid(id).subscribe(
      (resp: any) => {
        this.currentdata = resp.data;
        this.product = resp.data;
        this.productImage = resp.data.productImage;
        this.productImages = resp.data.productImages;

        console.log("getalldata>>>", resp.data);
      }
    )
  }



  public counter: number = 1;
  public increment() {
    this.counter++;
  }
  public decrement() {
    if (this.counter > 1) {
      this.counter--;
    }
  }

  public AddtocartClick(product: any) {
    const cart = this.getCartFromLocalStorage();

    const existingItemIndex = cart.findIndex((item: any) => item.productID === product.productID);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].productQuantity = this.counter;
    }
    else {
      const newItem = { ...product, productQuantity: this.counter }
      cart.push(newItem);
    }
    this.updateCartInLocalStorage(cart);
    this.showAddToCartSuccessNotification();
  }

  private getCartFromLocalStorage(): any[] {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  private updateCartInLocalStorage(cart: any) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  showAddToCartSuccessNotification() {
    alert("Product added to cart")
  }

}
