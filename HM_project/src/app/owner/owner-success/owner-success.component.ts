import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.css']
})
export class OwnerSuccessComponent {
hotelData:any;
userName :any;
hotelsByOwner:any;
 endpoint: any;
 showData:Boolean =false;
  headers =['ownerName','mob','hotelName','hotelMenu','hotelAddress','hotelContact']
  ownerName: any;
  dataById: any;
 
  hotelRegForm: any;
  deleteApiCall:any;
 

constructor(private apicallService:ApicallService,private router:Router){

}


ngOnInit(){
  this.endpoint = 'hotelDetails'
  this.userName = this.apicallService.userName;
  this.getHotelDetails();
}


async getHotelDetails(){

  this.hotelData = await this.apicallService.getApiCall('hotelDetails').toPromise()
   
    console.log( "hotelData" ,this.hotelData);
    
  }




viewHotels(){
    this.hotelsByOwner=[]
    if( this.hotelData){
    
      this.hotelData.forEach((item:any)=>{
        if(item.ownerName == this.apicallService.userName){
         
          this.hotelsByOwner.push(item)
          this.ownerName == item.ownerName
         
          
          
        }
      })
    }
    if( this.hotelsByOwner.length >0){
      this.showData = true
    }
     console.log('this.hotelsByOwner',this.hotelsByOwner);
     
   }

    async edit(id:any){

      this.apicallService.dataById = await this.apicallService.getApiCall(this.endpoint,id).toPromise()
      console.log('this.apicallService.dataById)',this.apicallService.dataById);
      
      this.router.navigateByUrl('/owner/hotelRegister')
       }


      async  delete(id:any){
      let res = await  this.apicallService.deleteApiCall('hotelDetails',id).toPromise();
        this.getHotelDetails();
        this.viewHotels()
       }
       }


   
   

  
