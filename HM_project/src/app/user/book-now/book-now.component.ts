import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent {

  hotelBookingForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    public apicallService:ApicallService ,private router:Router){}

    ngOnInit(){
      
    this.formDetails();
 
   }
 
 
   formDetails(){
    this.hotelBookingForm = this.formBuilder.group({
      userName:['',[Validators.required]],
      mob:[],
      Aadhar:[],
     Date:[],
     amount:[],

 
    })
   }


    submit(){
      this.apicallService.postApiCall("hotelBooking", this.hotelBookingForm.value).subscribe(respo=>{
        console.log(this.hotelBookingForm.value);
        this.router.navigateByUrl("user/userSuccess")
      }
      )}
  }
