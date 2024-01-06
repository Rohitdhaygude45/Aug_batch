import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  city ="Mumbai";
  state:any;
  sName!:string;
  dataFromChild(event:any){
    console.log(event);
    this.state =event;
    
  }

}
