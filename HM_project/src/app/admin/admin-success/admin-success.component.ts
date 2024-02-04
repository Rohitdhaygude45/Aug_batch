import { Component } from '@angular/core';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-admin-success',
  templateUrl: './admin-success.component.html',
  styleUrls: ['./admin-success.component.css']
})
export class AdminSuccessComponent {
hotelData: any;


showData:Boolean =false;
  headers =['ownerName','mob','hotelName','hotelMenu','hotelAddress','hotelContact']


constructor( private apicallService:ApicallService){}

  
ngOnInit(){
  
  this.getHotelDetails();
}


async getHotelDetails(){

  this.hotelData = await this.apicallService.getApiCall('hotelDetails').toPromise()
   
    console.log( "hotelData" ,this.hotelData);
    
  }
  viewHotels(){
    this.showData = true;
  }

  
  async  delete(id:any){
    let res = await  this.apicallService.deleteApiCall('hotelDetails',id).toPromise();
      this.getHotelDetails();
      this.viewHotels()
     }  
          
    }   
        
