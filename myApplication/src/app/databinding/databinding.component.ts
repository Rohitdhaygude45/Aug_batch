import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})

export class DatabindingComponent {
//DB : communication between a component and the DOM.
 //1.One way databinding: is a simple one way communication where HTML template
 // is changed when we make changes in TypeScript code. 
 //1.String Interpolation {{}}  
 //String Interpolation is a one-way databinding technique which is used to display data from ts to view(template) using curly braces
 // 2.Property Binding []
 //3.Event Binding()
 //2.Two Way data binding [()]


 data : string = "We live in Kolhapur";
 amount :number =900000;

schoolName! : string;
 isMatch=true;
 name ="rohit";
 x=7;
 clickEventData:any;
 city:any ;
 
 constructor(private  dataService : DataService , private router : Router){}

//  = :assigment oprator: to assign value to the var/prop
//  == : equality operator : it compares value only
//  ===  : it compares value as well as data type 

  test(){
    return 50*2;
  }

  clickEvent(){
     this.clickEventData = 123445;
  }
  assignVal(){
    this.dataService.userName = "Ajay";
    this.router.navigateByUrl('lifecycleHooks')
   }
}



