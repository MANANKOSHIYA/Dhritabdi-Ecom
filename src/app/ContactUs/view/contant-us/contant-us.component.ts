import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../../Service/contact-us.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contant-us',
  templateUrl: './contant-us.component.html',
  styleUrls: ['./contant-us.component.css']
})
export class ContantUsComponent implements OnInit {

  AddData = new FormGroup({
    contactUsName: new FormControl(''),
    contactUsEmailID: new FormControl(''),
    contactUsPhoneNo: new FormControl(''),
    contactUsAddress: new FormControl(''),
    contactUsMessage: new FormControl(''),
  });

  ngOnInit() {
    throw new Error('Method not implemented.');
  }
  constructor (private service : ContactUsService) {}
  
  PostData() {
    this.AddData.patchValue({
      contactUsAddress: 'string',
    });
    this.service.AddData(this.AddData.value).subscribe(
      (resp: any) => {
        console.log(this.AddData.value);
        if (resp) {
          this.ngOnInit();
       
          alert("Data added successfully")
        }
        this.AddData.reset();
      },
      (error: any) => {
        console.error(error);
  
        alert("An error occurred while adding the data',confirmButtonText: 'OK")
      }
    );
  }


}
