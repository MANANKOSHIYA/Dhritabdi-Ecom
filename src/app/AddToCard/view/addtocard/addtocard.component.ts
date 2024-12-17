import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddtocardService } from '../../Service/addtocard.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-addtocard',
  templateUrl: './addtocard.component.html',
  styleUrls: ['./addtocard.component.css']
})
export class AddtocardComponent implements OnInit {
  isCartEmpty: any;
  cartmaster: any;
  cartproductmaster: any;
  imgURL = environment.imgURL;


  ngOnInit(): void {
    this.getcart();
    this.calculateCartTotal();
  }
  constructor(private service: AddtocardService) { }


  getcart() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartproductmaster = cart;
    this.isCartEmpty = this.cartproductmaster.length === 0;
    console.log('cartproductmaster data:', this.cartproductmaster);
  }

  public increment(item: any) {
    item.productQuantity += 1;
    this.calculateCartTotal();
  }

  public decrement(item: any) {
    if (item.productQuantity > 1) {
      item.productQuantity -= 1;
      this.calculateCartTotal();
    } else {
      alert('Are you sure you want to remove this item from the cart?');
    }
  }

  calculateCartTotal() {
    let subtotal = 0;
    for (const item of this.cartproductmaster) {
      subtotal += item.salePrice * item.productQuantity;
    }
    this.cartmaster = {
      subTotalPrice: subtotal,
    };
  }

  removeItem(item: any) {
    const confirmRemove = window.confirm('Are you sure you want to remove this item from the cart?');
    if (confirmRemove) {

      this.cartproductmaster = this.cartproductmaster.filter((cartItem: any) => cartItem.productID !== item.productID);

      localStorage.setItem('cart', JSON.stringify(this.cartproductmaster));

      this.calculateCartTotal();
    }
  }
}
