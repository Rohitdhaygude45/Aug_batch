import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminlanding',
  templateUrl: './adminlanding.component.html',
  styleUrls: ['./adminlanding.component.css']
})
export class AdminlandingComponent {
  endPoint ='admin';
  adminData:any;
  constructor(private dataService:DataService)
{

}


//initially display list of usernames
ngOnInit(){
  this.dataService.getApiCall(this.endPoint).subscribe(adminData =>{
   console.log(adminData);
    this.adminData = adminData;
  })
}

}



