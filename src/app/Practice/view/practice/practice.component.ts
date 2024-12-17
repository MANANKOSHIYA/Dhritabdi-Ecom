import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {

  submitArray: any = {}   
  email: any;
  password: any;

  constructor(
  ) { }

  submit() {
    console.log(this.submitArray);

    localStorage.setItem('name', JSON.stringify(this.submitArray))
  }

  Remove() {

    localStorage.removeItem('name')
    localStorage.clear()
  }


}

// private getCartFromLocalStorage(): any[] {
//   return JSON.parse(localStorage.getItem('cart') || '[]');
// }