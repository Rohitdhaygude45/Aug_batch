import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent {


  //What are Subjects ?
//A Subject is a special type of Observable that allows values to be 
//multicasted to many Observers. The subjects are also observers because they can
// subscribe to another
 //observable and get value from it, which it will multicast to all of its subscribers.
 

 data="rohit";
constructor(private dataService:DataService){}

ngOnInit(){

}

setData(){
  this.dataService.data.next(this.data);
 }
}




