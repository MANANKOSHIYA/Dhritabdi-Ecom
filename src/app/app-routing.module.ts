import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Header/view/header/header.component';
import { HomeComponent } from './Home/view/home/home.component';
import { FooterComponent } from './Footer/view/footer/footer.component';
import { AboutusComponent } from './AboutUs/view/aboutus/aboutus.component';
import { ProductlistComponent } from './Product-List/view/productlist/productlist.component';
import { ProductpageComponent } from './Product-Page/view/productpage/productpage.component';
import { PracticeComponent } from './Practice/view/practice/practice.component';
import { AddtocardComponent } from './AddToCard/view/addtocard/addtocard.component';
import { ContantUsComponent } from './ContactUs/view/contant-us/contant-us.component';


const routes: Routes = [
  {
    path:"header",
    component:HeaderComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"footer",
    component:FooterComponent
  },
  {
    path:"practice",
    component:PracticeComponent
  },
  {
    path:"Aboutus",
    component:AboutusComponent  
  },
  {
    path:"product/:id",
    component:ProductpageComponent
  },
  {
    path:"product-list",
    component:ProductlistComponent
  },
  {
    path:"cart",
    component:AddtocardComponent
  },
  {
    path:"contactus",
    component:ContantUsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
