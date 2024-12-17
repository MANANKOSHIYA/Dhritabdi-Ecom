import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServiceService } from '../../Service/service.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { environment } from 'src/environments/environment';
// declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carousel: any;
  displaysliders: any;
  displayProducts: any;
  displayAboutUs: any;
  displaytesti: any;

  // i: number[] = [1, 2, 3, 4, 5, 6, 7, 8];


  ngAfterViewInit() {
    // Set the auto slide time (in milliseconds)
    const autoSlideTime = 500; // Change this value to your desired slide time

    // Start the carousel auto sliding
    this.carousel.nativeElement.setAttribute('data-interval', autoSlideTime);
  }

  constructor(private service: ServiceService) { }

  imgURL = environment.imgURL;

  ngOnInit(): void {

    this.Dashboard();
  }

  Dashboard() {
    return this.service.GetDashboard().subscribe(
      (resp: any) => {
        this.displaytesti = resp.data.testimonialdata;
        this.displayAboutUs = resp.data.aboutUsdata;
        this.displayProducts = resp.data.productdata;
        this.displaysliders = resp.data.sliderdata;

        console.log(this.displaytesti);
        console.log(this.displayAboutUs);
        console.log(this.displayProducts);
        console.log(this.displaysliders);  
      }
    )
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: true
  }

  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: false

  }

  customOptions3: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 600,
    autoplay: true,
    autoplayTimeout: 3500,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      760: {
        items: 1
      },
      1000: {
        items: 1
      }
    },
    nav: false
  }

}
