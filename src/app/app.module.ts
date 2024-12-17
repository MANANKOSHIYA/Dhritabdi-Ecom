import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/view/header/header.component';
import { HomeComponent } from './Home/view/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './Footer/view/footer/footer.component';
import { AboutusComponent } from './AboutUs/view/aboutus/aboutus.component';
import { ProductpageComponent } from './Product-Page/view/productpage/productpage.component';
import { ProductlistComponent } from './Product-List/view/productlist/productlist.component';
import { PracticeComponent } from './Practice/view/practice/practice.component';
import { AddtocardComponent } from './AddToCard/view/addtocard/addtocard.component';
import { ContantUsComponent } from './ContactUs/view/contant-us/contant-us.component';
import { TrackOrderComponent } from './TrackOrder/view/track-order/track-order.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PracticeComponent,
    FooterComponent,
    AboutusComponent,
    ProductpageComponent,
    ProductlistComponent,
    AddtocardComponent,
    ContantUsComponent,
    TrackOrderComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
