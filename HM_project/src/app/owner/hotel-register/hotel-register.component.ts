import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';


@Component({
  selector: 'app-hotel-register',
  templateUrl: './hotel-register.component.html',
  styleUrls: ['./hotel-register.component.css']
})
export class HotelRegisterComponent {
  showPassword:boolean = false;

  hotelRegForm! :FormGroup;
  hotelEndPoint ='hotelDetails';
  dataById : any;
 

  constructor( private apicallService :ApicallService , private router : Router, private fb:FormBuilder){}

  ngOnInit(){
    this.dataById = this.apicallService.dataById
    this.hotelDetailsForm()
  }
  hotelDetailsForm(){
    this.hotelRegForm = this.fb.group({
      ownerName:[this.dataById ? this.dataById?.ownerName:''],
      mob:[this.dataById ? this.dataById?.mob:''],
      password:[this.dataById ? this.dataById?.password:''],
      hotelName:[this.dataById ? this.dataById?.hotelName:''],
      hotelAddress:[this.dataById ? this.dataById?.hotelAddress:''],
      hotelMenu:[this.dataById ? this.dataById?.hotelMenu:''],
      hotelMob:[this.dataById ? this.dataById?.mohotelMob:''],

    })
  }

  submit(){
   
  this.apicallService.postApiCall(this.hotelEndPoint,this.hotelRegForm.value).subscribe(respo=>{
    this.router.navigateByUrl('/ownwer/ownerSuccess')
  }
  )
}


async update(){
  let respo = await this.apicallService.updateData('hotelDetails',this.dataById?.id,this.hotelRegForm.value).toPromise()
  this.router.navigateByUrl('/owner/ownerSuccess')
}

  showPass(){
    this.showPassword =  !this.showPassword;
  }
}
