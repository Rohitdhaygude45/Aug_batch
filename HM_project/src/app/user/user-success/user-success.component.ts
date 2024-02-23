import { Component } from '@angular/core';
import { ApicallService } from 'src/app/shared/apicall.service';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.css']
})
export class UserSuccessComponent {

  hotelData: any;


  showData:Boolean =false;
    
  
  
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
  




}
